// Service worker de la Mastira web (generado al compilar en modo web desde sw-template.js; el
// mismo esquema que reloj/sw-template.js). Guarda la app y Stockfish en el dispositivo para abrir
// Mastira y usar el motor sin internet.
const VERSION = '143b486689'
const CORE = ["./","assets/crimson-pro-vietnamese-400-normal-C3m3Wqkz.woff2","assets/crimson-pro-latin-ext-400-normal-B3ID4PT2.woff2","assets/crimson-pro-latin-400-normal-B4SlG4wx.woff2","assets/crimson-pro-latin-600-normal-vJ8oEdKU.woff2","assets/crimson-pro-vietnamese-600-normal-BD5z241x.woff2","assets/literata-greek-600-normal-AXWu-DgS.woff2","assets/crimson-pro-latin-ext-600-normal-DTIcmTiA.woff2","assets/literata-greek-ext-600-normal-C9Ui0wVq.woff2","assets/literata-cyrillic-600-normal-CJ4BZrBr.woff2","assets/literata-vietnamese-600-normal-CKzxoyei.woff2","assets/literata-latin-ext-600-normal-iLkdh2tW.woff2","assets/crimson-pro-vietnamese-700-normal-D0P6piNS.woff2","assets/crimson-pro-latin-700-normal-BfTu9YAt.woff2","assets/literata-latin-600-normal-A9sHopYh.woff2","assets/crimson-pro-latin-ext-700-normal-DB6BXmm8.woff2","assets/literata-cyrillic-400-normal-CNCMA2GQ.woff2","assets/literata-greek-ext-400-normal-wlSmuZ9Y.woff2","assets/literata-greek-400-normal-DLCf-Z3g.woff2","assets/literata-vietnamese-400-normal-H9pSqQsV.woff2","assets/literata-latin-400-normal-CLtNJ872.woff2","assets/literata-greek-800-normal-CXRlleG1.woff2","assets/literata-latin-ext-400-normal-D5BsCrMl.woff2","assets/literata-greek-ext-800-normal-nMBCiIri.woff2","assets/literata-vietnamese-800-normal-qsFxgcG0.woff2","assets/literata-latin-ext-800-normal-YXqKKZyQ.woff2","assets/dm-sans-latin-400-normal-CW0RaeGs.woff2","assets/dm-sans-latin-ext-400-normal-BtiwyxMk.woff2","assets/literata-latin-800-normal-CAgJjmlx.woff2","assets/dm-mono-latin-400-normal-4GdczIuU.woff2","assets/dm-sans-latin-ext-600-normal-4vooXBpG.woff2","assets/dm-sans-latin-ext-500-normal-BJfUCQsA.woff2","assets/literata-cyrillic-800-normal-D3mwU3Uw.woff2","assets/dm-sans-latin-600-normal-Aqo67rzb.woff2","assets/dm-sans-latin-500-normal-B9HHJjqV.woff2","assets/dm-mono-latin-ext-400-normal-C2zvOubV.woff2","assets/dm-mono-latin-500-normal-DRMDZjhP.woff2","assets/dm-mono-latin-ext-500-normal-BtRyHRi6.woff2","assets/crimson-pro-latin-ext-400-normal-BWiDT69a.woff","assets/crimson-pro-vietnamese-400-normal-CEHt5KbE.woff","assets/crimson-pro-latin-400-normal-BzhyrSeK.woff","assets/crimson-pro-vietnamese-600-normal-WXpto_XS.woff","assets/crimson-pro-latin-600-normal-Ca4fy0Cf.woff","assets/literata-greek-600-normal-yjIuBGCY.woff","assets/literata-greek-ext-600-normal-dOBTK4hz.woff","assets/crimson-pro-latin-ext-600-normal-ChXPf8Fx.woff","assets/literata-cyrillic-ext-600-normal-DMpAXN3v.woff","assets/literata-cyrillic-600-normal-CFZV0quP.woff","assets/literata-vietnamese-600-normal-8qS4Xlwy.woff","assets/crimson-pro-vietnamese-700-normal-CXdpdE-3.woff","assets/literata-latin-ext-600-normal-DYcsrkT4.woff","assets/crimson-pro-latin-700-normal-CnzwvVon.woff","assets/literata-greek-ext-400-normal-jenpRSxk.woff","assets/literata-latin-600-normal-BFEFPlMO.woff","assets/crimson-pro-latin-ext-700-normal-B0XMIwQy.woff","assets/literata-cyrillic-ext-400-normal-BuNkiaAX.woff","assets/literata-cyrillic-400-normal-BZoHpSD9.woff","assets/literata-vietnamese-400-normal-BvhrDK3U.woff","assets/literata-latin-400-normal-CUhpYSl8.woff","assets/literata-greek-400-normal-CMPfP1Pr.woff","assets/literata-greek-800-normal-DdEIzewt.woff","assets/literata-cyrillic-ext-800-normal-gHf-akcn.woff","assets/literata-greek-ext-800-normal-0qpHStuG.woff","assets/literata-vietnamese-800-normal-ZKQv-1Up.woff","assets/literata-latin-ext-800-normal-CLElJf9g.woff","assets/literata-latin-ext-400-normal-Cs2-p-8d.woff","assets/dm-sans-latin-400-normal-BwCSEQnW.woff","assets/dm-sans-latin-ext-400-normal-BjWJ59Pq.woff","assets/literata-latin-800-normal-B7jgOtxN.woff","assets/dm-mono-latin-400-normal--0xN8mdc.woff","assets/dm-sans-latin-ext-600-normal-DRtaDpgU.woff","assets/dm-sans-latin-ext-500-normal-DR84L5F-.woff","assets/literata-cyrillic-800-normal-gire1OzM.woff","assets/dm-mono-latin-ext-400-normal-1aZr6b2b.woff","assets/dm-sans-latin-500-normal-Dr3UlScf.woff","assets/dm-sans-latin-600-normal-BmdmIIQ2.woff","assets/dm-mono-latin-ext-500-normal-Dw3M13d8.woff","assets/dm-mono-latin-500-normal-CN8Miw6E.woff","assets/main-BcSzgLXh.css","assets/RelojApp-Bz9ujnfF.css","assets/diagnostico-pOboNioF.js","assets/main-DCJ5ejsA.js","assets/import-wrapper-Dc6Sn4yQ.js","assets/RelojApp-B9dDwFpg.js","diagnostico.html","index.html","manifest.webmanifest","icon.svg"]                                  // archivos de esta versión de la app
const CACHE = 'mastira-app-' + VERSION
// El motor va en una caché aparte que NO cambia con cada versión de la app:
// la red neuronal (40 MB) se descarga una sola vez.
const ENGINE_CACHE = 'mastira-engine-sf16'
const ENGINE = ['stockfish/stockfish-nnue-16-single.js', 'stockfish/stockfish-nnue-16-single.wasm']
const NNUE = 'stockfish/nn-5af11540bbfe.nnue'

const url = p => new URL(p, self.registration.scope).href
// ignoreVary: los scripts se piden con cabecera Origin (type="module") y el servidor responde con
// "Vary: Origin"; sin esto la copia guardada no coincidiría sin conexión.
const MATCH = { ignoreSearch: true, ignoreVary: true }

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const app = await caches.open(CACHE)
    await app.addAll(CORE.map(url))
    await self.skipWaiting()
    // El motor se guarda después, sin bloquear la instalación (red lenta en la tablet): si falla,
    // se vuelve a intentar cuando el motor lo pida.
    const eng = await caches.open(ENGINE_CACHE)
    for (const f of [...ENGINE, NNUE]) {
      if (!(await eng.match(url(f), MATCH))) await eng.add(url(f)).catch(() => {})
    }
  })())
})

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    for (const k of await caches.keys()) {
      if (k.startsWith('mastira-app-') && k !== CACHE) await caches.delete(k)
    }
    await self.clients.claim()
  })())
})

self.addEventListener('fetch', event => {
  const req = event.request
  // Lichess, Chess.com, fuentes…: directo a la red (sus datos se guardan en IndexedDB)
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return

  // Páginas: primero la red (para recibir actualizaciones); sin red, la copia guardada
  if (req.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const ctrl = new AbortController()
        const t = setTimeout(() => ctrl.abort(), 4000)
        const res = await fetch(req, { signal: ctrl.signal })
        clearTimeout(t)
        return res
      } catch {
        const page = new URL(req.url).pathname.endsWith('diagnostico.html') ? 'diagnostico.html' : 'index.html'
        return (await caches.match(url(page), MATCH)) || (await caches.match(url('./'), MATCH)) || Response.error()
      }
    })())
    return
  }

  // Motor y demás archivos: primero la caché
  const isEngine = req.url.includes('/stockfish/')
  event.respondWith((async () => {
    const cache = await caches.open(isEngine ? ENGINE_CACHE : CACHE)
    const hit = await cache.match(req, MATCH)
    if (hit) return hit
    const res = await fetch(req)
    if (res.ok && res.type === 'basic') cache.put(req, res.clone()).catch(() => {})
    return res
  })())
})
