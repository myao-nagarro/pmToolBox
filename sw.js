/* Service worker: cache the app shell so PM Toolbox works offline.
   Bump CACHE when files change so clients pick up the new version. */
const CACHE = "pm-toolbox-v1";
const FILES = [
  "./", "./index.html", "./css/styles.css", "./manifest.webmanifest", "./icons/icon.svg",
  "./js/data/topics.js", "./js/data/glossary.js", "./js/data/glossary-examples.js",
  "./js/data/glossary-concepts.js", "./js/data/compare.js",
  "./js/core.js", "./js/glossary.js", "./js/views.js", "./js/mindmap.js", "./js/router.js"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
/* Same-origin: network first so updates arrive, cache as fallback offline.
   Cross-origin (Google Fonts): cache first, filled on first use. */
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const sameOrigin = new URL(req.url).origin === location.origin;
  if (sameOrigin) {
    e.respondWith(fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy));
      return res;
    }).catch(() => caches.match(req).then(r => r || caches.match("./index.html"))));
  } else if (/fonts\.(googleapis|gstatic)\.com$/.test(new URL(req.url).hostname)) {
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy));
      return res;
    })));
  }
});
