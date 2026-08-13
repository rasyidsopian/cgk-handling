const PERIODS=[
  {y:2026,m:7,label:"August 2026"},{y:2026,m:8,label:"September 2026"},
  {y:2026,m:9,label:"October 2026"},{y:2026,m:10,label:"November 2026"},
  {y:2026,m:11,label:"December 2026"},{y:2027,m:0,label:"January 2027"},
  {y:2027,m:1,label:"February 2027"},{y:2027,m:2,label:"March 2027"}
];
const APP_VERSION="13.0.0";
let state={index:0,query:"",type:"all",airline:"all",highPax:false};
let lastRenderedIndex=0;
const $=s=>document.querySelector(s);
const monthKey=p=>`${p.y}-${String(p.m+1).padStart(2,"0")}`;
const fmtDate=s=>new Date(`${s}T12:00:00`).toLocaleDateString("en-GB",{day:"2-digit",month:"long",year:"numeric"});
const handlingTime=e=>e.type==="ARRIVAL_CGK" ? (e.arrivalTime || e.time) : (e.departureTime || e.time);

// Source data stays intact. Operator edits are stored as local overrides, while new schedules are stored separately.
handlingEvents.forEach(e=>{ if(e.type==="ARRIVAL_CGK" && e.arrivalTime) e.time=e.arrivalTime; });
function loadCustomEvents(){try{return JSON.parse(localStorage.getItem("cgk-custom-events")||"[]")}catch{return []}}
function saveCustomEvents(){localStorage.setItem("cgk-custom-events",JSON.stringify(customEvents))}
function loadOverrides(){try{return JSON.parse(localStorage.getItem("cgk-event-overrides")||"{}")}catch{return {}}}
function saveOverrides(){localStorage.setItem("cgk-event-overrides",JSON.stringify(eventOverrides))}
let customEvents=loadCustomEvents();
let eventOverrides=loadOverrides();
function allEvents(){return handlingEvents.map(e=>eventOverrides[e.id]?{...e,...eventOverrides[e.id],id:e.id,custom:false,sourceEdited:true}:e).concat(customEvents)}

function monthEvents(){
  const p=PERIODS[state.index],k=monthKey(p);
  return allEvents().filter(e=>{
    if(e.date.slice(0,7)!==k)return false;
    if(state.type!=="all"&&e.type!==state.type)return false;
    if(state.airline!=="all"&&e.airline!==state.airline)return false;
    if(state.highPax&&!(e.pax>=45))return false;
    if(state.query){const q=state.query.toLowerCase();return [e.flight,e.pnr,e.package,e.hotel,e.vendor,e.route,e.date,e.pax,e.airlineName,e.type,e.note].join(" ").toLowerCase().includes(q)}
    return true;
  });
}
function renderSummary(){
  const ev=monthEvents(),deps=ev.filter(e=>e.type==="DEPARTURE_CGK"),arr=ev.filter(e=>e.type==="ARRIVAL_CGK");
  const counts={};ev.forEach(e=>counts[e.date]=(counts[e.date]||0)+1);
  const busiest=Object.entries(counts).sort((a,b)=>b[1]-a[1])[0];
  const now=new Date();
  const next=[...ev].sort((a,b)=>a.date.localeCompare(b.date)||handlingTime(a).localeCompare(handlingTime(b))).find(e=>new Date(`${e.date}T${handlingTime(e)}:00`)>now);
  const cards=[
    ["Total Events",ev.length,"source + custom"],["Departures",deps.length,"CGK outbound"],["Arrivals",arr.length,"CGK inbound"],
    ["Total Pax",ev.reduce((n,e)=>n+(e.pax||0),0)||"-","verified + custom"],
    ["Busiest Day",busiest?new Date(`${busiest[0]}T12:00:00`).toLocaleDateString("en-US",{day:"2-digit",month:"short"}):"-",busiest?`${busiest[1]} events`:"-"],
    ["Next Handling",next?`${new Date(`${next.date}T12:00:00`).toLocaleDateString("en-US",{day:"2-digit",month:"short"})} · ${handlingTime(next)}`:"-",next?next.flight:"-"]
  ];
  $("#summary").innerHTML=cards.map(c=>`<div class="summary-card"><span>${c[0]}</span><b>${c[1]}</b><small>${c[2]}</small></div>`).join("");
}
function renderYear(){
  $("#yearOverview").innerHTML=PERIODS.map(p=>{const k=monthKey(p),n=allEvents().filter(e=>e.date.slice(0,7)===k).length;return `<div class="year-item"><span>${p.label}</span><b>${n}</b><small>CGK events</small></div>`;}).join("");
}
function eventCard(e){
  const dep=e.type==="DEPARTURE_CGK",cls=dep?"dep":"arr",time=handlingTime(e),custom=e.custom===true;
  const header=dep
    ?`<div class="event-top"><div><div class="type">BERANGKAT</div><div class="time">${time}</div></div>${custom?`<span class="custom-badge">CUSTOM</span>`:""}</div>`
    :`<div class="event-top"><div class="type">TIBA</div><div class="time">${time}</div></div>`;
  return `<div class="event ${cls} ${custom?"custom-event":""}" data-id="${e.id}">${header}<div class="flight">${e.flight||"CUSTOM"}</div><div class="route">${e.route||"-"}</div><div class="pax">${e.pax?`${e.pax} PAX`:"PAX —"}</div></div>`;
}
function renderCalendar(){
  const p=PERIODS[state.index],events=monthEvents();
  $("#calendarTitle").textContent=p.label;$("#resultCount").textContent=`${events.length} event`;
  const first=new Date(p.y,p.m,1),start=(first.getDay()+6)%7,days=new Date(p.y,p.m+1,0).getDate();let html="";
  for(let i=0;i<start;i++){html+=`<div class="day muted"><div class="day-head"><span class="day-num"></span></div></div>`}
  for(let d=1;d<=days;d++){
    const ds=`${p.y}-${String(p.m+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
    const dayEvents=events.filter(e=>e.date===ds).sort((a,b)=>handlingTime(a).localeCompare(handlingTime(b)));
    const now=new Date(),isToday=ds===`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}-${String(now.getDate()).padStart(2,"0")}`;
    html+=`<div class="day ${isToday?"today":""}" data-date="${ds}"><div class="day-head"><span class="day-num">${d}</span><div class="day-actions">${isToday?'<span class="today-badge">TODAY</span>':''}<span class="event-count">${dayEvents.length?dayEvents.length+" events":""}</span><button class="day-add" title="Tambah jadwal" aria-label="Tambah jadwal" data-add-date="${ds}"><i data-lucide="plus"></i></button></div></div>${dayEvents.slice(0,4).map(eventCard).join("")}${dayEvents.length>4?`<div class="more" data-date="${ds}">+${dayEvents.length-4} more</div>`:""}</div>`;
  }
  const total=42,used=start+days;for(let i=used;i<total;i++)html+=`<div class="day muted"><div class="day-head"><span class="day-num"></span></div></div>`;
  $("#calendar").innerHTML=html;
  document.querySelectorAll(".event").forEach(el=>el.addEventListener("click",()=>openDrawer(el.dataset.id)));
  document.querySelectorAll(".more").forEach(el=>el.addEventListener("click",()=>showDay(el.dataset.date)));
  document.querySelectorAll("[data-add-date]").forEach(el=>el.addEventListener("click",e=>{e.stopPropagation();openAddModal(el.dataset.addDate)}));
  lucide.createIcons();
}
function showDay(date){const ev=monthEvents().filter(e=>e.date===date);if(ev[0])openDrawer(ev[0].id);else openAddModal(date)}
function findEvent(id){return allEvents().find(e=>String(e.id)===String(id))}
function isCustomEvent(id){return customEvents.some(e=>String(e.id)===String(id))}
function isSourceEvent(id){return handlingEvents.some(e=>String(e.id)===String(id))}
function openDrawer(id){
  const e=findEvent(id);if(!e)return;
  const dep=e.type==="DEPARTURE_CGK",time=handlingTime(e),custom=e.custom===true,edited=e.sourceEdited===true;
  $("#drawerTitle").textContent=e.flight||"Custom Schedule";
  const legs=(e.scheduleLegs||[]).map(x=>`<div class="leg-row"><span>${x.date}</span><b>${x.dep} → ${x.arr}</b><span>${x.route}</span><span>${x.flight}${x.arrivalNextDay?" (+1)":""}</span></div>`).join("");
  const actions=custom
    ?`<button class="btn ghost" id="editEventBtn"><i data-lucide="pencil"></i>Edit</button><button class="btn danger" id="deleteCustomBtn"><i data-lucide="trash-2"></i>Hapus</button>`
    :`<button class="btn ghost" id="editEventBtn"><i data-lucide="pencil"></i>Edit isi</button><button class="btn ghost" id="addSimilarBtn"><i data-lucide="copy"></i>Tambah jadwal serupa</button>${edited?'<button class="btn danger" id="resetEventBtn"><i data-lucide="rotate-ccw"></i>Reset asli</button>':''}`;
  $("#drawerBody").innerHTML=`<div class="detail-hero"><small>${dep?"DEPARTURE":"ARRIVAL"} · ${fmtDate(e.date)}${custom?" · CUSTOM":edited?" · EDITED":""}</small><div class="big ${dep?"left":"right"}">${time}</div><small>${e.route||"-"}</small></div>
  <div class="drawer-actions">${actions}</div>
  <div class="detail-grid">${[["Handling",dep?"BERANGKAT":"TIBA"],["Flight",e.flight||"CUSTOM"],["Airline",e.airlineName||e.airline||"-"],["Date",fmtDate(e.date)],["Handling Time",time],["Route",e.route||"-"],["Package",e.package||"-"],["PNR",e.pnr||"-"],["PAX",e.pax??"-"],["Rooms",e.rooms??"-"],["Hotel",e.hotel||"-"],["Vendor",e.vendor||"-"],["Status",e.status||"-"],["Note",e.note||"-"]].map(x=>`<div class="detail-item"><span>${x[0]}</span><b>${x[1]}</b></div>`).join("")}</div>
  <div class="legs-box"><b>Flight schedule source</b>${legs||"<div style='margin-top:7px;color:#7b8983;font-size:10px'>No linked itinerary legs.</div>"}</div>
  <div class="source-box"><b>Source</b><p>${custom?"Custom operator schedule saved in this browser.":edited?"Source schedule has a local operator edit. Reset asli to restore the PDF value.":"Handling TIBA = actual arrival time at CGK on the final inbound segment. Transit departure times are never used as CGK handling arrival times. Source: PNR HAMDAN TOUR - Google Spreadsheet."}</p></div>`;
  $("#drawer").classList.add("open");$("#backdrop").classList.add("open");lucide.createIcons();
  $("#editEventBtn").onclick=()=>{closeDrawer();openEditModal(e.id)};
  if(custom){$("#deleteCustomBtn").onclick=()=>deleteCustom(e.id)}
  else { $("#addSimilarBtn").onclick=()=>{closeDrawer();openAddModal(e.date,e)}; if(edited) $("#resetEventBtn").onclick=()=>resetSourceOverride(e.id); }
}
function closeDrawer(){$("#drawer").classList.remove("open");$("#backdrop").classList.remove("open")}
function resetSourceOverride(id){ if(!eventOverrides[id]) return; if(!confirm("Kembalikan jadwal sumber ke data asli PDF?")) return; delete eventOverrides[id]; saveOverrides(); closeDrawer(); render(); toast("Jadwal dikembalikan ke data asli"); }

function populateForm(e,date){
  $("#scheduleId").value=e?.id||"";$("#scheduleDate").value=date||e?.date||"";$("#scheduleType").value=e?.type||"DEPARTURE_CGK";$("#scheduleTime").value=e?handlingTime(e):"";
  $("#scheduleAirline").value=e?.airline||"";$("#scheduleAirlineName").value=e?.airlineName||"";$("#scheduleFlight").value=e?.flight||"";$("#scheduleRoute").value=e?.route||"";
  $("#schedulePackage").value=e?.package||"";$("#schedulePnr").value=e?.pnr||"";$("#schedulePax").value=e?.pax??"";$("#scheduleRooms").value=e?.rooms??"";$("#scheduleHotel").value=e?.hotel||"";$("#scheduleVendor").value=e?.vendor||"";$("#scheduleStatus").value=e?.status||"";$("#scheduleNote").value=e?.note||"";
}
function openAddModal(date,copyFrom){populateForm(copyFrom,date);$("#scheduleMode").value="new";$("#scheduleModalTitle").textContent=copyFrom?"Tambah jadwal serupa":"Tambah jadwal";const m=$("#scheduleModal"),b=$("#scheduleBackdrop");m.setAttribute("aria-hidden","false");m.classList.add("open");b.classList.add("open");document.body.classList.add("modal-open");setTimeout(()=>$("#scheduleDate")?.focus(),30)}
function openEditModal(id){const e=findEvent(id);if(!e)return;populateForm(e,e.date);$("#scheduleMode").value=isSourceEvent(id)?"source":"custom";$("#scheduleModalTitle").textContent=isSourceEvent(id)?"Edit jadwal sumber":"Edit jadwal custom";const m=$("#scheduleModal"),b=$("#scheduleBackdrop");m.setAttribute("aria-hidden","false");m.classList.add("open");b.classList.add("open");document.body.classList.add("modal-open");}
function closeScheduleModal(){const m=$("#scheduleModal"),b=$("#scheduleBackdrop");if(!m)return;m.classList.remove("open");b.classList.remove("open");m.setAttribute("aria-hidden","true");document.body.classList.remove("modal-open");setTimeout(()=>$("#scheduleDate")?.blur(),20)}
function collectForm(){
  const type=$("#scheduleType").value, time=$("#scheduleTime").value.trim(), date=$("#scheduleDate").value;
  const airline=$("#scheduleAirline").value.trim().toUpperCase();
  return {date,type,time,departureTime:type==="DEPARTURE_CGK"?time:"",arrivalTime:type==="ARRIVAL_CGK"?time:"",airline,airlineName:$("#scheduleAirlineName").value.trim(),flight:$("#scheduleFlight").value.trim().toUpperCase(),route:$("#scheduleRoute").value.trim(),package:$("#schedulePackage").value.trim(),pnr:$("#schedulePnr").value.trim().toUpperCase(),pax:Number($("#schedulePax").value)||0,rooms:Number($("#scheduleRooms").value)||0,hotel:$("#scheduleHotel").value.trim(),vendor:$("#scheduleVendor").value.trim(),status:$("#scheduleStatus").value.trim(),note:$("#scheduleNote").value.trim()};
}

const MONTHS={JAN:0,FEB:1,MAR:2,APR:3,MAY:4,JUN:5,JUL:6,AUG:7,SEP:8,OCT:9,NOV:10,DEC:11};
const airlineNames={GA:"Garuda Indonesia",QR:"Qatar Airways",EK:"Emirates",WY:"Oman Air",EY:"Etihad Airways",SV:"Saudia",BI:"Royal Brunei",TR:"Scoot"};
function parseItineraryText(raw){
  const text=raw.replace(/\u00a0/g," ").replace(/[\r\n]+/g," ").replace(/\s+/g," ").trim();
  const re=/(\d{1,2})(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)\s+([A-Z]{3})([A-Z]{3})\s+(\d{4})\s+(\d{4})(?:\s*\(\+1\))?\s+([A-Z]{2,3}\d{1,4})/gi;
  const parsed=[];let currentYear=PERIODS[state.index].y;let previousMonth=null;let idx=0;let m;
  while((m=re.exec(text))!==null){
    const day=Number(m[1]),mon=MONTHS[m[2].toUpperCase()],origin=m[3].toUpperCase(),dest=m[4].toUpperCase(),dep=m[5],arr=m[6],flight=m[7].toUpperCase();
    if(previousMonth!==null && mon<previousMonth && previousMonth-mon>6) currentYear++;
    if(previousMonth===null){const anchor=PERIODS[state.index].m;if(mon<anchor-6) currentYear++;if(mon>anchor+6) currentYear--;}
    previousMonth=mon;
    const route=origin+" → "+dest;
    const airline=(flight.match(/^[A-Z]{2,3}/)?.[0]||flight.slice(0,2)).toUpperCase();
    const snippet=text.slice(Math.max(0,m.index-8),Math.min(text.length,m.index+m[0].length+28)).trim();
    const nextDay=/\(\+1\)/i.test(m[0]);
    const iso=(y,mo,d)=>`${y}-${String(mo+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
    const base={airline,airlineName:airlineNames[airline]||airline,flight,route,package:"",pnr:"",pax:0,rooms:0,hotel:"",vendor:"",status:"",note:"",custom:true,sourceType:"IMPORT",sourceSnippet:snippet};
    if(origin==="CGK") parsed.push({...base,id:`custom-import-${Date.now()}-${idx++}`,date:iso(currentYear,mon,day),type:"DEPARTURE_CGK",time:`${dep.slice(0,2)}:${dep.slice(2)}`,departureTime:`${dep.slice(0,2)}:${dep.slice(2)}`,arrivalTime:""});
    if(dest==="CGK") {
      let y=currentYear,mo=mon,d=day;
      if(nextDay){const dt=new Date(y,mo,d);dt.setDate(dt.getDate()+1);y=dt.getFullYear();mo=dt.getMonth();d=dt.getDate();}
      parsed.push({...base,id:`custom-import-${Date.now()}-${idx++}`,date:iso(y,mo,d),type:"ARRIVAL_CGK",time:`${arr.slice(0,2)}:${arr.slice(2)}`,departureTime:"",arrivalTime:`${arr.slice(0,2)}:${arr.slice(2)}`});
    }
  }
  return parsed;
}

function saveSchedule(e){
  if(!e.date||!e.time){toast("Tanggal dan jam wajib diisi");return}
  if(!/^\d{4}-\d{2}-\d{2}$/.test(e.date)){toast("Tanggal tidak valid");return}
  const id=$("#scheduleId").value,mode=$("#scheduleMode").value;
  if(mode==="source" && id){eventOverrides[id]={...eventOverrides[id],...e,id,custom:false,sourceEdited:true};saveOverrides();closeScheduleModal();render();toast("Jadwal sumber diperbarui");return;}
  if(id){const idx=customEvents.findIndex(x=>String(x.id)===String(id));if(idx>=0)customEvents[idx]={...customEvents[idx],...e,id:customEvents[idx].id,custom:true};else customEvents.push({...e,id:`custom-${Date.now()}`,custom:true})}
  else customEvents.push({...e,id:`custom-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,custom:true});
  saveCustomEvents();closeScheduleModal();render();toast(id?"Jadwal custom diperbarui":"Jadwal custom ditambahkan");
}
function deleteCustom(id){if(!confirm("Hapus jadwal custom ini?"))return;customEvents=customEvents.filter(e=>String(e.id)!==String(id));saveCustomEvents();closeDrawer();render();toast("Jadwal custom dihapus")}

function previewImport(events){const box=$("#importPreview");if(!events.length){box.classList.remove("hidden");box.innerHTML='<div class="paste-error">Tidak menemukan itinerary CGK yang valid.</div>';return false;}box.classList.remove("hidden");box.innerHTML=`<div class="paste-success"><b>${events.length} event siap ditambahkan</b><span>${events.filter(e=>e.type==='DEPARTURE_CGK').length} berangkat · ${events.filter(e=>e.type==='ARRIVAL_CGK').length} tiba</span></div>`+events.map(e=>`<div class="paste-row ${e.type==='ARRIVAL_CGK'?'arr':'dep'}"><b>${e.date}</b><span>${e.type==='ARRIVAL_CGK'?'TIBA':'BERANGKAT'}</span><strong>${handlingTime(e)}</strong><span>${e.flight}</span><span>${e.route}</span></div>`).join("");return true}
async function extractFileText(file){
  const name=file.name.toLowerCase();
  if(name.endsWith('.xlsx')||name.endsWith('.xls')||name.endsWith('.csv')){const data=await file.arrayBuffer();const wb=XLSX.read(data,{type:'array'});return wb.SheetNames.map(n=>{const ws=wb.Sheets[n];const rows=XLSX.utils.sheet_to_json(ws,{header:1,raw:false,defval:""});return rows.map(r=>r.filter(v=>String(v).trim()).join(' ')).join('\n')}).join('\n');}
  if(name.endsWith('.docx')){const buf=await file.arrayBuffer();const out=await mammoth.extractRawText({arrayBuffer:buf});return out.value||'';}
  if(name.endsWith('.pdf')){if(!window.pdfjsLib)throw new Error('PDF reader belum siap. Coba refresh halaman.');pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';const buf=await file.arrayBuffer();const pdf=await pdfjsLib.getDocument({data:buf}).promise;let text='';for(let i=1;i<=pdf.numPages;i++){const page=await pdf.getPage(i);const content=await page.getTextContent();text+=content.items.map(x=>x.str).join(' ')+'\n';}return text;}
  return await file.text();
}
async function runImport(){
  let raw=$("#importPaste").value.trim();const file=$("#importFile").files[0];
  try{if(file) raw=(raw?raw+'\n':'')+await extractFileText(file);if(!raw.trim()){toast('Paste itinerary atau upload file dulu');return;}const parsed=parseItineraryText(raw);if(!previewImport(parsed))return;const existingKeys=new Set(allEvents().map(e=>`${e.date}|${e.type}|${e.flight}|${handlingTime(e)}`));let added=0,skip=0;for(const e of parsed){const key=`${e.date}|${e.type}|${e.flight}|${handlingTime(e)}`;if(existingKeys.has(key)){skip++;continue;}customEvents.push(e);existingKeys.add(key);added++;}saveCustomEvents();render();toast(`${added} jadwal ditambahkan${skip?` · ${skip} duplikat dilewati`:''}`);if(added){setTimeout(closeImportModal,250);$("#importPaste").value="";$("#importFile").value="";$("#importFileName").textContent="";}}catch(err){console.error(err);toast('Gagal membaca file: '+(err.message||'format tidak didukung'));}}

function exportCSV(){
  const rows=monthEvents(),head=["Date","Type","Time","Airline","Flight","Route","Package","PNR","Pax","Rooms","Hotel","Vendor","Status","Note","Custom"];
  const csv=[head,...rows.map(e=>[e.date,e.type,handlingTime(e),e.airline,e.flight,e.route,e.package,e.pnr,e.pax??"",e.rooms??"",e.hotel,e.vendor,e.status,e.note??"",e.custom?"YES":"NO"])].map(r=>r.map(v=>`"${String(v).replaceAll('"','""')}"`).join(",")).join("\n");
  const blob=new Blob(["\ufeff"+csv],{type:"text/csv;charset=utf-8"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`CGK-Handling-${monthKey(PERIODS[state.index])}.csv`;a.click();URL.revokeObjectURL(a.href);toast("CSV berhasil diexport");
}
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(window.__toast);window.__toast=setTimeout(()=>t.classList.remove("show"),1800)}
function toggleFilter(){$("#filterPanel").classList.toggle("open")}
PERIODS.forEach((p,i)=>$("#monthSelect").insertAdjacentHTML("beforeend",`<option value="${i}">${p.label}</option>`));
$("#monthSelect").addEventListener("change",e=>setIndex(+e.target.value));
$("#monthButton").addEventListener("click",()=>$("#monthSelect").showPicker ? $("#monthSelect").showPicker() : toggleFilter());
$("#prevBtn").onclick=()=>setIndex(state.index-1);$("#nextBtn").onclick=()=>setIndex(state.index+1);
$("#todayBtn").onclick=()=>{const d=new Date();const i=PERIODS.findIndex(p=>p.y===d.getFullYear()&&p.m===d.getMonth());setIndex(i>=0?i:0);toast(i>=0?"Beralih ke bulan hari ini":"Hari ini di luar periode kalender")};
$("#exportBtn").onclick=$("#quickExport").onclick=exportCSV;
$("#printBtn").onclick=$("#quickPrint").onclick=()=>window.print();
const addNote=()=>{const n=prompt("Tambah catatan untuk operator",localStorage.getItem("cgk-note")||"");if(n!==null){localStorage.setItem("cgk-note",n.trim());showSavedNote();toast(n.trim()?"Catatan disimpan":"Catatan dihapus")}};
$("#noteBtn").onclick=$("#quickNote").onclick=addNote;
$("#filterBtn").onclick=$("#quickFilter").onclick=toggleFilter;$("#closeFilter").onclick=()=>$("#filterPanel").classList.remove("open");$("#clearFilters").onclick=()=>{state.type="all";state.airline="all";state.highPax=false;document.querySelectorAll(".chip").forEach(b=>b.classList.remove("active"));document.querySelector('[data-filter="all"]').classList.add("active");render();toast("Filter direset")};
$("#search").addEventListener("input",e=>{state.query=e.target.value;render()});
function bindFilters(){document.querySelectorAll("[data-filter]").forEach(b=>b.onclick=()=>{state.type=b.dataset.filter;document.querySelectorAll("[data-filter]").forEach(x=>x.classList.remove("active"));b.classList.add("active");render()});document.querySelectorAll("[data-airline]").forEach(b=>b.onclick=()=>{const same=state.airline===b.dataset.airline;document.querySelectorAll("[data-airline]").forEach(x=>x.classList.remove("active"));state.airline=same?"all":b.dataset.airline;if(!same)b.classList.add("active");render()});$("#highPax").onclick=()=>{state.highPax=!state.highPax;$("#highPax").classList.toggle("active",state.highPax);render()}}
bindFilters();
$("#helpBtn").onclick=()=>toast("Klik + di setiap tanggal untuk tambah jadwal · Klik event untuk detail · Ctrl K untuk search");$("#notifyBtn").onclick=()=>toast("6 notifikasi operator");$("#profileBtn").onclick=()=>toast("Profil operator aktif");
$("#themeBtn").onclick=()=>{document.body.classList.toggle("dark");toast(document.body.classList.contains("dark")?"Dark mode aktif":"Light mode aktif")};
$("#closeDrawer").onclick=closeDrawer;$("#backdrop").onclick=closeDrawer;
$("#parsePasteBtn").onclick=importPasteSchedule; $("#clearPaste").onclick=()=>{$("#schedulePaste").value="";$("#pastePreview").classList.add("hidden")};
$("#schedulePaste").addEventListener("input",()=>{ if($("#pastePreview")) $("#pastePreview").classList.add("hidden") });

function openImportModal(){$("#importModal").classList.add("open");$("#importBackdrop").classList.add("open");$("#importPreview").classList.add("hidden");$("#importPaste").focus()}
function closeImportModal(){$("#importModal").classList.remove("open");$("#importBackdrop").classList.remove("open")}
$("#importBtn").onclick=openImportModal;$("#closeImportModal").onclick=closeImportModal;$("#cancelImport").onclick=closeImportModal;$("#importBackdrop").onclick=closeImportModal;$("#runImport").onclick=runImport;
$("#importPaste").addEventListener("input",()=>$("#importPreview").classList.add("hidden"));
$("#importFile").addEventListener("change",e=>{const f=e.target.files[0];$("#importFileName").textContent=f?`${f.name} · ${(f.size/1024).toFixed(1)} KB`:""});

function wireScheduleModal(){
  const closeBtn=$("#closeScheduleModal"),cancelBtn=$("#cancelSchedule"),backdrop=$("#scheduleBackdrop"),modal=$("#scheduleModal");
  const safeClose=(ev)=>{if(ev){ev.preventDefault();ev.stopPropagation();}closeScheduleModal();};
  closeBtn?.addEventListener("click",safeClose);
  cancelBtn?.addEventListener("click",safeClose);
  backdrop?.addEventListener("click",ev=>{if(ev.target===backdrop)safeClose(ev)});
  modal?.addEventListener("click",ev=>ev.stopPropagation());
}
wireScheduleModal();
$("#scheduleForm").addEventListener("submit",e=>{e.preventDefault();e.stopPropagation();saveSchedule(collectForm())});
window.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();$("#search").focus()}if(e.key==="Escape"){closeDrawer();$("#filterPanel").classList.remove("open");closeScheduleModal();closeImportModal()}});
$("#helpBtn").addEventListener("dblclick",()=>toast(`CGK Handling v${APP_VERSION}`));
function showSavedNote(){const n=localStorage.getItem("cgk-note")||"";const el=$("#savedNote");if(n){el.textContent=`Catatan operator: ${n}`;el.classList.remove("hidden")}else el.classList.add("hidden")}
function setIndex(i){state.index=Math.max(0,Math.min(PERIODS.length-1,i));lastRenderedIndex=state.index;safeRender()}
function render(){lastRenderedIndex=state.index;renderSummary();renderCalendar();renderYear();$("#monthSelect").value=state.index; if(window.lucide&&lucide.createIcons)lucide.createIcons()}
function safeRender(){
  const run=()=>{try{ if(document.getElementById("calendar")) render(); }catch(err){ console.error("CGK render failed",err); }};
  run();
  setTimeout(run,120);
}
window.addEventListener("pageshow",()=>safeRender());
document.addEventListener("visibilitychange",()=>{if(!document.hidden)safeRender()});
window.addEventListener("DOMContentLoaded",()=>safeRender());
window.addEventListener("load",()=>safeRender());
showSavedNote();
setTimeout(safeRender,0);
