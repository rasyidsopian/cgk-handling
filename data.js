const handlingEvents = [
  {
    "id": "CGK-0001",
    "date": "2026-08-01",
    "time": "15:35",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR956",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "8MGXJQ",
    "pax": 50,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "23JUL CGKDOH 0900 1310 QR959 | 23JUL DOHJED 1550 1820 QR1186                                                                                                                                              Jada Ajyad | 31JUL JEDDOH 2235 0055 (+1) QR1189                                                                                                                                           12572 | 01AUG DOHCGK 0235 1535 QR956",
    "arrivalTime": "15:35",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-07-23",
        "dep": "09:00",
        "arr": "13:10",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-07-23",
        "dep": "15:50",
        "arr": "18:20",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2026-07-31",
        "dep": "22:35",
        "arr": "00:55",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2026-08-01",
        "dep": "02:35",
        "arr": "15:35",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0002",
    "date": "2026-08-02",
    "time": "13:20",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA961",
    "route": "MED → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "EQU7S4",
    "pax": 50,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "19JUL CGKJED 1205 1740 GA980                             UMRAH LANGSUNG                                                  Jada Ajyad | 01AUG MEDCGK 2310 1320 (+1) GA961                        (JED-MED)                                                         12571",
    "arrivalTime": "13:20",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-07-19",
        "dep": "12:05",
        "arr": "17:40",
        "route": "CGK → JED",
        "flight": "GA980",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-01",
        "dep": "23:10",
        "arr": "13:20",
        "route": "MED → CGK",
        "flight": "GA961",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0003",
    "date": "2026-08-02",
    "time": "16:10",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA982",
    "route": "CGK → JED",
    "type": "DEPARTURE_CGK",
    "pnr": "FS2WR5",
    "pax": 20,
    "rooms": 6,
    "package": "THAWIL GA",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "02AUG CGKJED 1610 2145 GA982                             UMRAH LANGSUNG                                                  Fajr Al Nusk | 15AUG MEDCGK 2310 1320 (+1) GA961                        (JED-MED)                                                        REV1347",
    "arrivalTime": null,
    "departureTime": "16:10",
    "scheduleLegs": [
      {
        "date": "2026-08-02",
        "dep": "16:10",
        "arr": "21:45",
        "route": "CGK → JED",
        "flight": "GA982",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-15",
        "dep": "23:10",
        "arr": "13:20",
        "route": "MED → CGK",
        "flight": "GA961",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0004",
    "date": "2026-08-02",
    "time": "18:30",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "9D75XS",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN QR     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "02AUG CGKDOH 1830 2240 QR957 | 03AUG DOHJED 0050 0320 QR1184                                                                                                                                            Fajr Al Nusk | 09AUG JEDDOH 2235 0055 (+1) QR1189                                                                                                                                        REV1348 | 10AUG DOHCGK 0235 1535 QR956",
    "arrivalTime": null,
    "departureTime": "18:30",
    "scheduleLegs": [
      {
        "date": "2026-08-02",
        "dep": "18:30",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-03",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-09",
        "dep": "22:35",
        "arr": "00:55",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2026-08-10",
        "dep": "02:35",
        "arr": "15:35",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0005",
    "date": "2026-08-05",
    "time": "12:20",
    "airline": "BI",
    "airlineName": "Royal Brunei Airlines",
    "flight": "BI735",
    "route": "BWN → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "17L7HQ, 17L7J3",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "28JUL CGKBWN 0615 0945 BI738 | 05AUG BWNCGK 1055 1220 BI735                                                              17L7J3      15",
    "arrivalTime": "12:20",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-07-28",
        "dep": "06:15",
        "arr": "09:45",
        "route": "CGK → BWN",
        "flight": "BI738",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-05",
        "dep": "10:55",
        "arr": "12:20",
        "route": "BWN → CGK",
        "flight": "BI735",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0006",
    "date": "2026-08-05",
    "time": "18:30",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "82OTZQ",
    "pax": 45,
    "rooms": 13,
    "package": "THAWIL QR     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "05AUG CGKDOH 1830 2240 QR957 | 06AUG DOHJED 0050 0320 QR1184                                                                                                                                            Fajr Al Nusk | 19AUG JEDDOH 0450 0710 QR1185                                                                                                                                             REV1349 | 19AUG DOHCGK 0840 2140 QR954",
    "arrivalTime": null,
    "departureTime": "18:30",
    "scheduleLegs": [
      {
        "date": "2026-08-05",
        "dep": "18:30",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-06",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-19",
        "dep": "04:50",
        "arr": "07:10",
        "route": "JED → DOH",
        "flight": "QR1185",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-19",
        "dep": "08:40",
        "arr": "21:40",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0007",
    "date": "2026-08-06",
    "time": "16:10",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA982",
    "route": "CGK → JED",
    "type": "DEPARTURE_CGK",
    "pnr": "F4QWXU",
    "pax": 20,
    "rooms": 6,
    "package": "THAWIL GA     UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "06AUG CGKJED 1610 2145 GA982                                                                                             Fajr Al Nusk | 19AUG MEDCGK 2310 1320 (+1) GA961                                                                                         REV1350",
    "arrivalTime": null,
    "departureTime": "16:10",
    "scheduleLegs": [
      {
        "date": "2026-08-06",
        "dep": "16:10",
        "arr": "21:45",
        "route": "CGK → JED",
        "flight": "GA982",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-19",
        "dep": "23:10",
        "arr": "13:20",
        "route": "MED → CGK",
        "flight": "GA961",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0008",
    "date": "2026-08-08",
    "time": "21:40",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "8MCTJM",
    "pax": 50,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "30JUL CGKDOH 0900 1310 QR959 | 30JUL DOHJED 1550 1820 QR1186                                                                                            Jada Ajyad | 08AUG JEDDOH 0450 0710 QR1185                                                                                              12574 | 08AUG DOHCGK 0840 2140 QR954",
    "arrivalTime": "21:40",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-07-30",
        "dep": "09:00",
        "arr": "13:10",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-07-30",
        "dep": "15:50",
        "arr": "18:20",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-08",
        "dep": "04:50",
        "arr": "07:10",
        "route": "JED → DOH",
        "flight": "QR1185",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-08",
        "dep": "08:40",
        "arr": "21:40",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0009",
    "date": "2026-08-10",
    "time": "15:35",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR956",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "9D75XS",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN QR     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "02AUG CGKDOH 1830 2240 QR957 | 03AUG DOHJED 0050 0320 QR1184                                                                                                                                            Fajr Al Nusk | 09AUG JEDDOH 2235 0055 (+1) QR1189                                                                                                                                        REV1348 | 10AUG DOHCGK 0235 1535 QR956",
    "arrivalTime": "15:35",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-08-02",
        "dep": "18:30",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-03",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-09",
        "dep": "22:35",
        "arr": "00:55",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2026-08-10",
        "dep": "02:35",
        "arr": "15:35",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0010",
    "date": "2026-08-10",
    "time": "18:30",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "9D8BH9",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN QR     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "10AUG CGKDOH 1830 2240 QR957 | 11AUG DOHJED 0050 0320 QR1184                                                                                                                                            Fajr Al Nusk | 17AUG JEDDOH 2235 0055 (+1) QR1189                                                                                                                                        REV1351 | 18AUG DOHCGK 0235 1535 QR956",
    "arrivalTime": null,
    "departureTime": "18:30",
    "scheduleLegs": [
      {
        "date": "2026-08-10",
        "dep": "18:30",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-11",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-17",
        "dep": "22:35",
        "arr": "00:55",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2026-08-18",
        "dep": "02:35",
        "arr": "15:35",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0011",
    "date": "2026-08-11",
    "time": "16:10",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA982",
    "route": "CGK → JED",
    "type": "DEPARTURE_CGK",
    "pnr": "D385NK",
    "pax": 50,
    "rooms": 14,
    "package": "QARIB GA",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "11AUG CGKJED 1610 2145 GA982                             UMRAH LANGSUNG | 18AUG MEDCGK 2310 1320 (+1) GA961                        (JED-MED)",
    "arrivalTime": null,
    "departureTime": "16:10",
    "scheduleLegs": [
      {
        "date": "2026-08-11",
        "dep": "16:10",
        "arr": "21:45",
        "route": "CGK → JED",
        "flight": "GA982",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-18",
        "dep": "23:10",
        "arr": "13:20",
        "route": "MED → CGK",
        "flight": "GA961",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0012",
    "date": "2026-08-12",
    "time": "00:55",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR955",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "8RPOKS",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL QR",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "12AUG CGKDOH 0055 0505 QR955 | 12AUG DOHMED 0740 0955 QR1178                            MADINAH DULU                                                                                                    Fajr Al Nusk | 24AUG JEDDOH 2235 0055 (+1) QR1189                       (MED-JED)                                                                                                        REV1352 | 25AUG DOHCGK 0235 1535 QR956",
    "arrivalTime": null,
    "departureTime": "00:55",
    "scheduleLegs": [
      {
        "date": "2026-08-12",
        "dep": "00:55",
        "arr": "05:05",
        "route": "CGK → DOH",
        "flight": "QR955",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-12",
        "dep": "07:40",
        "arr": "09:55",
        "route": "DOH → MED",
        "flight": "QR1178",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-24",
        "dep": "22:35",
        "arr": "00:55",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2026-08-25",
        "dep": "02:35",
        "arr": "15:35",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0013",
    "date": "2026-08-13",
    "time": "18:30",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "7UE7XN",
    "pax": 45,
    "rooms": 13,
    "package": "2X JUMAT QR   MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "13AUG CGKDOH 1830 2240 QR957 | 14AUG DOHJED 0050 0320 QR1184                                                                                                                                            Fajr Al Nusk | 21AUG JEDDOH 2235 0055 (+1) QR1189                                                                                                                                        REV1353 | 22AUG DOHCGK 0235 1535 QR956",
    "arrivalTime": null,
    "departureTime": "18:30",
    "scheduleLegs": [
      {
        "date": "2026-08-13",
        "dep": "18:30",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-14",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-21",
        "dep": "22:35",
        "arr": "00:55",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2026-08-22",
        "dep": "02:35",
        "arr": "15:35",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0014",
    "date": "2026-08-16",
    "time": "13:20",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA961",
    "route": "MED → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "FS2WR5",
    "pax": 20,
    "rooms": 6,
    "package": "THAWIL GA",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "02AUG CGKJED 1610 2145 GA982                             UMRAH LANGSUNG                                                  Fajr Al Nusk | 15AUG MEDCGK 2310 1320 (+1) GA961                        (JED-MED)                                                        REV1347",
    "arrivalTime": "13:20",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-08-02",
        "dep": "16:10",
        "arr": "21:45",
        "route": "CGK → JED",
        "flight": "GA982",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-15",
        "dep": "23:10",
        "arr": "13:20",
        "route": "MED → CGK",
        "flight": "GA961",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0015",
    "date": "2026-08-17",
    "time": "18:30",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "82R5HV",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN QR     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "17AUG CGKDOH 1830 2240 QR957 | 18AUG DOHJED 0050 0320 QR1184                                                                                                                                            Fajr Al Nusk | 25AUG JEDDOH 0310 0530 QR1183                                                                                                                                             REV1354 | 25AUG DOHCGK 0840 2140 QR954",
    "arrivalTime": null,
    "departureTime": "18:30",
    "scheduleLegs": [
      {
        "date": "2026-08-17",
        "dep": "18:30",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-18",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-25",
        "dep": "03:10",
        "arr": "05:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-25",
        "dep": "08:40",
        "arr": "21:40",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0016",
    "date": "2026-08-18",
    "time": "15:35",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR956",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "9D8BH9",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN QR     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "10AUG CGKDOH 1830 2240 QR957 | 11AUG DOHJED 0050 0320 QR1184                                                                                                                                            Fajr Al Nusk | 17AUG JEDDOH 2235 0055 (+1) QR1189                                                                                                                                        REV1351 | 18AUG DOHCGK 0235 1535 QR956",
    "arrivalTime": "15:35",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-08-10",
        "dep": "18:30",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-11",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-17",
        "dep": "22:35",
        "arr": "00:55",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2026-08-18",
        "dep": "02:35",
        "arr": "15:35",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0017",
    "date": "2026-08-19",
    "time": "13:20",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA961",
    "route": "MED → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "D385NK",
    "pax": 50,
    "rooms": 14,
    "package": "QARIB GA",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "11AUG CGKJED 1610 2145 GA982                             UMRAH LANGSUNG | 18AUG MEDCGK 2310 1320 (+1) GA961                        (JED-MED)",
    "arrivalTime": "13:20",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-08-11",
        "dep": "16:10",
        "arr": "21:45",
        "route": "CGK → JED",
        "flight": "GA982",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-18",
        "dep": "23:10",
        "arr": "13:20",
        "route": "MED → CGK",
        "flight": "GA961",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0018",
    "date": "2026-08-19",
    "time": "21:40",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "82OTZQ",
    "pax": 45,
    "rooms": 13,
    "package": "THAWIL QR     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "05AUG CGKDOH 1830 2240 QR957 | 06AUG DOHJED 0050 0320 QR1184                                                                                                                                            Fajr Al Nusk | 19AUG JEDDOH 0450 0710 QR1185                                                                                                                                             REV1349 | 19AUG DOHCGK 0840 2140 QR954",
    "arrivalTime": "21:40",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-08-05",
        "dep": "18:30",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-06",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-19",
        "dep": "04:50",
        "arr": "07:10",
        "route": "JED → DOH",
        "flight": "QR1185",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-19",
        "dep": "08:40",
        "arr": "21:40",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0019",
    "date": "2026-08-20",
    "time": "09:00",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR959",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "9BEF86",
    "pax": 45,
    "rooms": 13,
    "package": "2X JUMAT QR   UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "20AUG CGKDOH 0900 1310 QR959 | 20AUG DOHJED 1550 1820 QR1186                                                                                            Fajr Al Nusk | 29AUG JEDDOH 0310 0530 QR1183                                                                                             REV1355 | 29AUG DOHCGK 0840 2140 QR954",
    "arrivalTime": null,
    "departureTime": "09:00",
    "scheduleLegs": [
      {
        "date": "2026-08-20",
        "dep": "09:00",
        "arr": "13:10",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-20",
        "dep": "15:50",
        "arr": "18:20",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-29",
        "dep": "03:10",
        "arr": "05:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-29",
        "dep": "08:40",
        "arr": "21:40",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0020",
    "date": "2026-08-20",
    "time": "13:20",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA961",
    "route": "MED → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "F4QWXU",
    "pax": 20,
    "rooms": 6,
    "package": "THAWIL GA     UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "06AUG CGKJED 1610 2145 GA982                                                                                             Fajr Al Nusk | 19AUG MEDCGK 2310 1320 (+1) GA961                                                                                         REV1350",
    "arrivalTime": "13:20",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-08-06",
        "dep": "16:10",
        "arr": "21:45",
        "route": "CGK → JED",
        "flight": "GA982",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-19",
        "dep": "23:10",
        "arr": "13:20",
        "route": "MED → CGK",
        "flight": "GA961",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0021",
    "date": "2026-08-22",
    "time": "15:35",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR956",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "7UE7XN",
    "pax": 45,
    "rooms": 13,
    "package": "2X JUMAT QR   MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "13AUG CGKDOH 1830 2240 QR957 | 14AUG DOHJED 0050 0320 QR1184                                                                                                                                            Fajr Al Nusk | 21AUG JEDDOH 2235 0055 (+1) QR1189                                                                                                                                        REV1353 | 22AUG DOHCGK 0235 1535 QR956",
    "arrivalTime": "15:35",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-08-13",
        "dep": "18:30",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-14",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-21",
        "dep": "22:35",
        "arr": "00:55",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2026-08-22",
        "dep": "02:35",
        "arr": "15:35",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0022",
    "date": "2026-08-25",
    "time": "15:35",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR956",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "8RPOKS",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL QR",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "12AUG CGKDOH 0055 0505 QR955 | 12AUG DOHMED 0740 0955 QR1178                            MADINAH DULU                                                                                                    Fajr Al Nusk | 24AUG JEDDOH 2235 0055 (+1) QR1189                       (MED-JED)                                                                                                        REV1352 | 25AUG DOHCGK 0235 1535 QR956",
    "arrivalTime": "15:35",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-08-12",
        "dep": "00:55",
        "arr": "05:05",
        "route": "CGK → DOH",
        "flight": "QR955",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-12",
        "dep": "07:40",
        "arr": "09:55",
        "route": "DOH → MED",
        "flight": "QR1178",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-24",
        "dep": "22:35",
        "arr": "00:55",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2026-08-25",
        "dep": "02:35",
        "arr": "15:35",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0023",
    "date": "2026-08-25",
    "time": "21:40",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "82R5HV",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN QR     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "17AUG CGKDOH 1830 2240 QR957 | 18AUG DOHJED 0050 0320 QR1184                                                                                                                                            Fajr Al Nusk | 25AUG JEDDOH 0310 0530 QR1183                                                                                                                                             REV1354 | 25AUG DOHCGK 0840 2140 QR954",
    "arrivalTime": "21:40",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-08-17",
        "dep": "18:30",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-18",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-25",
        "dep": "03:10",
        "arr": "05:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-25",
        "dep": "08:40",
        "arr": "21:40",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0024",
    "date": "2026-08-26",
    "time": "00:55",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR955",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "9QMX7B",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL QR",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "26AUG CGKDOH 0055 0505 QR955 | 26AUG DOHMED 0740 0955 QR1178                            MADINAH DULU                                                                                                    Fajr Al Nusk | 08SEP JEDDOH 0310 0530 QR1183                            (MED-JED)                                                                                                        REV1356 | 08SEP DOHCGK 0840 2140 QR954",
    "arrivalTime": null,
    "departureTime": "00:55",
    "scheduleLegs": [
      {
        "date": "2026-08-26",
        "dep": "00:55",
        "arr": "05:05",
        "route": "CGK → DOH",
        "flight": "QR955",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-26",
        "dep": "07:40",
        "arr": "09:55",
        "route": "DOH → MED",
        "flight": "QR1178",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-08",
        "dep": "03:10",
        "arr": "05:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-08",
        "dep": "08:40",
        "arr": "21:40",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0025",
    "date": "2026-08-27",
    "time": "09:00",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR959",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "9BBDWF",
    "pax": 50,
    "rooms": 14,
    "package": "2X JUMAT QR   UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "27AUG CGKDOH 0900 1310 QR959 | 27AUG DOHJED 1550 1820 QR1186                                                                                            Fajr Al Nusk | 05SEP JEDDOH 0310 0530 QR1183                                                                                             REV1357 | 05SEP DOHCGK 0840 2140 QR954",
    "arrivalTime": null,
    "departureTime": "09:00",
    "scheduleLegs": [
      {
        "date": "2026-08-27",
        "dep": "09:00",
        "arr": "13:10",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-27",
        "dep": "15:50",
        "arr": "18:20",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-05",
        "dep": "03:10",
        "arr": "05:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-05",
        "dep": "08:40",
        "arr": "21:40",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0026",
    "date": "2026-08-29",
    "time": "21:40",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "9BEF86",
    "pax": 45,
    "rooms": 13,
    "package": "2X JUMAT QR   UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "20AUG CGKDOH 0900 1310 QR959 | 20AUG DOHJED 1550 1820 QR1186                                                                                            Fajr Al Nusk | 29AUG JEDDOH 0310 0530 QR1183                                                                                             REV1355 | 29AUG DOHCGK 0840 2140 QR954",
    "arrivalTime": "21:40",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-08-20",
        "dep": "09:00",
        "arr": "13:10",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-20",
        "dep": "15:50",
        "arr": "18:20",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-29",
        "dep": "03:10",
        "arr": "05:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-29",
        "dep": "08:40",
        "arr": "21:40",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0027",
    "date": "2026-08-31",
    "time": "18:30",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "82Y9UN",
    "pax": 50,
    "rooms": 14,
    "package": "HAQQAN QR     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "31AUG CGKDOH 1830 2240 QR957 | 01SEP DOHJED 0050 0320 QR1184 | 08SEP JEDDOH 0310 0530 QR1183 | 08SEP DOHCGK 0840 2140 QR954",
    "arrivalTime": null,
    "departureTime": "18:30",
    "scheduleLegs": [
      {
        "date": "2026-08-31",
        "dep": "18:30",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-01",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-08",
        "dep": "03:10",
        "arr": "05:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-08",
        "dep": "08:40",
        "arr": "21:40",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0028",
    "date": "2026-09-01",
    "time": "17:40",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK357",
    "route": "CGK → DXB",
    "type": "DEPARTURE_CGK",
    "pnr": "DZ6FC2",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "01SEP CGKDXB 1740 2230 EK357 | 02SEP DXBJED 0010 0205 EK801 | 15SEP JEDDXB 0405 0755 EK802 | 15SEP DXBCGK 1050 2225 EK358",
    "arrivalTime": null,
    "departureTime": "17:40",
    "scheduleLegs": [
      {
        "date": "2026-09-01",
        "dep": "17:40",
        "arr": "22:30",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-02",
        "dep": "00:10",
        "arr": "02:05",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-15",
        "dep": "04:05",
        "arr": "07:55",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-15",
        "dep": "10:50",
        "arr": "22:25",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0029",
    "date": "2026-09-03",
    "time": "00:45",
    "airline": "EY",
    "airlineName": "Etihad Airways",
    "flight": "EY473",
    "route": "CGK → AUH",
    "type": "DEPARTURE_CGK",
    "pnr": "7EDMMH",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN EY     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "03SEP CGKAUH 0045 0550 EY473 | 03SEP AUHJED 0835 1030 EY615                                                                                                                                            Elaf Diamond | 10SEP JEDAUH 1520 1905 EY616                                                                                                                                                25524 | 10SEP AUHCGK 2200 0935 (+1) EY474",
    "arrivalTime": null,
    "departureTime": "00:45",
    "scheduleLegs": [
      {
        "date": "2026-09-03",
        "dep": "00:45",
        "arr": "05:50",
        "route": "CGK → AUH",
        "flight": "EY473",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-03",
        "dep": "08:35",
        "arr": "10:30",
        "route": "AUH → JED",
        "flight": "EY615",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-10",
        "dep": "15:20",
        "arr": "19:05",
        "route": "JED → AUH",
        "flight": "EY616",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-10",
        "dep": "22:00",
        "arr": "09:35",
        "route": "AUH → CGK",
        "flight": "EY474",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0030",
    "date": "2026-09-05",
    "time": "14:25",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "CANCEL",
    "pax": 14,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "05SEP CGKMCT 1425 1905 WY850 | 06SEP MCTJED 0225 0445 WY671                             UMRAH LANGSUNG | 19SEP MEDMCT 1800 2205 WY680                             (JED-MED) | 20SEP MCTCGK 0150 1255 WY849                                                              FBFHAL",
    "arrivalTime": null,
    "departureTime": "14:25",
    "scheduleLegs": [
      {
        "date": "2026-09-05",
        "dep": "14:25",
        "arr": "19:05",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-06",
        "dep": "02:25",
        "arr": "04:45",
        "route": "MCT → JED",
        "flight": "WY671",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-19",
        "dep": "18:00",
        "arr": "22:05",
        "route": "MED → MCT",
        "flight": "WY680",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-20",
        "dep": "01:50",
        "arr": "12:55",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0031",
    "date": "2026-09-05",
    "time": "18:30",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "7PCUXZ",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN QR     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "05SEP CGKDOH 1830 2240 QR957 | 06SEP DOHJED 0050 0320 QR1184 | 13SEP JEDDOH 0310 0530 QR1183 | 13SEP DOHCGK 0840 2140 QR954",
    "arrivalTime": null,
    "departureTime": "18:30",
    "scheduleLegs": [
      {
        "date": "2026-09-05",
        "dep": "18:30",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-06",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-13",
        "dep": "03:10",
        "arr": "05:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-13",
        "dep": "08:40",
        "arr": "21:40",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0032",
    "date": "2026-09-05",
    "time": "21:40",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "9BBDWF",
    "pax": 50,
    "rooms": 14,
    "package": "2X JUMAT QR   UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "27AUG CGKDOH 0900 1310 QR959 | 27AUG DOHJED 1550 1820 QR1186                                                                                            Fajr Al Nusk | 05SEP JEDDOH 0310 0530 QR1183                                                                                             REV1357 | 05SEP DOHCGK 0840 2140 QR954",
    "arrivalTime": "21:40",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-08-27",
        "dep": "09:00",
        "arr": "13:10",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-08-27",
        "dep": "15:50",
        "arr": "18:20",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-05",
        "dep": "03:10",
        "arr": "05:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-05",
        "dep": "08:40",
        "arr": "21:40",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0033",
    "date": "2026-09-06",
    "time": "00:45",
    "airline": "EY",
    "airlineName": "Etihad Airways",
    "flight": "EY473",
    "route": "CGK → AUH",
    "type": "DEPARTURE_CGK",
    "pnr": "7D8FZN",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN EY     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "06SEP CGKAUH 0045 0550 EY473 | 06SEP AUHJED 0835 1030 EY615 | 14SEP JEDAUH 0310 0655 EY602 | 14SEP AUHCGK 0915 2035 EY472",
    "arrivalTime": null,
    "departureTime": "00:45",
    "scheduleLegs": [
      {
        "date": "2026-09-06",
        "dep": "00:45",
        "arr": "05:50",
        "route": "CGK → AUH",
        "flight": "EY473",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-06",
        "dep": "08:35",
        "arr": "10:30",
        "route": "AUH → JED",
        "flight": "EY615",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-14",
        "dep": "03:10",
        "arr": "06:55",
        "route": "JED → AUH",
        "flight": "EY602",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-14",
        "dep": "09:15",
        "arr": "20:35",
        "route": "AUH → CGK",
        "flight": "EY472",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0034",
    "date": "2026-09-06",
    "time": "13:55",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA982",
    "route": "CGK → JED",
    "type": "DEPARTURE_CGK",
    "pnr": "EQW7PK",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL GA",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "06SEP CGKJED 1355 2000 GA982                             UMRAH LANGSUNG | 19SEP MEDCGK 1705 0635 (+1) GA969                        (JED-MED)",
    "arrivalTime": null,
    "departureTime": "13:55",
    "scheduleLegs": [
      {
        "date": "2026-09-06",
        "dep": "13:55",
        "arr": "20:00",
        "route": "CGK → JED",
        "flight": "GA982",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-19",
        "dep": "17:05",
        "arr": "06:35",
        "route": "MED → CGK",
        "flight": "GA969",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0035",
    "date": "2026-09-06",
    "time": "18:30",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "7PCGJF",
    "pax": 50,
    "rooms": 14,
    "package": "HAQQAN QR     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "06SEP CGKDOH 1830 2240 QR957 | 07SEP DOHJED 0050 0320 QR1184                                                                                                                                           Elaf Diamond | 13SEP JEDDOH 2235 0055 (+1) QR1189                                                                                                                                          25525 | 14SEP DOHCGK 0235 1535 QR956",
    "arrivalTime": null,
    "departureTime": "18:30",
    "scheduleLegs": [
      {
        "date": "2026-09-06",
        "dep": "18:30",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-07",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-13",
        "dep": "22:35",
        "arr": "00:55",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2026-09-14",
        "dep": "02:35",
        "arr": "15:35",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0036",
    "date": "2026-09-07",
    "time": "18:30",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "9KIGHT",
    "pax": 50,
    "rooms": 14,
    "package": "HAQQAN QR     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "07SEP CGKDOH 1830 2240 QR957 | 08SEP DOHJED 0050 0320 QR1184 | 15SEP JEDDOH 0310 0530 QR1183 | 15SEP DOHCGK 0840 2140 QR954",
    "arrivalTime": null,
    "departureTime": "18:30",
    "scheduleLegs": [
      {
        "date": "2026-09-07",
        "dep": "18:30",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-08",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-15",
        "dep": "03:10",
        "arr": "05:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-15",
        "dep": "08:40",
        "arr": "21:40",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0037",
    "date": "2026-09-08",
    "time": "21:40",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "82Y9UN, 9QMX7B",
    "pax": 100,
    "rooms": 28,
    "package": "HAQQAN QR     MADINAH DULU / THAWIL QR",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "31AUG CGKDOH 1830 2240 QR957 | 01SEP DOHJED 0050 0320 QR1184 | 08SEP JEDDOH 0310 0530 QR1183 | 08SEP DOHCGK 0840 2140 QR954",
    "arrivalTime": "21:40",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-08-31",
        "dep": "18:30",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-01",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-08",
        "dep": "03:10",
        "arr": "05:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-08",
        "dep": "08:40",
        "arr": "21:40",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0038",
    "date": "2026-09-09",
    "time": "17:40",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK357",
    "route": "CGK → DXB",
    "type": "DEPARTURE_CGK",
    "pnr": "QSDDIB",
    "pax": 45,
    "rooms": 13,
    "package": "THAWIL EK     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "09SEP CGKDXB 1740 2230 EK357 | 10SEP DXBJED 0010 0205 EK801 | 23SEP JEDDXB 0405 0755 EK802 | 23SEP DXBCGK 1050 2225 EK358",
    "arrivalTime": null,
    "departureTime": "17:40",
    "scheduleLegs": [
      {
        "date": "2026-09-09",
        "dep": "17:40",
        "arr": "22:30",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-10",
        "dep": "00:10",
        "arr": "02:05",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-23",
        "dep": "04:05",
        "arr": "07:55",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-23",
        "dep": "10:50",
        "arr": "22:25",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0039",
    "date": "2026-09-10",
    "time": "00:45",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK359",
    "route": "CGK → DXB",
    "type": "DEPARTURE_CGK",
    "pnr": "J6D---",
    "pax": 50,
    "rooms": 14,
    "package": "2X JUMAT EK   MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "10SEP CGKDXB 0045 0530 EK359 | 10SEP DXBJED 0655 0845 EK805 | 19SEP JEDDXB 0405 0755 EK802 | 19SEP DXBCGK 1050 2225 EK358",
    "arrivalTime": null,
    "departureTime": "00:45",
    "scheduleLegs": [
      {
        "date": "2026-09-10",
        "dep": "00:45",
        "arr": "05:30",
        "route": "CGK → DXB",
        "flight": "EK359",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-10",
        "dep": "06:55",
        "arr": "08:45",
        "route": "DXB → JED",
        "flight": "EK805",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-19",
        "dep": "04:05",
        "arr": "07:55",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-19",
        "dep": "10:50",
        "arr": "22:25",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0040",
    "date": "2026-09-10",
    "time": "09:10",
    "airline": "SV",
    "airlineName": "Saudia",
    "flight": "SV817",
    "route": "CGK → JED",
    "type": "DEPARTURE_CGK",
    "pnr": "9HOE9U",
    "pax": 40,
    "rooms": 12,
    "package": "2X JUMAT SV   MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "10SEP CGKJED 0910 1440 SV817 | 18SEP JEDCGK 1730 0735 (+1) SV816",
    "arrivalTime": null,
    "departureTime": "09:10",
    "scheduleLegs": [
      {
        "date": "2026-09-10",
        "dep": "09:10",
        "arr": "14:40",
        "route": "CGK → JED",
        "flight": "SV817",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-18",
        "dep": "17:30",
        "arr": "07:35",
        "route": "JED → CGK",
        "flight": "SV816",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0041",
    "date": "2026-09-11",
    "time": "09:35",
    "airline": "EY",
    "airlineName": "Etihad Airways",
    "flight": "EY474",
    "route": "AUH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "7EDMMH",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN EY     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "03SEP CGKAUH 0045 0550 EY473 | 03SEP AUHJED 0835 1030 EY615                                                                                                                                            Elaf Diamond | 10SEP JEDAUH 1520 1905 EY616                                                                                                                                                25524 | 10SEP AUHCGK 2200 0935 (+1) EY474",
    "arrivalTime": "09:35",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-09-03",
        "dep": "00:45",
        "arr": "05:50",
        "route": "CGK → AUH",
        "flight": "EY473",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-03",
        "dep": "08:35",
        "arr": "10:30",
        "route": "AUH → JED",
        "flight": "EY615",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-10",
        "dep": "15:20",
        "arr": "19:05",
        "route": "JED → AUH",
        "flight": "EY616",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-10",
        "dep": "22:00",
        "arr": "09:35",
        "route": "AUH → CGK",
        "flight": "EY474",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0042",
    "date": "2026-09-12",
    "time": "17:40",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK357",
    "route": "CGK → DXB",
    "type": "DEPARTURE_CGK",
    "pnr": "BD2---",
    "pax": 50,
    "rooms": 14,
    "package": "HAQQAN EK     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "12SEP CGKDXB 1740 2230 EK357 | 13SEP DXBJED 0010 0205 EK801 | 20SEP JEDDXB 0405 0755 EK802 | 20SEP DXBCGK 1050 2225 EK358",
    "arrivalTime": null,
    "departureTime": "17:40",
    "scheduleLegs": [
      {
        "date": "2026-09-12",
        "dep": "17:40",
        "arr": "22:30",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-13",
        "dep": "00:10",
        "arr": "02:05",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-20",
        "dep": "04:05",
        "arr": "07:55",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-20",
        "dep": "10:50",
        "arr": "22:25",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0043",
    "date": "2026-09-13",
    "time": "21:40",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "7PCUXZ",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN QR     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "05SEP CGKDOH 1830 2240 QR957 | 06SEP DOHJED 0050 0320 QR1184 | 13SEP JEDDOH 0310 0530 QR1183 | 13SEP DOHCGK 0840 2140 QR954",
    "arrivalTime": "21:40",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-09-05",
        "dep": "18:30",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-06",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-13",
        "dep": "03:10",
        "arr": "05:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-13",
        "dep": "08:40",
        "arr": "21:40",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0044",
    "date": "2026-09-14",
    "time": "09:10",
    "airline": "SV",
    "airlineName": "Saudia",
    "flight": "SV817",
    "route": "CGK → JED",
    "type": "DEPARTURE_CGK",
    "pnr": "9KIU9A, 7GL9HU",
    "pax": 99,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "14SEP CGKJED 0910 1440 SV817                                                              9KIU9A      69 | 21SEP JEDCGK 1730 0735 (+1) SV816                                                         7GL9HU      30",
    "arrivalTime": null,
    "departureTime": "09:10",
    "scheduleLegs": [
      {
        "date": "2026-09-14",
        "dep": "09:10",
        "arr": "14:40",
        "route": "CGK → JED",
        "flight": "SV817",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-21",
        "dep": "17:30",
        "arr": "07:35",
        "route": "JED → CGK",
        "flight": "SV816",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0045",
    "date": "2026-09-14",
    "time": "15:35",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR956",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "7PCGJF",
    "pax": 50,
    "rooms": 14,
    "package": "HAQQAN QR     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "06SEP CGKDOH 1830 2240 QR957 | 07SEP DOHJED 0050 0320 QR1184                                                                                                                                           Elaf Diamond | 13SEP JEDDOH 2235 0055 (+1) QR1189                                                                                                                                          25525 | 14SEP DOHCGK 0235 1535 QR956",
    "arrivalTime": "15:35",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-09-06",
        "dep": "18:30",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-07",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-13",
        "dep": "22:35",
        "arr": "00:55",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2026-09-14",
        "dep": "02:35",
        "arr": "15:35",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0046",
    "date": "2026-09-14",
    "time": "18:30",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "7PT82N",
    "pax": 45,
    "rooms": 13,
    "package": "THAWIL QR     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "14SEP CGKDOH 1830 2240 QR957 | 15SEP DOHJED 0050 0320 QR1184 | 27SEP JEDDOH 1950 2210 QR1187 | 28SEP DOHCGK 0225 1500 QR956",
    "arrivalTime": null,
    "departureTime": "18:30",
    "scheduleLegs": [
      {
        "date": "2026-09-14",
        "dep": "18:30",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-15",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-27",
        "dep": "19:50",
        "arr": "22:10",
        "route": "JED → DOH",
        "flight": "QR1187",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-28",
        "dep": "02:25",
        "arr": "15:00",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0047",
    "date": "2026-09-14",
    "time": "20:35",
    "airline": "EY",
    "airlineName": "Etihad Airways",
    "flight": "EY472",
    "route": "AUH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "7D8FZN",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN EY     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "06SEP CGKAUH 0045 0550 EY473 | 06SEP AUHJED 0835 1030 EY615 | 14SEP JEDAUH 0310 0655 EY602 | 14SEP AUHCGK 0915 2035 EY472",
    "arrivalTime": "20:35",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-09-06",
        "dep": "00:45",
        "arr": "05:50",
        "route": "CGK → AUH",
        "flight": "EY473",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-06",
        "dep": "08:35",
        "arr": "10:30",
        "route": "AUH → JED",
        "flight": "EY615",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-14",
        "dep": "03:10",
        "arr": "06:55",
        "route": "JED → AUH",
        "flight": "EY602",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-14",
        "dep": "09:15",
        "arr": "20:35",
        "route": "AUH → CGK",
        "flight": "EY472",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0048",
    "date": "2026-09-15",
    "time": "18:30",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "7PJ9VL",
    "pax": 50,
    "rooms": 14,
    "package": "HAQQAN QR     UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "15SEP CGKDOH 1830 2240 QR957 | 16SEP DOHJED 0050 0320 QR1184                                                                                           Elaf Diamond | 23SEP JEDDOH 0450 0710 QR1185                                                                                               25526 | 23SEP DOHCGK 0840 2140 QR954",
    "arrivalTime": null,
    "departureTime": "18:30",
    "scheduleLegs": [
      {
        "date": "2026-09-15",
        "dep": "18:30",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-16",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-23",
        "dep": "04:50",
        "arr": "07:10",
        "route": "JED → DOH",
        "flight": "QR1185",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-23",
        "dep": "08:40",
        "arr": "21:40",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0049",
    "date": "2026-09-15",
    "time": "21:40",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "9KIGHT",
    "pax": 50,
    "rooms": 14,
    "package": "HAQQAN QR     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "07SEP CGKDOH 1830 2240 QR957 | 08SEP DOHJED 0050 0320 QR1184 | 15SEP JEDDOH 0310 0530 QR1183 | 15SEP DOHCGK 0840 2140 QR954",
    "arrivalTime": "21:40",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-09-07",
        "dep": "18:30",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-08",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-15",
        "dep": "03:10",
        "arr": "05:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-15",
        "dep": "08:40",
        "arr": "21:40",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0050",
    "date": "2026-09-15",
    "time": "22:25",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK358",
    "route": "DXB → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "DZ6FC2",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "01SEP CGKDXB 1740 2230 EK357 | 02SEP DXBJED 0010 0205 EK801 | 15SEP JEDDXB 0405 0755 EK802 | 15SEP DXBCGK 1050 2225 EK358",
    "arrivalTime": "22:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-09-01",
        "dep": "17:40",
        "arr": "22:30",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-02",
        "dep": "00:10",
        "arr": "02:05",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-15",
        "dep": "04:05",
        "arr": "07:55",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-15",
        "dep": "10:50",
        "arr": "22:25",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0051",
    "date": "2026-09-17",
    "time": "09:00",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR959",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "7L8LBW",
    "pax": 50,
    "rooms": 14,
    "package": "2X JUMAT QR   MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "17SEP CGKDOH 0900 1310 QR959 | 17SEP DOHJED 1550 1820 QR1186                                                                                                                                             Elaf Diamond | 25SEP JEDDOH 2235 0055 (+1) QR1189                                                                                                                                            25527 | 26SEP DOHCGK 0235 1535 QR956",
    "arrivalTime": null,
    "departureTime": "09:00",
    "scheduleLegs": [
      {
        "date": "2026-09-17",
        "dep": "09:00",
        "arr": "13:10",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-17",
        "dep": "15:50",
        "arr": "18:20",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-25",
        "dep": "22:35",
        "arr": "00:55",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2026-09-26",
        "dep": "02:35",
        "arr": "15:35",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0052",
    "date": "2026-09-17",
    "time": "17:40",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK357",
    "route": "CGK → DXB",
    "type": "DEPARTURE_CGK",
    "pnr": "F5IBZB",
    "pax": 50,
    "rooms": 14,
    "package": "2X JUMAT EK   MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "17SEP CGKDXB 1740 2230 EK357 | 18SEP DXBJED 0010 0205 EK801 | 26SEP JEDDXB 0405 0755 EK802 | 26SEP DXBCGK 1050 2225 EK358",
    "arrivalTime": null,
    "departureTime": "17:40",
    "scheduleLegs": [
      {
        "date": "2026-09-17",
        "dep": "17:40",
        "arr": "22:30",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-18",
        "dep": "00:10",
        "arr": "02:05",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-26",
        "dep": "04:05",
        "arr": "07:55",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-26",
        "dep": "10:50",
        "arr": "22:25",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0053",
    "date": "2026-09-19",
    "time": "07:35",
    "airline": "SV",
    "airlineName": "Saudia",
    "flight": "SV816",
    "route": "JED → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "9HOE9U",
    "pax": 40,
    "rooms": 12,
    "package": "2X JUMAT SV   MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "10SEP CGKJED 0910 1440 SV817 | 18SEP JEDCGK 1730 0735 (+1) SV816",
    "arrivalTime": "07:35",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-09-10",
        "dep": "09:10",
        "arr": "14:40",
        "route": "CGK → JED",
        "flight": "SV817",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-18",
        "dep": "17:30",
        "arr": "07:35",
        "route": "JED → CGK",
        "flight": "SV816",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0054",
    "date": "2026-09-19",
    "time": "18:30",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "7OYTER",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN QR     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "19SEP CGKDOH 1830 2240 QR957 | 20SEP DOHJED 0050 0320 QR1184 | 27SEP JEDDOH 0450 0710 QR1185 | 27SEP DOHCGK 0840 2140 QR954",
    "arrivalTime": null,
    "departureTime": "18:30",
    "scheduleLegs": [
      {
        "date": "2026-09-19",
        "dep": "18:30",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-20",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-27",
        "dep": "04:50",
        "arr": "07:10",
        "route": "JED → DOH",
        "flight": "QR1185",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-27",
        "dep": "08:40",
        "arr": "21:40",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0055",
    "date": "2026-09-19",
    "time": "22:25",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK358",
    "route": "DXB → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "J6D---",
    "pax": 50,
    "rooms": 14,
    "package": "2X JUMAT EK   MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "10SEP CGKDXB 0045 0530 EK359 | 10SEP DXBJED 0655 0845 EK805 | 19SEP JEDDXB 0405 0755 EK802 | 19SEP DXBCGK 1050 2225 EK358",
    "arrivalTime": "22:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-09-10",
        "dep": "00:45",
        "arr": "05:30",
        "route": "CGK → DXB",
        "flight": "EK359",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-10",
        "dep": "06:55",
        "arr": "08:45",
        "route": "DXB → JED",
        "flight": "EK805",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-19",
        "dep": "04:05",
        "arr": "07:55",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-19",
        "dep": "10:50",
        "arr": "22:25",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0056",
    "date": "2026-09-20",
    "time": "06:35",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA969",
    "route": "MED → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "EQW7PK",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL GA",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "06SEP CGKJED 1355 2000 GA982                             UMRAH LANGSUNG | 19SEP MEDCGK 1705 0635 (+1) GA969                        (JED-MED)",
    "arrivalTime": "06:35",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-09-06",
        "dep": "13:55",
        "arr": "20:00",
        "route": "CGK → JED",
        "flight": "GA982",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-19",
        "dep": "17:05",
        "arr": "06:35",
        "route": "MED → CGK",
        "flight": "GA969",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0057",
    "date": "2026-09-20",
    "time": "09:00",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR959",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "7ONROL",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN QR     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "20SEP CGKDOH 0900 1310 QR959 | 20SEP DOHJED 1550 1820 QR1186                                                                                                                                             Elaf Diamond | 27SEP JEDDOH 2235 0055 (+1) QR1189                                                                                                                                            25528 | 28SEP DOHCGK 0235 1535 QR956",
    "arrivalTime": null,
    "departureTime": "09:00",
    "scheduleLegs": [
      {
        "date": "2026-09-20",
        "dep": "09:00",
        "arr": "13:10",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-20",
        "dep": "15:50",
        "arr": "18:20",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-27",
        "dep": "22:35",
        "arr": "00:55",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2026-09-28",
        "dep": "02:35",
        "arr": "15:35",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0058",
    "date": "2026-09-20",
    "time": "12:55",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY849",
    "route": "MCT → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "CANCEL",
    "pax": 14,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "05SEP CGKMCT 1425 1905 WY850 | 06SEP MCTJED 0225 0445 WY671                             UMRAH LANGSUNG | 19SEP MEDMCT 1800 2205 WY680                             (JED-MED) | 20SEP MCTCGK 0150 1255 WY849                                                              FBFHAL",
    "arrivalTime": "12:55",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-09-05",
        "dep": "14:25",
        "arr": "19:05",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-06",
        "dep": "02:25",
        "arr": "04:45",
        "route": "MCT → JED",
        "flight": "WY671",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-19",
        "dep": "18:00",
        "arr": "22:05",
        "route": "MED → MCT",
        "flight": "WY680",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-20",
        "dep": "01:50",
        "arr": "12:55",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0059",
    "date": "2026-09-20",
    "time": "22:25",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK358",
    "route": "DXB → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "BD2---",
    "pax": 50,
    "rooms": 14,
    "package": "HAQQAN EK     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "12SEP CGKDXB 1740 2230 EK357 | 13SEP DXBJED 0010 0205 EK801 | 20SEP JEDDXB 0405 0755 EK802 | 20SEP DXBCGK 1050 2225 EK358",
    "arrivalTime": "22:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-09-12",
        "dep": "17:40",
        "arr": "22:30",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-13",
        "dep": "00:10",
        "arr": "02:05",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-20",
        "dep": "04:05",
        "arr": "07:55",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-20",
        "dep": "10:50",
        "arr": "22:25",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0060",
    "date": "2026-09-21",
    "time": "00:45",
    "airline": "EY",
    "airlineName": "Etihad Airways",
    "flight": "EY473",
    "route": "CGK → AUH",
    "type": "DEPARTURE_CGK",
    "pnr": "7DO6ZK",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN EY     UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "21SEP CGKAUH 0045 0550 EY473 | 21SEP AUHJED 0835 1030 EY615                                                                                            Elaf Diamond | 29SEP JEDAUH 0310 0655 EY602                                                                                                25529 | 29SEP AUHCGK 0915 2035 EY472",
    "arrivalTime": null,
    "departureTime": "00:45",
    "scheduleLegs": [
      {
        "date": "2026-09-21",
        "dep": "00:45",
        "arr": "05:50",
        "route": "CGK → AUH",
        "flight": "EY473",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-21",
        "dep": "08:35",
        "arr": "10:30",
        "route": "AUH → JED",
        "flight": "EY615",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-29",
        "dep": "03:10",
        "arr": "06:55",
        "route": "JED → AUH",
        "flight": "EY602",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-29",
        "dep": "09:15",
        "arr": "20:35",
        "route": "AUH → CGK",
        "flight": "EY472",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0061",
    "date": "2026-09-21",
    "time": "17:40",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK357",
    "route": "CGK → DXB",
    "type": "DEPARTURE_CGK",
    "pnr": "H7IDJ6",
    "pax": 50,
    "rooms": 14,
    "package": "HAQQAN EK     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "21SEP CGKDXB 1740 2230 EK357 | 22SEP DXBJED 0010 0205 EK801 | 29SEP JEDDXB 0405 0755 EK802 | 29SEP DXBCGK 1050 2225 EK358",
    "arrivalTime": null,
    "departureTime": "17:40",
    "scheduleLegs": [
      {
        "date": "2026-09-21",
        "dep": "17:40",
        "arr": "22:30",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-22",
        "dep": "00:10",
        "arr": "02:05",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-29",
        "dep": "04:05",
        "arr": "07:55",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-29",
        "dep": "10:50",
        "arr": "22:25",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0062",
    "date": "2026-09-21",
    "time": "18:30",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "7PT4QV",
    "pax": 45,
    "rooms": 13,
    "package": "THAWIL QR     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "21SEP CGKDOH 1830 2240 QR957 | 22SEP DOHJED 0050 0320 QR1184 | 04OCT JEDDOH 2235 0055 (+1) QR1189 | 05OCT DOHCGK 0225 1535 QR956",
    "arrivalTime": null,
    "departureTime": "18:30",
    "scheduleLegs": [
      {
        "date": "2026-09-21",
        "dep": "18:30",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-22",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-04",
        "dep": "22:35",
        "arr": "00:55",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2026-10-05",
        "dep": "02:25",
        "arr": "15:35",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0063",
    "date": "2026-09-22",
    "time": "07:35",
    "airline": "SV",
    "airlineName": "Saudia",
    "flight": "SV816",
    "route": "JED → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "9KIU9A, 7GL9HU",
    "pax": 99,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "14SEP CGKJED 0910 1440 SV817                                                              9KIU9A      69 | 21SEP JEDCGK 1730 0735 (+1) SV816                                                         7GL9HU      30",
    "arrivalTime": "07:35",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-09-14",
        "dep": "09:10",
        "arr": "14:40",
        "route": "CGK → JED",
        "flight": "SV817",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-21",
        "dep": "17:30",
        "arr": "07:35",
        "route": "JED → CGK",
        "flight": "SV816",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0064",
    "date": "2026-09-23",
    "time": "09:00",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR959",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "7PX46A",
    "pax": 45,
    "rooms": 13,
    "package": "THAWIL QR     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "23SEP CGKDOH 0900 1310 QR959 | 23SEP DOHJED 1550 1820 QR1186 | 06OCT JEDDOH 2235 0055 (+1) QR1189 | 07OCT DOHCGK 0255 1535 QR956",
    "arrivalTime": null,
    "departureTime": "09:00",
    "scheduleLegs": [
      {
        "date": "2026-09-23",
        "dep": "09:00",
        "arr": "13:10",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-23",
        "dep": "15:50",
        "arr": "18:20",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-06",
        "dep": "22:35",
        "arr": "00:55",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2026-10-07",
        "dep": "02:55",
        "arr": "15:35",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0065",
    "date": "2026-09-23",
    "time": "17:40",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK357",
    "route": "CGK → DXB",
    "type": "DEPARTURE_CGK",
    "pnr": "LB4GW2",
    "pax": 45,
    "rooms": 13,
    "package": "THAWIL EK     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "23SEP CGKDXB 1740 2230 EK357 | 24SEP DXBJED 0010 0205 EK801 | 07OCT JEDDXB 0405 0755 EK802 | 07OCT DXBCGK 1050 2225 EK358",
    "arrivalTime": null,
    "departureTime": "17:40",
    "scheduleLegs": [
      {
        "date": "2026-09-23",
        "dep": "17:40",
        "arr": "22:30",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-24",
        "dep": "00:10",
        "arr": "02:05",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-07",
        "dep": "04:05",
        "arr": "07:55",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-07",
        "dep": "10:50",
        "arr": "22:25",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0066",
    "date": "2026-09-23",
    "time": "21:40",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "7PJ9VL",
    "pax": 50,
    "rooms": 14,
    "package": "HAQQAN QR     UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "15SEP CGKDOH 1830 2240 QR957 | 16SEP DOHJED 0050 0320 QR1184                                                                                           Elaf Diamond | 23SEP JEDDOH 0450 0710 QR1185                                                                                               25526 | 23SEP DOHCGK 0840 2140 QR954",
    "arrivalTime": "21:40",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-09-15",
        "dep": "18:30",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-16",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-23",
        "dep": "04:50",
        "arr": "07:10",
        "route": "JED → DOH",
        "flight": "QR1185",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-23",
        "dep": "08:40",
        "arr": "21:40",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0067",
    "date": "2026-09-23",
    "time": "22:25",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK358",
    "route": "DXB → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "QSDDIB",
    "pax": 45,
    "rooms": 13,
    "package": "THAWIL EK     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "09SEP CGKDXB 1740 2230 EK357 | 10SEP DXBJED 0010 0205 EK801 | 23SEP JEDDXB 0405 0755 EK802 | 23SEP DXBCGK 1050 2225 EK358",
    "arrivalTime": "22:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-09-09",
        "dep": "17:40",
        "arr": "22:30",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-10",
        "dep": "00:10",
        "arr": "02:05",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-23",
        "dep": "04:05",
        "arr": "07:55",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-23",
        "dep": "10:50",
        "arr": "22:25",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0068",
    "date": "2026-09-24",
    "time": "09:10",
    "airline": "SV",
    "airlineName": "Saudia",
    "flight": "SV817",
    "route": "CGK → JED",
    "type": "DEPARTURE_CGK",
    "pnr": "9KRBR9",
    "pax": 40,
    "rooms": 12,
    "package": "2X JUMAT SV   MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "24SEP CGKJED 0910 1440 SV817 | 03OCT JEDCGK 0840 2245 SV826",
    "arrivalTime": null,
    "departureTime": "09:10",
    "scheduleLegs": [
      {
        "date": "2026-09-24",
        "dep": "09:10",
        "arr": "14:40",
        "route": "CGK → JED",
        "flight": "SV817",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-03",
        "dep": "08:40",
        "arr": "22:45",
        "route": "JED → CGK",
        "flight": "SV826",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0069",
    "date": "2026-09-26",
    "time": "15:35",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR956",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "7L8LBW",
    "pax": 50,
    "rooms": 14,
    "package": "2X JUMAT QR   MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "17SEP CGKDOH 0900 1310 QR959 | 17SEP DOHJED 1550 1820 QR1186                                                                                                                                             Elaf Diamond | 25SEP JEDDOH 2235 0055 (+1) QR1189                                                                                                                                            25527 | 26SEP DOHCGK 0235 1535 QR956",
    "arrivalTime": "15:35",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-09-17",
        "dep": "09:00",
        "arr": "13:10",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-17",
        "dep": "15:50",
        "arr": "18:20",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-25",
        "dep": "22:35",
        "arr": "00:55",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2026-09-26",
        "dep": "02:35",
        "arr": "15:35",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0070",
    "date": "2026-09-26",
    "time": "22:25",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK358",
    "route": "DXB → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "F5IBZB",
    "pax": 50,
    "rooms": 14,
    "package": "2X JUMAT EK   MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "17SEP CGKDXB 1740 2230 EK357 | 18SEP DXBJED 0010 0205 EK801 | 26SEP JEDDXB 0405 0755 EK802 | 26SEP DXBCGK 1050 2225 EK358",
    "arrivalTime": "22:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-09-17",
        "dep": "17:40",
        "arr": "22:30",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-18",
        "dep": "00:10",
        "arr": "02:05",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-26",
        "dep": "04:05",
        "arr": "07:55",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-26",
        "dep": "10:50",
        "arr": "22:25",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0071",
    "date": "2026-09-27",
    "time": "17:40",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK357",
    "route": "CGK → DXB",
    "type": "DEPARTURE_CGK",
    "pnr": "F7LBQW",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN EK     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "27SEP CGKDXB 1740 2230 EK357 | 28SEP DXBJED 0010 0205 EK801 | 05OCT JEDDXB 0405 0755 EK802 | 05OCT DXBCGK 1050 2225 EK358",
    "arrivalTime": null,
    "departureTime": "17:40",
    "scheduleLegs": [
      {
        "date": "2026-09-27",
        "dep": "17:40",
        "arr": "22:30",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-28",
        "dep": "00:10",
        "arr": "02:05",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-05",
        "dep": "04:05",
        "arr": "07:55",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-05",
        "dep": "10:50",
        "arr": "22:25",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0072",
    "date": "2026-09-27",
    "time": "21:40",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "7OYTER",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN QR     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "19SEP CGKDOH 1830 2240 QR957 | 20SEP DOHJED 0050 0320 QR1184 | 27SEP JEDDOH 0450 0710 QR1185 | 27SEP DOHCGK 0840 2140 QR954",
    "arrivalTime": "21:40",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-09-19",
        "dep": "18:30",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-20",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-27",
        "dep": "04:50",
        "arr": "07:10",
        "route": "JED → DOH",
        "flight": "QR1185",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-27",
        "dep": "08:40",
        "arr": "21:40",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0073",
    "date": "2026-09-28",
    "time": "00:40",
    "airline": "SV",
    "airlineName": "Saudia",
    "flight": "SV827",
    "route": "CGK → JED",
    "type": "DEPARTURE_CGK",
    "pnr": "9MCXBL",
    "pax": 90,
    "rooms": 28,
    "package": "HAQQAN SV     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "28SEP CGKJED 0040 0610 SV827 | 05OCT JEDCGK 1730 0735 (+1) SV816",
    "arrivalTime": null,
    "departureTime": "00:40",
    "scheduleLegs": [
      {
        "date": "2026-09-28",
        "dep": "00:40",
        "arr": "06:10",
        "route": "CGK → JED",
        "flight": "SV827",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-05",
        "dep": "17:30",
        "arr": "07:35",
        "route": "JED → CGK",
        "flight": "SV816",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0074",
    "date": "2026-09-28",
    "time": "15:35",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR956",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "7ONROL, 7PT82N",
    "pax": 90,
    "rooms": 26,
    "package": "HAQQAN QR     MADINAH DULU / THAWIL QR     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "20SEP CGKDOH 0900 1310 QR959 | 20SEP DOHJED 1550 1820 QR1186                                                                                                                                             Elaf Diamond | 27SEP JEDDOH 2235 0055 (+1) QR1189                                                                                                                                            25528 | 28SEP DOHCGK 0235 1535 QR956",
    "arrivalTime": "15:35",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-09-20",
        "dep": "09:00",
        "arr": "13:10",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-20",
        "dep": "15:50",
        "arr": "18:20",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-27",
        "dep": "22:35",
        "arr": "00:55",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2026-09-28",
        "dep": "02:35",
        "arr": "15:35",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0075",
    "date": "2026-09-28",
    "time": "17:40",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK357",
    "route": "CGK → DXB",
    "type": "DEPARTURE_CGK",
    "pnr": "D6EDA6",
    "pax": 50,
    "rooms": 14,
    "package": "HAQQAN EK     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "28SEP CGKDXB 1740 2230 EK357 | 29SEP DXBJED 0010 0205 EK801 | 06OCT JEDDXB 0405 0755 EK802 | 06OCT DXBCGK 1050 2225 EK358",
    "arrivalTime": null,
    "departureTime": "17:40",
    "scheduleLegs": [
      {
        "date": "2026-09-28",
        "dep": "17:40",
        "arr": "22:30",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-29",
        "dep": "00:10",
        "arr": "02:05",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-06",
        "dep": "04:05",
        "arr": "07:55",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-06",
        "dep": "10:50",
        "arr": "22:25",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0076",
    "date": "2026-09-29",
    "time": "00:40",
    "airline": "SV",
    "airlineName": "Saudia",
    "flight": "SV827",
    "route": "CGK → JED",
    "type": "DEPARTURE_CGK",
    "pnr": "9HLN43",
    "pax": 50,
    "rooms": 14,
    "package": "HAQQAN SV     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "29SEP CGKJED 0040 0610 SV827 | 06OCT JEDCGK 1730 0735 (+1) SV816",
    "arrivalTime": null,
    "departureTime": "00:40",
    "scheduleLegs": [
      {
        "date": "2026-09-29",
        "dep": "00:40",
        "arr": "06:10",
        "route": "CGK → JED",
        "flight": "SV827",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-06",
        "dep": "17:30",
        "arr": "07:35",
        "route": "JED → CGK",
        "flight": "SV816",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0077",
    "date": "2026-09-29",
    "time": "20:35",
    "airline": "EY",
    "airlineName": "Etihad Airways",
    "flight": "EY472",
    "route": "AUH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "7DO6ZK",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN EY     UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "21SEP CGKAUH 0045 0550 EY473 | 21SEP AUHJED 0835 1030 EY615                                                                                            Elaf Diamond | 29SEP JEDAUH 0310 0655 EY602                                                                                                25529 | 29SEP AUHCGK 0915 2035 EY472",
    "arrivalTime": "20:35",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-09-21",
        "dep": "00:45",
        "arr": "05:50",
        "route": "CGK → AUH",
        "flight": "EY473",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-21",
        "dep": "08:35",
        "arr": "10:30",
        "route": "AUH → JED",
        "flight": "EY615",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-29",
        "dep": "03:10",
        "arr": "06:55",
        "route": "JED → AUH",
        "flight": "EY602",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-29",
        "dep": "09:15",
        "arr": "20:35",
        "route": "AUH → CGK",
        "flight": "EY472",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0078",
    "date": "2026-09-29",
    "time": "22:25",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK358",
    "route": "DXB → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "H7IDJ6",
    "pax": 50,
    "rooms": 14,
    "package": "HAQQAN EK     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "21SEP CGKDXB 1740 2230 EK357 | 22SEP DXBJED 0010 0205 EK801 | 29SEP JEDDXB 0405 0755 EK802 | 29SEP DXBCGK 1050 2225 EK358",
    "arrivalTime": "22:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-09-21",
        "dep": "17:40",
        "arr": "22:30",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-22",
        "dep": "00:10",
        "arr": "02:05",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-29",
        "dep": "04:05",
        "arr": "07:55",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-29",
        "dep": "10:50",
        "arr": "22:25",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0079",
    "date": "2026-09-30",
    "time": "17:40",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK357",
    "route": "CGK → DXB",
    "type": "DEPARTURE_CGK",
    "pnr": "EFMCEJ",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL EK     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "30SEP CGKDXB 1740 2230 EK357 | 01OCT DXBJED 0010 0205 EK801 | 14OCT JEDDXB 0405 0755 EK802 | 14OCT DXBCGK 1050 2225 EK358",
    "arrivalTime": null,
    "departureTime": "17:40",
    "scheduleLegs": [
      {
        "date": "2026-09-30",
        "dep": "17:40",
        "arr": "22:30",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-01",
        "dep": "00:10",
        "arr": "02:05",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-14",
        "dep": "04:05",
        "arr": "07:55",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-14",
        "dep": "10:50",
        "arr": "22:25",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0080",
    "date": "2026-10-03",
    "time": "22:45",
    "airline": "SV",
    "airlineName": "Saudia",
    "flight": "SV826",
    "route": "JED → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "9KRBR9",
    "pax": 40,
    "rooms": 12,
    "package": "2X JUMAT SV   MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "24SEP CGKJED 0910 1440 SV817 | 03OCT JEDCGK 0840 2245 SV826",
    "arrivalTime": "22:45",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-09-24",
        "dep": "09:10",
        "arr": "14:40",
        "route": "CGK → JED",
        "flight": "SV817",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-03",
        "dep": "08:40",
        "arr": "22:45",
        "route": "JED → CGK",
        "flight": "SV826",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0081",
    "date": "2026-10-04",
    "time": "13:55",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA982",
    "route": "CGK → JED",
    "type": "DEPARTURE_CGK",
    "pnr": "ETSIUE",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL+ GA",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "04OCT CGKJED 1355 2000 GA982                             UMRAH LANGSUNG | 17OCT MEDCGK 2310 1320 (+1) GA961                        (JED-MED)",
    "arrivalTime": null,
    "departureTime": "13:55",
    "scheduleLegs": [
      {
        "date": "2026-10-04",
        "dep": "13:55",
        "arr": "20:00",
        "route": "CGK → JED",
        "flight": "GA982",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-17",
        "dep": "23:10",
        "arr": "13:20",
        "route": "MED → CGK",
        "flight": "GA961",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0082",
    "date": "2026-10-04",
    "time": "18:30",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "7QSC2J, 7QXYFW",
    "pax": 90,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "04OCT CGKDOH 1830 2250 QR957               HAQQAN QR | 05OCT DOHJED 0050 0320 QR1184              (BUS 1) | 12OCT JEDDOH 0310 0530 QR1183              HAQQAN QR | 12OCT DOHCGK 0900 2140 QR954                                                             7QXYFW       45      13                                                                                                                                                       Rp13,000,000",
    "arrivalTime": null,
    "departureTime": "18:30",
    "scheduleLegs": [
      {
        "date": "2026-10-04",
        "dep": "18:30",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-05",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-12",
        "dep": "03:10",
        "arr": "05:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-12",
        "dep": "09:00",
        "arr": "21:40",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0083",
    "date": "2026-10-05",
    "time": "15:35",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR956",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "7PT4QV",
    "pax": 45,
    "rooms": 13,
    "package": "THAWIL QR     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "21SEP CGKDOH 1830 2240 QR957 | 22SEP DOHJED 0050 0320 QR1184 | 04OCT JEDDOH 2235 0055 (+1) QR1189 | 05OCT DOHCGK 0225 1535 QR956",
    "arrivalTime": "15:35",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-09-21",
        "dep": "18:30",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-22",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-04",
        "dep": "22:35",
        "arr": "00:55",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2026-10-05",
        "dep": "02:25",
        "arr": "15:35",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0084",
    "date": "2026-10-05",
    "time": "18:30",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "7QSI6Q",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN QR     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "05OCT CGKDOH 1830 2250 QR957 | 06OCT DOHJED 0050 0320 QR1184 | 13OCT JEDDOH 0310 0530 QR1183 | 13OCT DOHCGK 0900 2140 QR954",
    "arrivalTime": null,
    "departureTime": "18:30",
    "scheduleLegs": [
      {
        "date": "2026-10-05",
        "dep": "18:30",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-06",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-13",
        "dep": "03:10",
        "arr": "05:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-13",
        "dep": "09:00",
        "arr": "21:40",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0085",
    "date": "2026-10-05",
    "time": "22:25",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK358",
    "route": "DXB → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "F7LBQW",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN EK     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "27SEP CGKDXB 1740 2230 EK357 | 28SEP DXBJED 0010 0205 EK801 | 05OCT JEDDXB 0405 0755 EK802 | 05OCT DXBCGK 1050 2225 EK358",
    "arrivalTime": "22:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-09-27",
        "dep": "17:40",
        "arr": "22:30",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-28",
        "dep": "00:10",
        "arr": "02:05",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-05",
        "dep": "04:05",
        "arr": "07:55",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-05",
        "dep": "10:50",
        "arr": "22:25",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0086",
    "date": "2026-10-06",
    "time": "00:40",
    "airline": "SV",
    "airlineName": "Saudia",
    "flight": "SV827",
    "route": "CGK → JED",
    "type": "DEPARTURE_CGK",
    "pnr": "9HOX2L",
    "pax": 50,
    "rooms": 14,
    "package": "HAQQAN SV     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "06OCT CGKJED 0040 0610 SV827 | 13OCT JEDCGK 1730 0735 (+1) SV816",
    "arrivalTime": null,
    "departureTime": "00:40",
    "scheduleLegs": [
      {
        "date": "2026-10-06",
        "dep": "00:40",
        "arr": "06:10",
        "route": "CGK → JED",
        "flight": "SV827",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-13",
        "dep": "17:30",
        "arr": "07:35",
        "route": "JED → CGK",
        "flight": "SV816",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0087",
    "date": "2026-10-06",
    "time": "00:55",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR955",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "7QXUCH",
    "pax": 45,
    "rooms": 13,
    "package": "THAWIL QR     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "06OCT CGKDOH 0055 0515 QR955 | 06OCT DOHJED 0730 1000 QR1190 | 18OCT JEDDOH 1950 2210 QR1187 | 19OCT DOHCGK 0225 1500 QR956",
    "arrivalTime": null,
    "departureTime": "00:55",
    "scheduleLegs": [
      {
        "date": "2026-10-06",
        "dep": "00:55",
        "arr": "05:15",
        "route": "CGK → DOH",
        "flight": "QR955",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-06",
        "dep": "07:30",
        "arr": "10:00",
        "route": "DOH → JED",
        "flight": "QR1190",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-18",
        "dep": "19:50",
        "arr": "22:10",
        "route": "JED → DOH",
        "flight": "QR1187",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-19",
        "dep": "02:25",
        "arr": "15:00",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0088",
    "date": "2026-10-06",
    "time": "07:35",
    "airline": "SV",
    "airlineName": "Saudia",
    "flight": "SV816",
    "route": "JED → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "9MCXBL",
    "pax": 90,
    "rooms": 28,
    "package": "HAQQAN SV     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "28SEP CGKJED 0040 0610 SV827 | 05OCT JEDCGK 1730 0735 (+1) SV816",
    "arrivalTime": "07:35",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-09-28",
        "dep": "00:40",
        "arr": "06:10",
        "route": "CGK → JED",
        "flight": "SV827",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-05",
        "dep": "17:30",
        "arr": "07:35",
        "route": "JED → CGK",
        "flight": "SV816",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0089",
    "date": "2026-10-06",
    "time": "18:30",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "7QXI9B",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN QR     UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "06OCT CGKDOH 1830 2250 QR957 | 07OCT DOHJED 0050 0320 QR1184                                                                                           Elaf Diamond | 14OCT JEDDOH 0310 0530 QR1183                                                                                               25531 | 14OCT DOHCGK 0900 2140 QR954",
    "arrivalTime": null,
    "departureTime": "18:30",
    "scheduleLegs": [
      {
        "date": "2026-10-06",
        "dep": "18:30",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-07",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-14",
        "dep": "03:10",
        "arr": "05:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-14",
        "dep": "09:00",
        "arr": "21:40",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0090",
    "date": "2026-10-06",
    "time": "22:25",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK358",
    "route": "DXB → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "D6EDA6",
    "pax": 50,
    "rooms": 14,
    "package": "HAQQAN EK     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "28SEP CGKDXB 1740 2230 EK357 | 29SEP DXBJED 0010 0205 EK801 | 06OCT JEDDXB 0405 0755 EK802 | 06OCT DXBCGK 1050 2225 EK358",
    "arrivalTime": "22:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-09-28",
        "dep": "17:40",
        "arr": "22:30",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-29",
        "dep": "00:10",
        "arr": "02:05",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-06",
        "dep": "04:05",
        "arr": "07:55",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-06",
        "dep": "10:50",
        "arr": "22:25",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0091",
    "date": "2026-10-07",
    "time": "00:55",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR955",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "8QYOR2",
    "pax": 45,
    "rooms": 13,
    "package": "THAWIL QR     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "07OCT CGKDOH 0055 0515 QR955 | 07OCT DOHJED 0730 1000 QR1190 | 19OCT JEDDOH 1950 2210 QR1187 | 20OCT DOHCGK 0225 1500 QR956",
    "arrivalTime": null,
    "departureTime": "00:55",
    "scheduleLegs": [
      {
        "date": "2026-10-07",
        "dep": "00:55",
        "arr": "05:15",
        "route": "CGK → DOH",
        "flight": "QR955",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-07",
        "dep": "07:30",
        "arr": "10:00",
        "route": "DOH → JED",
        "flight": "QR1190",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-19",
        "dep": "19:50",
        "arr": "22:10",
        "route": "JED → DOH",
        "flight": "QR1187",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-20",
        "dep": "02:25",
        "arr": "15:00",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0092",
    "date": "2026-10-07",
    "time": "07:35",
    "airline": "SV",
    "airlineName": "Saudia",
    "flight": "SV816",
    "route": "JED → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "9HLN43",
    "pax": 50,
    "rooms": 14,
    "package": "HAQQAN SV     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "29SEP CGKJED 0040 0610 SV827 | 06OCT JEDCGK 1730 0735 (+1) SV816",
    "arrivalTime": "07:35",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-09-29",
        "dep": "00:40",
        "arr": "06:10",
        "route": "CGK → JED",
        "flight": "SV827",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-06",
        "dep": "17:30",
        "arr": "07:35",
        "route": "JED → CGK",
        "flight": "SV816",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0093",
    "date": "2026-10-07",
    "time": "09:00",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR959",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "7QZVUY",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN QR     UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "07OCT CGKDOH 0900 1320 QR959 | 07OCT DOHJED 1550 1820 QR1186                                                                                           Elaf Diamond | 15OCT JEDDOH 0310 0530 QR1183                                                                                               25532 | 15OCT DOHCGK 0900 2140 QR954",
    "arrivalTime": null,
    "departureTime": "09:00",
    "scheduleLegs": [
      {
        "date": "2026-10-07",
        "dep": "09:00",
        "arr": "13:20",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-07",
        "dep": "15:50",
        "arr": "18:20",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-15",
        "dep": "03:10",
        "arr": "05:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-15",
        "dep": "09:00",
        "arr": "21:40",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0094",
    "date": "2026-10-07",
    "time": "14:50",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "UZTNNK, IZEWZN",
    "pax": 90,
    "rooms": 12,
    "package": "THAWIL WY     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "07OCT CGKMCT 1450 1930 WY850 | 07OCT MCTJED 2145 0005 (+1) WY673 | 20OCT JEDMCT 1800 2215 WY676 | 21OCT MCTCGK 0215 1320 WY849 | 17OCT JEDDXB 0405 0755 EK802                                                                                                                                                 25077 | 17OCT DXBCGK 1050 2225 EK358",
    "arrivalTime": null,
    "departureTime": "14:50",
    "scheduleLegs": [
      {
        "date": "2026-10-07",
        "dep": "14:50",
        "arr": "19:30",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-07",
        "dep": "21:45",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2026-10-20",
        "dep": "18:00",
        "arr": "22:15",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-21",
        "dep": "02:15",
        "arr": "13:20",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-17",
        "dep": "04:05",
        "arr": "07:55",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-17",
        "dep": "10:50",
        "arr": "22:25",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0095",
    "date": "2026-10-07",
    "time": "15:35",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR956",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "7PX46A",
    "pax": 45,
    "rooms": 13,
    "package": "THAWIL QR     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "23SEP CGKDOH 0900 1310 QR959 | 23SEP DOHJED 1550 1820 QR1186 | 06OCT JEDDOH 2235 0055 (+1) QR1189 | 07OCT DOHCGK 0255 1535 QR956",
    "arrivalTime": "15:35",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-09-23",
        "dep": "09:00",
        "arr": "13:10",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-23",
        "dep": "15:50",
        "arr": "18:20",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-06",
        "dep": "22:35",
        "arr": "00:55",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2026-10-07",
        "dep": "02:55",
        "arr": "15:35",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0096",
    "date": "2026-10-07",
    "time": "22:25",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK358",
    "route": "DXB → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "LB4GW2",
    "pax": 45,
    "rooms": 13,
    "package": "THAWIL EK     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "23SEP CGKDXB 1740 2230 EK357 | 24SEP DXBJED 0010 0205 EK801 | 07OCT JEDDXB 0405 0755 EK802 | 07OCT DXBCGK 1050 2225 EK358",
    "arrivalTime": "22:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-09-23",
        "dep": "17:40",
        "arr": "22:30",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-09-24",
        "dep": "00:10",
        "arr": "02:05",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-07",
        "dep": "04:05",
        "arr": "07:55",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-07",
        "dep": "10:50",
        "arr": "22:25",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0097",
    "date": "2026-10-08",
    "time": "09:10",
    "airline": "SV",
    "airlineName": "Saudia",
    "flight": "SV817",
    "route": "CGK → JED",
    "type": "DEPARTURE_CGK",
    "pnr": "9HMO8M",
    "pax": 50,
    "rooms": 14,
    "package": "2X JUMAT SV   MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "08OCT CGKJED 0910 1440 SV817 | 17OCT JEDCGK 0840 2245 SV826",
    "arrivalTime": null,
    "departureTime": "09:10",
    "scheduleLegs": [
      {
        "date": "2026-10-08",
        "dep": "09:10",
        "arr": "14:40",
        "route": "CGK → JED",
        "flight": "SV817",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-17",
        "dep": "08:40",
        "arr": "22:45",
        "route": "JED → CGK",
        "flight": "SV826",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0098",
    "date": "2026-10-10",
    "time": "14:50",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "NQKQAE",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN WY",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "10OCT CGKMCT 1450 1930 WY850 | 10OCT MCTMED 2140 2350 WY677                             MADINAH DULU                                                                                                     Elaf Diamond | 17OCT JEDMCT 1800 2215 WY676                             (MED-JED)                                                                                                            25533 | 18OCT MCTCGK 0215 1320 WY849",
    "arrivalTime": null,
    "departureTime": "14:50",
    "scheduleLegs": [
      {
        "date": "2026-10-10",
        "dep": "14:50",
        "arr": "19:30",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-10",
        "dep": "21:40",
        "arr": "23:50",
        "route": "MCT → MED",
        "flight": "WY677",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-17",
        "dep": "18:00",
        "arr": "22:15",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-18",
        "dep": "02:15",
        "arr": "13:20",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0099",
    "date": "2026-10-11",
    "time": "13:55",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA982",
    "route": "CGK → JED",
    "type": "DEPARTURE_CGK",
    "pnr": "EQUNXW",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL+ GA",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "11OCT CGKJED 1355 2000 GA982                             UMRAH LANGSUNG | 24OCT MEDCGK 1705 0635 (+1) GA969                        (JED-MED)",
    "arrivalTime": null,
    "departureTime": "13:55",
    "scheduleLegs": [
      {
        "date": "2026-10-11",
        "dep": "13:55",
        "arr": "20:00",
        "route": "CGK → JED",
        "flight": "GA982",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-24",
        "dep": "17:05",
        "arr": "06:35",
        "route": "MED → CGK",
        "flight": "GA969",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0100",
    "date": "2026-10-11",
    "time": "18:30",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "7QYGAY, 7QSPHX",
    "pax": 90,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "11OCT CGKDOH 1830 2250 QR957               HAQQAN QR | 12OCT DOHJED 0050 0320 QR1184              (BUS 1) | 19OCT JEDDOH 0310 0530 QR1183              HAQQAN QR | 19OCT DOHCGK 0900 2140 QR954                                                              7QSPHX       45      13                                                                                                                                                        Rp13,000,000",
    "arrivalTime": null,
    "departureTime": "18:30",
    "scheduleLegs": [
      {
        "date": "2026-10-11",
        "dep": "18:30",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-12",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-19",
        "dep": "03:10",
        "arr": "05:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-19",
        "dep": "09:00",
        "arr": "21:40",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0101",
    "date": "2026-10-12",
    "time": "00:40",
    "airline": "SV",
    "airlineName": "Saudia",
    "flight": "SV827",
    "route": "CGK → JED",
    "type": "DEPARTURE_CGK",
    "pnr": "9MGQJK",
    "pax": 99,
    "rooms": 28,
    "package": "HAQQAN SV      MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "12OCT CGKJED 0040 0610 SV827                                                                                                                                               Elaf Diamond | 19OCT JEDCGK 1730 0735 (+1) SV816                                                                                                                                              25534",
    "arrivalTime": null,
    "departureTime": "00:40",
    "scheduleLegs": [
      {
        "date": "2026-10-12",
        "dep": "00:40",
        "arr": "06:10",
        "route": "CGK → JED",
        "flight": "SV827",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-19",
        "dep": "17:30",
        "arr": "07:35",
        "route": "JED → CGK",
        "flight": "SV816",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0102",
    "date": "2026-10-12",
    "time": "21:40",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "7QSC2J, 7QXYFW",
    "pax": 90,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "04OCT CGKDOH 1830 2250 QR957               HAQQAN QR | 05OCT DOHJED 0050 0320 QR1184              (BUS 1) | 12OCT JEDDOH 0310 0530 QR1183              HAQQAN QR | 12OCT DOHCGK 0900 2140 QR954                                                             7QXYFW       45      13                                                                                                                                                       Rp13,000,000",
    "arrivalTime": "21:40",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-10-04",
        "dep": "18:30",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-05",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-12",
        "dep": "03:10",
        "arr": "05:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-12",
        "dep": "09:00",
        "arr": "21:40",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0103",
    "date": "2026-10-13",
    "time": "18:30",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "9LALBU",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN QR      UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "13OCT CGKDOH 1830 2250 QR957 | 14OCT DOHJED 0050 0320 QR1184                                                                                            Elaf Diamond | 20OCT JEDDOH 2145 0005 (+1) QR1193                                                                                           25535 | 21OCT DOHCGK 0255 1535 QR956",
    "arrivalTime": null,
    "departureTime": "18:30",
    "scheduleLegs": [
      {
        "date": "2026-10-13",
        "dep": "18:30",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-14",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-20",
        "dep": "21:45",
        "arr": "00:05",
        "route": "JED → DOH",
        "flight": "QR1193",
        "arrivalNextDay": true
      },
      {
        "date": "2026-10-21",
        "dep": "02:55",
        "arr": "15:35",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0104",
    "date": "2026-10-13",
    "time": "21:40",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "7QSI6Q",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN QR     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "05OCT CGKDOH 1830 2250 QR957 | 06OCT DOHJED 0050 0320 QR1184 | 13OCT JEDDOH 0310 0530 QR1183 | 13OCT DOHCGK 0900 2140 QR954",
    "arrivalTime": "21:40",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-10-05",
        "dep": "18:30",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-06",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-13",
        "dep": "03:10",
        "arr": "05:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-13",
        "dep": "09:00",
        "arr": "21:40",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0105",
    "date": "2026-10-14",
    "time": "07:35",
    "airline": "SV",
    "airlineName": "Saudia",
    "flight": "SV816",
    "route": "JED → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "9HOX2L",
    "pax": 50,
    "rooms": 14,
    "package": "HAQQAN SV     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "06OCT CGKJED 0040 0610 SV827 | 13OCT JEDCGK 1730 0735 (+1) SV816",
    "arrivalTime": "07:35",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-10-06",
        "dep": "00:40",
        "arr": "06:10",
        "route": "CGK → JED",
        "flight": "SV827",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-13",
        "dep": "17:30",
        "arr": "07:35",
        "route": "JED → CGK",
        "flight": "SV816",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0106",
    "date": "2026-10-14",
    "time": "17:40",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK357",
    "route": "CGK → DXB",
    "type": "DEPARTURE_CGK",
    "pnr": "C6VRQJ",
    "pax": 45,
    "rooms": 13,
    "package": "THAWIL EK      MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "14OCT CGKDXB 1740 2230 EK357 | 15OCT DXBJED 0010 0205 EK801 | 28OCT JEDDXB 0415 0810 EK802 | 28OCT DXBCGK 1055 2210 EK358",
    "arrivalTime": null,
    "departureTime": "17:40",
    "scheduleLegs": [
      {
        "date": "2026-10-14",
        "dep": "17:40",
        "arr": "22:30",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-15",
        "dep": "00:10",
        "arr": "02:05",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-28",
        "dep": "04:15",
        "arr": "08:10",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-28",
        "dep": "10:55",
        "arr": "22:10",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0107",
    "date": "2026-10-14",
    "time": "21:40",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "7QXI9B",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN QR     UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "06OCT CGKDOH 1830 2250 QR957 | 07OCT DOHJED 0050 0320 QR1184                                                                                           Elaf Diamond | 14OCT JEDDOH 0310 0530 QR1183                                                                                               25531 | 14OCT DOHCGK 0900 2140 QR954",
    "arrivalTime": "21:40",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-10-06",
        "dep": "18:30",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-07",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-14",
        "dep": "03:10",
        "arr": "05:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-14",
        "dep": "09:00",
        "arr": "21:40",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0108",
    "date": "2026-10-14",
    "time": "22:25",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK358",
    "route": "DXB → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "EFMCEJ",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL EK     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "30SEP CGKDXB 1740 2230 EK357 | 01OCT DXBJED 0010 0205 EK801 | 14OCT JEDDXB 0405 0755 EK802 | 14OCT DXBCGK 1050 2225 EK358",
    "arrivalTime": "22:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-09-30",
        "dep": "17:40",
        "arr": "22:30",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-01",
        "dep": "00:10",
        "arr": "02:05",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-14",
        "dep": "04:05",
        "arr": "07:55",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-14",
        "dep": "10:50",
        "arr": "22:25",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0109",
    "date": "2026-10-15",
    "time": "00:45",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK359",
    "route": "CGK → DXB",
    "type": "DEPARTURE_CGK",
    "pnr": "LY7UGB",
    "pax": 50,
    "rooms": 14,
    "package": "2X JUMAT EK    MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "15OCT CGKDXB 0045 0530 EK359 | 15OCT DXBJED 0655 0845 EK805                                                                                                                                               Kunooz Ajyad | 24OCT JEDDXB 0405 0755 EK802                                                                                                                                                  25078 | 24OCT DXBCGK 1050 2225 EK358",
    "arrivalTime": null,
    "departureTime": "00:45",
    "scheduleLegs": [
      {
        "date": "2026-10-15",
        "dep": "00:45",
        "arr": "05:30",
        "route": "CGK → DXB",
        "flight": "EK359",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-15",
        "dep": "06:55",
        "arr": "08:45",
        "route": "DXB → JED",
        "flight": "EK805",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-24",
        "dep": "04:05",
        "arr": "07:55",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-24",
        "dep": "10:50",
        "arr": "22:25",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0110",
    "date": "2026-10-15",
    "time": "21:40",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "7QZVUY",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN QR     UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "07OCT CGKDOH 0900 1320 QR959 | 07OCT DOHJED 1550 1820 QR1186                                                                                           Elaf Diamond | 15OCT JEDDOH 0310 0530 QR1183                                                                                               25532 | 15OCT DOHCGK 0900 2140 QR954",
    "arrivalTime": "21:40",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-10-07",
        "dep": "09:00",
        "arr": "13:20",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-07",
        "dep": "15:50",
        "arr": "18:20",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-15",
        "dep": "03:10",
        "arr": "05:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-15",
        "dep": "09:00",
        "arr": "21:40",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0111",
    "date": "2026-10-17",
    "time": "14:50",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "FVFDWM",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN WY",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "17OCT CGKMCT 1450 1930 WY850 | 17OCT MCTMED 2140 2350 WY677                              MADINAH DULU                                                                                                     Elaf Diamond | 24OCT JEDMCT 1800 2215 WY676                              (MED-JED)                                                                                                            25536 | 25OCT MCTCGK 0215 1320 WY849",
    "arrivalTime": null,
    "departureTime": "14:50",
    "scheduleLegs": [
      {
        "date": "2026-10-17",
        "dep": "14:50",
        "arr": "19:30",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-17",
        "dep": "21:40",
        "arr": "23:50",
        "route": "MCT → MED",
        "flight": "WY677",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-24",
        "dep": "18:00",
        "arr": "22:15",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-25",
        "dep": "02:15",
        "arr": "13:20",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0112",
    "date": "2026-10-17",
    "time": "22:25",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK358",
    "route": "DXB → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "UZTNNK, IZEWZN",
    "pax": 90,
    "rooms": 12,
    "package": "THAWIL WY     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "07OCT CGKMCT 1450 1930 WY850 | 07OCT MCTJED 2145 0005 (+1) WY673 | 20OCT JEDMCT 1800 2215 WY676 | 21OCT MCTCGK 0215 1320 WY849 | 17OCT JEDDXB 0405 0755 EK802                                                                                                                                                 25077 | 17OCT DXBCGK 1050 2225 EK358",
    "arrivalTime": "22:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-10-07",
        "dep": "14:50",
        "arr": "19:30",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-07",
        "dep": "21:45",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2026-10-20",
        "dep": "18:00",
        "arr": "22:15",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-21",
        "dep": "02:15",
        "arr": "13:20",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-17",
        "dep": "04:05",
        "arr": "07:55",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-17",
        "dep": "10:50",
        "arr": "22:25",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0113",
    "date": "2026-10-17",
    "time": "22:45",
    "airline": "SV",
    "airlineName": "Saudia",
    "flight": "SV826",
    "route": "JED → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "9HMO8M",
    "pax": 50,
    "rooms": 14,
    "package": "2X JUMAT SV   MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "08OCT CGKJED 0910 1440 SV817 | 17OCT JEDCGK 0840 2245 SV826",
    "arrivalTime": "22:45",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-10-08",
        "dep": "09:10",
        "arr": "14:40",
        "route": "CGK → JED",
        "flight": "SV817",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-17",
        "dep": "08:40",
        "arr": "22:45",
        "route": "JED → CGK",
        "flight": "SV826",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0114",
    "date": "2026-10-18",
    "time": "13:20",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA961",
    "route": "MED → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "ETSIUE",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL+ GA",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "04OCT CGKJED 1355 2000 GA982                             UMRAH LANGSUNG | 17OCT MEDCGK 2310 1320 (+1) GA961                        (JED-MED)",
    "arrivalTime": "13:20",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-10-04",
        "dep": "13:55",
        "arr": "20:00",
        "route": "CGK → JED",
        "flight": "GA982",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-17",
        "dep": "23:10",
        "arr": "13:20",
        "route": "MED → CGK",
        "flight": "GA961",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0115",
    "date": "2026-10-18",
    "time": "13:20",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY849",
    "route": "MCT → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "NQKQAE",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN WY",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "10OCT CGKMCT 1450 1930 WY850 | 10OCT MCTMED 2140 2350 WY677                             MADINAH DULU                                                                                                     Elaf Diamond | 17OCT JEDMCT 1800 2215 WY676                             (MED-JED)                                                                                                            25533 | 18OCT MCTCGK 0215 1320 WY849",
    "arrivalTime": "13:20",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-10-10",
        "dep": "14:50",
        "arr": "19:30",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-10",
        "dep": "21:40",
        "arr": "23:50",
        "route": "MCT → MED",
        "flight": "WY677",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-17",
        "dep": "18:00",
        "arr": "22:15",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-18",
        "dep": "02:15",
        "arr": "13:20",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0116",
    "date": "2026-10-18",
    "time": "13:55",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA982",
    "route": "CGK → JED",
    "type": "DEPARTURE_CGK",
    "pnr": "EQVVEW",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL+ GA",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "18OCT CGKJED 1355 2000 GA982                              UMRAH LANGSUNG | 31OCT MEDCGK 1705 0635 (+1) GA969                         (JED-MED)",
    "arrivalTime": null,
    "departureTime": "13:55",
    "scheduleLegs": [
      {
        "date": "2026-10-18",
        "dep": "13:55",
        "arr": "20:00",
        "route": "CGK → JED",
        "flight": "GA982",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-31",
        "dep": "17:05",
        "arr": "06:35",
        "route": "MED → CGK",
        "flight": "GA969",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0117",
    "date": "2026-10-18",
    "time": "18:30",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "7QQK8B, 7QZEIF",
    "pax": 90,
    "rooms": 26,
    "package": "",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "18OCT CGKDOH 1830 2250 QR957 | 19OCT DOHJED 0050 0320 QR1184              HAQQAN QR | 26OCT JEDDOH 0510 0720 QR1185              (BUS 2) | 26OCT DOHCGK 0845 2125 QR954",
    "arrivalTime": null,
    "departureTime": "18:30",
    "scheduleLegs": [
      {
        "date": "2026-10-18",
        "dep": "18:30",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-19",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-26",
        "dep": "05:10",
        "arr": "07:20",
        "route": "JED → DOH",
        "flight": "QR1185",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-26",
        "dep": "08:45",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0118",
    "date": "2026-10-19",
    "time": "15:00",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR956",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "7QXUCH",
    "pax": 45,
    "rooms": 13,
    "package": "THAWIL QR     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "06OCT CGKDOH 0055 0515 QR955 | 06OCT DOHJED 0730 1000 QR1190 | 18OCT JEDDOH 1950 2210 QR1187 | 19OCT DOHCGK 0225 1500 QR956",
    "arrivalTime": "15:00",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-10-06",
        "dep": "00:55",
        "arr": "05:15",
        "route": "CGK → DOH",
        "flight": "QR955",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-06",
        "dep": "07:30",
        "arr": "10:00",
        "route": "DOH → JED",
        "flight": "QR1190",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-18",
        "dep": "19:50",
        "arr": "22:10",
        "route": "JED → DOH",
        "flight": "QR1187",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-19",
        "dep": "02:25",
        "arr": "15:00",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0119",
    "date": "2026-10-19",
    "time": "18:30",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "7QVSV3",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN QR      MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "19OCT CGKDOH 1830 2250 QR957 | 20OCT DOHJED 0050 0320 QR1184 | 26OCT JEDDOH 1930 2140 QR1187 | 27OCT DOHCGK 0230 1510 QR956",
    "arrivalTime": null,
    "departureTime": "18:30",
    "scheduleLegs": [
      {
        "date": "2026-10-19",
        "dep": "18:30",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-20",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-26",
        "dep": "19:30",
        "arr": "21:40",
        "route": "JED → DOH",
        "flight": "QR1187",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-27",
        "dep": "02:30",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0120",
    "date": "2026-10-19",
    "time": "21:40",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "7QYGAY, 7QSPHX",
    "pax": 90,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "11OCT CGKDOH 1830 2250 QR957               HAQQAN QR | 12OCT DOHJED 0050 0320 QR1184              (BUS 1) | 19OCT JEDDOH 0310 0530 QR1183              HAQQAN QR | 19OCT DOHCGK 0900 2140 QR954                                                              7QSPHX       45      13                                                                                                                                                        Rp13,000,000",
    "arrivalTime": "21:40",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-10-11",
        "dep": "18:30",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-12",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-19",
        "dep": "03:10",
        "arr": "05:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-19",
        "dep": "09:00",
        "arr": "21:40",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0121",
    "date": "2026-10-20",
    "time": "07:35",
    "airline": "SV",
    "airlineName": "Saudia",
    "flight": "SV816",
    "route": "JED → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "9MGQJK",
    "pax": 99,
    "rooms": 28,
    "package": "HAQQAN SV      MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "12OCT CGKJED 0040 0610 SV827                                                                                                                                               Elaf Diamond | 19OCT JEDCGK 1730 0735 (+1) SV816                                                                                                                                              25534",
    "arrivalTime": "07:35",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-10-12",
        "dep": "00:40",
        "arr": "06:10",
        "route": "CGK → JED",
        "flight": "SV827",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-19",
        "dep": "17:30",
        "arr": "07:35",
        "route": "JED → CGK",
        "flight": "SV816",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0122",
    "date": "2026-10-20",
    "time": "15:00",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR956",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "8QYOR2",
    "pax": 45,
    "rooms": 13,
    "package": "THAWIL QR     MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "07OCT CGKDOH 0055 0515 QR955 | 07OCT DOHJED 0730 1000 QR1190 | 19OCT JEDDOH 1950 2210 QR1187 | 20OCT DOHCGK 0225 1500 QR956",
    "arrivalTime": "15:00",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-10-07",
        "dep": "00:55",
        "arr": "05:15",
        "route": "CGK → DOH",
        "flight": "QR955",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-07",
        "dep": "07:30",
        "arr": "10:00",
        "route": "DOH → JED",
        "flight": "QR1190",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-19",
        "dep": "19:50",
        "arr": "22:10",
        "route": "JED → DOH",
        "flight": "QR1187",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-20",
        "dep": "02:25",
        "arr": "15:00",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0123",
    "date": "2026-10-21",
    "time": "15:35",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR956",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "9LALBU",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN QR      UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "13OCT CGKDOH 1830 2250 QR957 | 14OCT DOHJED 0050 0320 QR1184                                                                                            Elaf Diamond | 20OCT JEDDOH 2145 0005 (+1) QR1193                                                                                           25535 | 21OCT DOHCGK 0255 1535 QR956",
    "arrivalTime": "15:35",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-10-13",
        "dep": "18:30",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-14",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-20",
        "dep": "21:45",
        "arr": "00:05",
        "route": "JED → DOH",
        "flight": "QR1193",
        "arrivalNextDay": true
      },
      {
        "date": "2026-10-21",
        "dep": "02:55",
        "arr": "15:35",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0124",
    "date": "2026-10-21",
    "time": "17:40",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK357",
    "route": "CGK → DXB",
    "type": "DEPARTURE_CGK",
    "pnr": "DCKF7S",
    "pax": 45,
    "rooms": 13,
    "package": "THAWIL EK      MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "21OCT CGKDXB 1740 2230 EK357 | 22OCT DXBJED 0010 0205 EK801 | 04NOV JEDDXB 0415 0810 EK802 | 04NOV DXBCGK 1055 2210 EK358",
    "arrivalTime": null,
    "departureTime": "17:40",
    "scheduleLegs": [
      {
        "date": "2026-10-21",
        "dep": "17:40",
        "arr": "22:30",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-22",
        "dep": "00:10",
        "arr": "02:05",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-04",
        "dep": "04:15",
        "arr": "08:10",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-04",
        "dep": "10:55",
        "arr": "22:10",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0125",
    "date": "2026-10-22",
    "time": "00:45",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK359",
    "route": "CGK → DXB",
    "type": "DEPARTURE_CGK",
    "pnr": "RLRX2J",
    "pax": 14,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "22OCT CGKDXB 0045 0530 EK359 | 22OCT DXBJED 0655 0845 EK805 | 31OCT JEDDXB 0415 0810 EK802 | 31OCT DXBCGK 1055 2210 EK358 HK50",
    "arrivalTime": null,
    "departureTime": "00:45",
    "scheduleLegs": [
      {
        "date": "2026-10-22",
        "dep": "00:45",
        "arr": "05:30",
        "route": "CGK → DXB",
        "flight": "EK359",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-22",
        "dep": "06:55",
        "arr": "08:45",
        "route": "DXB → JED",
        "flight": "EK805",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-31",
        "dep": "04:15",
        "arr": "08:10",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-31",
        "dep": "10:55",
        "arr": "22:10",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0126",
    "date": "2026-10-24",
    "time": "22:25",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK358",
    "route": "DXB → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "LY7UGB",
    "pax": 50,
    "rooms": 14,
    "package": "2X JUMAT EK    MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "15OCT CGKDXB 0045 0530 EK359 | 15OCT DXBJED 0655 0845 EK805                                                                                                                                               Kunooz Ajyad | 24OCT JEDDXB 0405 0755 EK802                                                                                                                                                  25078 | 24OCT DXBCGK 1050 2225 EK358",
    "arrivalTime": "22:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-10-15",
        "dep": "00:45",
        "arr": "05:30",
        "route": "CGK → DXB",
        "flight": "EK359",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-15",
        "dep": "06:55",
        "arr": "08:45",
        "route": "DXB → JED",
        "flight": "EK805",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-24",
        "dep": "04:05",
        "arr": "07:55",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-24",
        "dep": "10:50",
        "arr": "22:25",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0127",
    "date": "2026-10-25",
    "time": "06:35",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA969",
    "route": "MED → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "EQUNXW",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL+ GA",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "11OCT CGKJED 1355 2000 GA982                             UMRAH LANGSUNG | 24OCT MEDCGK 1705 0635 (+1) GA969                        (JED-MED)",
    "arrivalTime": "06:35",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-10-11",
        "dep": "13:55",
        "arr": "20:00",
        "route": "CGK → JED",
        "flight": "GA982",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-24",
        "dep": "17:05",
        "arr": "06:35",
        "route": "MED → CGK",
        "flight": "GA969",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0128",
    "date": "2026-10-25",
    "time": "13:20",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY849",
    "route": "MCT → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "FVFDWM",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN WY",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "17OCT CGKMCT 1450 1930 WY850 | 17OCT MCTMED 2140 2350 WY677                              MADINAH DULU                                                                                                     Elaf Diamond | 24OCT JEDMCT 1800 2215 WY676                              (MED-JED)                                                                                                            25536 | 25OCT MCTCGK 0215 1320 WY849",
    "arrivalTime": "13:20",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-10-17",
        "dep": "14:50",
        "arr": "19:30",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-17",
        "dep": "21:40",
        "arr": "23:50",
        "route": "MCT → MED",
        "flight": "WY677",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-24",
        "dep": "18:00",
        "arr": "22:15",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-25",
        "dep": "02:15",
        "arr": "13:20",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0129",
    "date": "2026-10-25",
    "time": "13:55",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA982",
    "route": "CGK → JED",
    "type": "DEPARTURE_CGK",
    "pnr": "ETUBQ4",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL+ GA",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "25OCT CGKJED 1355 2000 GA982                              UMRAH LANGSUNG | 07NOV MEDCGK 1705 0635 (+1) GA969                         (JED-MED)",
    "arrivalTime": null,
    "departureTime": "13:55",
    "scheduleLegs": [
      {
        "date": "2026-10-25",
        "dep": "13:55",
        "arr": "20:00",
        "route": "CGK → JED",
        "flight": "GA982",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-07",
        "dep": "17:05",
        "arr": "06:35",
        "route": "MED → CGK",
        "flight": "GA969",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0130",
    "date": "2026-10-26",
    "time": "13:55",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA982",
    "route": "CGK → JED",
    "type": "DEPARTURE_CGK",
    "pnr": "D354VT",
    "pax": 50,
    "rooms": 14,
    "package": "QARIB GA",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "26OCT CGKJED 1355 2000 GA982                              UMRAH LANGSUNG | 02NOV MEDCGK 2155 1150 (+1) GA969                         (JED-MED)",
    "arrivalTime": null,
    "departureTime": "13:55",
    "scheduleLegs": [
      {
        "date": "2026-10-26",
        "dep": "13:55",
        "arr": "20:00",
        "route": "CGK → JED",
        "flight": "GA982",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-02",
        "dep": "21:55",
        "arr": "11:50",
        "route": "MED → CGK",
        "flight": "GA969",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0131",
    "date": "2026-10-26",
    "time": "21:25",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "7QQK8B, 7QZEIF",
    "pax": 90,
    "rooms": 26,
    "package": "",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "18OCT CGKDOH 1830 2250 QR957 | 19OCT DOHJED 0050 0320 QR1184              HAQQAN QR | 26OCT JEDDOH 0510 0720 QR1185              (BUS 2) | 26OCT DOHCGK 0845 2125 QR954",
    "arrivalTime": "21:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-10-18",
        "dep": "18:30",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-19",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-26",
        "dep": "05:10",
        "arr": "07:20",
        "route": "JED → DOH",
        "flight": "QR1185",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-26",
        "dep": "08:45",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0132",
    "date": "2026-10-27",
    "time": "15:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR956",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "7QVSV3",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN QR      MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "19OCT CGKDOH 1830 2250 QR957 | 20OCT DOHJED 0050 0320 QR1184 | 26OCT JEDDOH 1930 2140 QR1187 | 27OCT DOHCGK 0230 1510 QR956",
    "arrivalTime": "15:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-10-19",
        "dep": "18:30",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-20",
        "dep": "00:50",
        "arr": "03:20",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-26",
        "dep": "19:30",
        "arr": "21:40",
        "route": "JED → DOH",
        "flight": "QR1187",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-27",
        "dep": "02:30",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0133",
    "date": "2026-10-27",
    "time": "18:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "8T8GCV",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL QR      MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "27OCT CGKDOH 1810 2240 QR957 | 28OCT DOHJED 0105 0340 QR1184 | 09NOV JEDDOH 2205 0015 (+1) QR1189 | 10NOV DOHCGK 0230 1510 QR956",
    "arrivalTime": null,
    "departureTime": "18:10",
    "scheduleLegs": [
      {
        "date": "2026-10-27",
        "dep": "18:10",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-28",
        "dep": "01:05",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-09",
        "dep": "22:05",
        "arr": "00:15",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2026-11-10",
        "dep": "02:30",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0134",
    "date": "2026-10-28",
    "time": "14:55",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "28OCT CGKMCT 1455 1950 WY850 | 28OCT MCTJED 2130 0005 (+1) WY673                         UMRAH LANGSUNG                  ESCLVD | 10NOV MEDMCT 1800 2155 WY680                              (JED-MED)                       FBEDQK | 11NOV MCTCGK 0240 1330 (+1) WY849",
    "arrivalTime": null,
    "departureTime": "14:55",
    "scheduleLegs": [
      {
        "date": "2026-10-28",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-28",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2026-11-10",
        "dep": "18:00",
        "arr": "21:55",
        "route": "MED → MCT",
        "flight": "WY680",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-11",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0135",
    "date": "2026-10-28",
    "time": "17:45",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK357",
    "route": "CGK → DXB",
    "type": "DEPARTURE_CGK",
    "pnr": "LPWG2F",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL EK      MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "28OCT CGKDXB 1745 2300 EK357 | 29OCT DXBJED 0015 0225 EK801 | 11NOV JEDDXB 0415 0810 EK802 | 11NOV DXBCGK 1055 2210 EK358",
    "arrivalTime": null,
    "departureTime": "17:45",
    "scheduleLegs": [
      {
        "date": "2026-10-28",
        "dep": "17:45",
        "arr": "23:00",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-29",
        "dep": "00:15",
        "arr": "02:25",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-11",
        "dep": "04:15",
        "arr": "08:10",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-11",
        "dep": "10:55",
        "arr": "22:10",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0136",
    "date": "2026-10-28",
    "time": "22:10",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK358",
    "route": "DXB → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "C6VRQJ",
    "pax": 45,
    "rooms": 13,
    "package": "THAWIL EK      MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "14OCT CGKDXB 1740 2230 EK357 | 15OCT DXBJED 0010 0205 EK801 | 28OCT JEDDXB 0415 0810 EK802 | 28OCT DXBCGK 1055 2210 EK358",
    "arrivalTime": "22:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-10-14",
        "dep": "17:40",
        "arr": "22:30",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-15",
        "dep": "00:10",
        "arr": "02:05",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-28",
        "dep": "04:15",
        "arr": "08:10",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-28",
        "dep": "10:55",
        "arr": "22:10",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0137",
    "date": "2026-10-29",
    "time": "08:45",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR959",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "7QY9BH",
    "pax": 13,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "29OCT CGKDOH 0845 1315 QR959 | 29OCT DOHJED 1525 1800 QR1186                                                 BELUM | 08NOV JEDDOH 0410 0620 QR1183                                                RELEASE | 08NOV DOHCGK 0845 2125 QR954 HK45",
    "arrivalTime": null,
    "departureTime": "08:45",
    "scheduleLegs": [
      {
        "date": "2026-10-29",
        "dep": "08:45",
        "arr": "13:15",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-29",
        "dep": "15:25",
        "arr": "18:00",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-08",
        "dep": "04:10",
        "arr": "06:20",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-08",
        "dep": "08:45",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0138",
    "date": "2026-10-29",
    "time": "17:45",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK357",
    "route": "CGK → DXB",
    "type": "DEPARTURE_CGK",
    "pnr": "P5ELXJ",
    "pax": 50,
    "rooms": 14,
    "package": "2X JUMAT EK    MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "29OCT CGKDXB 1745 2300 EK357 | 30OCT DXBJED 0015 0225 EK801 | 07NOV JEDDXB 0415 0810 EK802 | 07NOV DXBCGK 1055 2210 EK358",
    "arrivalTime": null,
    "departureTime": "17:45",
    "scheduleLegs": [
      {
        "date": "2026-10-29",
        "dep": "17:45",
        "arr": "23:00",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-30",
        "dep": "00:15",
        "arr": "02:25",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-07",
        "dep": "04:15",
        "arr": "08:10",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-07",
        "dep": "10:55",
        "arr": "22:10",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0139",
    "date": "2026-10-31",
    "time": "22:10",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK358",
    "route": "DXB → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "RLRX2J",
    "pax": 14,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "22OCT CGKDXB 0045 0530 EK359 | 22OCT DXBJED 0655 0845 EK805 | 31OCT JEDDXB 0415 0810 EK802 | 31OCT DXBCGK 1055 2210 EK358 HK50",
    "arrivalTime": "22:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-10-22",
        "dep": "00:45",
        "arr": "05:30",
        "route": "CGK → DXB",
        "flight": "EK359",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-22",
        "dep": "06:55",
        "arr": "08:45",
        "route": "DXB → JED",
        "flight": "EK805",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-31",
        "dep": "04:15",
        "arr": "08:10",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-31",
        "dep": "10:55",
        "arr": "22:10",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0140",
    "date": "2026-11-01",
    "time": "06:35",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA969",
    "route": "MED → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "EQVVEW",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL+ GA",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "18OCT CGKJED 1355 2000 GA982                              UMRAH LANGSUNG | 31OCT MEDCGK 1705 0635 (+1) GA969                         (JED-MED)",
    "arrivalTime": "06:35",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-10-18",
        "dep": "13:55",
        "arr": "20:00",
        "route": "CGK → JED",
        "flight": "GA982",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-31",
        "dep": "17:05",
        "arr": "06:35",
        "route": "MED → CGK",
        "flight": "GA969",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0141",
    "date": "2026-11-01",
    "time": "13:55",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA982",
    "route": "CGK → JED",
    "type": "DEPARTURE_CGK",
    "pnr": "ETTIFT",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL+ GA",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "01NOV CGKJED 1355 2000 GA982                              UMRAH LANGSUNG | 14NOV MEDCGK 1705 0635 (+1) GA969                         (JED-MED)",
    "arrivalTime": null,
    "departureTime": "13:55",
    "scheduleLegs": [
      {
        "date": "2026-11-01",
        "dep": "13:55",
        "arr": "20:00",
        "route": "CGK → JED",
        "flight": "GA982",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-14",
        "dep": "17:05",
        "arr": "06:35",
        "route": "MED → CGK",
        "flight": "GA969",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0142",
    "date": "2026-11-01",
    "time": "17:45",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK357",
    "route": "CGK → DXB",
    "type": "DEPARTURE_CGK",
    "pnr": "G77DE6",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "01NOV CGKDXB 1745 2300 EK357 | 02NOV DXBJED 0015 0225 EK801 | 09NOV JEDDXB 0415 0810 EK802 | 09NOV DXBCGK 1055 2210 EK358",
    "arrivalTime": null,
    "departureTime": "17:45",
    "scheduleLegs": [
      {
        "date": "2026-11-01",
        "dep": "17:45",
        "arr": "23:00",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-02",
        "dep": "00:15",
        "arr": "02:25",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-09",
        "dep": "04:15",
        "arr": "08:10",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-09",
        "dep": "10:55",
        "arr": "22:10",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0143",
    "date": "2026-11-01",
    "time": "18:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "73FMUN",
    "pax": 50,
    "rooms": 14,
    "package": "HAQQAN QR      MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "01NOV CGKDOH 1810 2230 QR957 | 02NOV DOHJED 0100 0340 QR1184 | 08NOV JEDDOH 2205 0025 (+1) QR1189 | 09NOV DOHCGK 0230 1510 QR956",
    "arrivalTime": null,
    "departureTime": "18:10",
    "scheduleLegs": [
      {
        "date": "2026-11-01",
        "dep": "18:10",
        "arr": "22:30",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-02",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-08",
        "dep": "22:05",
        "arr": "00:25",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2026-11-09",
        "dep": "02:30",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0144",
    "date": "2026-11-03",
    "time": "11:50",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA969",
    "route": "MED → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "D354VT",
    "pax": 50,
    "rooms": 14,
    "package": "QARIB GA",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "26OCT CGKJED 1355 2000 GA982                              UMRAH LANGSUNG | 02NOV MEDCGK 2155 1150 (+1) GA969                         (JED-MED)",
    "arrivalTime": "11:50",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-10-26",
        "dep": "13:55",
        "arr": "20:00",
        "route": "CGK → JED",
        "flight": "GA982",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-02",
        "dep": "21:55",
        "arr": "11:50",
        "route": "MED → CGK",
        "flight": "GA969",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0145",
    "date": "2026-11-03",
    "time": "17:45",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK357",
    "route": "CGK → DXB",
    "type": "DEPARTURE_CGK",
    "pnr": "QB4UU2, QFSRD6",
    "pax": 100,
    "rooms": 28,
    "package": "HAQQAN EK      UMRAH LANGSUNG / THAWIL EK      MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "03NOV CGKDXB 1745 2300 EK357 | 04NOV DXBJED 0015 0225 EK801 | 17NOV JEDDXB 0415 0810 EK802 | 17NOV DXBCGK 1055 2210 EK358",
    "arrivalTime": null,
    "departureTime": "17:45",
    "scheduleLegs": [
      {
        "date": "2026-11-03",
        "dep": "17:45",
        "arr": "23:00",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-04",
        "dep": "00:15",
        "arr": "02:25",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-17",
        "dep": "04:15",
        "arr": "08:10",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-17",
        "dep": "10:55",
        "arr": "22:10",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0146",
    "date": "2026-11-04",
    "time": "17:45",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK357",
    "route": "CGK → DXB",
    "type": "DEPARTURE_CGK",
    "pnr": "FLMTQ2",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL EK      MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "04NOV CGKDXB 1745 2300 EK357 | 05NOV DXBJED 0015 0225 EK801 | 18NOV JEDDXB 0415 0810 EK802 | 18NOV DXBCGK 1055 2210 EK358",
    "arrivalTime": null,
    "departureTime": "17:45",
    "scheduleLegs": [
      {
        "date": "2026-11-04",
        "dep": "17:45",
        "arr": "23:00",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-05",
        "dep": "00:15",
        "arr": "02:25",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-18",
        "dep": "04:15",
        "arr": "08:10",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-18",
        "dep": "10:55",
        "arr": "22:10",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0147",
    "date": "2026-11-04",
    "time": "22:10",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK358",
    "route": "DXB → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "DCKF7S",
    "pax": 45,
    "rooms": 13,
    "package": "THAWIL EK      MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "21OCT CGKDXB 1740 2230 EK357 | 22OCT DXBJED 0010 0205 EK801 | 04NOV JEDDXB 0415 0810 EK802 | 04NOV DXBCGK 1055 2210 EK358",
    "arrivalTime": "22:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-10-21",
        "dep": "17:40",
        "arr": "22:30",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-22",
        "dep": "00:10",
        "arr": "02:05",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-04",
        "dep": "04:15",
        "arr": "08:10",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-04",
        "dep": "10:55",
        "arr": "22:10",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0148",
    "date": "2026-11-05",
    "time": "08:45",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR959",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "8EUXKR",
    "pax": 50,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "05NOV CGKDOH 0845 1315 QR959 | 05NOV DOHJED 1800 2035 QR1188                                                 BELUM | 14NOV JEDDOH 0410 0620 QR1183                                                RELEASE | 14NOV DOHCGK 0845 2125 QR954",
    "arrivalTime": null,
    "departureTime": "08:45",
    "scheduleLegs": [
      {
        "date": "2026-11-05",
        "dep": "08:45",
        "arr": "13:15",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-05",
        "dep": "18:00",
        "arr": "20:35",
        "route": "DOH → JED",
        "flight": "QR1188",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-14",
        "dep": "04:10",
        "arr": "06:20",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-14",
        "dep": "08:45",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0149",
    "date": "2026-11-05",
    "time": "14:55",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "05NOV CGKMCT 1455 1950 WY850                                                                                                                                                                                                                                                                                               Jumat, 6 November | 05NOV MCTJED 2130 0005 (+1) WY673                                                          NIOKYL | 13NOV JEDMCT 1800 2200 WY676                                                               IQSOJW                                                                                                                                                                                                                          hotel Madinah: 07.00 | 14NOV MCTCGK 0240 1330 WY849                                                                                                                                                                                                                                                                                               check-in: 16.00",
    "arrivalTime": null,
    "departureTime": "14:55",
    "scheduleLegs": [
      {
        "date": "2026-11-05",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-05",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2026-11-13",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-14",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0150",
    "date": "2026-11-05",
    "time": "18:00",
    "airline": "EY",
    "airlineName": "Etihad Airways",
    "flight": "EY475",
    "route": "CGK → AUH",
    "type": "DEPARTURE_CGK",
    "pnr": "9E5ZCF",
    "pax": 45,
    "rooms": 13,
    "package": "2X JUMAT+ EY   UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "05NOV CGKAUH 1800 2305 EY475 | 06NOV AUHJED 0205 0415 EY603                                                                                             Kunooz Ajyad | 14NOV JEDAUH 0315 0650 EY602                                                                                                25079 | 14NOV AUHCGK 0855 2020 EY472",
    "arrivalTime": null,
    "departureTime": "18:00",
    "scheduleLegs": [
      {
        "date": "2026-11-05",
        "dep": "18:00",
        "arr": "23:05",
        "route": "CGK → AUH",
        "flight": "EY475",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-06",
        "dep": "02:05",
        "arr": "04:15",
        "route": "AUH → JED",
        "flight": "EY603",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-14",
        "dep": "03:15",
        "arr": "06:50",
        "route": "JED → AUH",
        "flight": "EY602",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-14",
        "dep": "08:55",
        "arr": "20:20",
        "route": "AUH → CGK",
        "flight": "EY472",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0151",
    "date": "2026-11-05",
    "time": "18:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "7TL5VQ",
    "pax": 45,
    "rooms": 13,
    "package": "2X JUMAT QR    MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "05NOV CGKDOH 1810 2240 QR957 | 06NOV DOHJED 0105 0340 QR1184 | 14NOV JEDDOH 0510 0720 QR1185 | 14NOV DOHCGK 0845 2125 QR954",
    "arrivalTime": null,
    "departureTime": "18:10",
    "scheduleLegs": [
      {
        "date": "2026-11-05",
        "dep": "18:10",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-06",
        "dep": "01:05",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-14",
        "dep": "05:10",
        "arr": "07:20",
        "route": "JED → DOH",
        "flight": "QR1185",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-14",
        "dep": "08:45",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0152",
    "date": "2026-11-07",
    "time": "22:10",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK358",
    "route": "DXB → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "P5ELXJ",
    "pax": 50,
    "rooms": 14,
    "package": "2X JUMAT EK    MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "29OCT CGKDXB 1745 2300 EK357 | 30OCT DXBJED 0015 0225 EK801 | 07NOV JEDDXB 0415 0810 EK802 | 07NOV DXBCGK 1055 2210 EK358",
    "arrivalTime": "22:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-10-29",
        "dep": "17:45",
        "arr": "23:00",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-30",
        "dep": "00:15",
        "arr": "02:25",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-07",
        "dep": "04:15",
        "arr": "08:10",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-07",
        "dep": "10:55",
        "arr": "22:10",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0153",
    "date": "2026-11-08",
    "time": "06:35",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA969",
    "route": "MED → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "ETUBQ4",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL+ GA",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "25OCT CGKJED 1355 2000 GA982                              UMRAH LANGSUNG | 07NOV MEDCGK 1705 0635 (+1) GA969                         (JED-MED)",
    "arrivalTime": "06:35",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-10-25",
        "dep": "13:55",
        "arr": "20:00",
        "route": "CGK → JED",
        "flight": "GA982",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-07",
        "dep": "17:05",
        "arr": "06:35",
        "route": "MED → CGK",
        "flight": "GA969",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0154",
    "date": "2026-11-08",
    "time": "13:55",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA982",
    "route": "CGK → JED",
    "type": "DEPARTURE_CGK",
    "pnr": "EQW66J",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL+ GA",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "08NOV CGKJED 1355 2000 GA982                              UMRAH LANGSUNG | 21NOV MEDCGK 1705 0635 (+1) GA969                         (JED-MED)",
    "arrivalTime": null,
    "departureTime": "13:55",
    "scheduleLegs": [
      {
        "date": "2026-11-08",
        "dep": "13:55",
        "arr": "20:00",
        "route": "CGK → JED",
        "flight": "GA982",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-21",
        "dep": "17:05",
        "arr": "06:35",
        "route": "MED → CGK",
        "flight": "GA969",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0155",
    "date": "2026-11-08",
    "time": "18:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "08NOV CGKDOH 1810 2230 QR957 | 09NOV DOHJED 0100 0340 QR1184                             UMRAH LANGSUNG | 15NOV MEDDOH 1225 1430 QR1179                             (JED-MED) | 15NOV DOHCGK 1835 0715 (+1) QR958",
    "arrivalTime": null,
    "departureTime": "18:10",
    "scheduleLegs": [
      {
        "date": "2026-11-08",
        "dep": "18:10",
        "arr": "22:30",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-09",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-15",
        "dep": "12:25",
        "arr": "14:30",
        "route": "MED → DOH",
        "flight": "QR1179",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-15",
        "dep": "18:35",
        "arr": "07:15",
        "route": "DOH → CGK",
        "flight": "QR958",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0156",
    "date": "2026-11-08",
    "time": "21:25",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "7QY9BH",
    "pax": 13,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "29OCT CGKDOH 0845 1315 QR959 | 29OCT DOHJED 1525 1800 QR1186                                                 BELUM | 08NOV JEDDOH 0410 0620 QR1183                                                RELEASE | 08NOV DOHCGK 0845 2125 QR954 HK45",
    "arrivalTime": "21:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-10-29",
        "dep": "08:45",
        "arr": "13:15",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-29",
        "dep": "15:25",
        "arr": "18:00",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-08",
        "dep": "04:10",
        "arr": "06:20",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-08",
        "dep": "08:45",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0157",
    "date": "2026-11-09",
    "time": "15:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR956",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "73FMUN",
    "pax": 50,
    "rooms": 14,
    "package": "HAQQAN QR      MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "01NOV CGKDOH 1810 2230 QR957 | 02NOV DOHJED 0100 0340 QR1184 | 08NOV JEDDOH 2205 0025 (+1) QR1189 | 09NOV DOHCGK 0230 1510 QR956",
    "arrivalTime": "15:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-11-01",
        "dep": "18:10",
        "arr": "22:30",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-02",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-08",
        "dep": "22:05",
        "arr": "00:25",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2026-11-09",
        "dep": "02:30",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0158",
    "date": "2026-11-09",
    "time": "17:45",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK357",
    "route": "CGK → DXB",
    "type": "DEPARTURE_CGK",
    "pnr": "P5KD42",
    "pax": 50,
    "rooms": 14,
    "package": "HAQQAN EK      MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "09NOV CGKDXB 1745 2300 EK357 | 10NOV DXBJED 0015 0225 EK801 | 17NOV JEDDXB 0415 0810 EK802 | 17NOV DXBCGK 1055 2210 EK358",
    "arrivalTime": null,
    "departureTime": "17:45",
    "scheduleLegs": [
      {
        "date": "2026-11-09",
        "dep": "17:45",
        "arr": "23:00",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-10",
        "dep": "00:15",
        "arr": "02:25",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-17",
        "dep": "04:15",
        "arr": "08:10",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-17",
        "dep": "10:55",
        "arr": "22:10",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0159",
    "date": "2026-11-09",
    "time": "18:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "7AHVIE",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN QR      MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "09NOV CGKDOH 1810 2240 QR957 | 10NOV DOHJED 0105 0340 QR1184 | 16NOV JEDDOH 2205 0015 (+1) QR1189 | 17NOV DOHCGK 0230 1510 QR956",
    "arrivalTime": null,
    "departureTime": "18:10",
    "scheduleLegs": [
      {
        "date": "2026-11-09",
        "dep": "18:10",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-10",
        "dep": "01:05",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-16",
        "dep": "22:05",
        "arr": "00:15",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2026-11-17",
        "dep": "02:30",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0160",
    "date": "2026-11-09",
    "time": "22:10",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK358",
    "route": "DXB → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "G77DE6",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "01NOV CGKDXB 1745 2300 EK357 | 02NOV DXBJED 0015 0225 EK801 | 09NOV JEDDXB 0415 0810 EK802 | 09NOV DXBCGK 1055 2210 EK358",
    "arrivalTime": "22:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-11-01",
        "dep": "17:45",
        "arr": "23:00",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-02",
        "dep": "00:15",
        "arr": "02:25",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-09",
        "dep": "04:15",
        "arr": "08:10",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-09",
        "dep": "10:55",
        "arr": "22:10",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0161",
    "date": "2026-11-10",
    "time": "15:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR956",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "8T8GCV",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL QR      MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "27OCT CGKDOH 1810 2240 QR957 | 28OCT DOHJED 0105 0340 QR1184 | 09NOV JEDDOH 2205 0015 (+1) QR1189 | 10NOV DOHCGK 0230 1510 QR956",
    "arrivalTime": "15:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-10-27",
        "dep": "18:10",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-28",
        "dep": "01:05",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-09",
        "dep": "22:05",
        "arr": "00:15",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2026-11-10",
        "dep": "02:30",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0162",
    "date": "2026-11-11",
    "time": "14:55",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "11NOV CGKMCT 1455 1950 WY850 | 11NOV MCTJED 2130 0005 (+1) WY673                                                         IDRNKH | 24NOV JEDMCT 1800 2200 WY676                                                              ESYCHU | 25NOV MCTCGK 0240 1330 WY849",
    "arrivalTime": null,
    "departureTime": "14:55",
    "scheduleLegs": [
      {
        "date": "2026-11-11",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-11",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2026-11-24",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-25",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0163",
    "date": "2026-11-11",
    "time": "17:45",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK357",
    "route": "CGK → DXB",
    "type": "DEPARTURE_CGK",
    "pnr": "E272QB",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL EK      MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "11NOV CGKDXB 1745 2300 EK357 | 12NOV DXBJED 0015 0225 EK801 | 25NOV JEDDXB 0415 0810 EK802 | 25NOV DXBCGK 1055 2210 EK358",
    "arrivalTime": null,
    "departureTime": "17:45",
    "scheduleLegs": [
      {
        "date": "2026-11-11",
        "dep": "17:45",
        "arr": "23:00",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-12",
        "dep": "00:15",
        "arr": "02:25",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-25",
        "dep": "04:15",
        "arr": "08:10",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-25",
        "dep": "10:55",
        "arr": "22:10",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0164",
    "date": "2026-11-11",
    "time": "22:10",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK358",
    "route": "DXB → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "LPWG2F, QB4UU2",
    "pax": 100,
    "rooms": 28,
    "package": "HAQQAN EK      UMRAH LANGSUNG / THAWIL EK      MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "03NOV CGKDXB 1745 2300 EK357 | 04NOV DXBJED 0015 0225 EK801 | 11NOV JEDDXB 0415 0810 EK802 | 11NOV DXBCGK 1055 2210 EK358",
    "arrivalTime": "22:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-11-03",
        "dep": "17:45",
        "arr": "23:00",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-04",
        "dep": "00:15",
        "arr": "02:25",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-11",
        "dep": "04:15",
        "arr": "08:10",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-11",
        "dep": "10:55",
        "arr": "22:10",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0165",
    "date": "2026-11-12",
    "time": "13:30",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY849",
    "route": "MCT → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "28OCT CGKMCT 1455 1950 WY850 | 28OCT MCTJED 2130 0005 (+1) WY673                         UMRAH LANGSUNG                  ESCLVD | 10NOV MEDMCT 1800 2155 WY680                              (JED-MED)                       FBEDQK | 11NOV MCTCGK 0240 1330 (+1) WY849",
    "arrivalTime": "13:30",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-10-28",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2026-10-28",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2026-11-10",
        "dep": "18:00",
        "arr": "21:55",
        "route": "MED → MCT",
        "flight": "WY680",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-11",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0166",
    "date": "2026-11-12",
    "time": "14:55",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "CANCEL",
    "pax": 14,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "12NOV CGKMCT 1455 1950 WY850                                                               OKPAIC | 12NOV MCTJED 2130 0005 (+1) WY673 | 20NOV JEDMCT 1800 2200 WY676 | 21NOV MCTCGK 0240 1330 (+1) WY849",
    "arrivalTime": null,
    "departureTime": "14:55",
    "scheduleLegs": [
      {
        "date": "2026-11-12",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-12",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2026-11-20",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-21",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0167",
    "date": "2026-11-12",
    "time": "17:45",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK357",
    "route": "CGK → DXB",
    "type": "DEPARTURE_CGK",
    "pnr": "GPN3FW, JSQVCS",
    "pax": 95,
    "rooms": 27,
    "package": "2X JUMAT EK    MADINAH DULU / THAWIL EK      MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "12NOV CGKDXB 1745 2300 EK357 | 13NOV DXBJED 0015 0225 EK801 | 26NOV JEDDXB 0415 0810 EK802 | 26NOV DXBCGK 1055 2210 EK358",
    "arrivalTime": null,
    "departureTime": "17:45",
    "scheduleLegs": [
      {
        "date": "2026-11-12",
        "dep": "17:45",
        "arr": "23:00",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-13",
        "dep": "00:15",
        "arr": "02:25",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-26",
        "dep": "04:15",
        "arr": "08:10",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-26",
        "dep": "10:55",
        "arr": "22:10",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0168",
    "date": "2026-11-12",
    "time": "18:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "7AJVLP",
    "pax": 50,
    "rooms": 14,
    "package": "2X JUMAT QR    MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "12NOV CGKDOH 1810 2240 QR957 | 13NOV DOHJED 0105 0340 QR1184 | 21NOV JEDDOH 0410 0620 QR1183 | 21NOV DOHCGK 0845 2125 QR954",
    "arrivalTime": null,
    "departureTime": "18:10",
    "scheduleLegs": [
      {
        "date": "2026-11-12",
        "dep": "18:10",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-13",
        "dep": "01:05",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-21",
        "dep": "04:10",
        "arr": "06:20",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-21",
        "dep": "08:45",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0169",
    "date": "2026-11-13",
    "time": "08:45",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR959",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "9SPKKP",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN QR      MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "13NOV CGKDOH 0845 1305 QR959 | 13NOV DOHJED 1520 1800 QR1186 | 21NOV JEDDOH 0510 0730 QR1185 | 21NOV DOHCGK 0845 2125 QR954",
    "arrivalTime": null,
    "departureTime": "08:45",
    "scheduleLegs": [
      {
        "date": "2026-11-13",
        "dep": "08:45",
        "arr": "13:05",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-13",
        "dep": "15:20",
        "arr": "18:00",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-21",
        "dep": "05:10",
        "arr": "07:30",
        "route": "JED → DOH",
        "flight": "QR1185",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-21",
        "dep": "08:45",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0170",
    "date": "2026-11-14",
    "time": "13:30",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY849",
    "route": "MCT → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "05NOV CGKMCT 1455 1950 WY850                                                                                                                                                                                                                                                                                               Jumat, 6 November | 05NOV MCTJED 2130 0005 (+1) WY673                                                          NIOKYL | 13NOV JEDMCT 1800 2200 WY676                                                               IQSOJW                                                                                                                                                                                                                          hotel Madinah: 07.00 | 14NOV MCTCGK 0240 1330 WY849                                                                                                                                                                                                                                                                                               check-in: 16.00",
    "arrivalTime": "13:30",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-11-05",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-05",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2026-11-13",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-14",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0171",
    "date": "2026-11-14",
    "time": "20:20",
    "airline": "EY",
    "airlineName": "Etihad Airways",
    "flight": "EY472",
    "route": "AUH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "9E5ZCF",
    "pax": 45,
    "rooms": 13,
    "package": "2X JUMAT+ EY   UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "05NOV CGKAUH 1800 2305 EY475 | 06NOV AUHJED 0205 0415 EY603                                                                                             Kunooz Ajyad | 14NOV JEDAUH 0315 0650 EY602                                                                                                25079 | 14NOV AUHCGK 0855 2020 EY472",
    "arrivalTime": "20:20",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-11-05",
        "dep": "18:00",
        "arr": "23:05",
        "route": "CGK → AUH",
        "flight": "EY475",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-06",
        "dep": "02:05",
        "arr": "04:15",
        "route": "AUH → JED",
        "flight": "EY603",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-14",
        "dep": "03:15",
        "arr": "06:50",
        "route": "JED → AUH",
        "flight": "EY602",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-14",
        "dep": "08:55",
        "arr": "20:20",
        "route": "AUH → CGK",
        "flight": "EY472",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0172",
    "date": "2026-11-14",
    "time": "21:25",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "7TL5VQ, 8EUXKR",
    "pax": 95,
    "rooms": 13,
    "package": "2X JUMAT QR    MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "05NOV CGKDOH 1810 2240 QR957 | 06NOV DOHJED 0105 0340 QR1184 | 14NOV JEDDOH 0510 0720 QR1185 | 14NOV DOHCGK 0845 2125 QR954",
    "arrivalTime": "21:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-11-05",
        "dep": "18:10",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-06",
        "dep": "01:05",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-14",
        "dep": "05:10",
        "arr": "07:20",
        "route": "JED → DOH",
        "flight": "QR1185",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-14",
        "dep": "08:45",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0173",
    "date": "2026-11-15",
    "time": "00:15",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK359",
    "route": "CGK → DXB",
    "type": "DEPARTURE_CGK",
    "pnr": "PZE5TB",
    "pax": 50,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "15NOV CGKDXB 0015 2300 EK359 | 15NOV DXBJED 0705 0920 EK805                                                  BELUM | 23NOV JEDDXB 0415 0810 EK802                                                 RELEASE | 23NOV DXBCGK 1055 2210 EK358",
    "arrivalTime": null,
    "departureTime": "00:15",
    "scheduleLegs": [
      {
        "date": "2026-11-15",
        "dep": "00:15",
        "arr": "23:00",
        "route": "CGK → DXB",
        "flight": "EK359",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-15",
        "dep": "07:05",
        "arr": "09:20",
        "route": "DXB → JED",
        "flight": "EK805",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-23",
        "dep": "04:15",
        "arr": "08:10",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-23",
        "dep": "10:55",
        "arr": "22:10",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0174",
    "date": "2026-11-15",
    "time": "06:35",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA969",
    "route": "MED → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "ETTIFT",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL+ GA",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "01NOV CGKJED 1355 2000 GA982                              UMRAH LANGSUNG | 14NOV MEDCGK 1705 0635 (+1) GA969                         (JED-MED)",
    "arrivalTime": "06:35",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-11-01",
        "dep": "13:55",
        "arr": "20:00",
        "route": "CGK → JED",
        "flight": "GA982",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-14",
        "dep": "17:05",
        "arr": "06:35",
        "route": "MED → CGK",
        "flight": "GA969",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0175",
    "date": "2026-11-16",
    "time": "07:15",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR958",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "08NOV CGKDOH 1810 2230 QR957 | 09NOV DOHJED 0100 0340 QR1184                             UMRAH LANGSUNG | 15NOV MEDDOH 1225 1430 QR1179                             (JED-MED) | 15NOV DOHCGK 1835 0715 (+1) QR958",
    "arrivalTime": "07:15",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-11-08",
        "dep": "18:10",
        "arr": "22:30",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-09",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-15",
        "dep": "12:25",
        "arr": "14:30",
        "route": "MED → DOH",
        "flight": "QR1179",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-15",
        "dep": "18:35",
        "arr": "07:15",
        "route": "DOH → CGK",
        "flight": "QR958",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0176",
    "date": "2026-11-16",
    "time": "13:55",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA982",
    "route": "CGK → JED",
    "type": "DEPARTURE_CGK",
    "pnr": "D3A5CP, FRY38Z",
    "pax": 100,
    "rooms": 28,
    "package": "QARIB GA / THAWIL+ GA",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "16NOV CGKJED 1355 2000 GA982                              UMRAH LANGSUNG | 29NOV MEDCGK 1705 0635 (+1) GA969                         (JED-MED)",
    "arrivalTime": null,
    "departureTime": "13:55",
    "scheduleLegs": [
      {
        "date": "2026-11-16",
        "dep": "13:55",
        "arr": "20:00",
        "route": "CGK → JED",
        "flight": "GA982",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-29",
        "dep": "17:05",
        "arr": "06:35",
        "route": "MED → CGK",
        "flight": "GA969",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0177",
    "date": "2026-11-17",
    "time": "15:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR956",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "7AHVIE",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN QR      MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "09NOV CGKDOH 1810 2240 QR957 | 10NOV DOHJED 0105 0340 QR1184 | 16NOV JEDDOH 2205 0015 (+1) QR1189 | 17NOV DOHCGK 0230 1510 QR956",
    "arrivalTime": "15:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-11-09",
        "dep": "18:10",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-10",
        "dep": "01:05",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-16",
        "dep": "22:05",
        "arr": "00:15",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2026-11-17",
        "dep": "02:30",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0178",
    "date": "2026-11-17",
    "time": "17:45",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK357",
    "route": "CGK → DXB",
    "type": "DEPARTURE_CGK",
    "pnr": "FU34VF",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL EK      MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "17NOV CGKDXB 1745 2300 EK357 | 18NOV DXBJED 0015 0225 EK801 | 01DEC JEDDXB 0415 0810 EK802 | 01DEC DXBCGK 1055 2210 EK358",
    "arrivalTime": null,
    "departureTime": "17:45",
    "scheduleLegs": [
      {
        "date": "2026-11-17",
        "dep": "17:45",
        "arr": "23:00",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-18",
        "dep": "00:15",
        "arr": "02:25",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-01",
        "dep": "04:15",
        "arr": "08:10",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-01",
        "dep": "10:55",
        "arr": "22:10",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0179",
    "date": "2026-11-17",
    "time": "22:10",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK358",
    "route": "DXB → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "P5KD42, QFSRD6",
    "pax": 100,
    "rooms": 28,
    "package": "HAQQAN EK      MADINAH DULU / THAWIL EK      MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL / RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "09NOV CGKDXB 1745 2300 EK357 | 10NOV DXBJED 0015 0225 EK801 | 17NOV JEDDXB 0415 0810 EK802 | 17NOV DXBCGK 1055 2210 EK358",
    "arrivalTime": "22:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-11-09",
        "dep": "17:45",
        "arr": "23:00",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-10",
        "dep": "00:15",
        "arr": "02:25",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-17",
        "dep": "04:15",
        "arr": "08:10",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-17",
        "dep": "10:55",
        "arr": "22:10",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0180",
    "date": "2026-11-18",
    "time": "22:10",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK358",
    "route": "DXB → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "FLMTQ2",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL EK      MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "04NOV CGKDXB 1745 2300 EK357 | 05NOV DXBJED 0015 0225 EK801 | 18NOV JEDDXB 0415 0810 EK802 | 18NOV DXBCGK 1055 2210 EK358",
    "arrivalTime": "22:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-11-04",
        "dep": "17:45",
        "arr": "23:00",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-05",
        "dep": "00:15",
        "arr": "02:25",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-18",
        "dep": "04:15",
        "arr": "08:10",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-18",
        "dep": "10:55",
        "arr": "22:10",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0181",
    "date": "2026-11-19",
    "time": "14:55",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "19NOV CGKMCT 1455 1950 WY850                                                                                                                                                                                                                                                                             Jumat, 20 November | 19NOV MCTJED 2130 0005 (+1) WY673                                                         ESRKMS                                                                           Kunooz Ajyad | 27NOV JEDMCT 1800 2200 WY676                                                              ETIRHQ                                                                              25081                                                                                                                      hotel Madinah: 07.00 | 28NOV MCTCGK 0240 1330 WY849                                                                                                                                                                                                                                                                             check-in: 16.00",
    "arrivalTime": null,
    "departureTime": "14:55",
    "scheduleLegs": [
      {
        "date": "2026-11-19",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-19",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2026-11-27",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-28",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0182",
    "date": "2026-11-19",
    "time": "17:45",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK357",
    "route": "CGK → DXB",
    "type": "DEPARTURE_CGK",
    "pnr": "NIXGBN",
    "pax": 50,
    "rooms": 14,
    "package": "2X JUMAT EK    MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "19NOV CGKDXB 1745 2300 EK357                                                                                                                                                                                                                                                                             Jumat, 20 November | 19NOV DXBJED 0015 0225 EK801 | 28NOV JEDDXB 0415 0810 EK802                                                                                                                                                                                                                                                                             hotel Madinah: 09.30 | 28NOV DXBCGK 1055 2210 EK358                                                                                                                                                                                                                                                                             check-in: 16.00",
    "arrivalTime": null,
    "departureTime": "17:45",
    "scheduleLegs": [
      {
        "date": "2026-11-19",
        "dep": "17:45",
        "arr": "23:00",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-19",
        "dep": "00:15",
        "arr": "02:25",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-28",
        "dep": "04:15",
        "arr": "08:10",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-28",
        "dep": "10:55",
        "arr": "22:10",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0183",
    "date": "2026-11-19",
    "time": "18:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "8X96L4",
    "pax": 50,
    "rooms": 14,
    "package": "2X JUMAT QR+   UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "19NOV CGKDOH 1810 2230 QR957 | 20NOV DOHJED 0100 0340 QR1184                                                                                            Kunooz Ajyad | 28NOV JEDDOH 0410 0630 QR1183                                                                                               25082 | 28NOV DOHCGK 0845 2125 QR954",
    "arrivalTime": null,
    "departureTime": "18:10",
    "scheduleLegs": [
      {
        "date": "2026-11-19",
        "dep": "18:10",
        "arr": "22:30",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-20",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-28",
        "dep": "04:10",
        "arr": "06:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-28",
        "dep": "08:45",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0184",
    "date": "2026-11-21",
    "time": "21:25",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "7AJVLP, 9SPKKP",
    "pax": 95,
    "rooms": 27,
    "package": "2X JUMAT QR    MADINAH DULU / HAQQAN QR      MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "13NOV CGKDOH 0845 1305 QR959 | 13NOV DOHJED 1520 1800 QR1186 | 21NOV JEDDOH 0510 0730 QR1185 | 21NOV DOHCGK 0845 2125 QR954",
    "arrivalTime": "21:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-11-13",
        "dep": "08:45",
        "arr": "13:05",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-13",
        "dep": "15:20",
        "arr": "18:00",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-21",
        "dep": "05:10",
        "arr": "07:30",
        "route": "JED → DOH",
        "flight": "QR1185",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-21",
        "dep": "08:45",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0185",
    "date": "2026-11-21",
    "time": "22:10",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK358",
    "route": "DXB → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "GPN3FW",
    "pax": 50,
    "rooms": 14,
    "package": "2X JUMAT EK    MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "12NOV CGKDXB 1745 2300 EK357                                                                                                                                                                                                                                                                             Jumat, 13 November | 13NOV DXBJED 0015 0225 EK801                                                                                                                                               Kunooz Ajyad | 21NOV JEDDXB 0415 0810 EK802                                                                                                                                                  25080                                                                                                                      hotel Madinah: 09.30 | 21NOV DXBCGK 1055 2210 EK358                                                                                                                                                                                                                                                                             check-in: 16.00",
    "arrivalTime": "22:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-11-12",
        "dep": "17:45",
        "arr": "23:00",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-13",
        "dep": "00:15",
        "arr": "02:25",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-21",
        "dep": "04:15",
        "arr": "08:10",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-21",
        "dep": "10:55",
        "arr": "22:10",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0186",
    "date": "2026-11-22",
    "time": "06:35",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA969",
    "route": "MED → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "EQW66J",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL+ GA",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "08NOV CGKJED 1355 2000 GA982                              UMRAH LANGSUNG | 21NOV MEDCGK 1705 0635 (+1) GA969                         (JED-MED)",
    "arrivalTime": "06:35",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-11-08",
        "dep": "13:55",
        "arr": "20:00",
        "route": "CGK → JED",
        "flight": "GA982",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-21",
        "dep": "17:05",
        "arr": "06:35",
        "route": "MED → CGK",
        "flight": "GA969",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0187",
    "date": "2026-11-22",
    "time": "13:30",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY849",
    "route": "MCT → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "CANCEL",
    "pax": 14,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "12NOV CGKMCT 1455 1950 WY850                                                               OKPAIC | 12NOV MCTJED 2130 0005 (+1) WY673 | 20NOV JEDMCT 1800 2200 WY676 | 21NOV MCTCGK 0240 1330 (+1) WY849",
    "arrivalTime": "13:30",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-11-12",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-12",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2026-11-20",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-21",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0188",
    "date": "2026-11-22",
    "time": "13:55",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA982",
    "route": "CGK → JED",
    "type": "DEPARTURE_CGK",
    "pnr": "DI44VD",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL+ GA",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "22NOV CGKJED 1355 2000 GA982                              UMRAH LANGSUNG | 05DEC MEDCGK 1705 0635 (+1) GA969                         (JED-MED)",
    "arrivalTime": null,
    "departureTime": "13:55",
    "scheduleLegs": [
      {
        "date": "2026-11-22",
        "dep": "13:55",
        "arr": "20:00",
        "route": "CGK → JED",
        "flight": "GA982",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-05",
        "dep": "17:05",
        "arr": "06:35",
        "route": "MED → CGK",
        "flight": "GA969",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0189",
    "date": "2026-11-22",
    "time": "18:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "22NOV CGKDOH 1810 2230 QR957 | 23NOV DOHJED 0100 0340 QR1184 | 29NOV JEDDOH 2205 0025 (+1) QR1189 | 30NOV DOHCGK 0230 1510 QR956",
    "arrivalTime": null,
    "departureTime": "18:10",
    "scheduleLegs": [
      {
        "date": "2026-11-22",
        "dep": "18:10",
        "arr": "22:30",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-23",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-29",
        "dep": "22:05",
        "arr": "00:25",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2026-11-30",
        "dep": "02:30",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0190",
    "date": "2026-11-23",
    "time": "22:10",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK358",
    "route": "DXB → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "PZE5TB",
    "pax": 50,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "15NOV CGKDXB 0015 2300 EK359 | 15NOV DXBJED 0705 0920 EK805                                                  BELUM | 23NOV JEDDXB 0415 0810 EK802                                                 RELEASE | 23NOV DXBCGK 1055 2210 EK358",
    "arrivalTime": "22:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-11-15",
        "dep": "00:15",
        "arr": "23:00",
        "route": "CGK → DXB",
        "flight": "EK359",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-15",
        "dep": "07:05",
        "arr": "09:20",
        "route": "DXB → JED",
        "flight": "EK805",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-23",
        "dep": "04:15",
        "arr": "08:10",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-23",
        "dep": "10:55",
        "arr": "22:10",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0191",
    "date": "2026-11-24",
    "time": "08:45",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR959",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "8EU2ZT",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL QR      UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "24NOV CGKDOH 0845 1315 QR959 | 24NOV DOHJED 1800 2035 QR1188 | 08DEC JEDDOH 0410 0620 QR1183 | 08DEC DOHCGK 0845 2125 QR954",
    "arrivalTime": null,
    "departureTime": "08:45",
    "scheduleLegs": [
      {
        "date": "2026-11-24",
        "dep": "08:45",
        "arr": "13:15",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-24",
        "dep": "18:00",
        "arr": "20:35",
        "route": "DOH → JED",
        "flight": "QR1188",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-08",
        "dep": "04:10",
        "arr": "06:20",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-08",
        "dep": "08:45",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0192",
    "date": "2026-11-24",
    "time": "11:50",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA969",
    "route": "MED → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "D3A5CP",
    "pax": 50,
    "rooms": 14,
    "package": "QARIB GA",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "16NOV CGKJED 1355 2000 GA982                              UMRAH LANGSUNG | 23NOV MEDCGK 2155 1150 (+1) GA969                         (JED-MED)",
    "arrivalTime": "11:50",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-11-16",
        "dep": "13:55",
        "arr": "20:00",
        "route": "CGK → JED",
        "flight": "GA982",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-23",
        "dep": "21:55",
        "arr": "11:50",
        "route": "MED → CGK",
        "flight": "GA969",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0193",
    "date": "2026-11-25",
    "time": "08:45",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR959",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "7TWEBP",
    "pax": 45,
    "rooms": 13,
    "package": "THAWIL QR      UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "25NOV CGKDOH 0845 1315 QR959 | 25NOV DOHJED 1800 2035 QR1188 | 08DEC JEDDOH 2205 0015 (+1) QR1189 | 09DEC DOHCGK 0230 1510 QR956",
    "arrivalTime": null,
    "departureTime": "08:45",
    "scheduleLegs": [
      {
        "date": "2026-11-25",
        "dep": "08:45",
        "arr": "13:15",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-25",
        "dep": "18:00",
        "arr": "20:35",
        "route": "DOH → JED",
        "flight": "QR1188",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-08",
        "dep": "22:05",
        "arr": "00:15",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2026-12-09",
        "dep": "02:30",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0194",
    "date": "2026-11-25",
    "time": "13:30",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY849",
    "route": "MCT → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "11NOV CGKMCT 1455 1950 WY850 | 11NOV MCTJED 2130 0005 (+1) WY673                                                         IDRNKH | 24NOV JEDMCT 1800 2200 WY676                                                              ESYCHU | 25NOV MCTCGK 0240 1330 WY849",
    "arrivalTime": "13:30",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-11-11",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-11",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2026-11-24",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-25",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0195",
    "date": "2026-11-25",
    "time": "22:10",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK358",
    "route": "DXB → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "E272QB",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL EK      MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "11NOV CGKDXB 1745 2300 EK357 | 12NOV DXBJED 0015 0225 EK801 | 25NOV JEDDXB 0415 0810 EK802 | 25NOV DXBCGK 1055 2210 EK358",
    "arrivalTime": "22:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-11-11",
        "dep": "17:45",
        "arr": "23:00",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-12",
        "dep": "00:15",
        "arr": "02:25",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-25",
        "dep": "04:15",
        "arr": "08:10",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-25",
        "dep": "10:55",
        "arr": "22:10",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0196",
    "date": "2026-11-26",
    "time": "18:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "8NDLCU",
    "pax": 50,
    "rooms": 14,
    "package": "2X JUMAT QR+   MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "26NOV CGKDOH 1810 2240 QR957                                                                                                                                                                                                                                                                             Jumat, 27 November | 27NOV DOHJED 0105 0340 QR1184                                                                                                                                              Kunooz Ajyad | 05DEC JEDDOH 0410 0620 QR1183                                                                                                                                                 25083                                                                                                                      hotel Madinah: 10.30 | 05DEC DOHCGK 0845 2125 QR954                                                                                                                                                                                                                                                                             check-in: 16.00",
    "arrivalTime": null,
    "departureTime": "18:10",
    "scheduleLegs": [
      {
        "date": "2026-11-26",
        "dep": "18:10",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-27",
        "dep": "01:05",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-05",
        "dep": "04:10",
        "arr": "06:20",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-05",
        "dep": "08:45",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0197",
    "date": "2026-11-26",
    "time": "22:10",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK358",
    "route": "DXB → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "JSQVCS",
    "pax": 45,
    "rooms": 13,
    "package": "THAWIL EK      MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "12NOV CGKDXB 1745 2300 EK357 | 13NOV DXBJED 0015 0225 EK801 | 26NOV JEDDXB 0415 0810 EK802 | 26NOV DXBCGK 1055 2210 EK358",
    "arrivalTime": "22:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-11-12",
        "dep": "17:45",
        "arr": "23:00",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-13",
        "dep": "00:15",
        "arr": "02:25",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-26",
        "dep": "04:15",
        "arr": "08:10",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-26",
        "dep": "10:55",
        "arr": "22:10",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0198",
    "date": "2026-11-28",
    "time": "13:30",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY849",
    "route": "MCT → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "19NOV CGKMCT 1455 1950 WY850                                                                                                                                                                                                                                                                             Jumat, 20 November | 19NOV MCTJED 2130 0005 (+1) WY673                                                         ESRKMS                                                                           Kunooz Ajyad | 27NOV JEDMCT 1800 2200 WY676                                                              ETIRHQ                                                                              25081                                                                                                                      hotel Madinah: 07.00 | 28NOV MCTCGK 0240 1330 WY849                                                                                                                                                                                                                                                                             check-in: 16.00",
    "arrivalTime": "13:30",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-11-19",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-19",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2026-11-27",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-28",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0199",
    "date": "2026-11-28",
    "time": "18:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "28NOV CGKDOH 1810 2230 QR957 | 29NOV DOHJED 0100 0340 QR1184                                                 BELUM",
    "arrivalTime": null,
    "departureTime": "18:10",
    "scheduleLegs": [
      {
        "date": "2026-11-28",
        "dep": "18:10",
        "arr": "22:30",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-29",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0200",
    "date": "2026-11-28",
    "time": "21:25",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "8X96L4",
    "pax": 50,
    "rooms": 14,
    "package": "2X JUMAT QR+   UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "19NOV CGKDOH 1810 2230 QR957 | 20NOV DOHJED 0100 0340 QR1184                                                                                            Kunooz Ajyad | 28NOV JEDDOH 0410 0630 QR1183                                                                                               25082 | 28NOV DOHCGK 0845 2125 QR954",
    "arrivalTime": "21:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-11-19",
        "dep": "18:10",
        "arr": "22:30",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-20",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-28",
        "dep": "04:10",
        "arr": "06:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-28",
        "dep": "08:45",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0201",
    "date": "2026-11-28",
    "time": "22:10",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK358",
    "route": "DXB → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "NIXGBN",
    "pax": 50,
    "rooms": 14,
    "package": "2X JUMAT EK    MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "19NOV CGKDXB 1745 2300 EK357                                                                                                                                                                                                                                                                             Jumat, 20 November | 19NOV DXBJED 0015 0225 EK801 | 28NOV JEDDXB 0415 0810 EK802                                                                                                                                                                                                                                                                             hotel Madinah: 09.30 | 28NOV DXBCGK 1055 2210 EK358                                                                                                                                                                                                                                                                             check-in: 16.00",
    "arrivalTime": "22:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-11-19",
        "dep": "17:45",
        "arr": "23:00",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-19",
        "dep": "00:15",
        "arr": "02:25",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-28",
        "dep": "04:15",
        "arr": "08:10",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-28",
        "dep": "10:55",
        "arr": "22:10",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0202",
    "date": "2026-11-29",
    "time": "08:45",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR959",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "7TTM5W",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN QR      MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "29NOV CGKDOH 0845 1315 QR959 | 29NOV DOHJED 1525 1800 QR1186 | 07DEC JEDDOH 0410 0620 QR1183 | 07DEC DOHCGK 0845 2125 QR954",
    "arrivalTime": null,
    "departureTime": "08:45",
    "scheduleLegs": [
      {
        "date": "2026-11-29",
        "dep": "08:45",
        "arr": "13:15",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-29",
        "dep": "15:25",
        "arr": "18:00",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-07",
        "dep": "04:10",
        "arr": "06:20",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-07",
        "dep": "08:45",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0203",
    "date": "2026-11-29",
    "time": "13:55",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA982",
    "route": "CGK → JED",
    "type": "DEPARTURE_CGK",
    "pnr": "E5Y6J6",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL+ GA",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "29NOV CGKJED 1355 2000 GA982                              UMRAH LANGSUNG | 12DEC MEDCGK 1705 0635 (+1) GA969                         (JED-MED)",
    "arrivalTime": null,
    "departureTime": "13:55",
    "scheduleLegs": [
      {
        "date": "2026-11-29",
        "dep": "13:55",
        "arr": "20:00",
        "route": "CGK → JED",
        "flight": "GA982",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-12",
        "dep": "17:05",
        "arr": "06:35",
        "route": "MED → CGK",
        "flight": "GA969",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0204",
    "date": "2026-11-30",
    "time": "06:35",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA969",
    "route": "MED → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "FRY38Z",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL+ GA",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "16NOV CGKJED 1355 2000 GA982                              UMRAH LANGSUNG | 29NOV MEDCGK 1705 0635 (+1) GA969                         (JED-MED)",
    "arrivalTime": "06:35",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-11-16",
        "dep": "13:55",
        "arr": "20:00",
        "route": "CGK → JED",
        "flight": "GA982",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-29",
        "dep": "17:05",
        "arr": "06:35",
        "route": "MED → CGK",
        "flight": "GA969",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0205",
    "date": "2026-11-30",
    "time": "08:45",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR959",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "7TT9B3",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "30NOV CGKDOH 0845 1315 QR959 | 30NOV DOHJED 1800 2035 QR1188                                                 BELUM | 08DEC JEDDOH 0410 0620 QR1183                                                RELEASE | 08DEC DOHCGK 0845 2125 QR954",
    "arrivalTime": null,
    "departureTime": "08:45",
    "scheduleLegs": [
      {
        "date": "2026-11-30",
        "dep": "08:45",
        "arr": "13:15",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-30",
        "dep": "18:00",
        "arr": "20:35",
        "route": "DOH → JED",
        "flight": "QR1188",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-08",
        "dep": "04:10",
        "arr": "06:20",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-08",
        "dep": "08:45",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0206",
    "date": "2026-11-30",
    "time": "15:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR956",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "22NOV CGKDOH 1810 2230 QR957 | 23NOV DOHJED 0100 0340 QR1184 | 29NOV JEDDOH 2205 0025 (+1) QR1189 | 30NOV DOHCGK 0230 1510 QR956",
    "arrivalTime": "15:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-11-22",
        "dep": "18:10",
        "arr": "22:30",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-23",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-29",
        "dep": "22:05",
        "arr": "00:25",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2026-11-30",
        "dep": "02:30",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0207",
    "date": "2026-12-01",
    "time": "08:45",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR959",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "8XT5JN",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN QR      UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "01DEC CGKDOH 0845 1315 QR959 | 01DEC DOHJED 1800 2035 QR1188 | 09DEC JEDDOH 0410 0620 QR1183 | 09DEC DOHCGK 0845 2125 QR954",
    "arrivalTime": null,
    "departureTime": "08:45",
    "scheduleLegs": [
      {
        "date": "2026-12-01",
        "dep": "08:45",
        "arr": "13:15",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-01",
        "dep": "18:00",
        "arr": "20:35",
        "route": "DOH → JED",
        "flight": "QR1188",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-09",
        "dep": "04:10",
        "arr": "06:20",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-09",
        "dep": "08:45",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0208",
    "date": "2026-12-01",
    "time": "12:00",
    "airline": "SV",
    "airlineName": "Saudia",
    "flight": "SV821",
    "route": "CGK → MED",
    "type": "DEPARTURE_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "01DEC CGKMED 1200 1755 SV821                               MADINAH DULU        BELUM | 09DEC JEDCGK 0220 1600 SV818                               (MED-JED)          RELEASE",
    "arrivalTime": null,
    "departureTime": "12:00",
    "scheduleLegs": [
      {
        "date": "2026-12-01",
        "dep": "12:00",
        "arr": "17:55",
        "route": "CGK → MED",
        "flight": "SV821",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-09",
        "dep": "02:20",
        "arr": "16:00",
        "route": "JED → CGK",
        "flight": "SV818",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0209",
    "date": "2026-12-01",
    "time": "17:45",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK357",
    "route": "CGK → DXB",
    "type": "DEPARTURE_CGK",
    "pnr": "C7VARG",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN EK      UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "01DEC CGKDXB 1745 2300 EK357 | 02DEC DXBJED 0015 0225 EK801 | 09DEC JEDDXB 0415 0810 EK802 | 09DEC DXBCGK 1055 2210 EK358",
    "arrivalTime": null,
    "departureTime": "17:45",
    "scheduleLegs": [
      {
        "date": "2026-12-01",
        "dep": "17:45",
        "arr": "23:00",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-02",
        "dep": "00:15",
        "arr": "02:25",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-09",
        "dep": "04:15",
        "arr": "08:10",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-09",
        "dep": "10:55",
        "arr": "22:10",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0210",
    "date": "2026-12-01",
    "time": "22:10",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK358",
    "route": "DXB → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "FU34VF",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL EK      MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "17NOV CGKDXB 1745 2300 EK357 | 18NOV DXBJED 0015 0225 EK801 | 01DEC JEDDXB 0415 0810 EK802 | 01DEC DXBCGK 1055 2210 EK358",
    "arrivalTime": "22:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-11-17",
        "dep": "17:45",
        "arr": "23:00",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-18",
        "dep": "00:15",
        "arr": "02:25",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-01",
        "dep": "04:15",
        "arr": "08:10",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-01",
        "dep": "10:55",
        "arr": "22:10",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0211",
    "date": "2026-12-03",
    "time": "00:15",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK359",
    "route": "CGK → DXB",
    "type": "DEPARTURE_CGK",
    "pnr": "EJZTAB",
    "pax": 45,
    "rooms": 13,
    "package": "2X JUMAT EK    MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "03DEC CGKDXB 0015 0530 EK359 | 03DEC DXBJED 0705 0920 EK805                                                                                                                                             Kunooz Ajyad | 12DEC JEDDXB 0415 0810 EK802                                                                                                                                                25084 | 12DEC DXBCGK 1055 2210 EK358",
    "arrivalTime": null,
    "departureTime": "00:15",
    "scheduleLegs": [
      {
        "date": "2026-12-03",
        "dep": "00:15",
        "arr": "05:30",
        "route": "CGK → DXB",
        "flight": "EK359",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-03",
        "dep": "07:05",
        "arr": "09:20",
        "route": "DXB → JED",
        "flight": "EK805",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-12",
        "dep": "04:15",
        "arr": "08:10",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-12",
        "dep": "10:55",
        "arr": "22:10",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0212",
    "date": "2026-12-03",
    "time": "18:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "8Y3E4W",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "03DEC CGKDOH 1810 2240 QR957 | 04DEC DOHJED 0105 0340 QR1184                                                  BELUM | 12DEC JEDDOH 0510 0720 QR1185                                                 RELEASE | 12DEC DOHCGK 0845 2125 QR954",
    "arrivalTime": null,
    "departureTime": "18:10",
    "scheduleLegs": [
      {
        "date": "2026-12-03",
        "dep": "18:10",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-04",
        "dep": "01:05",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-12",
        "dep": "05:10",
        "arr": "07:20",
        "route": "JED → DOH",
        "flight": "QR1185",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-12",
        "dep": "08:45",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0213",
    "date": "2026-12-05",
    "time": "00:15",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK359",
    "route": "CGK → DXB",
    "type": "DEPARTURE_CGK",
    "pnr": "P5Q---",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "05DEC CGKDXB 0015 0530 EK359 | 05DEC DXBJED 0705 0920 EK805                                                   BELUM | 13DEC JEDDXB 0415 0810 EK802                                                  RELEASE | 13DEC DXBCGK 1055 2210 EK358",
    "arrivalTime": null,
    "departureTime": "00:15",
    "scheduleLegs": [
      {
        "date": "2026-12-05",
        "dep": "00:15",
        "arr": "05:30",
        "route": "CGK → DXB",
        "flight": "EK359",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-05",
        "dep": "07:05",
        "arr": "09:20",
        "route": "DXB → JED",
        "flight": "EK805",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-13",
        "dep": "04:15",
        "arr": "08:10",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-13",
        "dep": "10:55",
        "arr": "22:10",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0214",
    "date": "2026-12-05",
    "time": "08:45",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR959",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "9XW3BT",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "05DEC CGKDOH 0845 1325 QR959 | 05DEC DOHJED 1520 1800 QR1186                                                  BELUM | 13DEC JEDDOH 0410 0630 QR1183                                                 RELEASE | 13DEC DOHCGK 0855 2125 QR954",
    "arrivalTime": null,
    "departureTime": "08:45",
    "scheduleLegs": [
      {
        "date": "2026-12-05",
        "dep": "08:45",
        "arr": "13:25",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-05",
        "dep": "15:20",
        "arr": "18:00",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-13",
        "dep": "04:10",
        "arr": "06:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-13",
        "dep": "08:55",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0215",
    "date": "2026-12-05",
    "time": "21:25",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "8NDLCU",
    "pax": 50,
    "rooms": 14,
    "package": "2X JUMAT QR+   MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "26NOV CGKDOH 1810 2240 QR957                                                                                                                                                                                                                                                                             Jumat, 27 November | 27NOV DOHJED 0105 0340 QR1184                                                                                                                                              Kunooz Ajyad | 05DEC JEDDOH 0410 0620 QR1183                                                                                                                                                 25083                                                                                                                      hotel Madinah: 10.30 | 05DEC DOHCGK 0845 2125 QR954                                                                                                                                                                                                                                                                             check-in: 16.00",
    "arrivalTime": "21:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-11-26",
        "dep": "18:10",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-27",
        "dep": "01:05",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-05",
        "dep": "04:10",
        "arr": "06:20",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-05",
        "dep": "08:45",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0216",
    "date": "2026-12-06",
    "time": "06:35",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA969",
    "route": "MED → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "DI44VD",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL+ GA",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "22NOV CGKJED 1355 2000 GA982                              UMRAH LANGSUNG | 05DEC MEDCGK 1705 0635 (+1) GA969                         (JED-MED)",
    "arrivalTime": "06:35",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-11-22",
        "dep": "13:55",
        "arr": "20:00",
        "route": "CGK → JED",
        "flight": "GA982",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-05",
        "dep": "17:05",
        "arr": "06:35",
        "route": "MED → CGK",
        "flight": "GA969",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0217",
    "date": "2026-12-06",
    "time": "08:45",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR959",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "8Y9M5I",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN QR      MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "06DEC CGKDOH 0845 1325 QR959 | 06DEC DOHJED 1520 1800 QR1186 | 14DEC JEDDOH 0410 0630 QR1183 | 14DEC DOHCGK 0855 2125 QR954",
    "arrivalTime": null,
    "departureTime": "08:45",
    "scheduleLegs": [
      {
        "date": "2026-12-06",
        "dep": "08:45",
        "arr": "13:25",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-06",
        "dep": "15:20",
        "arr": "18:00",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-14",
        "dep": "04:10",
        "arr": "06:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-14",
        "dep": "08:55",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0218",
    "date": "2026-12-06",
    "time": "13:55",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA982",
    "route": "CGK → JED",
    "type": "DEPARTURE_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "06DEC CGKJED 1355 2000 GA982                               UMRAH LANGSUNG | 19DEC MEDCGK 1705 0635 (+1) GA969                          (JED-MED)",
    "arrivalTime": null,
    "departureTime": "13:55",
    "scheduleLegs": [
      {
        "date": "2026-12-06",
        "dep": "13:55",
        "arr": "20:00",
        "route": "CGK → JED",
        "flight": "GA982",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-19",
        "dep": "17:05",
        "arr": "06:35",
        "route": "MED → CGK",
        "flight": "GA969",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0219",
    "date": "2026-12-07",
    "time": "17:30",
    "airline": "SV",
    "airlineName": "Saudia",
    "flight": "SV819",
    "route": "CGK → JED",
    "type": "DEPARTURE_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "07DEC CGKJED 1730 2325 SV819                               UMRAH LANGSUNG      BELUM | 14DEC MEDCGK 2050 1025 (+1) SV820                          (JED-MED)          RELEASE",
    "arrivalTime": null,
    "departureTime": "17:30",
    "scheduleLegs": [
      {
        "date": "2026-12-07",
        "dep": "17:30",
        "arr": "23:25",
        "route": "CGK → JED",
        "flight": "SV819",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-14",
        "dep": "20:50",
        "arr": "10:25",
        "route": "MED → CGK",
        "flight": "SV820",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0220",
    "date": "2026-12-07",
    "time": "17:45",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK357",
    "route": "CGK → DXB",
    "type": "DEPARTURE_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "07DEC CGKDXB 1745 2300 EK357 | 08DEC DXBJED 0015 0225 EK801                                                   BELUM | 14DEC JEDDXB 2035 0030 EK804                                                  RELEASE | 15DEC DXBCGK 0425 1540 EK356",
    "arrivalTime": null,
    "departureTime": "17:45",
    "scheduleLegs": [
      {
        "date": "2026-12-07",
        "dep": "17:45",
        "arr": "23:00",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-08",
        "dep": "00:15",
        "arr": "02:25",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-14",
        "dep": "20:35",
        "arr": "00:30",
        "route": "JED → DXB",
        "flight": "EK804",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-15",
        "dep": "04:25",
        "arr": "15:40",
        "route": "DXB → CGK",
        "flight": "EK356",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0221",
    "date": "2026-12-07",
    "time": "18:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "07DEC CGKDOH 1810 2240 QR957 | 08DEC DOHJED 0105 0340 QR1184 | 15DEC JEDDOH 0410 0620 QR1183 | 15DEC DOHCGK 0845 2125 QR954",
    "arrivalTime": null,
    "departureTime": "18:10",
    "scheduleLegs": [
      {
        "date": "2026-12-07",
        "dep": "18:10",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-08",
        "dep": "01:05",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-15",
        "dep": "04:10",
        "arr": "06:20",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-15",
        "dep": "08:45",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0222",
    "date": "2026-12-07",
    "time": "21:25",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "7TTM5W",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN QR      MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "29NOV CGKDOH 0845 1315 QR959 | 29NOV DOHJED 1525 1800 QR1186 | 07DEC JEDDOH 0410 0620 QR1183 | 07DEC DOHCGK 0845 2125 QR954",
    "arrivalTime": "21:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-11-29",
        "dep": "08:45",
        "arr": "13:15",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-29",
        "dep": "15:25",
        "arr": "18:00",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-07",
        "dep": "04:10",
        "arr": "06:20",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-07",
        "dep": "08:45",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0223",
    "date": "2026-12-08",
    "time": "04:35",
    "airline": "SV",
    "airlineName": "Saudia",
    "flight": "SV823",
    "route": "CGK → JED",
    "type": "DEPARTURE_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "08DEC CGKJED 0435 1030 SV823                                                   BELUM | 15DEC JEDCGK 1305 0245 (+1) SV822                                             RELEASE",
    "arrivalTime": null,
    "departureTime": "04:35",
    "scheduleLegs": [
      {
        "date": "2026-12-08",
        "dep": "04:35",
        "arr": "10:30",
        "route": "CGK → JED",
        "flight": "SV823",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-15",
        "dep": "13:05",
        "arr": "02:45",
        "route": "JED → CGK",
        "flight": "SV822",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0224",
    "date": "2026-12-08",
    "time": "18:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "8Y3GU9, 93RS94",
    "pax": 92,
    "rooms": 13,
    "package": "HAQQAN QR      UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "08DEC CGKDOH 1810 2250 QR957 | 09DEC DOHJED 0100 0340 QR1184                                                  BELUM | 21DEC JEDDOH 2205 0025 (+1) QR1189                                            RELEASE | 22DEC DOHCGK 0240 1510 QR956",
    "arrivalTime": null,
    "departureTime": "18:10",
    "scheduleLegs": [
      {
        "date": "2026-12-08",
        "dep": "18:10",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-09",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-21",
        "dep": "22:05",
        "arr": "00:25",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2026-12-22",
        "dep": "02:40",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0225",
    "date": "2026-12-08",
    "time": "21:25",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "7TT9B3, 8EU2ZT",
    "pax": 95,
    "rooms": 14,
    "package": "THAWIL QR      UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "30NOV CGKDOH 0845 1315 QR959 | 30NOV DOHJED 1800 2035 QR1188                                                 BELUM | 08DEC JEDDOH 0410 0620 QR1183                                                RELEASE | 08DEC DOHCGK 0845 2125 QR954",
    "arrivalTime": "21:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-11-30",
        "dep": "08:45",
        "arr": "13:15",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-30",
        "dep": "18:00",
        "arr": "20:35",
        "route": "DOH → JED",
        "flight": "QR1188",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-08",
        "dep": "04:10",
        "arr": "06:20",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-08",
        "dep": "08:45",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0226",
    "date": "2026-12-09",
    "time": "15:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR956",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "7TWEBP",
    "pax": 45,
    "rooms": 13,
    "package": "THAWIL QR      UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "25NOV CGKDOH 0845 1315 QR959 | 25NOV DOHJED 1800 2035 QR1188 | 08DEC JEDDOH 2205 0015 (+1) QR1189 | 09DEC DOHCGK 0230 1510 QR956",
    "arrivalTime": "15:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-11-25",
        "dep": "08:45",
        "arr": "13:15",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-11-25",
        "dep": "18:00",
        "arr": "20:35",
        "route": "DOH → JED",
        "flight": "QR1188",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-08",
        "dep": "22:05",
        "arr": "00:15",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2026-12-09",
        "dep": "02:30",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0227",
    "date": "2026-12-09",
    "time": "16:00",
    "airline": "SV",
    "airlineName": "Saudia",
    "flight": "SV818",
    "route": "JED → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "01DEC CGKMED 1200 1755 SV821                               MADINAH DULU        BELUM | 09DEC JEDCGK 0220 1600 SV818                               (MED-JED)          RELEASE",
    "arrivalTime": "16:00",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-12-01",
        "dep": "12:00",
        "arr": "17:55",
        "route": "CGK → MED",
        "flight": "SV821",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-09",
        "dep": "02:20",
        "arr": "16:00",
        "route": "JED → CGK",
        "flight": "SV818",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0228",
    "date": "2026-12-09",
    "time": "18:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "797FC3",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "09DEC CGKDOH 1810 2250 QR957 | 10DEC DOHJED 0100 0340 QR1184                                                  BELUM | 17DEC DOHCGK 0240 1510 QR956",
    "arrivalTime": null,
    "departureTime": "18:10",
    "scheduleLegs": [
      {
        "date": "2026-12-09",
        "dep": "18:10",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-10",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-17",
        "dep": "02:40",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0229",
    "date": "2026-12-09",
    "time": "21:25",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "8XT5JN",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN QR      UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "01DEC CGKDOH 0845 1315 QR959 | 01DEC DOHJED 1800 2035 QR1188 | 09DEC JEDDOH 0410 0620 QR1183 | 09DEC DOHCGK 0845 2125 QR954",
    "arrivalTime": "21:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-12-01",
        "dep": "08:45",
        "arr": "13:15",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-01",
        "dep": "18:00",
        "arr": "20:35",
        "route": "DOH → JED",
        "flight": "QR1188",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-09",
        "dep": "04:10",
        "arr": "06:20",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-09",
        "dep": "08:45",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0230",
    "date": "2026-12-09",
    "time": "22:10",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK358",
    "route": "DXB → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "C7VARG",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN EK      UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "01DEC CGKDXB 1745 2300 EK357 | 02DEC DXBJED 0015 0225 EK801 | 09DEC JEDDXB 0415 0810 EK802 | 09DEC DXBCGK 1055 2210 EK358",
    "arrivalTime": "22:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-12-01",
        "dep": "17:45",
        "arr": "23:00",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-02",
        "dep": "00:15",
        "arr": "02:25",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-09",
        "dep": "04:15",
        "arr": "08:10",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-09",
        "dep": "10:55",
        "arr": "22:10",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0231",
    "date": "2026-12-10",
    "time": "08:45",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR959",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "797LGT, 9YBWDS",
    "pax": 90,
    "rooms": 13,
    "package": "HAQQAN QR      UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "10DEC CGKDOH 0845 1325 QR959 | 10DEC DOHJED 1520 1800 QR1186                                                  BELUM | 18DEC JEDDOH 0510 0730 QR1185                                                 RELEASE | 18DEC DOHCGK 0855 2125 QR954",
    "arrivalTime": null,
    "departureTime": "08:45",
    "scheduleLegs": [
      {
        "date": "2026-12-10",
        "dep": "08:45",
        "arr": "13:25",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-10",
        "dep": "15:20",
        "arr": "18:00",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-18",
        "dep": "05:10",
        "arr": "07:30",
        "route": "JED → DOH",
        "flight": "QR1185",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-18",
        "dep": "08:55",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0232",
    "date": "2026-12-12",
    "time": "15:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR956",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "03DEC CGKDOH 1810 2240 QR957 | 04DEC DOHJED 0100 0340 QR1184 | 11DEC JEDDOH 2205 0025 (+1) QR1189 | 12DEC DOHCGK 0240 1510 QR956",
    "arrivalTime": "15:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-12-03",
        "dep": "18:10",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-04",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-11",
        "dep": "22:05",
        "arr": "00:25",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2026-12-12",
        "dep": "02:40",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0233",
    "date": "2026-12-12",
    "time": "21:25",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "8Y3E4W",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "03DEC CGKDOH 1810 2240 QR957 | 04DEC DOHJED 0105 0340 QR1184                                                  BELUM | 12DEC JEDDOH 0510 0720 QR1185                                                 RELEASE | 12DEC DOHCGK 0845 2125 QR954",
    "arrivalTime": "21:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-12-03",
        "dep": "18:10",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-04",
        "dep": "01:05",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-12",
        "dep": "05:10",
        "arr": "07:20",
        "route": "JED → DOH",
        "flight": "QR1185",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-12",
        "dep": "08:45",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0234",
    "date": "2026-12-12",
    "time": "22:10",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK358",
    "route": "DXB → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "EJZTAB",
    "pax": 45,
    "rooms": 13,
    "package": "2X JUMAT EK    MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "03DEC CGKDXB 0015 0530 EK359 | 03DEC DXBJED 0705 0920 EK805                                                                                                                                             Kunooz Ajyad | 12DEC JEDDXB 0415 0810 EK802                                                                                                                                                25084 | 12DEC DXBCGK 1055 2210 EK358",
    "arrivalTime": "22:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-12-03",
        "dep": "00:15",
        "arr": "05:30",
        "route": "CGK → DXB",
        "flight": "EK359",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-03",
        "dep": "07:05",
        "arr": "09:20",
        "route": "DXB → JED",
        "flight": "EK805",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-12",
        "dep": "04:15",
        "arr": "08:10",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-12",
        "dep": "10:55",
        "arr": "22:10",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0235",
    "date": "2026-12-13",
    "time": "00:20",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR955",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "7O7SJC",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "13DEC CGKDOH 0020 0500 QR955 | 13DEC DOHJED 0725 1005 QR1190                                                  BELUM | 21DEC JEDDOH 1230 1450 QR1193                                                 RELEASE",
    "arrivalTime": null,
    "departureTime": "00:20",
    "scheduleLegs": [
      {
        "date": "2026-12-13",
        "dep": "00:20",
        "arr": "05:00",
        "route": "CGK → DOH",
        "flight": "QR955",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-13",
        "dep": "07:25",
        "arr": "10:05",
        "route": "DOH → JED",
        "flight": "QR1190",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-21",
        "dep": "12:30",
        "arr": "14:50",
        "route": "JED → DOH",
        "flight": "QR1193",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0236",
    "date": "2026-12-13",
    "time": "06:35",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA969",
    "route": "MED → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "E5Y6J6",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL+ GA",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "29NOV CGKJED 1355 2000 GA982                              UMRAH LANGSUNG | 12DEC MEDCGK 1705 0635 (+1) GA969                         (JED-MED)",
    "arrivalTime": "06:35",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-11-29",
        "dep": "13:55",
        "arr": "20:00",
        "route": "CGK → JED",
        "flight": "GA982",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-12",
        "dep": "17:05",
        "arr": "06:35",
        "route": "MED → CGK",
        "flight": "GA969",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0237",
    "date": "2026-12-13",
    "time": "18:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "13DEC CGKDOH 1810 2250 QR957 | 14DEC DOHJED 0100 0340 QR1184                                                  BELUM | 21DEC JEDDOH 0410 0630 QR1183                                                 RELEASE | 21DEC DOHCGK 0855 2125 QR954",
    "arrivalTime": null,
    "departureTime": "18:10",
    "scheduleLegs": [
      {
        "date": "2026-12-13",
        "dep": "18:10",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-14",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-21",
        "dep": "04:10",
        "arr": "06:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-21",
        "dep": "08:55",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0238",
    "date": "2026-12-13",
    "time": "21:25",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "9XW3BT",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "05DEC CGKDOH 0845 1325 QR959 | 05DEC DOHJED 1520 1800 QR1186                                                  BELUM | 13DEC JEDDOH 0410 0630 QR1183                                                 RELEASE | 13DEC DOHCGK 0855 2125 QR954",
    "arrivalTime": "21:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-12-05",
        "dep": "08:45",
        "arr": "13:25",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-05",
        "dep": "15:20",
        "arr": "18:00",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-13",
        "dep": "04:10",
        "arr": "06:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-13",
        "dep": "08:55",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0239",
    "date": "2026-12-13",
    "time": "22:10",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK358",
    "route": "DXB → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "P5Q---",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "05DEC CGKDXB 0015 0530 EK359 | 05DEC DXBJED 0705 0920 EK805                                                   BELUM | 13DEC JEDDXB 0415 0810 EK802                                                  RELEASE | 13DEC DXBCGK 1055 2210 EK358",
    "arrivalTime": "22:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-12-05",
        "dep": "00:15",
        "arr": "05:30",
        "route": "CGK → DXB",
        "flight": "EK359",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-05",
        "dep": "07:05",
        "arr": "09:20",
        "route": "DXB → JED",
        "flight": "EK805",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-13",
        "dep": "04:15",
        "arr": "08:10",
        "route": "JED → DXB",
        "flight": "EK802",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-13",
        "dep": "10:55",
        "arr": "22:10",
        "route": "DXB → CGK",
        "flight": "EK358",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0240",
    "date": "2026-12-14",
    "time": "08:45",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR959",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "8YBK2W",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN QR      UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "14DEC CGKDOH 0845 1315 QR959 | 14DEC DOHJED 1800 2035 QR1188 | 22DEC JEDDOH 0410 0620 QR1183 | 22DEC DOHCGK 0845 2125 QR954",
    "arrivalTime": null,
    "departureTime": "08:45",
    "scheduleLegs": [
      {
        "date": "2026-12-14",
        "dep": "08:45",
        "arr": "13:15",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-14",
        "dep": "18:00",
        "arr": "20:35",
        "route": "DOH → JED",
        "flight": "QR1188",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-22",
        "dep": "04:10",
        "arr": "06:20",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-22",
        "dep": "08:45",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0241",
    "date": "2026-12-14",
    "time": "14:55",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "MRLSCI",
    "pax": 40,
    "rooms": 12,
    "package": "UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "14DEC CGKMCT 1455 1950 WY850 | 14DEC MCTJED 2130 0005 (+1) WY673           AKHIR TAHUN | 21DEC JEDMCT 1800 2200 WY676                WY | 22DEC MCTCGK 0240 1330 WY849",
    "arrivalTime": null,
    "departureTime": "14:55",
    "scheduleLegs": [
      {
        "date": "2026-12-14",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-14",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2026-12-21",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-22",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0242",
    "date": "2026-12-14",
    "time": "21:25",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "8Y9M5I",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN QR      MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "06DEC CGKDOH 0845 1325 QR959 | 06DEC DOHJED 1520 1800 QR1186 | 14DEC JEDDOH 0410 0630 QR1183 | 14DEC DOHCGK 0855 2125 QR954",
    "arrivalTime": "21:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-12-06",
        "dep": "08:45",
        "arr": "13:25",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-06",
        "dep": "15:20",
        "arr": "18:00",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-14",
        "dep": "04:10",
        "arr": "06:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-14",
        "dep": "08:55",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0243",
    "date": "2026-12-15",
    "time": "00:20",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR955",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "82Q3CM",
    "pax": 50,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "15DEC CGKDOH 0020 0500 QR955 | 15DEC DOHJED 0725 1005 QR1190                                                 BELUM | 29DEC JEDDOH 0510 0730 QR1185                                                RELEASE | 29DEC DOHCGK 0855 2125 QR954",
    "arrivalTime": null,
    "departureTime": "00:20",
    "scheduleLegs": [
      {
        "date": "2026-12-15",
        "dep": "00:20",
        "arr": "05:00",
        "route": "CGK → DOH",
        "flight": "QR955",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-15",
        "dep": "07:25",
        "arr": "10:05",
        "route": "DOH → JED",
        "flight": "QR1190",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-29",
        "dep": "05:10",
        "arr": "07:30",
        "route": "JED → DOH",
        "flight": "QR1185",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-29",
        "dep": "08:55",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0244",
    "date": "2026-12-15",
    "time": "08:45",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR959",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "8Y9WSJ",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN QR      UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "15DEC CGKDOH 0845 1315 QR959 | 15DEC DOHJED 1525 1800 QR1186 | 23DEC JEDDOH 0410 0620 QR1183 | 23DEC DOHCGK 0845 2125 QR954",
    "arrivalTime": null,
    "departureTime": "08:45",
    "scheduleLegs": [
      {
        "date": "2026-12-15",
        "dep": "08:45",
        "arr": "13:15",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-15",
        "dep": "15:25",
        "arr": "18:00",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-23",
        "dep": "04:10",
        "arr": "06:20",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-23",
        "dep": "08:45",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0245",
    "date": "2026-12-15",
    "time": "10:25",
    "airline": "SV",
    "airlineName": "Saudia",
    "flight": "SV820",
    "route": "MED → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "07DEC CGKJED 1730 2325 SV819                               UMRAH LANGSUNG      BELUM | 14DEC MEDCGK 2050 1025 (+1) SV820                          (JED-MED)          RELEASE",
    "arrivalTime": "10:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-12-07",
        "dep": "17:30",
        "arr": "23:25",
        "route": "CGK → JED",
        "flight": "SV819",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-14",
        "dep": "20:50",
        "arr": "10:25",
        "route": "MED → CGK",
        "flight": "SV820",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0246",
    "date": "2026-12-15",
    "time": "14:55",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "MRLSCI",
    "pax": 40,
    "rooms": 12,
    "package": "UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "15DEC CGKMCT 1455 1950 WY850 | 15DEC MCTJED 2130 0005 (+1) WY673           AKHIR TAHUN | 22DEC JEDMCT 1800 2200 WY676                WY | 23DEC MCTCGK 0240 1330 WY849",
    "arrivalTime": null,
    "departureTime": "14:55",
    "scheduleLegs": [
      {
        "date": "2026-12-15",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-15",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2026-12-22",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-23",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0247",
    "date": "2026-12-15",
    "time": "15:40",
    "airline": "EK",
    "airlineName": "Emirates",
    "flight": "EK356",
    "route": "DXB → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "07DEC CGKDXB 1745 2300 EK357 | 08DEC DXBJED 0015 0225 EK801                                                   BELUM | 14DEC JEDDXB 2035 0030 EK804                                                  RELEASE | 15DEC DXBCGK 0425 1540 EK356",
    "arrivalTime": "15:40",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-12-07",
        "dep": "17:45",
        "arr": "23:00",
        "route": "CGK → DXB",
        "flight": "EK357",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-08",
        "dep": "00:15",
        "arr": "02:25",
        "route": "DXB → JED",
        "flight": "EK801",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-14",
        "dep": "20:35",
        "arr": "00:30",
        "route": "JED → DXB",
        "flight": "EK804",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-15",
        "dep": "04:25",
        "arr": "15:40",
        "route": "DXB → CGK",
        "flight": "EK356",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0248",
    "date": "2026-12-15",
    "time": "18:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "78G758",
    "pax": 50,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "15DEC CGKDOH 1810 2250 QR957 | 16DEC DOHJED 0100 0340 QR1184                                                  BELUM | 28DEC JEDDOH 1930 2150 QR1187                                                 RELEASE | 29DEC DOHCGK 0240 1510 QR956",
    "arrivalTime": null,
    "departureTime": "18:10",
    "scheduleLegs": [
      {
        "date": "2026-12-15",
        "dep": "18:10",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-16",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-28",
        "dep": "19:30",
        "arr": "21:50",
        "route": "JED → DOH",
        "flight": "QR1187",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-29",
        "dep": "02:40",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0249",
    "date": "2026-12-15",
    "time": "21:25",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "07DEC CGKDOH 1810 2240 QR957 | 08DEC DOHJED 0105 0340 QR1184 | 15DEC JEDDOH 0410 0620 QR1183 | 15DEC DOHCGK 0845 2125 QR954",
    "arrivalTime": "21:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-12-07",
        "dep": "18:10",
        "arr": "22:40",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-08",
        "dep": "01:05",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-15",
        "dep": "04:10",
        "arr": "06:20",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-15",
        "dep": "08:45",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0250",
    "date": "2026-12-16",
    "time": "00:20",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR955",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "9HMNXK",
    "pax": 45,
    "rooms": 13,
    "package": "UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "16DEC CGKDOH 0020 0500 QR955 | 16DEC DOHJED 0725 1005 QR1190               AKHIR TAHUN | 24DEC JEDDOH 0410 0630 QR1183               QR | 24DEC DOHCGK 0855 2125 QR954",
    "arrivalTime": null,
    "departureTime": "00:20",
    "scheduleLegs": [
      {
        "date": "2026-12-16",
        "dep": "00:20",
        "arr": "05:00",
        "route": "CGK → DOH",
        "flight": "QR955",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-16",
        "dep": "07:25",
        "arr": "10:05",
        "route": "DOH → JED",
        "flight": "QR1190",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-24",
        "dep": "04:10",
        "arr": "06:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-24",
        "dep": "08:55",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0251",
    "date": "2026-12-16",
    "time": "02:45",
    "airline": "SV",
    "airlineName": "Saudia",
    "flight": "SV822",
    "route": "JED → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "08DEC CGKJED 0435 1030 SV823                                                   BELUM | 15DEC JEDCGK 1305 0245 (+1) SV822                                             RELEASE",
    "arrivalTime": "02:45",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-12-08",
        "dep": "04:35",
        "arr": "10:30",
        "route": "CGK → JED",
        "flight": "SV823",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-15",
        "dep": "13:05",
        "arr": "02:45",
        "route": "JED → CGK",
        "flight": "SV822",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0252",
    "date": "2026-12-16",
    "time": "14:55",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "KBUSNM",
    "pax": 40,
    "rooms": 12,
    "package": "UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "16DEC CGKMCT 1455 1950 WY850 | 16DEC MCTJED 2130 0005 (+1) WY673            AKHIR TAHUN | 23DEC JEDMCT 1800 2200 WY676                 WY | 24DEC MCTCGK 0240 1330 WY849",
    "arrivalTime": null,
    "departureTime": "14:55",
    "scheduleLegs": [
      {
        "date": "2026-12-16",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-16",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2026-12-23",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-24",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0253",
    "date": "2026-12-16",
    "time": "21:25",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "8Y3GU9",
    "pax": 42,
    "rooms": 13,
    "package": "HAQQAN QR      UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "08DEC CGKDOH 1810 2250 QR957 | 09DEC DOHJED 0100 0340 QR1184 | 16DEC JEDDOH 0410 0630 QR1183 | 16DEC DOHCGK 0855 2125 QR954",
    "arrivalTime": "21:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-12-08",
        "dep": "18:10",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-09",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-16",
        "dep": "04:10",
        "arr": "06:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-16",
        "dep": "08:55",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0254",
    "date": "2026-12-17",
    "time": "00:20",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR955",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "78H4UQ",
    "pax": 50,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "17DEC CGKDOH 0020 0500 QR955 | 17DEC DOHJED 0725 1005 QR1190                                                  BELUM | 25DEC JEDDOH 2205 0025 (+1) QR1189                                            RELEASE",
    "arrivalTime": null,
    "departureTime": "00:20",
    "scheduleLegs": [
      {
        "date": "2026-12-17",
        "dep": "00:20",
        "arr": "05:00",
        "route": "CGK → DOH",
        "flight": "QR955",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-17",
        "dep": "07:25",
        "arr": "10:05",
        "route": "DOH → JED",
        "flight": "QR1190",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-25",
        "dep": "22:05",
        "arr": "00:25",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0255",
    "date": "2026-12-17",
    "time": "08:45",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR959",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "17DEC CGKDOH 0845 1325 QR959 | 17DEC DOHJED 1755 2035 QR1188                AKHIR TAHUN | 25DEC JEDDOH 0410 0630 QR1183                QR | 25DEC DOHCGK 0855 2125 QR954",
    "arrivalTime": null,
    "departureTime": "08:45",
    "scheduleLegs": [
      {
        "date": "2026-12-17",
        "dep": "08:45",
        "arr": "13:25",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-17",
        "dep": "17:55",
        "arr": "20:35",
        "route": "DOH → JED",
        "flight": "QR1188",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-25",
        "dep": "04:10",
        "arr": "06:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-25",
        "dep": "08:55",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0256",
    "date": "2026-12-17",
    "time": "14:55",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "NKUJVA, DPVOOO",
    "pax": 80,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "17DEC CGKMCT 1455 1950 WY850                 AKHIR TAHUN | 17DEC MCTJED 2130 0005 (+1) WY673            (BUS 1) WY | 24DEC JEDMCT 1800 2200 WY676                 AKHIR TAHUN | 25DEC MCTCGK 0240 1330 WY849                                                               DPVOOO       40      12                                                                                                2                                      Rp13,600,000    Rp100,000,000",
    "arrivalTime": null,
    "departureTime": "14:55",
    "scheduleLegs": [
      {
        "date": "2026-12-17",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-17",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2026-12-24",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-25",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0257",
    "date": "2026-12-17",
    "time": "15:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR956",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "797FC3",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "09DEC CGKDOH 1810 2250 QR957 | 10DEC DOHJED 0100 0340 QR1184                                                  BELUM | 17DEC DOHCGK 0240 1510 QR956",
    "arrivalTime": "15:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-12-09",
        "dep": "18:10",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-10",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-17",
        "dep": "02:40",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0258",
    "date": "2026-12-18",
    "time": "21:25",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "797LGT, 9YBWDS",
    "pax": 90,
    "rooms": 13,
    "package": "HAQQAN QR      UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "10DEC CGKDOH 0845 1325 QR959 | 10DEC DOHJED 1520 1800 QR1186                                                  BELUM | 18DEC JEDDOH 0510 0730 QR1185                                                 RELEASE | 18DEC DOHCGK 0855 2125 QR954",
    "arrivalTime": "21:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-12-10",
        "dep": "08:45",
        "arr": "13:25",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-10",
        "dep": "15:20",
        "arr": "18:00",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-18",
        "dep": "05:10",
        "arr": "07:30",
        "route": "JED → DOH",
        "flight": "QR1185",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-18",
        "dep": "08:55",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0259",
    "date": "2026-12-20",
    "time": "06:35",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA969",
    "route": "MED → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "06DEC CGKJED 1355 2000 GA982                               UMRAH LANGSUNG | 19DEC MEDCGK 1705 0635 (+1) GA969                          (JED-MED)",
    "arrivalTime": "06:35",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-12-06",
        "dep": "13:55",
        "arr": "20:00",
        "route": "CGK → JED",
        "flight": "GA982",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-19",
        "dep": "17:05",
        "arr": "06:35",
        "route": "MED → CGK",
        "flight": "GA969",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0260",
    "date": "2026-12-21",
    "time": "21:25",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "13DEC CGKDOH 1810 2250 QR957 | 14DEC DOHJED 0100 0340 QR1184                                                  BELUM | 21DEC JEDDOH 0410 0630 QR1183                                                 RELEASE | 21DEC DOHCGK 0855 2125 QR954",
    "arrivalTime": "21:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-12-13",
        "dep": "18:10",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-14",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-21",
        "dep": "04:10",
        "arr": "06:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-21",
        "dep": "08:55",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0261",
    "date": "2026-12-22",
    "time": "13:30",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY849",
    "route": "MCT → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "MRLSCI",
    "pax": 40,
    "rooms": 12,
    "package": "UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "14DEC CGKMCT 1455 1950 WY850 | 14DEC MCTJED 2130 0005 (+1) WY673           AKHIR TAHUN | 21DEC JEDMCT 1800 2200 WY676                WY | 22DEC MCTCGK 0240 1330 WY849",
    "arrivalTime": "13:30",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-12-14",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-14",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2026-12-21",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-22",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0262",
    "date": "2026-12-22",
    "time": "15:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR956",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "93RS94",
    "pax": 50,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "08DEC CGKDOH 1810 2250 QR957 | 09DEC DOHJED 0100 0340 QR1184                                                  BELUM | 21DEC JEDDOH 2205 0025 (+1) QR1189                                            RELEASE | 22DEC DOHCGK 0240 1510 QR956",
    "arrivalTime": "15:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-12-08",
        "dep": "18:10",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-09",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-21",
        "dep": "22:05",
        "arr": "00:25",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2026-12-22",
        "dep": "02:40",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0263",
    "date": "2026-12-22",
    "time": "21:25",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "8YBK2W",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN QR      UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "14DEC CGKDOH 0845 1315 QR959 | 14DEC DOHJED 1800 2035 QR1188 | 22DEC JEDDOH 0410 0620 QR1183 | 22DEC DOHCGK 0845 2125 QR954",
    "arrivalTime": "21:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-12-14",
        "dep": "08:45",
        "arr": "13:15",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-14",
        "dep": "18:00",
        "arr": "20:35",
        "route": "DOH → JED",
        "flight": "QR1188",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-22",
        "dep": "04:10",
        "arr": "06:20",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-22",
        "dep": "08:45",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0264",
    "date": "2026-12-23",
    "time": "13:30",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY849",
    "route": "MCT → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "MRLSCI",
    "pax": 40,
    "rooms": 12,
    "package": "UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "15DEC CGKMCT 1455 1950 WY850 | 15DEC MCTJED 2130 0005 (+1) WY673           AKHIR TAHUN | 22DEC JEDMCT 1800 2200 WY676                WY | 23DEC MCTCGK 0240 1330 WY849",
    "arrivalTime": "13:30",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-12-15",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-15",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2026-12-22",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-23",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0265",
    "date": "2026-12-23",
    "time": "21:25",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "8Y9WSJ",
    "pax": 45,
    "rooms": 13,
    "package": "HAQQAN QR      UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "15DEC CGKDOH 0845 1315 QR959 | 15DEC DOHJED 1525 1800 QR1186 | 23DEC JEDDOH 0410 0620 QR1183 | 23DEC DOHCGK 0845 2125 QR954",
    "arrivalTime": "21:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-12-15",
        "dep": "08:45",
        "arr": "13:15",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-15",
        "dep": "15:25",
        "arr": "18:00",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-23",
        "dep": "04:10",
        "arr": "06:20",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-23",
        "dep": "08:45",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0266",
    "date": "2026-12-24",
    "time": "13:30",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY849",
    "route": "MCT → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "KBUSNM",
    "pax": 40,
    "rooms": 12,
    "package": "UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "FULL",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "16DEC CGKMCT 1455 1950 WY850 | 16DEC MCTJED 2130 0005 (+1) WY673            AKHIR TAHUN | 23DEC JEDMCT 1800 2200 WY676                 WY | 24DEC MCTCGK 0240 1330 WY849",
    "arrivalTime": "13:30",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-12-16",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-16",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2026-12-23",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-24",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0267",
    "date": "2026-12-24",
    "time": "21:25",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "9HMNXK",
    "pax": 45,
    "rooms": 13,
    "package": "UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "16DEC CGKDOH 0020 0500 QR955 | 16DEC DOHJED 0725 1005 QR1190               AKHIR TAHUN | 24DEC JEDDOH 0410 0630 QR1183               QR | 24DEC DOHCGK 0855 2125 QR954",
    "arrivalTime": "21:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-12-16",
        "dep": "00:20",
        "arr": "05:00",
        "route": "CGK → DOH",
        "flight": "QR955",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-16",
        "dep": "07:25",
        "arr": "10:05",
        "route": "DOH → JED",
        "flight": "QR1190",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-24",
        "dep": "04:10",
        "arr": "06:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-24",
        "dep": "08:55",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0268",
    "date": "2026-12-25",
    "time": "13:30",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY849",
    "route": "MCT → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "NKUJVA, DPVOOO",
    "pax": 80,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "17DEC CGKMCT 1455 1950 WY850                 AKHIR TAHUN | 17DEC MCTJED 2130 0005 (+1) WY673            (BUS 1) WY | 24DEC JEDMCT 1800 2200 WY676                 AKHIR TAHUN | 25DEC MCTCGK 0240 1330 WY849                                                               DPVOOO       40      12                                                                                                2                                      Rp13,600,000    Rp100,000,000",
    "arrivalTime": "13:30",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-12-17",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-17",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2026-12-24",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-25",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0269",
    "date": "2026-12-25",
    "time": "21:25",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "17DEC CGKDOH 0845 1325 QR959 | 17DEC DOHJED 1755 2035 QR1188                AKHIR TAHUN | 25DEC JEDDOH 0410 0630 QR1183                QR | 25DEC DOHCGK 0855 2125 QR954",
    "arrivalTime": "21:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-12-17",
        "dep": "08:45",
        "arr": "13:25",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-17",
        "dep": "17:55",
        "arr": "20:35",
        "route": "DOH → JED",
        "flight": "QR1188",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-25",
        "dep": "04:10",
        "arr": "06:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-25",
        "dep": "08:55",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0270",
    "date": "2026-12-29",
    "time": "15:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR956",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "78G758",
    "pax": 50,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "15DEC CGKDOH 1810 2250 QR957 | 16DEC DOHJED 0100 0340 QR1184                                                  BELUM | 28DEC JEDDOH 1930 2150 QR1187                                                 RELEASE | 29DEC DOHCGK 0240 1510 QR956",
    "arrivalTime": "15:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-12-15",
        "dep": "18:10",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-16",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-28",
        "dep": "19:30",
        "arr": "21:50",
        "route": "JED → DOH",
        "flight": "QR1187",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-29",
        "dep": "02:40",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0271",
    "date": "2026-12-29",
    "time": "21:25",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "82Q3CM",
    "pax": 50,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "15DEC CGKDOH 0020 0500 QR955 | 15DEC DOHJED 0725 1005 QR1190                                                 BELUM | 29DEC JEDDOH 0510 0730 QR1185                                                RELEASE | 29DEC DOHCGK 0855 2125 QR954",
    "arrivalTime": "21:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-12-15",
        "dep": "00:20",
        "arr": "05:00",
        "route": "CGK → DOH",
        "flight": "QR955",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-15",
        "dep": "07:25",
        "arr": "10:05",
        "route": "DOH → JED",
        "flight": "QR1190",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-29",
        "dep": "05:10",
        "arr": "07:30",
        "route": "JED → DOH",
        "flight": "QR1185",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-29",
        "dep": "08:55",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0272",
    "date": "2026-12-31",
    "time": "14:55",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "KXCXOT, YETTFM",
    "pax": 50,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "31DEC CGKMCT 1455 1950 WY850 | 31DEC MCTJED 2130 0005 (+1) WY673            AKHIR TAHUN | 07JAN JEDMCT 1800 2200 WY676                 WY | 08JAN MCTCGK 0240 1330 WY849                                                                YETTFM      25",
    "arrivalTime": null,
    "departureTime": "14:55",
    "scheduleLegs": [
      {
        "date": "2026-12-31",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-31",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-01-07",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-08",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0273",
    "date": "2027-01-02",
    "time": "08:45",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR959",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "02JAN CGKDOH 0845 1325 QR959 | 02JAN DOHJED 1520 1800 QR1186                                                  BELUM | 09JAN JEDDOH 1930 2150 QR1187                                                 RELEASE | 10JAN DOHCGK 0240 1510 QR956",
    "arrivalTime": null,
    "departureTime": "08:45",
    "scheduleLegs": [
      {
        "date": "2027-01-02",
        "dep": "08:45",
        "arr": "13:25",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-02",
        "dep": "15:20",
        "arr": "18:00",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-09",
        "dep": "19:30",
        "arr": "21:50",
        "route": "JED → DOH",
        "flight": "QR1187",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-10",
        "dep": "02:40",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0274",
    "date": "2027-01-03",
    "time": "08:45",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR959",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "03JAN CGKDOH 0845 1325 QR959 | 03JAN DOHJED 1520 1800 QR1186                                                  BELUM | 11JAN JEDDOH 0410 0630 QR1183                                                 RELEASE | 11JAN DOHCGK 0855 2125 QR954",
    "arrivalTime": null,
    "departureTime": "08:45",
    "scheduleLegs": [
      {
        "date": "2027-01-03",
        "dep": "08:45",
        "arr": "13:25",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-03",
        "dep": "15:20",
        "arr": "18:00",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-11",
        "dep": "04:10",
        "arr": "06:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-11",
        "dep": "08:55",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0275",
    "date": "2027-01-03",
    "time": "13:55",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA982",
    "route": "CGK → JED",
    "type": "DEPARTURE_CGK",
    "pnr": "DNOYDP",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL+ GA",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "03JAN CGKJED 1355 2000 GA982                               UMRAH LANGSUNG | 16JAN MEDCGK 1705 0635 (+1) GA969                          (JED-MED)",
    "arrivalTime": null,
    "departureTime": "13:55",
    "scheduleLegs": [
      {
        "date": "2027-01-03",
        "dep": "13:55",
        "arr": "20:00",
        "route": "CGK → JED",
        "flight": "GA982",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-16",
        "dep": "17:05",
        "arr": "06:35",
        "route": "MED → CGK",
        "flight": "GA969",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0276",
    "date": "2027-01-03",
    "time": "14:55",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "HMOBOV, NPZDIC",
    "pax": 50,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "03JAN CGKMCT 1455 1950 WY850 | 03JAN MCTJED 2130 0005 (+1) WY673                                              BELUM | 10JAN JEDMCT 1800 2200 WY676                                                  RELEASE | 11JAN MCTCGK 0240 1330 WY849                                                                NPZDIC      25",
    "arrivalTime": null,
    "departureTime": "14:55",
    "scheduleLegs": [
      {
        "date": "2027-01-03",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-03",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-01-10",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-11",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0277",
    "date": "2027-01-04",
    "time": "14:55",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "OPJQUO, OQWBTD",
    "pax": 80,
    "rooms": 12,
    "package": "MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "04JAN CGKMCT 1455 1950 WY850 | 04JAN MCTJED 2130 0005 (+1) WY673                                              BELUM | 11JAN JEDMCT 1800 2200 WY676                                                  RELEASE | 12JAN MCTCGK 0240 1330 WY849",
    "arrivalTime": null,
    "departureTime": "14:55",
    "scheduleLegs": [
      {
        "date": "2027-01-04",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-04",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-01-11",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-12",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0278",
    "date": "2027-01-04",
    "time": "18:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "04JAN CGKDOH 1810 2205 QR957 | 05JAN DOHJED 0100 0340 QR1184                                                  BELUM | 12JAN JEDDOH 0410 0630 QR1183                                                 RELEASE | 12JAN DOHCGK 0855 2125 QR954",
    "arrivalTime": null,
    "departureTime": "18:10",
    "scheduleLegs": [
      {
        "date": "2027-01-04",
        "dep": "18:10",
        "arr": "22:05",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-05",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-12",
        "dep": "04:10",
        "arr": "06:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-12",
        "dep": "08:55",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0279",
    "date": "2027-01-05",
    "time": "08:45",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR959",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "05JAN CGKDOH 0845 1325 QR959 | 05JAN DOHJED 1520 1800 QR1186                                                  BELUM | 13JAN JEDDOH 0410 0630 QR1183                                                 RELEASE | 13JAN DOHCGK 0855 2125 QR954",
    "arrivalTime": null,
    "departureTime": "08:45",
    "scheduleLegs": [
      {
        "date": "2027-01-05",
        "dep": "08:45",
        "arr": "13:25",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-05",
        "dep": "15:20",
        "arr": "18:00",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-13",
        "dep": "04:10",
        "arr": "06:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-13",
        "dep": "08:55",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0280",
    "date": "2027-01-05",
    "time": "14:55",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "LOBVCA, MTIGLC",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "05JAN CGKMCT 1455 1950 WY850 | 06JAN MCTJED 0135 0410 WY671                                                   BELUM | 18JAN JEDMCT 1800 2200 WY676                                                  RELEASE | 19JAN MCTCGK 0240 1330 WY849                                                                MTIGLC      23",
    "arrivalTime": null,
    "departureTime": "14:55",
    "scheduleLegs": [
      {
        "date": "2027-01-05",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-06",
        "dep": "01:35",
        "arr": "04:10",
        "route": "MCT → JED",
        "flight": "WY671",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-18",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-19",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0281",
    "date": "2027-01-05",
    "time": "18:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "8C690X",
    "pax": 50,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "05JAN CGKDOH 1810 2250 QR957 | 06JAN DOHJED 0100 0340 QR1184                                                  BELUM | 18JAN JEDDOH 1930 2150 QR1187                                                 RELEASE | 19JAN DOHCGK 0240 1510 QR956",
    "arrivalTime": null,
    "departureTime": "18:10",
    "scheduleLegs": [
      {
        "date": "2027-01-05",
        "dep": "18:10",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-06",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-18",
        "dep": "19:30",
        "arr": "21:50",
        "route": "JED → DOH",
        "flight": "QR1187",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-19",
        "dep": "02:40",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0282",
    "date": "2027-01-06",
    "time": "18:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "8C7F6P",
    "pax": 50,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "06JAN CGKDOH 1810 2250 QR957 | 07JAN DOHJED 0100 0340 QR1184                                                  BELUM | 19JAN JEDDOH 2205 0025 (+1) QR1189                                            RELEASE | 20JAN DOHCGK 0240 1510 QR956",
    "arrivalTime": null,
    "departureTime": "18:10",
    "scheduleLegs": [
      {
        "date": "2027-01-06",
        "dep": "18:10",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-07",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-19",
        "dep": "22:05",
        "arr": "00:25",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2027-01-20",
        "dep": "02:40",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0283",
    "date": "2027-01-07",
    "time": "18:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "8C8RHQ",
    "pax": 50,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "07JAN CGKDOH 1810 2250 QR957 | 08JAN DOHJED 0100 0340 QR1184                                                  BELUM | 15JAN JEDDOH 2205 0025 (+1) QR1189                                            RELEASE | 16JAN DOHCGK 0240 1510 QR956",
    "arrivalTime": null,
    "departureTime": "18:10",
    "scheduleLegs": [
      {
        "date": "2027-01-07",
        "dep": "18:10",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-08",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-15",
        "dep": "22:05",
        "arr": "00:25",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2027-01-16",
        "dep": "02:40",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0284",
    "date": "2027-01-08",
    "time": "13:30",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY849",
    "route": "MCT → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "KXCXOT, YETTFM",
    "pax": 50,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "31DEC CGKMCT 1455 1950 WY850 | 31DEC MCTJED 2130 0005 (+1) WY673            AKHIR TAHUN | 07JAN JEDMCT 1800 2200 WY676                 WY | 08JAN MCTCGK 0240 1330 WY849                                                                YETTFM      25",
    "arrivalTime": "13:30",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2026-12-31",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2026-12-31",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-01-07",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-08",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0285",
    "date": "2027-01-08",
    "time": "14:55",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "KXNVZI, KYTKQW",
    "pax": 50,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "08JAN CGKMCT 1455 1950 WY850 | 08JAN MCTJED 2130 0005 (+1) WY673                          UMRAH LANGSUNG | 15JAN MEDMCT 1740 2130 WY680                               (JED-MED) | 16JAN MCTCGK 0240 1330 WY849                                                               KYTKQW       25",
    "arrivalTime": null,
    "departureTime": "14:55",
    "scheduleLegs": [
      {
        "date": "2027-01-08",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-08",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-01-15",
        "dep": "17:40",
        "arr": "21:30",
        "route": "MED → MCT",
        "flight": "WY680",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-16",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0286",
    "date": "2027-01-10",
    "time": "11:25",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA980",
    "route": "CGK → JED",
    "type": "DEPARTURE_CGK",
    "pnr": "FRMASW",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL+ GA",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "10JAN CGKJED 1125 1730 GA980                               UMRAH LANGSUNG | 23JAN MEDCGK 1705 0635 (+1) GA969                          (JED-MED)",
    "arrivalTime": null,
    "departureTime": "11:25",
    "scheduleLegs": [
      {
        "date": "2027-01-10",
        "dep": "11:25",
        "arr": "17:30",
        "route": "CGK → JED",
        "flight": "GA980",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-23",
        "dep": "17:05",
        "arr": "06:35",
        "route": "MED → CGK",
        "flight": "GA969",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0287",
    "date": "2027-01-10",
    "time": "15:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR956",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "02JAN CGKDOH 0845 1325 QR959 | 02JAN DOHJED 1520 1800 QR1186                                                  BELUM | 09JAN JEDDOH 1930 2150 QR1187                                                 RELEASE | 10JAN DOHCGK 0240 1510 QR956",
    "arrivalTime": "15:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-01-02",
        "dep": "08:45",
        "arr": "13:25",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-02",
        "dep": "15:20",
        "arr": "18:00",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-09",
        "dep": "19:30",
        "arr": "21:50",
        "route": "JED → DOH",
        "flight": "QR1187",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-10",
        "dep": "02:40",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0288",
    "date": "2027-01-10",
    "time": "18:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "78YWIB, 78ZNZI",
    "pax": 95,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "10JAN CGKDOH 1810 2250 QR957 | 11JAN DOHJED 0100 0340 QR1184                                                  BELUM | 18JAN JEDDOH 0410 0630 QR1183                                                 RELEASE | 18JAN DOHCGK 0855 2125 QR954",
    "arrivalTime": null,
    "departureTime": "18:10",
    "scheduleLegs": [
      {
        "date": "2027-01-10",
        "dep": "18:10",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-11",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-18",
        "dep": "04:10",
        "arr": "06:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-18",
        "dep": "08:55",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0289",
    "date": "2027-01-11",
    "time": "13:30",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY849",
    "route": "MCT → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "HMOBOV, NPZDIC",
    "pax": 50,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "03JAN CGKMCT 1455 1950 WY850 | 03JAN MCTJED 2130 0005 (+1) WY673                                              BELUM | 10JAN JEDMCT 1800 2200 WY676                                                  RELEASE | 11JAN MCTCGK 0240 1330 WY849                                                                NPZDIC      25",
    "arrivalTime": "13:30",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-01-03",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-03",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-01-10",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-11",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0290",
    "date": "2027-01-11",
    "time": "14:55",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "GXRHPR",
    "pax": 40,
    "rooms": 12,
    "package": "MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "11JAN CGKMCT 1455 1950 WY850 | 11JAN MCTJED 2130 0005 (+1) WY673            AWAL TAHUN | 18JAN JEDMCT 1800 2200 WY676                 WY | 19JAN MCTCGK 0240 1330 WY849",
    "arrivalTime": null,
    "departureTime": "14:55",
    "scheduleLegs": [
      {
        "date": "2027-01-11",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-11",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-01-18",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-19",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0291",
    "date": "2027-01-11",
    "time": "21:25",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "03JAN CGKDOH 0845 1325 QR959 | 03JAN DOHJED 1520 1800 QR1186                                                  BELUM | 11JAN JEDDOH 0410 0630 QR1183                                                 RELEASE | 11JAN DOHCGK 0855 2125 QR954",
    "arrivalTime": "21:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-01-03",
        "dep": "08:45",
        "arr": "13:25",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-03",
        "dep": "15:20",
        "arr": "18:00",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-11",
        "dep": "04:10",
        "arr": "06:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-11",
        "dep": "08:55",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0292",
    "date": "2027-01-12",
    "time": "13:30",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY849",
    "route": "MCT → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "OPJQUO, OQWBTD",
    "pax": 80,
    "rooms": 12,
    "package": "MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "04JAN CGKMCT 1455 1950 WY850 | 04JAN MCTJED 2130 0005 (+1) WY673                                              BELUM | 11JAN JEDMCT 1800 2200 WY676                                                  RELEASE | 12JAN MCTCGK 0240 1330 WY849",
    "arrivalTime": "13:30",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-01-04",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-04",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-01-11",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-12",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0293",
    "date": "2027-01-12",
    "time": "18:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "7A767A, 79UUNQ",
    "pax": 90,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "12JAN CGKDOH 1810 2250 QR957 | 13JAN DOHJED 0100 0340 QR1184                                                  BELUM | 19JAN JEDDOH 1930 2150 QR1187                                                 RELEASE | 20JAN DOHCGK 0240 1510 QR956 | 13JAN DOHJED 0100 0340 QR1184                                                  BELUM | 19JAN JEDDOH 2205 0025 (+1) QR1189                                            RELEASE",
    "arrivalTime": null,
    "departureTime": "18:10",
    "scheduleLegs": [
      {
        "date": "2027-01-12",
        "dep": "18:10",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-13",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-19",
        "dep": "19:30",
        "arr": "21:50",
        "route": "JED → DOH",
        "flight": "QR1187",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-20",
        "dep": "02:40",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-13",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-19",
        "dep": "22:05",
        "arr": "00:25",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0294",
    "date": "2027-01-12",
    "time": "21:25",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "04JAN CGKDOH 1810 2205 QR957 | 05JAN DOHJED 0100 0340 QR1184                                                  BELUM | 12JAN JEDDOH 0410 0630 QR1183                                                 RELEASE | 12JAN DOHCGK 0855 2125 QR954",
    "arrivalTime": "21:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-01-04",
        "dep": "18:10",
        "arr": "22:05",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-05",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-12",
        "dep": "04:10",
        "arr": "06:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-12",
        "dep": "08:55",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0295",
    "date": "2027-01-13",
    "time": "08:45",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR959",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "7UQBWE",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "13JAN CGKDOH 0845 1325 QR959 | 13JAN DOHJED 1755 2035 QR1188                                                  BELUM | 20JAN JEDDOH 1230 1450 QR1193                                                 RELEASE | 20JAN DOHCGK 1845 0715 (+1) QR958",
    "arrivalTime": null,
    "departureTime": "08:45",
    "scheduleLegs": [
      {
        "date": "2027-01-13",
        "dep": "08:45",
        "arr": "13:25",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-13",
        "dep": "17:55",
        "arr": "20:35",
        "route": "DOH → JED",
        "flight": "QR1188",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-20",
        "dep": "12:30",
        "arr": "14:50",
        "route": "JED → DOH",
        "flight": "QR1193",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-20",
        "dep": "18:45",
        "arr": "07:15",
        "route": "DOH → CGK",
        "flight": "QR958",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0296",
    "date": "2027-01-13",
    "time": "21:25",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "05JAN CGKDOH 0845 1325 QR959 | 05JAN DOHJED 1520 1800 QR1186                                                  BELUM | 13JAN JEDDOH 0410 0630 QR1183                                                 RELEASE | 13JAN DOHCGK 0855 2125 QR954",
    "arrivalTime": "21:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-01-05",
        "dep": "08:45",
        "arr": "13:25",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-05",
        "dep": "15:20",
        "arr": "18:00",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-13",
        "dep": "04:10",
        "arr": "06:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-13",
        "dep": "08:55",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0297",
    "date": "2027-01-15",
    "time": "14:55",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "FKNJLC, FKVRIZ, 952BCB",
    "pax": 95,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "15JAN CGKMCT 1455 1950 WY850 | 15JAN MCTJED 2130 0005 (+1) WY673                                              BELUM | 22JAN MEDMCT 1740 2130 WY680                                                  RELEASE | 23JAN MCTCGK 0240 1330 WY849                                                                FKVRIZ      25 | 16JAN DOHJED 1520 1800 QR1186                                                  BELUM | 24JAN JEDDOH 0410 0630 QR1183                                                 RELEASE | 24JAN DOHCGK 0855 2125 QR954",
    "arrivalTime": null,
    "departureTime": "14:55",
    "scheduleLegs": [
      {
        "date": "2027-01-15",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-15",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-01-22",
        "dep": "17:40",
        "arr": "21:30",
        "route": "MED → MCT",
        "flight": "WY680",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-23",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-16",
        "dep": "15:20",
        "arr": "18:00",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-24",
        "dep": "04:10",
        "arr": "06:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-24",
        "dep": "08:55",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0298",
    "date": "2027-01-16",
    "time": "13:30",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY849",
    "route": "MCT → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "KXNVZI, KYTKQW",
    "pax": 50,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "08JAN CGKMCT 1455 1950 WY850 | 08JAN MCTJED 2130 0005 (+1) WY673                          UMRAH LANGSUNG | 15JAN MEDMCT 1740 2130 WY680                               (JED-MED) | 16JAN MCTCGK 0240 1330 WY849                                                               KYTKQW       25",
    "arrivalTime": "13:30",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-01-08",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-08",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-01-15",
        "dep": "17:40",
        "arr": "21:30",
        "route": "MED → MCT",
        "flight": "WY680",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-16",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0299",
    "date": "2027-01-16",
    "time": "14:55",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "16JAN CGKMCT 1455 1950 WY850 | 16JAN MCTJED 2130 0005 (+1) WY673                                              BELUM       MSOAMN (22) | 29JAN JEDMCT 1800 2200 WY676                                                  RELEASE      QKMWYR (22) | 30JAN MCTCGK 0240 1330 WY849",
    "arrivalTime": null,
    "departureTime": "14:55",
    "scheduleLegs": [
      {
        "date": "2027-01-16",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-16",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-01-29",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-30",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0300",
    "date": "2027-01-16",
    "time": "15:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR956",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "8C8RHQ",
    "pax": 50,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "07JAN CGKDOH 1810 2250 QR957 | 08JAN DOHJED 0100 0340 QR1184                                                  BELUM | 15JAN JEDDOH 2205 0025 (+1) QR1189                                            RELEASE | 16JAN DOHCGK 0240 1510 QR956",
    "arrivalTime": "15:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-01-07",
        "dep": "18:10",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-08",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-15",
        "dep": "22:05",
        "arr": "00:25",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2027-01-16",
        "dep": "02:40",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0301",
    "date": "2027-01-17",
    "time": "06:35",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA969",
    "route": "MED → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "DNOYDP",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL+ GA",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "03JAN CGKJED 1355 2000 GA982                               UMRAH LANGSUNG | 16JAN MEDCGK 1705 0635 (+1) GA969                          (JED-MED)",
    "arrivalTime": "06:35",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-01-03",
        "dep": "13:55",
        "arr": "20:00",
        "route": "CGK → JED",
        "flight": "GA982",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-16",
        "dep": "17:05",
        "arr": "06:35",
        "route": "MED → CGK",
        "flight": "GA969",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0302",
    "date": "2027-01-17",
    "time": "08:45",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR959",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "952D5K",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "17JAN CGKDOH 0845 1325 QR959 | 17JAN DOHJED 1520 1800 QR1186                                                  BELUM | 24JAN JEDDOH 2205 0025 (+1) QR1189                                            RELEASE | 25JAN DOHCGK 0240 1510 QR956",
    "arrivalTime": null,
    "departureTime": "08:45",
    "scheduleLegs": [
      {
        "date": "2027-01-17",
        "dep": "08:45",
        "arr": "13:25",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-17",
        "dep": "15:20",
        "arr": "18:00",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-24",
        "dep": "22:05",
        "arr": "00:25",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2027-01-25",
        "dep": "02:40",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0303",
    "date": "2027-01-18",
    "time": "08:45",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR959",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "9539F7, 954YTT",
    "pax": 90,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "18JAN CGKDOH 0845 1325 QR959 | 18JAN DOHJED 1520 1800 QR1186                                                  BELUM | 26JAN JEDDOH 0410 0630 QR1183                                                 RELEASE | 26JAN DOHCGK 0855 2125 QR954",
    "arrivalTime": null,
    "departureTime": "08:45",
    "scheduleLegs": [
      {
        "date": "2027-01-18",
        "dep": "08:45",
        "arr": "13:25",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-18",
        "dep": "15:20",
        "arr": "18:00",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-26",
        "dep": "04:10",
        "arr": "06:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-26",
        "dep": "08:55",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0304",
    "date": "2027-01-18",
    "time": "21:25",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "78YWIB, 78ZNZI",
    "pax": 95,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "10JAN CGKDOH 1810 2250 QR957 | 11JAN DOHJED 0100 0340 QR1184                                                  BELUM | 18JAN JEDDOH 0410 0630 QR1183                                                 RELEASE | 18JAN DOHCGK 0855 2125 QR954",
    "arrivalTime": "21:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-01-10",
        "dep": "18:10",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-11",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-18",
        "dep": "04:10",
        "arr": "06:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-18",
        "dep": "08:55",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0305",
    "date": "2027-01-19",
    "time": "13:30",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY849",
    "route": "MCT → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "GXRHPR, LOBVCA, MTIGLC",
    "pax": 85,
    "rooms": 12,
    "package": "MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "11JAN CGKMCT 1455 1950 WY850 | 11JAN MCTJED 2130 0005 (+1) WY673            AWAL TAHUN | 18JAN JEDMCT 1800 2200 WY676                 WY | 19JAN MCTCGK 0240 1330 WY849",
    "arrivalTime": "13:30",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-01-11",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-11",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-01-18",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-19",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0306",
    "date": "2027-01-19",
    "time": "14:55",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "YTDTPI, WDORYQ",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "19JAN CGKMCT 1455 1950 WY850 | 19JAN MCTJED 2130 0005 (+1) WY673                                              BELUM | 26JAN JEDMCT 1800 2200 WY676                                                  RELEASE | 27JAN MCTCGK 0240 1330 WY849",
    "arrivalTime": null,
    "departureTime": "14:55",
    "scheduleLegs": [
      {
        "date": "2027-01-19",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-19",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-01-26",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-27",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0307",
    "date": "2027-01-19",
    "time": "15:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR956",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "8C690X",
    "pax": 50,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "05JAN CGKDOH 1810 2250 QR957 | 06JAN DOHJED 0100 0340 QR1184                                                  BELUM | 18JAN JEDDOH 1930 2150 QR1187                                                 RELEASE | 19JAN DOHCGK 0240 1510 QR956",
    "arrivalTime": "15:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-01-05",
        "dep": "18:10",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-06",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-18",
        "dep": "19:30",
        "arr": "21:50",
        "route": "JED → DOH",
        "flight": "QR1187",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-19",
        "dep": "02:40",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0308",
    "date": "2027-01-19",
    "time": "18:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "8CA70G",
    "pax": 50,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "19JAN CGKDOH 1810 2250 QR957 | 20JAN DOHJED 0100 0340 QR1184                                                  BELUM | 02FEB DOHCGK 0240 1510 QR956",
    "arrivalTime": null,
    "departureTime": "18:10",
    "scheduleLegs": [
      {
        "date": "2027-01-19",
        "dep": "18:10",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-20",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-02",
        "dep": "02:40",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0309",
    "date": "2027-01-20",
    "time": "13:30",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY849",
    "route": "MCT → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "FLXVML, WQSGYZ",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "22JAN CGKMCT 1455 1950 WY850 | 22JAN MCTJED 2130 0005 (+1) WY673                                              BELUM | 29JAN MEDMCT 1740 2130 WY680                                                  RELEASE | 20JAN MCTCGK 0240 1330 WY849                                                                WQSGYZ        22",
    "arrivalTime": "13:30",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-01-22",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-22",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-01-29",
        "dep": "17:40",
        "arr": "21:30",
        "route": "MED → MCT",
        "flight": "WY680",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-20",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0310",
    "date": "2027-01-20",
    "time": "15:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR956",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "8C7F6P",
    "pax": 50,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "06JAN CGKDOH 1810 2250 QR957 | 07JAN DOHJED 0100 0340 QR1184                                                  BELUM | 19JAN JEDDOH 2205 0025 (+1) QR1189                                            RELEASE | 20JAN DOHCGK 0240 1510 QR956",
    "arrivalTime": "15:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-01-06",
        "dep": "18:10",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-07",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-19",
        "dep": "22:05",
        "arr": "00:25",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2027-01-20",
        "dep": "02:40",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0311",
    "date": "2027-01-21",
    "time": "07:15",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR958",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "7UQBWE",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "13JAN CGKDOH 0845 1325 QR959 | 13JAN DOHJED 1755 2035 QR1188                                                  BELUM | 20JAN JEDDOH 1230 1450 QR1193                                                 RELEASE | 20JAN DOHCGK 1845 0715 (+1) QR958",
    "arrivalTime": "07:15",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-01-13",
        "dep": "08:45",
        "arr": "13:25",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-13",
        "dep": "17:55",
        "arr": "20:35",
        "route": "DOH → JED",
        "flight": "QR1188",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-20",
        "dep": "12:30",
        "arr": "14:50",
        "route": "JED → DOH",
        "flight": "QR1193",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-20",
        "dep": "18:45",
        "arr": "07:15",
        "route": "DOH → CGK",
        "flight": "QR958",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0312",
    "date": "2027-01-21",
    "time": "18:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "8CFA3L",
    "pax": 50,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "21JAN CGKDOH 1810 2250 QR957 | 22JAN DOHJED 0100 0340 QR1184                                                  BELUM | 29JAN JEDDOH 2205 0025 (+1) QR1189                                            RELEASE | 30JAN DOHCGK 0240 1510 QR956",
    "arrivalTime": null,
    "departureTime": "18:10",
    "scheduleLegs": [
      {
        "date": "2027-01-21",
        "dep": "18:10",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-22",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-29",
        "dep": "22:05",
        "arr": "00:25",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2027-01-30",
        "dep": "02:40",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0313",
    "date": "2027-01-22",
    "time": "14:55",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "FLXVML, WQSGYZ",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "22JAN CGKMCT 1455 1950 WY850 | 22JAN MCTJED 2130 0005 (+1) WY673                                              BELUM | 29JAN MEDMCT 1740 2130 WY680                                                  RELEASE | 20JAN MCTCGK 0240 1330 WY849                                                                WQSGYZ        22",
    "arrivalTime": null,
    "departureTime": "14:55",
    "scheduleLegs": [
      {
        "date": "2027-01-22",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-22",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-01-29",
        "dep": "17:40",
        "arr": "21:30",
        "route": "MED → MCT",
        "flight": "WY680",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-20",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0314",
    "date": "2027-01-23",
    "time": "14:55",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "FJADTO, QBAXPX, SRHSQY",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "23JAN CGKMCT 1455 1950 WY850                                                                 FJADTO       15 | 23JAN MCTJED 2130 0005 (+1) WY673                                              BELUM | 30JAN JEDMCT 1405 1805 WY690                                                  RELEASE | 31JAN MCTCGK 0240 1330 WY849                                                                 SRHSQY       15",
    "arrivalTime": null,
    "departureTime": "14:55",
    "scheduleLegs": [
      {
        "date": "2027-01-23",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-23",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-01-30",
        "dep": "14:05",
        "arr": "18:05",
        "route": "JED → MCT",
        "flight": "WY690",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-31",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0315",
    "date": "2027-01-24",
    "time": "06:35",
    "airline": "GA",
    "airlineName": "Garuda Indonesia",
    "flight": "GA969",
    "route": "MED → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "FRMASW",
    "pax": 50,
    "rooms": 14,
    "package": "THAWIL+ GA",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "10JAN CGKJED 1125 1730 GA980                               UMRAH LANGSUNG | 23JAN MEDCGK 1705 0635 (+1) GA969                          (JED-MED)",
    "arrivalTime": "06:35",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-01-10",
        "dep": "11:25",
        "arr": "17:30",
        "route": "CGK → JED",
        "flight": "GA980",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-23",
        "dep": "17:05",
        "arr": "06:35",
        "route": "MED → CGK",
        "flight": "GA969",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0316",
    "date": "2027-01-24",
    "time": "08:45",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR959",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "24JAN CGKDOH 0845 1325 QR959 | 24JAN DOHJED 1520 1800 QR1186                                                  BELUM | 31JAN JEDDOH 1230 1450 QR1193                                                 RELEASE | 31JAN DOHCGK 1845 0715 (+1) QR958",
    "arrivalTime": null,
    "departureTime": "08:45",
    "scheduleLegs": [
      {
        "date": "2027-01-24",
        "dep": "08:45",
        "arr": "13:25",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-24",
        "dep": "15:20",
        "arr": "18:00",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-31",
        "dep": "12:30",
        "arr": "14:50",
        "route": "JED → DOH",
        "flight": "QR1193",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-31",
        "dep": "18:45",
        "arr": "07:15",
        "route": "DOH → CGK",
        "flight": "QR958",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0317",
    "date": "2027-01-24",
    "time": "21:25",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "FKNJLC, FKVRIZ, 952BCB",
    "pax": 95,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "15JAN CGKMCT 1455 1950 WY850 | 15JAN MCTJED 2130 0005 (+1) WY673                                              BELUM | 22JAN MEDMCT 1740 2130 WY680                                                  RELEASE | 23JAN MCTCGK 0240 1330 WY849                                                                FKVRIZ      25 | 16JAN DOHJED 1520 1800 QR1186                                                  BELUM | 24JAN JEDDOH 0410 0630 QR1183                                                 RELEASE | 24JAN DOHCGK 0855 2125 QR954",
    "arrivalTime": "21:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-01-15",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-15",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-01-22",
        "dep": "17:40",
        "arr": "21:30",
        "route": "MED → MCT",
        "flight": "WY680",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-23",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-16",
        "dep": "15:20",
        "arr": "18:00",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-24",
        "dep": "04:10",
        "arr": "06:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-24",
        "dep": "08:55",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0318",
    "date": "2027-01-25",
    "time": "15:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR956",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "952D5K",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "17JAN CGKDOH 0845 1325 QR959 | 17JAN DOHJED 1520 1800 QR1186                                                  BELUM | 24JAN JEDDOH 2205 0025 (+1) QR1189                                            RELEASE | 25JAN DOHCGK 0240 1510 QR956",
    "arrivalTime": "15:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-01-17",
        "dep": "08:45",
        "arr": "13:25",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-17",
        "dep": "15:20",
        "arr": "18:00",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-24",
        "dep": "22:05",
        "arr": "00:25",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2027-01-25",
        "dep": "02:40",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0319",
    "date": "2027-01-26",
    "time": "14:55",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "GQQQLI, FZBWVJ",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "26JAN CGKMCT 1455 1950 WY850 | 26JAN MCTJED 2130 0005 (+1) WY673                                              BELUM | 02FEB JEDMCT 1800 2200 WY676                                                  RELEASE | 03FEB MCTCGK 0240 1330 WY849                                                                 FZBWVJ       20",
    "arrivalTime": null,
    "departureTime": "14:55",
    "scheduleLegs": [
      {
        "date": "2027-01-26",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-26",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-02-02",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-03",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0320",
    "date": "2027-01-26",
    "time": "15:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR956",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "9539F7",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "18JAN CGKDOH 0845 1325 QR959 | 18JAN DOHJED 1520 1800 QR1186                                                  BELUM | 25JAN JEDDOH 2205 0025 (+1) QR1189                                            RELEASE | 26JAN DOHCGK 0240 1510 QR956",
    "arrivalTime": "15:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-01-18",
        "dep": "08:45",
        "arr": "13:25",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-18",
        "dep": "15:20",
        "arr": "18:00",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-25",
        "dep": "22:05",
        "arr": "00:25",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2027-01-26",
        "dep": "02:40",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0321",
    "date": "2027-01-26",
    "time": "18:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR957",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "8CFZKK",
    "pax": 50,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "26JAN CGKDOH 1810 2250 QR957 | 27JAN DOHJED 0100 0340 QR1184                                                  BELUM | 08FEB JEDDOH 2205 0025 (+1) QR1189                                            RELEASE | 09FEB DOHCGK 0240 1510 QR956",
    "arrivalTime": null,
    "departureTime": "18:10",
    "scheduleLegs": [
      {
        "date": "2027-01-26",
        "dep": "18:10",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-27",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-08",
        "dep": "22:05",
        "arr": "00:25",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2027-02-09",
        "dep": "02:40",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0322",
    "date": "2027-01-26",
    "time": "21:25",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR954",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "954YTT",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "18JAN CGKDOH 0845 1325 QR959 | 18JAN DOHJED 1520 1800 QR1186                                                  BELUM | 26JAN JEDDOH 0410 0630 QR1183                                                 RELEASE | 26JAN DOHCGK 0855 2125 QR954",
    "arrivalTime": "21:25",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-01-18",
        "dep": "08:45",
        "arr": "13:25",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-18",
        "dep": "15:20",
        "arr": "18:00",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-26",
        "dep": "04:10",
        "arr": "06:30",
        "route": "JED → DOH",
        "flight": "QR1183",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-26",
        "dep": "08:55",
        "arr": "21:25",
        "route": "DOH → CGK",
        "flight": "QR954",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0323",
    "date": "2027-01-27",
    "time": "08:45",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR959",
    "route": "CGK → DOH",
    "type": "DEPARTURE_CGK",
    "pnr": "94IKZJ",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "27JAN CGKDOH 0845 1325 QR959 | 09FEB JEDDOH 2205 0025 (+1) QR1189                                            RELEASE | 10FEB DOHCGK 0240 1510 QR956",
    "arrivalTime": null,
    "departureTime": "08:45",
    "scheduleLegs": [
      {
        "date": "2027-01-27",
        "dep": "08:45",
        "arr": "13:25",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-09",
        "dep": "22:05",
        "arr": "00:25",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2027-02-10",
        "dep": "02:40",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0324",
    "date": "2027-01-27",
    "time": "13:30",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY849",
    "route": "MCT → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "YTDTPI, WDORYQ",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "19JAN CGKMCT 1455 1950 WY850 | 19JAN MCTJED 2130 0005 (+1) WY673                                              BELUM | 26JAN JEDMCT 1800 2200 WY676                                                  RELEASE | 27JAN MCTCGK 0240 1330 WY849",
    "arrivalTime": "13:30",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-01-19",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-19",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-01-26",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-27",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0325",
    "date": "2027-01-27",
    "time": "15:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR956",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "19JAN CGKDOH 1810 2250 QR957 | 20JAN DOHJED 0100 0340 QR1184                                                  BELUM | 26JAN JEDDOH 1930 2150 QR1187                                                 RELEASE | 27JAN DOHCGK 0240 1510 QR956",
    "arrivalTime": "15:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-01-19",
        "dep": "18:10",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-20",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-26",
        "dep": "19:30",
        "arr": "21:50",
        "route": "JED → DOH",
        "flight": "QR1187",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-27",
        "dep": "02:40",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0326",
    "date": "2027-01-29",
    "time": "14:55",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "AELGNZ, OCFBYI",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "29JAN CGKMCT 1455 1950 WY850 | 29JAN MCTJED 2130 0005 (+1) WY673                                              BELUM | 05FEB MEDMCT 1740 2130 WY680                                                  RELEASE | 06FEB MCTCGK 0240 1330 WY849                                                                 OCFBYI       22",
    "arrivalTime": null,
    "departureTime": "14:55",
    "scheduleLegs": [
      {
        "date": "2027-01-29",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-29",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-02-05",
        "dep": "17:40",
        "arr": "21:30",
        "route": "MED → MCT",
        "flight": "WY680",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-06",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0327",
    "date": "2027-01-30",
    "time": "13:30",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY849",
    "route": "MCT → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "16JAN CGKMCT 1455 1950 WY850 | 16JAN MCTJED 2130 0005 (+1) WY673                                              BELUM       MSOAMN (22) | 29JAN JEDMCT 1800 2200 WY676                                                  RELEASE      QKMWYR (22) | 30JAN MCTCGK 0240 1330 WY849",
    "arrivalTime": "13:30",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-01-16",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-16",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-01-29",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-30",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0328",
    "date": "2027-01-30",
    "time": "14:55",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "WCSEJV, WEDSJA",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "30JAN CGKMCT 1455 1950 WY850 | 30JAN MCTJED 2130 0005 (+1) WY673             AWAL TAHUN | 06FEB JEDMCT 1800 2200 WY676                  WY | 07FEB MCTCGK 0240 1330 WY849                                                                 WEDSJA       20                                                                                                                                                  Rp14,700,000",
    "arrivalTime": null,
    "departureTime": "14:55",
    "scheduleLegs": [
      {
        "date": "2027-01-30",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-30",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-02-06",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-07",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0329",
    "date": "2027-01-30",
    "time": "15:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR956",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "8CFA3L",
    "pax": 50,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "21JAN CGKDOH 1810 2250 QR957 | 22JAN DOHJED 0100 0340 QR1184                                                  BELUM | 29JAN JEDDOH 2205 0025 (+1) QR1189                                            RELEASE | 30JAN DOHCGK 0240 1510 QR956",
    "arrivalTime": "15:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-01-21",
        "dep": "18:10",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-22",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-29",
        "dep": "22:05",
        "arr": "00:25",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2027-01-30",
        "dep": "02:40",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0330",
    "date": "2027-01-31",
    "time": "13:30",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY849",
    "route": "MCT → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "FJADTO, QBAXPX, SRHSQY",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "23JAN CGKMCT 1455 1950 WY850                                                                 FJADTO       15 | 23JAN MCTJED 2130 0005 (+1) WY673                                              BELUM | 30JAN JEDMCT 1405 1805 WY690                                                  RELEASE | 31JAN MCTCGK 0240 1330 WY849                                                                 SRHSQY       15",
    "arrivalTime": "13:30",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-01-23",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-23",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-01-30",
        "dep": "14:05",
        "arr": "18:05",
        "route": "JED → MCT",
        "flight": "WY690",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-31",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0331",
    "date": "2027-01-31",
    "time": "14:55",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "KCRAEO, WRWFVB",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "31JAN CGKMCT 1455 1950 WY850 | 31JAN MCTJED 2130 0005 (+1) WY673                                              BELUM | 07FEB JEDMCT 1405 1805 WY690                                                  RELEASE | 08FEB MCTCGK 0240 1330 WY849                                                                WRWFVB        20                                                                                                                                                  Rp14,400,000",
    "arrivalTime": null,
    "departureTime": "14:55",
    "scheduleLegs": [
      {
        "date": "2027-01-31",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-31",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-02-07",
        "dep": "14:05",
        "arr": "18:05",
        "route": "JED → MCT",
        "flight": "WY690",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-08",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0332",
    "date": "2027-02-01",
    "time": "07:15",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR958",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "24JAN CGKDOH 0845 1325 QR959 | 24JAN DOHJED 1520 1800 QR1186                                                  BELUM | 31JAN JEDDOH 1230 1450 QR1193                                                 RELEASE | 31JAN DOHCGK 1845 0715 (+1) QR958",
    "arrivalTime": "07:15",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-01-24",
        "dep": "08:45",
        "arr": "13:25",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-24",
        "dep": "15:20",
        "arr": "18:00",
        "route": "DOH → JED",
        "flight": "QR1186",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-31",
        "dep": "12:30",
        "arr": "14:50",
        "route": "JED → DOH",
        "flight": "QR1193",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-31",
        "dep": "18:45",
        "arr": "07:15",
        "route": "DOH → CGK",
        "flight": "QR958",
        "arrivalNextDay": true
      }
    ]
  },
  {
    "id": "CGK-0333",
    "date": "2027-02-01",
    "time": "23:20",
    "airline": "EY",
    "airlineName": "Etihad Airways",
    "flight": "EY473",
    "route": "CGK → AUH",
    "type": "DEPARTURE_CGK",
    "pnr": "76J6XD",
    "pax": 40,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "01FEB CGKAUH 2320 0500 EY473 | 02FEB AUHJED 0835 1050 EY615                                                   BELUM | 09FEB JEDAUH 0315 0650 EY602                                                  RELEASE | 09FEB AUHCGK 0855 2020 EY472",
    "arrivalTime": null,
    "departureTime": "23:20",
    "scheduleLegs": [
      {
        "date": "2027-02-01",
        "dep": "23:20",
        "arr": "05:00",
        "route": "CGK → AUH",
        "flight": "EY473",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-02",
        "dep": "08:35",
        "arr": "10:50",
        "route": "AUH → JED",
        "flight": "EY615",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-09",
        "dep": "03:15",
        "arr": "06:50",
        "route": "JED → AUH",
        "flight": "EY602",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-09",
        "dep": "08:55",
        "arr": "20:20",
        "route": "AUH → CGK",
        "flight": "EY472",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0334",
    "date": "2027-02-02",
    "time": "15:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR956",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "8CA70G",
    "pax": 50,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "19JAN CGKDOH 1810 2250 QR957 | 20JAN DOHJED 0100 0340 QR1184                                                  BELUM | 02FEB DOHCGK 0240 1510 QR956",
    "arrivalTime": "15:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-01-19",
        "dep": "18:10",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-20",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-02",
        "dep": "02:40",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0335",
    "date": "2027-02-03",
    "time": "13:30",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY849",
    "route": "MCT → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "GQQQLI, FZBWVJ",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "26JAN CGKMCT 1455 1950 WY850 | 26JAN MCTJED 2130 0005 (+1) WY673                                              BELUM | 02FEB JEDMCT 1800 2200 WY676                                                  RELEASE | 03FEB MCTCGK 0240 1330 WY849                                                                 FZBWVJ       20",
    "arrivalTime": "13:30",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-01-26",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-26",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-02-02",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-03",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0336",
    "date": "2027-02-05",
    "time": "14:55",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "05FEB CGKMCT 1455 1950 WY850 | 05FEB MCTJED 2130 0005 (+1) WY673 | 12FEB JEDMCT 1800 2200 WY676 | 13FEB MCTCGK 0240 1330 WY849",
    "arrivalTime": null,
    "departureTime": "14:55",
    "scheduleLegs": [
      {
        "date": "2027-02-05",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-05",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-02-12",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-13",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0337",
    "date": "2027-02-06",
    "time": "13:30",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY849",
    "route": "MCT → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "AELGNZ, OCFBYI",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "29JAN CGKMCT 1455 1950 WY850 | 29JAN MCTJED 2130 0005 (+1) WY673                                              BELUM | 05FEB MEDMCT 1740 2130 WY680                                                  RELEASE | 06FEB MCTCGK 0240 1330 WY849                                                                 OCFBYI       22",
    "arrivalTime": "13:30",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-01-29",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-29",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-02-05",
        "dep": "17:40",
        "arr": "21:30",
        "route": "MED → MCT",
        "flight": "WY680",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-06",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0338",
    "date": "2027-02-07",
    "time": "13:30",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY849",
    "route": "MCT → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "WCSEJV, WEDSJA",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "30JAN CGKMCT 1455 1950 WY850 | 30JAN MCTJED 2130 0005 (+1) WY673             AWAL TAHUN | 06FEB JEDMCT 1800 2200 WY676                  WY | 07FEB MCTCGK 0240 1330 WY849                                                                 WEDSJA       20                                                                                                                                                  Rp14,700,000",
    "arrivalTime": "13:30",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-01-30",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-30",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-02-06",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-07",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0339",
    "date": "2027-02-08",
    "time": "13:30",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY849",
    "route": "MCT → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "KCRAEO, WRWFVB",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "31JAN CGKMCT 1455 1950 WY850 | 31JAN MCTJED 2130 0005 (+1) WY673                                              BELUM | 07FEB JEDMCT 1405 1805 WY690                                                  RELEASE | 08FEB MCTCGK 0240 1330 WY849                                                                WRWFVB        20                                                                                                                                                  Rp14,400,000",
    "arrivalTime": "13:30",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-01-31",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-31",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-02-07",
        "dep": "14:05",
        "arr": "18:05",
        "route": "JED → MCT",
        "flight": "WY690",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-08",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0340",
    "date": "2027-02-08",
    "time": "23:20",
    "airline": "EY",
    "airlineName": "Etihad Airways",
    "flight": "EY473",
    "route": "CGK → AUH",
    "type": "DEPARTURE_CGK",
    "pnr": "76ENK6",
    "pax": 40,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "08FEB CGKAUH 2320 0500 EY473 | 09FEB AUHJED 0835 1050 EY615                                                   BELUM | 16FEB JEDAUH 0315 0650 EY602                                                  RELEASE | 16FEB AUHCGK 0855 2020 EY472",
    "arrivalTime": null,
    "departureTime": "23:20",
    "scheduleLegs": [
      {
        "date": "2027-02-08",
        "dep": "23:20",
        "arr": "05:00",
        "route": "CGK → AUH",
        "flight": "EY473",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-09",
        "dep": "08:35",
        "arr": "10:50",
        "route": "AUH → JED",
        "flight": "EY615",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-16",
        "dep": "03:15",
        "arr": "06:50",
        "route": "JED → AUH",
        "flight": "EY602",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-16",
        "dep": "08:55",
        "arr": "20:20",
        "route": "AUH → CGK",
        "flight": "EY472",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0341",
    "date": "2027-02-09",
    "time": "09:35",
    "airline": "TR",
    "airlineName": "Scoot",
    "flight": "TR275",
    "route": "CGK → SIN",
    "type": "DEPARTURE_CGK",
    "pnr": "NDJBWD",
    "pax": 40,
    "rooms": 12,
    "package": "RAMADAN TR   UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "09FEB CGKSIN 0935 1225 TR275 | 09FEB SINJED 1640 2130 TR796 | 16FEB JEDSIN 2245 1255 (+1) TR797 | 17FEB SINCGK 1825 1920 TR278",
    "arrivalTime": null,
    "departureTime": "09:35",
    "scheduleLegs": [
      {
        "date": "2027-02-09",
        "dep": "09:35",
        "arr": "12:25",
        "route": "CGK → SIN",
        "flight": "TR275",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-09",
        "dep": "16:40",
        "arr": "21:30",
        "route": "SIN → JED",
        "flight": "TR796",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-16",
        "dep": "22:45",
        "arr": "12:55",
        "route": "JED → SIN",
        "flight": "TR797",
        "arrivalNextDay": true
      },
      {
        "date": "2027-02-17",
        "dep": "18:25",
        "arr": "19:20",
        "route": "SIN → CGK",
        "flight": "TR278",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0342",
    "date": "2027-02-09",
    "time": "15:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR956",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "8CFZKK",
    "pax": 50,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "26JAN CGKDOH 1810 2250 QR957 | 27JAN DOHJED 0100 0340 QR1184                                                  BELUM | 08FEB JEDDOH 2205 0025 (+1) QR1189                                            RELEASE | 09FEB DOHCGK 0240 1510 QR956",
    "arrivalTime": "15:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-01-26",
        "dep": "18:10",
        "arr": "22:50",
        "route": "CGK → DOH",
        "flight": "QR957",
        "arrivalNextDay": false
      },
      {
        "date": "2027-01-27",
        "dep": "01:00",
        "arr": "03:40",
        "route": "DOH → JED",
        "flight": "QR1184",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-08",
        "dep": "22:05",
        "arr": "00:25",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2027-02-09",
        "dep": "02:40",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0343",
    "date": "2027-02-09",
    "time": "20:20",
    "airline": "EY",
    "airlineName": "Etihad Airways",
    "flight": "EY472",
    "route": "AUH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "76J6XD",
    "pax": 40,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "01FEB CGKAUH 2320 0500 EY473 | 02FEB AUHJED 0835 1050 EY615                                                   BELUM | 09FEB JEDAUH 0315 0650 EY602                                                  RELEASE | 09FEB AUHCGK 0855 2020 EY472",
    "arrivalTime": "20:20",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-02-01",
        "dep": "23:20",
        "arr": "05:00",
        "route": "CGK → AUH",
        "flight": "EY473",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-02",
        "dep": "08:35",
        "arr": "10:50",
        "route": "AUH → JED",
        "flight": "EY615",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-09",
        "dep": "03:15",
        "arr": "06:50",
        "route": "JED → AUH",
        "flight": "EY602",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-09",
        "dep": "08:55",
        "arr": "20:20",
        "route": "AUH → CGK",
        "flight": "EY472",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0344",
    "date": "2027-02-10",
    "time": "15:10",
    "airline": "QR",
    "airlineName": "Qatar Airways",
    "flight": "QR956",
    "route": "DOH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "94IKZJ",
    "pax": 45,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "27JAN CGKDOH 0845 1325 QR959 | 09FEB JEDDOH 2205 0025 (+1) QR1189                                            RELEASE | 10FEB DOHCGK 0240 1510 QR956",
    "arrivalTime": "15:10",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-01-27",
        "dep": "08:45",
        "arr": "13:25",
        "route": "CGK → DOH",
        "flight": "QR959",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-09",
        "dep": "22:05",
        "arr": "00:25",
        "route": "JED → DOH",
        "flight": "QR1189",
        "arrivalNextDay": true
      },
      {
        "date": "2027-02-10",
        "dep": "02:40",
        "arr": "15:10",
        "route": "DOH → CGK",
        "flight": "QR956",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0345",
    "date": "2027-02-11",
    "time": "09:35",
    "airline": "TR",
    "airlineName": "Scoot",
    "flight": "TR275",
    "route": "CGK → SIN",
    "type": "DEPARTURE_CGK",
    "pnr": "D7YGWF",
    "pax": 40,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "11FEB CGKSIN 0935 1225 TR275 | 11FEB SINJED 1640 2130 TR796                                                   BELUM | 20FEB JEDSIN 2245 1255 (+1) TR797                                             RELEASE | 21FEB SINCGK 1825 1920 TR278",
    "arrivalTime": null,
    "departureTime": "09:35",
    "scheduleLegs": [
      {
        "date": "2027-02-11",
        "dep": "09:35",
        "arr": "12:25",
        "route": "CGK → SIN",
        "flight": "TR275",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-11",
        "dep": "16:40",
        "arr": "21:30",
        "route": "SIN → JED",
        "flight": "TR796",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-20",
        "dep": "22:45",
        "arr": "12:55",
        "route": "JED → SIN",
        "flight": "TR797",
        "arrivalNextDay": true
      },
      {
        "date": "2027-02-21",
        "dep": "18:25",
        "arr": "19:20",
        "route": "SIN → CGK",
        "flight": "TR278",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0346",
    "date": "2027-02-11",
    "time": "14:55",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "LIOUOD, FZYRIP, YRORDZ",
    "pax": 85,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "11FEB CGKMCT 1455 1950 WY850 | 11FEB MCTMED 2330 0150 (+1) WY677                                              BELUM | 19FEB JEDMCT 1800 2200 WY676                                                  RELEASE | 20FEB MCTCGK 0240 1330 WY849",
    "arrivalTime": null,
    "departureTime": "14:55",
    "scheduleLegs": [
      {
        "date": "2027-02-11",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-11",
        "dep": "23:30",
        "arr": "01:50",
        "route": "MCT → MED",
        "flight": "WY677",
        "arrivalNextDay": true
      },
      {
        "date": "2027-02-19",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-20",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0347",
    "date": "2027-02-13",
    "time": "13:30",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY849",
    "route": "MCT → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "05FEB CGKMCT 1455 1950 WY850 | 05FEB MCTJED 2130 0005 (+1) WY673 | 12FEB JEDMCT 1800 2200 WY676 | 13FEB MCTCGK 0240 1330 WY849",
    "arrivalTime": "13:30",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-02-05",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-05",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-02-12",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-13",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0348",
    "date": "2027-02-15",
    "time": "14:55",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "FYHWGT",
    "pax": 40,
    "rooms": 12,
    "package": "RAMADAN WY   MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "15FEB CGKMCT 1455 1950 WY850 | 15FEB MCTJED 2130 0005 (+1) WY673 | 23FEB JEDMCT 1800 2200 WY676 | 24FEB MCTCGK 0240 1330 WY849",
    "arrivalTime": null,
    "departureTime": "14:55",
    "scheduleLegs": [
      {
        "date": "2027-02-15",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-15",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-02-23",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-24",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0349",
    "date": "2027-02-16",
    "time": "14:55",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "AFTKKC, FIZYTW, WOEVMD, YTBXAG",
    "pax": 85,
    "rooms": 25,
    "package": "RAMADAN WY   UMRAH LANGSUNG / UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "16FEB CGKMCT 1455 1950 WY850                                                            AFTKKC      15 | 16FEB MCTJED 2130 0005 (+1) WY673         RAMADAN WY | 02MAR JEDMCT 1800 2200 WY676              (THAWIL) | 03MAR MCTCGK 0240 1330 WY849                                                           WOEVMD       15",
    "arrivalTime": null,
    "departureTime": "14:55",
    "scheduleLegs": [
      {
        "date": "2027-02-16",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-16",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-03-02",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2027-03-03",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0350",
    "date": "2027-02-16",
    "time": "20:20",
    "airline": "EY",
    "airlineName": "Etihad Airways",
    "flight": "EY472",
    "route": "AUH → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "76ENK6",
    "pax": 40,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "08FEB CGKAUH 2320 0500 EY473 | 09FEB AUHJED 0835 1050 EY615                                                   BELUM | 16FEB JEDAUH 0315 0650 EY602                                                  RELEASE | 16FEB AUHCGK 0855 2020 EY472",
    "arrivalTime": "20:20",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-02-08",
        "dep": "23:20",
        "arr": "05:00",
        "route": "CGK → AUH",
        "flight": "EY473",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-09",
        "dep": "08:35",
        "arr": "10:50",
        "route": "AUH → JED",
        "flight": "EY615",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-16",
        "dep": "03:15",
        "arr": "06:50",
        "route": "JED → AUH",
        "flight": "EY602",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-16",
        "dep": "08:55",
        "arr": "20:20",
        "route": "AUH → CGK",
        "flight": "EY472",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0351",
    "date": "2027-02-17",
    "time": "19:20",
    "airline": "TR",
    "airlineName": "Scoot",
    "flight": "TR278",
    "route": "SIN → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "NDJBWD",
    "pax": 40,
    "rooms": 12,
    "package": "RAMADAN TR   UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "09FEB CGKSIN 0935 1225 TR275 | 09FEB SINJED 1640 2130 TR796 | 16FEB JEDSIN 2245 1255 (+1) TR797 | 17FEB SINCGK 1825 1920 TR278",
    "arrivalTime": "19:20",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-02-09",
        "dep": "09:35",
        "arr": "12:25",
        "route": "CGK → SIN",
        "flight": "TR275",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-09",
        "dep": "16:40",
        "arr": "21:30",
        "route": "SIN → JED",
        "flight": "TR796",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-16",
        "dep": "22:45",
        "arr": "12:55",
        "route": "JED → SIN",
        "flight": "TR797",
        "arrivalNextDay": true
      },
      {
        "date": "2027-02-17",
        "dep": "18:25",
        "arr": "19:20",
        "route": "SIN → CGK",
        "flight": "TR278",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0352",
    "date": "2027-02-18",
    "time": "14:55",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "HOWPTF",
    "pax": 40,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "18FEB CGKMCT 1455 1950 WY850 | 18FEB MCTJED 2130 0005 (+1) WY673                                          BELUM | 02MAR MEDMCT 1755 2145 WY680                                              RELEASE | 03MAR MCTCGK 0240 1330 WY849",
    "arrivalTime": null,
    "departureTime": "14:55",
    "scheduleLegs": [
      {
        "date": "2027-02-18",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-18",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-03-02",
        "dep": "17:55",
        "arr": "21:45",
        "route": "MED → MCT",
        "flight": "WY680",
        "arrivalNextDay": false
      },
      {
        "date": "2027-03-03",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0353",
    "date": "2027-02-20",
    "time": "13:30",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY849",
    "route": "MCT → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "LIOUOD, FZYRIP, YRORDZ",
    "pax": 85,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "11FEB CGKMCT 1455 1950 WY850 | 11FEB MCTMED 2330 0150 (+1) WY677                                              BELUM | 19FEB JEDMCT 1800 2200 WY676                                                  RELEASE | 20FEB MCTCGK 0240 1330 WY849",
    "arrivalTime": "13:30",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-02-11",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-11",
        "dep": "23:30",
        "arr": "01:50",
        "route": "MCT → MED",
        "flight": "WY677",
        "arrivalNextDay": true
      },
      {
        "date": "2027-02-19",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-20",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0354",
    "date": "2027-02-21",
    "time": "19:20",
    "airline": "TR",
    "airlineName": "Scoot",
    "flight": "TR278",
    "route": "SIN → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "D7YGWF",
    "pax": 40,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "11FEB CGKSIN 0935 1225 TR275 | 11FEB SINJED 1640 2130 TR796                                                   BELUM | 20FEB JEDSIN 2245 1255 (+1) TR797                                             RELEASE | 21FEB SINCGK 1825 1920 TR278",
    "arrivalTime": "19:20",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-02-11",
        "dep": "09:35",
        "arr": "12:25",
        "route": "CGK → SIN",
        "flight": "TR275",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-11",
        "dep": "16:40",
        "arr": "21:30",
        "route": "SIN → JED",
        "flight": "TR796",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-20",
        "dep": "22:45",
        "arr": "12:55",
        "route": "JED → SIN",
        "flight": "TR797",
        "arrivalNextDay": true
      },
      {
        "date": "2027-02-21",
        "dep": "18:25",
        "arr": "19:20",
        "route": "SIN → CGK",
        "flight": "TR278",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0355",
    "date": "2027-02-24",
    "time": "13:30",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY849",
    "route": "MCT → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "FYHWGT, YTBXAG",
    "pax": 80,
    "rooms": 24,
    "package": "RAMADAN WY   MADINAH DULU / RAMADAN WY   UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "16FEB CGKMCT 1455 1950 WY850 | 16FEB MCTJED 2130 0005 (+1) WY673 | 23FEB JEDMCT 1800 2200 WY676 | 24FEB MCTCGK 0240 1330 WY849",
    "arrivalTime": "13:30",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-02-16",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-16",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-02-23",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-24",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0356",
    "date": "2027-02-27",
    "time": "09:35",
    "airline": "TR",
    "airlineName": "Scoot",
    "flight": "TR275",
    "route": "CGK → SIN",
    "type": "DEPARTURE_CGK",
    "pnr": "FFGJ7H",
    "pax": 40,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "27FEB CGKSIN 0935 1225 TR275 | 27FEB SINJED 1640 2130 TR796                                               BELUM | 13MAR JEDSIN 2245 1255 (+1) TR797                                         RELEASE | 14MAR SINCGK 1825 1920 TR278",
    "arrivalTime": null,
    "departureTime": "09:35",
    "scheduleLegs": [
      {
        "date": "2027-02-27",
        "dep": "09:35",
        "arr": "12:25",
        "route": "CGK → SIN",
        "flight": "TR275",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-27",
        "dep": "16:40",
        "arr": "21:30",
        "route": "SIN → JED",
        "flight": "TR796",
        "arrivalNextDay": false
      },
      {
        "date": "2027-03-13",
        "dep": "22:45",
        "arr": "12:55",
        "route": "JED → SIN",
        "flight": "TR797",
        "arrivalNextDay": true
      },
      {
        "date": "2027-03-14",
        "dep": "18:25",
        "arr": "19:20",
        "route": "SIN → CGK",
        "flight": "TR278",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0357",
    "date": "2027-03-01",
    "time": "14:55",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "WJRKWF",
    "pax": 45,
    "rooms": 13,
    "package": "UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "01MAR CGKMCT 1455 1950 WY850 | 01MAR MCTJED 2130 0005 (+1) WY673                                          BELUM | 15MAR JEDMCT 1800 2200 WY676                                              RELEASE | 16MAR MCTCGK 0240 1330 WY849",
    "arrivalTime": null,
    "departureTime": "14:55",
    "scheduleLegs": [
      {
        "date": "2027-03-01",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-03-01",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-03-15",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2027-03-16",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0358",
    "date": "2027-03-03",
    "time": "13:30",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY849",
    "route": "MCT → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "AFTKKC, FIZYTW, WOEVMD, HOWPTF",
    "pax": 85,
    "rooms": 13,
    "package": "UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "18FEB CGKMCT 1455 1950 WY850 | 18FEB MCTJED 2130 0005 (+1) WY673                                          BELUM | 02MAR MEDMCT 1755 2145 WY680                                              RELEASE | 03MAR MCTCGK 0240 1330 WY849",
    "arrivalTime": "13:30",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-02-18",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-18",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-03-02",
        "dep": "17:55",
        "arr": "21:45",
        "route": "MED → MCT",
        "flight": "WY680",
        "arrivalNextDay": false
      },
      {
        "date": "2027-03-03",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0359",
    "date": "2027-03-12",
    "time": "14:55",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "DDBERS",
    "pax": 45,
    "rooms": 13,
    "package": "SYAWAL WY    MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "12MAR CGKMCT 1455 1950 WY850 | 12MAR MCTJED 2130 0005 (+1) WY673 | 19MAR JEDMCT 1800 2200 WY676 | 20MAR MCTCGK 0240 1330 WY849",
    "arrivalTime": null,
    "departureTime": "14:55",
    "scheduleLegs": [
      {
        "date": "2027-03-12",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-03-12",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-03-19",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2027-03-20",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0360",
    "date": "2027-03-14",
    "time": "13:30",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY849",
    "route": "MCT → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "WJRKWF",
    "pax": 45,
    "rooms": 13,
    "package": "UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "01MAR CGKMCT 1455 1950 WY850 | 01MAR MCTJED 2130 0005 (+1) WY673         RAMADHAN WY | 13MAR JEDMCT 1800 2200 WY676              (AKHIR) | 14MAR MCTCGK 0240 1330 WY849",
    "arrivalTime": "13:30",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-03-01",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-03-01",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-03-13",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2027-03-14",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0361",
    "date": "2027-03-14",
    "time": "19:20",
    "airline": "TR",
    "airlineName": "Scoot",
    "flight": "TR278",
    "route": "SIN → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "FFGJ7H",
    "pax": 40,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "27FEB CGKSIN 0935 1225 TR275 | 27FEB SINJED 1640 2130 TR796                                               BELUM | 13MAR JEDSIN 2245 1255 (+1) TR797                                         RELEASE | 14MAR SINCGK 1825 1920 TR278",
    "arrivalTime": "19:20",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-02-27",
        "dep": "09:35",
        "arr": "12:25",
        "route": "CGK → SIN",
        "flight": "TR275",
        "arrivalNextDay": false
      },
      {
        "date": "2027-02-27",
        "dep": "16:40",
        "arr": "21:30",
        "route": "SIN → JED",
        "flight": "TR796",
        "arrivalNextDay": false
      },
      {
        "date": "2027-03-13",
        "dep": "22:45",
        "arr": "12:55",
        "route": "JED → SIN",
        "flight": "TR797",
        "arrivalNextDay": true
      },
      {
        "date": "2027-03-14",
        "dep": "18:25",
        "arr": "19:20",
        "route": "SIN → CGK",
        "flight": "TR278",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0362",
    "date": "2027-03-16",
    "time": "13:30",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY849",
    "route": "MCT → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "-",
    "pax": null,
    "rooms": null,
    "package": "-",
    "hotel": "-",
    "vendor": "-",
    "status": "-",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "01MAR CGKMCT 1455 1950 WY850 | 01MAR MCTJED 2130 0005 (+1) WY673                                          BELUM | 15MAR JEDMCT 1800 2200 WY676                                              RELEASE | 16MAR MCTCGK 0240 1330 WY849",
    "arrivalTime": "13:30",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-03-01",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-03-01",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-03-15",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2027-03-16",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0363",
    "date": "2027-03-16",
    "time": "14:55",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "GVXNHK",
    "pax": 40,
    "rooms": 12,
    "package": "SYAWAL WY    UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "16MAR CGKMCT 1455 1950 WY850 | 16MAR MCTJED 2130 0005 (+1) WY673 | 23MAR JEDMCT 1800 2200 WY676 | 24MAR MCTCGK 0240 1330 WY849",
    "arrivalTime": null,
    "departureTime": "14:55",
    "scheduleLegs": [
      {
        "date": "2027-03-16",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-03-16",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-03-23",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2027-03-24",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0364",
    "date": "2027-03-20",
    "time": "13:30",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY849",
    "route": "MCT → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "DDBERS",
    "pax": 45,
    "rooms": 13,
    "package": "SYAWAL WY    MADINAH DULU",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "12MAR CGKMCT 1455 1950 WY850 | 12MAR MCTJED 2130 0005 (+1) WY673 | 19MAR JEDMCT 1800 2200 WY676 | 20MAR MCTCGK 0240 1330 WY849",
    "arrivalTime": "13:30",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-03-12",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-03-12",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-03-19",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2027-03-20",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0365",
    "date": "2027-03-21",
    "time": "14:55",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY850",
    "route": "CGK → MCT",
    "type": "DEPARTURE_CGK",
    "pnr": "LIGHUK, WKCTXZ",
    "pax": 80,
    "rooms": 12,
    "package": "SYAWAL WY    UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "21MAR CGKMCT 1455 1950 WY850 | 21MAR MCTMED 2330 0150 WY677                                               BELUM | 28MAR JEDMCT 1800 2200 WY676                                              RELEASE | 29MAR MCTCGK 0215 1320 WY849",
    "arrivalTime": null,
    "departureTime": "14:55",
    "scheduleLegs": [
      {
        "date": "2027-03-21",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-03-21",
        "dep": "23:30",
        "arr": "01:50",
        "route": "MCT → MED",
        "flight": "WY677",
        "arrivalNextDay": false
      },
      {
        "date": "2027-03-28",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2027-03-29",
        "dep": "02:15",
        "arr": "13:20",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0366",
    "date": "2027-03-24",
    "time": "13:30",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY849",
    "route": "MCT → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "GVXNHK",
    "pax": 40,
    "rooms": 12,
    "package": "SYAWAL WY    UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "16MAR CGKMCT 1455 1950 WY850 | 16MAR MCTJED 2130 0005 (+1) WY673 | 23MAR JEDMCT 1800 2200 WY676 | 24MAR MCTCGK 0240 1330 WY849",
    "arrivalTime": "13:30",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-03-16",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-03-16",
        "dep": "21:30",
        "arr": "00:05",
        "route": "MCT → JED",
        "flight": "WY673",
        "arrivalNextDay": true
      },
      {
        "date": "2027-03-23",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2027-03-24",
        "dep": "02:40",
        "arr": "13:30",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  },
  {
    "id": "CGK-0367",
    "date": "2027-03-29",
    "time": "13:20",
    "airline": "WY",
    "airlineName": "Oman Air",
    "flight": "WY849",
    "route": "MCT → CGK",
    "type": "ARRIVAL_CGK",
    "pnr": "LIGHUK, WKCTXZ",
    "pax": 80,
    "rooms": 12,
    "package": "SYAWAL WY    UMRAH LANGSUNG",
    "hotel": "-",
    "vendor": "-",
    "status": "RELEASE",
    "note": "-",
    "verification": "",
    "sourcePage": "PDF",
    "sourceRow": "schedule",
    "sourceSnippet": "21MAR CGKMCT 1455 1950 WY850 | 21MAR MCTMED 2330 0150 WY677                                               BELUM | 28MAR JEDMCT 1800 2200 WY676                                              RELEASE | 29MAR MCTCGK 0215 1320 WY849",
    "arrivalTime": "13:20",
    "departureTime": null,
    "scheduleLegs": [
      {
        "date": "2027-03-21",
        "dep": "14:55",
        "arr": "19:50",
        "route": "CGK → MCT",
        "flight": "WY850",
        "arrivalNextDay": false
      },
      {
        "date": "2027-03-21",
        "dep": "23:30",
        "arr": "01:50",
        "route": "MCT → MED",
        "flight": "WY677",
        "arrivalNextDay": false
      },
      {
        "date": "2027-03-28",
        "dep": "18:00",
        "arr": "22:00",
        "route": "JED → MCT",
        "flight": "WY676",
        "arrivalNextDay": false
      },
      {
        "date": "2027-03-29",
        "dep": "02:15",
        "arr": "13:20",
        "route": "MCT → CGK",
        "flight": "WY849",
        "arrivalNextDay": false
      }
    ]
  }
];
