const PERIODS=[
  {y:2026,m:7,label:"August 2026"},{y:2026,m:8,label:"September 2026"},
  {y:2026,m:9,label:"October 2026"},{y:2026,m:10,label:"November 2026"},
  {y:2026,m:11,label:"December 2026"},{y:2027,m:0,label:"January 2027"},
  {y:2027,m:1,label:"February 2027"},{y:2027,m:2,label:"March 2027"}
];
const APP_VERSION="5.0.0";
let state={index:0,query:"",type:"all",airline:"all",highPax:false};
const $=s=>document.querySelector(s);
const monthKey=p=>`${p.y}-${String(p.m+1).padStart(2,"0")}`;
const fmtDate=s=>new Date(`${s}T12:00:00`).toLocaleDateString("en-GB",{day:"2-digit",month:"long",year:"numeric"});
const handlingTime=e=>e.type==="ARRIVAL_CGK" ? (e.arrivalTime || e.time) : (e.departureTime || e.time);
// Normalize all arrival cards from the actual arrival field so transit departure times can never appear as CGK handling time.
handlingEvents.forEach(e=>{ if(e.type==="ARRIVAL_CGK" && e.arrivalTime) e.time=e.arrivalTime; });

function monthEvents(){
  const p=PERIODS[state.index],k=monthKey(p);
  return handlingEvents.filter(e=>{
    if(e.date.slice(0,7)!==k)return false;
    if(state.type!=="all"&&e.type!==state.type)return false;
    if(state.airline!=="all"&&e.airline!==state.airline)return false;
    if(state.highPax&&!(e.pax>=45))return false;
    if(state.query){const q=state.query.toLowerCase();return [e.flight,e.pnr,e.package,e.hotel,e.vendor,e.route,e.date,e.pax,e.airlineName,e.type].join(" ").toLowerCase().includes(q)}
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
    ["Total Events",ev.length,"source events"],["Departures",deps.length,"CGK outbound"],["Arrivals",arr.length,"CGK inbound"],
    ["Total Pax",ev.reduce((n,e)=>n+(e.pax||0),0)||"-","only verified pax"],
    ["Busiest Day",busiest?new Date(`${busiest[0]}T12:00:00`).toLocaleDateString("en-US",{day:"2-digit",month:"short"}):"-",busiest?`${busiest[1]} events`:"-"],
    ["Next Handling",next?`${new Date(`${next.date}T12:00:00`).toLocaleDateString("en-US",{day:"2-digit",month:"short"})} · ${handlingTime(next)}`:"-",next?next.flight:"-"]
  ];
  $("#summary").innerHTML=cards.map(c=>`<div class="summary-card"><span>${c[0]}</span><b>${c[1]}</b><small>${c[2]}</small></div>`).join("");
}
function renderYear(){
  $("#yearOverview").innerHTML=PERIODS.map(p=>{const k=monthKey(p),n=handlingEvents.filter(e=>e.date.slice(0,7)===k).length;return `<div class="year-item"><span>${p.label}</span><b>${n}</b><small>CGK events</small></div>`;}).join("");
}
function eventCard(e){
  const dep=e.type==="DEPARTURE_CGK",cls=dep?"dep":"arr",time=handlingTime(e);
  const header=dep
    ?`<div class="event-top"><div><div class="type">BERANGKAT</div><div class="time">${time}</div></div></div>`
    :`<div class="event-top"><div class="type">TIBA</div><div class="time">${time}</div></div>`;
  return `<div class="event ${cls}" data-id="${e.id}">${header}<div class="flight">${e.flight}</div><div class="route">${e.route}</div><div class="pax">${e.pax?`${e.pax} PAX`:"PAX —"}</div></div>`;
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
    html+=`<div class="day ${isToday?"today":""}"><div class="day-head"><span class="day-num">${d}</span>${isToday?'<span class="today-badge">TODAY</span>':`<span class="event-count">${dayEvents.length?dayEvents.length+" events":""}</span>`}</div>${dayEvents.slice(0,4).map(eventCard).join("")}${dayEvents.length>4?`<div class="more" data-date="${ds}">+${dayEvents.length-4} more</div>`:""}</div>`;
  }
  const total=42,used=start+days;for(let i=used;i<total;i++)html+=`<div class="day muted"><div class="day-head"><span class="day-num"></span></div></div>`;
  $("#calendar").innerHTML=html;
  document.querySelectorAll(".event").forEach(el=>el.addEventListener("click",()=>openDrawer(el.dataset.id)));
  document.querySelectorAll(".more").forEach(el=>el.addEventListener("click",()=>showDay(el.dataset.date)));
}
function showDay(date){const ev=monthEvents().filter(e=>e.date===date);if(ev[0])openDrawer(ev[0].id)}
function findEvent(id){return handlingEvents.find(e=>e.id===id)}
function openDrawer(id){
  const e=findEvent(id);if(!e)return;const dep=e.type==="DEPARTURE_CGK",time=handlingTime(e);
  $("#drawerTitle").textContent=e.flight;
  const legs=(e.scheduleLegs||[]).map(x=>`<div class="leg-row"><span>${x.date}</span><b>${x.dep} → ${x.arr}</b><span>${x.route}</span><span>${x.flight}${x.arrivalNextDay?" (+1)":""}</span></div>`).join("");
  $("#drawerBody").innerHTML=`<div class="detail-hero"><small>${dep?"DEPARTURE":"ARRIVAL"} · ${fmtDate(e.date)}</small><div class="big ${dep?"left":"right"}">${time}</div><small>${e.route}</small></div>
  <div class="detail-grid">${[["Handling",dep?"BERANGKAT":"TIBA"],["Flight",e.flight],["Airline",e.airlineName],["Date",fmtDate(e.date)],["Handling Time",time],["Route",e.route],["Package",e.package],["PNR",e.pnr],["PAX",e.pax??"-"],["Rooms",e.rooms??"-"],["Hotel",e.hotel],["Vendor",e.vendor],["Status",e.status],["Note",e.note||"-"]].map(x=>`<div class="detail-item"><span>${x[0]}</span><b>${x[1]}</b></div>`).join("")}</div>
  <div class="legs-box"><b>Flight schedule source</b>${legs||"<div style='margin-top:7px;color:#7b8983;font-size:10px'>-</div>"}</div>
  <div class="source-box"><b>Source</b><p>Handling TIBA = actual arrival time at CGK on the final inbound segment. Transit departure times are never used as CGK handling arrival times. Source: PNR HAMDAN TOUR - Google Spreadsheet.</p></div>`;
  $("#drawer").classList.add("open");$("#backdrop").classList.add("open");
}
function closeDrawer(){$("#drawer").classList.remove("open");$("#backdrop").classList.remove("open")}
function render(){renderSummary();renderCalendar();renderYear();$("#monthSelect").value=state.index;lucide.createIcons();}
function setIndex(i){state.index=Math.max(0,Math.min(PERIODS.length-1,i));render()}
function exportCSV(){
  const rows=monthEvents(),head=["Date","Type","Time","Airline","Flight","Route","Package","PNR","Pax","Rooms","Hotel","Vendor","Status","Note"];
  const csv=[head,...rows.map(e=>[e.date,e.type,handlingTime(e),e.airline,e.flight,e.route,e.package,e.pnr,e.pax??"",e.rooms??"",e.hotel,e.vendor,e.status,e.note??""])].map(r=>r.map(v=>`"${String(v).replaceAll('"','""')}"`).join(",")).join("\n");
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
$("#helpBtn").onclick=()=>toast("Klik event untuk detail · Ctrl K untuk fokus search");$("#notifyBtn").onclick=()=>toast("6 notifikasi operator");$("#profileBtn").onclick=()=>toast("Profil operator aktif");
$("#themeBtn").onclick=()=>{document.body.classList.toggle("dark");toast(document.body.classList.contains("dark")?"Dark mode aktif":"Light mode aktif")};
$("#closeDrawer").onclick=closeDrawer;$("#backdrop").onclick=closeDrawer;
function showSavedNote(){const n=localStorage.getItem("cgk-note")||"";const el=$("#savedNote");if(n){el.textContent=`Catatan operator: ${n}`;el.classList.remove("hidden")}else el.classList.add("hidden")}
window.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();$("#search").focus()}if(e.key==="Escape"){closeDrawer();$("#filterPanel").classList.remove("open")}});
$("#helpBtn").addEventListener("dblclick",()=>toast(`CGK Handling v${APP_VERSION}`));
showSavedNote();render();
