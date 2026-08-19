/**
 * CGK Handling — Google Sheets -> Supabase
 * FIXED VERSION: legacy service_role JWT + direct REST (no RPC)
 *
 * REQUIRED SCRIPT PROPERTIES:
 * SUPABASE_URL
 * SUPABASE_SERVICE_ROLE_KEY   // MUST be legacy service_role JWT starting with eyJ...
 * CGK_SOURCE_SYSTEM           // optional, default google_sheets
 */

const CGK_PNR_SPREADSHEET_ID =
  '1EQxiL65lwJITIp4ILZiQC1ML_elDPDyD5uXiGw5sFn4';

const CGK_GROUP_SPREADSHEET_ID =
  '1ai5kQebULm5gOCbE9rCk6a4Wl2ISj4iAnFVdIlc_vY8';

const CGK_GROUP_TARGET_GID = 125364981;
const CGK_SUPABASE_TABLE = 'cgk_group_schedule';

const CGK_MONTHS = {
  jan:1, january:1,
  feb:2, february:2,
  mar:3, march:3,
  apr:4, april:4,
  may:5, mei:5,
  jun:6, june:6,
  jul:7, july:7,
  aug:8, agu:8, august:8, agustus:8,
  sep:9, sept:9, september:9,
  oct:10, okt:10, october:10, oktober:10,
  nov:11, november:11,
  dec:12, des:12, december:12, desember:12
};

const CGK_MONTH_LABELS =
  ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

const CGK_AIRLINES = [
  [/qatar|\bqr\b/i,'QR'],
  [/garuda|\bga\b/i,'GA'],
  [/oman|\bwy\b/i,'WY'],
  [/emirates|\bek\b/i,'EK'],
  [/etihad|\bey\b/i,'EY'],
  [/saudia|saudi|\bsv\b/i,'SV'],
  [/scoot|\btr\b/i,'TR'],
  [/brunei|royal brunei|\bbi\b/i,'BI'],
  [/turkish|\btk\b/i,'TK']
];

/* ==============================
   SETUP / TRIGGERS
============================== */

function setupCGKDatabaseSync() {
  const cfg = validateCGKProperties_();

  console.log('CGK setup starting...');
  console.log('Supabase URL: ' + cfg.url);
  console.log('Key prefix: ' + cfg.serviceRoleKey.slice(0, 12));

  removeOldCGKTriggers_();
  createCGKTriggers_();

  const count = syncCGKGroupDatabase();

  console.log('CGK database ready. Rows synced: ' + count);
  return count;
}

function removeOldCGKTriggers_() {
  ScriptApp.getProjectTriggers().forEach(function(trigger) {
    const h = trigger.getHandlerFunction();
    if (h === 'cgkOnEditSync' || h === 'cgkScheduledSync') {
      ScriptApp.deleteTrigger(trigger);
    }
  });
}

function createCGKTriggers_() {
  [CGK_GROUP_SPREADSHEET_ID, CGK_PNR_SPREADSHEET_ID].forEach(function(id) {
    try {
      SpreadsheetApp.openById(id);
      ScriptApp.newTrigger('cgkOnEditSync').forSpreadsheet(id).onEdit().create();
      console.log('Edit trigger created: ' + id);
    } catch (err) {
      console.warn('Edit trigger failed for ' + id + ': ' + err);
    }
  });

  ScriptApp.newTrigger('cgkScheduledSync')
    .timeBased()
    .everyMinutes(5)
    .create();

  console.log('5-minute scheduled sync created.');
}

function cgkOnEditSync(e) {
  try {
    syncCGKGroupDatabase();
  } catch (err) {
    console.error('cgkOnEditSync failed: ' + err);
  }
}

function cgkScheduledSync() {
  try {
    syncCGKGroupDatabase();
  } catch (err) {
    console.error('cgkScheduledSync failed: ' + err);
  }
}

/* ==============================
   MAIN SYNC
============================== */

function syncCGKGroupDatabase() {
  const lock = LockService.getScriptLock();

  if (!lock.tryLock(30000)) {
    console.log('Sync skipped: another sync is running.');
    return 0;
  }

  try {
    const cfg = validateCGKProperties_();

    const rows = readCGKGroupSpreadsheet_();

    console.log('Parsed rows: ' + rows.length);

    if (!rows.length) {
      throw new Error('No group rows found in Table PIC.');
    }

    console.log('Deleting old Supabase snapshot...');
    deleteOldSupabaseRows_(cfg);

    console.log('Uploading new Supabase snapshot...');
    insertSupabaseRows_(cfg, rows);

    saveSyncSuccess_(rows.length);

    console.log('SYNC SUCCESS. Total rows: ' + rows.length);
    return rows.length;

  } catch (err) {
    saveSyncError_(err);
    console.error('CGK SYNC ERROR: ' + err);
    throw err;

  } finally {
    lock.releaseLock();
  }
}

/* ==============================
   SUPABASE AUTH
   IMPORTANT:
   RLS role comes from Authorization header.
   For legacy service_role JWT, send BOTH:
   apikey + Authorization: Bearer <same key>
============================== */

function supabaseHeaders_(cfg, preferValue) {
  const headers = {
    apikey: cfg.serviceRoleKey,
    Authorization: 'Bearer ' + cfg.serviceRoleKey
  };

  if (preferValue) {
    headers.Prefer = preferValue;
  }

  return headers;
}

function deleteOldSupabaseRows_(cfg) {
  const url =
    cfg.url.replace(/\/$/, '') +
    '/rest/v1/' +
    CGK_SUPABASE_TABLE +
    '?source_system=eq.' +
    encodeURIComponent(cfg.sourceSystem);

  const response = UrlFetchApp.fetch(url, {
    method: 'delete',
    muteHttpExceptions: true,
    headers: supabaseHeaders_(cfg, 'return=minimal')
  });

  const code = response.getResponseCode();
  const text = response.getContentText();

  console.log('DELETE status: ' + code);

  if (code < 200 || code >= 300) {
    throw new Error('Supabase DELETE HTTP ' + code + ': ' + text);
  }
}

function insertSupabaseRows_(cfg, rows) {
  const url =
    cfg.url.replace(/\/$/, '') +
    '/rest/v1/' +
    CGK_SUPABASE_TABLE;

  const batchSize = 50;

  for (let i = 0; i < rows.length; i += batchSize) {
    const batch = rows.slice(i, i + batchSize);

    const response = UrlFetchApp.fetch(url, {
      method: 'post',
      contentType: 'application/json',
      muteHttpExceptions: true,
      headers: supabaseHeaders_(cfg, 'return=minimal'),
      payload: JSON.stringify(batch)
    });

    const code = response.getResponseCode();
    const text = response.getContentText();

    console.log(
      'INSERT ' +
      (i + 1) +
      '-' +
      Math.min(i + batch.length, rows.length) +
      ' status: ' +
      code
    );

    if (code < 200 || code >= 300) {
      throw new Error('Supabase INSERT HTTP ' + code + ': ' + text);
    }
  }
}

/* ==============================
   SOURCE READER
============================== */

function readCGKGroupSpreadsheet_() {
  const ss = SpreadsheetApp.openById(CGK_GROUP_SPREADSHEET_ID);

  console.log('Reading ALL monthly PIC sheets: AUG 2026 -> MAR 2027');

  const rows = readMonthlySheets_(ss);

  console.log('ALL MONTHS parsed rows: ' + rows.length);

  if (!rows.length) {
    console.warn(
      'No monthly rows found. Trying target GID as generic fallback only.'
    );

    const target = ss.getSheets().find(function(sheet) {
      return sheet.getSheetId() === CGK_GROUP_TARGET_GID;
    });

    if (target) {
      console.log('Generic fallback sheet: ' + target.getName());
      return parseGenericCGKTable_(target);
    }
  }

  return rows;
}

function isCGKOperationalPeriod_(period) {
  if (!period) return false;

  const key = period.year * 100 + period.month;

  // August 2026 through March 2027, inclusive.
  return key >= 202608 && key <= 202703;
}

function readMonthlySheets_(ss) {
  const result = [];
  const sheets = ss.getSheets();

  console.log(
    'PIC workbook sheets: ' +
    sheets.map(function(sheet) {
      return sheet.getName();
    }).join(', ')
  );

  sheets.forEach(function(sheet) {
    const name = sheet.getName();
    const period = parseCGKSheetPeriod_(name);

    if (!period) {
      console.log('SKIP non-month sheet: ' + name);
      return;
    }

    if (!isCGKOperationalPeriod_(period)) {
      console.log('SKIP outside operational period: ' + name);
      return;
    }

    const rows = parseCGKMonthlySheet_(sheet, period);

    console.log(
      'MONTH ' +
      name +
      ' -> ' +
      rows.length +
      ' rows'
    );

    rows.forEach(function(row) {
      result.push(row);
    });
  });

  // Extra safety: remove accidental duplicate records by stable source ID.
  const seen = {};
  const deduped = [];

  result.forEach(function(row) {
    const id = String(row.id || '');

    if (!id) {
      deduped.push(row);
      return;
    }

    if (seen[id]) {
      console.warn('Duplicate source row skipped: ' + id);
      return;
    }

    seen[id] = true;
    deduped.push(row);
  });

  console.log(
    'TOTAL monthly rows before dedupe: ' +
    result.length +
    '; after dedupe: ' +
    deduped.length
  );

  return deduped;
}

/* ==============================
   GENERIC TABLE PARSER
============================== */

function parseGenericCGKTable_(sheet) {
  const values = sheet.getDataRange().getDisplayValues();
  if (!values || values.length < 2) return [];

  const headerIndex = detectHeaderRow_(values);
  if (headerIndex < 0) return [];

  const headers = values[headerIndex].map(normalizeHeader_);
  const map = buildColumnMap_(headers);

  if (map.departureDate == null && map.groupName == null) {
    return [];
  }

  const out = [];

  for (let r = headerIndex + 1; r < values.length; r++) {
    const row = values[r];
    if (row.every(function(v) { return !String(v || '').trim(); })) continue;

    const departureDate = parseFlexibleDate_(getMappedCell_(row, map.departureDate));
    if (!departureDate) continue;

    const airlineLabel = getMappedCell_(row, map.airline);
    const airlineCode = parseAirlineCode_(airlineLabel);

    const groupName =
      getMappedCell_(row, map.groupName) ||
      formatGroupName_(departureDate, airlineCode);

    const pax = parsePax_(getMappedCell_(row, map.pax));
    const departureTime = normalizeTime_(getMappedCell_(row, map.departureTime));
    const returnDate = parseFlexibleDate_(getMappedCell_(row, map.returnDate));
    const returnTime = normalizeTime_(getMappedCell_(row, map.returnTime));

    out.push({
      id: 'generic_' + String(r + 1),
      source_system: getCGKSourceSystem_(),
      source_sheet: sheet.getName(),
      source_column: r + 1,
      group_header: null,
      group_name: groupName,
      departure_date: isoDate_(departureDate),
      departure_time: departureTime,
      return_date: returnDate ? isoDate_(returnDate) : null,
      return_time: returnTime,
      airline_code: airlineCode || null,
      airline_label: airlineLabel || null,
      program_label: nullable_(getMappedCell_(row, map.package)),
      pax_adult: pax.adult,
      pax_infant: pax.infant,
      pax_total: pax.total,
      pax_label: pax.label,
      group_number_nusuk: nullable_(getMappedCell_(row, map.nusuk)),
      visa_status: nullable_(getMappedCell_(row, map.visa)),
      ticket_status: nullable_(getMappedCell_(row, map.ticket)),
      departure_event_key: makeEventKey_(
        isoDate_(departureDate),
        departureTime,
        airlineCode,
        'DEPARTURE_CGK'
      ),
      arrival_event_key: makeEventKey_(
        returnDate ? isoDate_(returnDate) : null,
        returnTime,
        airlineCode,
        'ARRIVAL_CGK'
      ),
      source_updated_at: new Date().toISOString(),
      raw: { source: 'generic_table' }
    });
  }

  return out;
}

/* ==============================
   MONTHLY / LEGACY PARSER
============================== */

function parseCGKMonthlySheet_(sheet, period) {
  const values = sheet.getDataRange().getDisplayValues();
  if (!values || values.length < 5) return [];

  const labels = {};

  values.forEach(function(row, index) {
    const label = String(row[1] || '').trim().toLowerCase();
    if (label) labels[label] = index;
  });

  const departureRow = findLabelRow_(labels, [
    'take off keberangkatan cgk',
    'keberangkatan cgk',
    'departure cgk'
  ]);

  const arrivalRow = findLabelRow_(labels, [
    'landing kepulangan cgk',
    'kepulangan cgk',
    'arrival cgk'
  ]);

  const paxRow = findLabelRow_(labels, [
    'jumlah jamaah',
    'pax'
  ]);

  const nusukRow = findLabelRow_(labels, [
    'group number nusuk',
    'group nusuk',
    'nusuk'
  ]);

  const visaRow = findLabelRow_(labels, [
    'status visa',
    'visa'
  ]);

  const ticketRow = findLabelRow_(labels, [
    'status tiket',
    'tiket'
  ]);

  const result = [];
  const maxCols = Math.max.apply(null, values.map(function(row) {
    return row.length;
  }));

  for (let col = 0; col < maxCols; col++) {
    const header = findGroupHeader_(values, col);
    if (!header) continue;

    const groupDate = parseGroupDate_(header, period.year, period.month);
    if (!groupDate) continue;

    const airlineLabel = findAirlineLabel_(values, col);
    const airlineCode = parseAirlineCode_(airlineLabel);

    const departureRaw = safeCell_(values, departureRow, col);
    const arrivalRaw = safeCell_(values, arrivalRow, col);

    const departure = parseScheduleCell_(departureRaw, groupDate);
    const arrival = parseScheduleCell_(arrivalRaw, groupDate);

    const pax = parsePax_(safeCell_(values, paxRow, col));
    const actualDepartureDate = departure.date || isoDate_(groupDate);

    result.push({
      id: sanitizeId_(sheet.getName()) + '_' + String(col + 1),
      source_system: getCGKSourceSystem_(),
      source_sheet: sheet.getName(),
      source_column: col + 1,
      group_header: header,
      group_name: formatGroupName_(groupDate, airlineCode),
      // Actual CGK handling/flight date is used for event matching.
      // The group header date remains in group_name/raw.group_date.
      departure_date: actualDepartureDate,
      departure_time: departure.time,
      return_date: arrival.date,
      return_time: arrival.time,
      airline_code: airlineCode || null,
      airline_label: airlineLabel || null,
      program_label: null,
      pax_adult: pax.adult,
      pax_infant: pax.infant,
      pax_total: pax.total,
      pax_label: pax.label,
      group_number_nusuk: nullable_(safeCell_(values, nusukRow, col)),
      visa_status: nullable_(safeCell_(values, visaRow, col)),
      ticket_status: nullable_(safeCell_(values, ticketRow, col)),
      departure_event_key: makeEventKey_(
        actualDepartureDate,
        departure.time,
        airlineCode,
        'DEPARTURE_CGK'
      ),
      arrival_event_key: makeEventKey_(
        arrival.date,
        arrival.time,
        airlineCode,
        'ARRIVAL_CGK'
      ),
      source_updated_at: new Date().toISOString(),
      raw: { source: 'monthly_sheet', group_date: isoDate_(groupDate), departure_schedule: departureRaw, return_schedule: arrivalRaw }
    });
  }

  return result;
}

/* ==============================
   SCRIPT PROPERTIES / DEBUG
============================== */

function validateCGKProperties_() {
  const p = PropertiesService.getScriptProperties();

  const url = String(p.getProperty('SUPABASE_URL') || '').trim();
  const key = String(p.getProperty('SUPABASE_SERVICE_ROLE_KEY') || '').trim();
  const sourceSystem = String(
    p.getProperty('CGK_SOURCE_SYSTEM') || 'google_sheets'
  ).trim();

  if (!url) {
    throw new Error('SUPABASE_URL belum diisi di Script Properties.');
  }

  if (!key) {
    throw new Error('SUPABASE_SERVICE_ROLE_KEY belum diisi di Script Properties.');
  }

  if (!key.startsWith('eyJ')) {
    throw new Error(
      'Gunakan LEGACY service_role JWT (prefix eyJ...) di SUPABASE_SERVICE_ROLE_KEY. ' +
      'Jangan pakai sb_publishable_ dan jangan pakai sb_secret_ untuk versi Apps Script ini.'
    );
  }

  return {
    url: url,
    serviceRoleKey: key,
    sourceSystem: sourceSystem
  };
}

function debugCGKConfig() {
  const cfg = validateCGKProperties_();

  console.log('URL: ' + cfg.url);
  console.log('KEY PREFIX: ' + cfg.serviceRoleKey.slice(0, 15));
  console.log('KEY LENGTH: ' + cfg.serviceRoleKey.length);
  console.log('SOURCE: ' + cfg.sourceSystem);
}

function testSupabaseServiceRole() {
  const cfg = validateCGKProperties_();

  const url =
    cfg.url.replace(/\/$/, '') +
    '/rest/v1/' +
    CGK_SUPABASE_TABLE +
    '?select=id&limit=1';

  const response = UrlFetchApp.fetch(url, {
    method: 'get',
    muteHttpExceptions: true,
    headers: supabaseHeaders_(cfg)
  });

  console.log('TEST HTTP: ' + response.getResponseCode());
  console.log('TEST BODY: ' + response.getContentText());

  if (response.getResponseCode() < 200 || response.getResponseCode() >= 300) {
    throw new Error(
      'Supabase service_role test failed: ' +
      response.getResponseCode() +
      ' ' +
      response.getContentText()
    );
  }
}

/* ==============================
   TEST SPREADSHEETS
============================== */

function testNewSpreadsheetSources() {
  const pnr = SpreadsheetApp.openById(CGK_PNR_SPREADSHEET_ID);
  const pic = SpreadsheetApp.openById(CGK_GROUP_SPREADSHEET_ID);

  console.log('PNR FILE: ' + pnr.getName());
  console.log(
    'PNR SHEETS: ' +
    pnr.getSheets().map(function(s) {
      return s.getName() + ' [' + s.getSheetId() + ']';
    }).join(', ')
  );

  console.log('PIC FILE: ' + pic.getName());
  console.log(
    'PIC SHEETS: ' +
    pic.getSheets().map(function(s) {
      return s.getName() + ' [' + s.getSheetId() + ']';
    }).join(', ')
  );

  const target = pic.getSheets().find(function(sheet) {
    return sheet.getSheetId() === CGK_GROUP_TARGET_GID;
  });

  console.log('REFERENCE GID SHEET: ' + (target ? target.getName() : 'NOT FOUND'));
  console.log('NOTE: production sync now reads ALL monthly sheets AUG 26 through MAR 27; GID is fallback only.');
  console.log('SOURCE TEST SUCCESS');
}

/* ==============================
   HELPERS
============================== */

function detectHeaderRow_(values) {
  const maxScan = Math.min(values.length, 20);

  for (let i = 0; i < maxScan; i++) {
    const joined = values[i].join(' ').toLowerCase();

    if (/tanggal|date|group|pax|jamaah/.test(joined)) {
      return i;
    }
  }

  return -1;
}

function buildColumnMap_(headers) {
  return {
    groupName: findHeaderIndex_(headers, [
      'nama grup',
      'nama group',
      'group name',
      'grup',
      'group'
    ]),

    departureDate: findHeaderIndex_(headers, [
      'tanggal berangkat',
      'tgl berangkat',
      'departure date'
    ]),

    departureTime: findHeaderIndex_(headers, [
      'jam berangkat',
      'departure time',
      'take off'
    ]),

    returnDate: findHeaderIndex_(headers, [
      'tanggal pulang',
      'tgl pulang',
      'return date',
      'arrival date'
    ]),

    returnTime: findHeaderIndex_(headers, [
      'jam pulang',
      'return time',
      'landing'
    ]),

    airline: findHeaderIndex_(headers, [
      'airline',
      'maskapai',
      'pesawat'
    ]),

    pax: findHeaderIndex_(headers, [
      'pax',
      'jumlah jamaah',
      'jamaah'
    ]),

    package: findHeaderIndex_(headers, [
      'package',
      'paket',
      'program'
    ]),

    nusuk: findHeaderIndex_(headers, [
      'nusuk',
      'group number nusuk'
    ]),

    visa: findHeaderIndex_(headers, [
      'visa',
      'status visa'
    ]),

    ticket: findHeaderIndex_(headers, [
      'tiket',
      'ticket',
      'status tiket'
    ])
  };
}

function findHeaderIndex_(headers, candidates) {
  for (let i = 0; i < headers.length; i++) {
    for (let j = 0; j < candidates.length; j++) {
      if (headers[i].includes(candidates[j])) {
        return i;
      }
    }
  }

  return null;
}

function normalizeHeader_(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ');
}

function getMappedCell_(row, index) {
  if (index == null || index < 0 || index >= row.length) return '';
  return String(row[index] == null ? '' : row[index]).trim();
}

function parseCGKSheetPeriod_(name) {
  const match = String(name || '')
    .trim()
    .match(/^([A-Za-z]+)\s+(\d{2})$/);

  if (!match) return null;

  const month = CGK_MONTHS[match[1].toLowerCase()];
  if (!month) return null;

  return {
    month: month,
    year: 2000 + Number(match[2])
  };
}

function parseGroupDate_(header, year, month) {
  const match = String(header || '').match(/group\s+(\d{1,2})/i);
  if (!match) return null;

  const day = Number(match[1]);
  const date = new Date(year, month - 1, day, 12, 0, 0, 0);

  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }

  return date;
}

function parseFlexibleDate_(value) {
  const raw = String(value || '').trim();
  if (!raw) return null;

  const native = new Date(raw);
  if (!Number.isNaN(native.getTime())) return native;

  const match = raw.match(
    /(\d{1,2})[\s\-\/]+([A-Za-z]+|\d{1,2})[\s\-\/]+(\d{2,4})/
  );

  if (!match) return null;

  const day = Number(match[1]);

  let month;
  if (/^\d+$/.test(match[2])) {
    month = Number(match[2]);
  } else {
    month = CGK_MONTHS[match[2].toLowerCase()];
  }

  if (!month) return null;

  let year = Number(match[3]);
  if (year < 100) year += 2000;

  return new Date(year, month - 1, day, 12, 0, 0, 0);
}

function parseScheduleCell_(value, groupDate) {
  const raw = String(value || '');

  if (!raw) {
    return { date: null, time: null };
  }

  const match = raw.match(
    /(\d{1,2})\s+([A-Za-z]+).*?(\d{1,2})[.:](\d{2})/i
  );

  if (!match) {
    return {
      date: null,
      time: normalizeTime_(raw)
    };
  }

  const month = CGK_MONTHS[match[2].toLowerCase()];
  if (!month) return { date: null, time: null };

  let year = groupDate.getFullYear();
  const groupMonth = groupDate.getMonth() + 1;

  if (month < groupMonth - 6) year++;
  if (month > groupMonth + 6) year--;

  const date = new Date(
    year,
    month - 1,
    Number(match[1]),
    12,
    0,
    0,
    0
  );

  return {
    date: isoDate_(date),
    time:
      String(Number(match[3])).padStart(2, '0') +
      ':' +
      String(Number(match[4])).padStart(2, '0')
  };
}

function normalizeTime_(value) {
  const raw = String(value || '').trim();
  if (!raw) return null;

  const colon = raw.match(/(\d{1,2})[:.](\d{2})/);
  if (colon) {
    return (
      String(Number(colon[1])).padStart(2, '0') +
      ':' +
      colon[2]
    );
  }

  const compact = raw.match(/\b(\d{2})(\d{2})\b/);
  if (compact) {
    return compact[1] + ':' + compact[2];
  }

  return null;
}

function parsePax_(value) {
  const raw = String(value == null ? '' : value).trim();

  if (!raw) {
    return {
      adult: null,
      infant: null,
      total: null,
      label: null
    };
  }

  const compact = raw.toUpperCase().replace(/\s+/g, '');
  const numbers = compact.match(/\d+/g) || [];

  if (!numbers.length) {
    return {
      adult: null,
      infant: null,
      total: null,
      label: raw
    };
  }

  const adult = Number(numbers[0]);
  const infant =
    /INF/.test(compact) && numbers.length > 1
      ? Number(numbers[1])
      : 0;

  return {
    adult: adult,
    infant: infant,
    total: adult + infant,
    // Preserve the spreadsheet value literally for UI display.
    label: raw
  };
}

function parseAirlineCode_(value) {
  const text = String(value || '');

  for (let i = 0; i < CGK_AIRLINES.length; i++) {
    if (CGK_AIRLINES[i][0].test(text)) {
      return CGK_AIRLINES[i][1];
    }
  }

  return '';
}

function formatGroupName_(date, airlineCode) {
  return (
    String(date.getDate()).padStart(2, '0') +
    ' ' +
    CGK_MONTH_LABELS[date.getMonth()] +
    ' ' +
    String(date.getFullYear()).slice(-2) +
    (airlineCode ? ' ' + airlineCode : '')
  );
}

function makeEventKey_(date, time, airline, type) {
  if (!date || !time) return null;

  return [
    date,
    time,
    airline || '',
    type
  ].join('|');
}

function findLabelRow_(labels, candidates) {
  const keys = Object.keys(labels);

  for (let i = 0; i < candidates.length; i++) {
    const candidate = candidates[i].toLowerCase();

    for (let j = 0; j < keys.length; j++) {
      if (keys[j].includes(candidate)) {
        return labels[keys[j]];
      }
    }
  }

  return null;
}

function findGroupHeader_(values, col) {
  const scanRows = Math.min(values.length, 10);

  for (let row = 0; row < scanRows; row++) {
    const value = safeCell_(values, row, col);

    if (/group\s+\d+/i.test(value)) {
      return value;
    }
  }

  return '';
}

function findAirlineLabel_(values, col) {
  const scanRows = Math.min(values.length, 10);

  for (let row = 0; row < scanRows; row++) {
    const value = safeCell_(values, row, col);

    if (
      CGK_AIRLINES.some(function(pair) {
        return pair[0].test(value);
      })
    ) {
      return value;
    }
  }

  return '';
}

function saveSyncSuccess_(rowCount) {
  // IMPORTANT:
  // Do NOT pass `true` as the second argument to setProperties().
  // In Apps Script, true means "delete all other properties first",
  // which would erase SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY.
  PropertiesService.getScriptProperties().setProperties({
    CGK_LAST_SYNC_AT: new Date().toISOString(),
    CGK_LAST_SYNC_STATUS: 'OK',
    CGK_LAST_SYNC_ROWS: String(rowCount),
    CGK_LAST_SYNC_ERROR: ''
  });
}

function saveSyncError_(err) {
  // Preserve all existing Script Properties, especially Supabase credentials.
  PropertiesService.getScriptProperties().setProperties({
    CGK_LAST_SYNC_AT: new Date().toISOString(),
    CGK_LAST_SYNC_STATUS: 'ERROR',
    CGK_LAST_SYNC_ERROR: String(
      err && err.message ? err.message : err
    ).slice(0, 1500)
  });
}

function getCGKSourceSystem_() {
  return String(
    PropertiesService.getScriptProperties().getProperty(
      'CGK_SOURCE_SYSTEM'
    ) || 'google_sheets'
  ).trim();
}

function safeCell_(values, row, col) {
  if (
    row == null ||
    row < 0 ||
    row >= values.length ||
    col < 0 ||
    col >= values[row].length
  ) {
    return '';
  }

  return String(
    values[row][col] == null ? '' : values[row][col]
  ).trim();
}

function nullable_(value) {
  const text = String(value || '').trim();
  return text || null;
}

function isoDate_(date) {
  if (!date) return null;

  return Utilities.formatDate(
    date,
    Session.getScriptTimeZone() || 'Asia/Jakarta',
    'yyyy-MM-dd'
  );
}

function sanitizeId_(value) {
  return String(value || '')
    .trim()
    .replace(/[^A-Za-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}
