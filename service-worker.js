const CACHE_NAME = 'zana-kids-pwa-v35';
const CORE_ASSETS = [
  './',
  './index.html',
  './app.css',
  './app.js',
  './manifest.webmanifest',
  './icon.svg',
  './offline.html',
  './README.md'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  const isHtmlNavigation = event.request.mode === 'navigate';
  const isBookImage = url.pathname.includes('/premium-pages/') || url.pathname.includes('/covers/');
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached && !isHtmlNavigation) return cached;
      return fetch(event.request)
        .then(response => {
          if (!response || response.status !== 200) return response;
          const copy = response.clone();
          if (!isHtmlNavigation || isBookImage) {
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() => cached || caches.match('./offline.html'));
    })
  );
});








