const CACHE = 'cgk-handling-v5-20260813';
const CORE = [
  './?v=5',
  './index.html?v=5',
  './style.css?v=5',
  './app.js?v=5',
  './data.js?v=5',
  './manifest.webmanifest?v=5',
  './icons/icon-192.png',
  './icons/icon-512.png'
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
  }).catch(()=>caches.match(event.request)||caches.match('./index.html?v=5')) : caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{
    const copy=response.clone();caches.open(CACHE).then(c=>c.put(event.request,copy)).catch(()=>{});return response;
  }))));
});
