// v15 intentionally has no service worker. Any previous worker is removed by index.html.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil(self.registration.unregister()));
