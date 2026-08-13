const CACHE = 'cgk-handling-v11-20260813';
const CORE = [
  './?app=v11',
  './index.html?v=11',
  './style.css?v=11',
  './app.js?v=11',
  './data.js?v=11',
  './manifest.webmanifest?v=11',
  './icons/icon-192.png?rev=11',
  './icons/icon-512.png?rev=11'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if(event.request.method!=='GET') return;
  const url=new URL(event.request.url);
  const isAppFile=/\.(js|css|html|webmanifest)$/i.test(url.pathname);
  event.respondWith((isAppFile ? fetch(event.request,{cache:'no-store'}).then(response=>{
    const copy=response.clone();caches.open(CACHE).then(c=>c.put(event.request,copy)).catch(()=>{});return response;
  }).catch(()=>caches.match(event.request)||caches.match('./index.html?v=11')) : caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{
    const copy=response.clone();caches.open(CACHE).then(c=>c.put(event.request,copy)).catch(()=>{});return response;
  }))));
});
