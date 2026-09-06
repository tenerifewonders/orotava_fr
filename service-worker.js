const CACHE_NAME = "orotava-fr-v11";

// 1. Core App Shell (Lightweight - installs in <300ms)
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",
  "./FR-LA-OROTAVA.html",
  "./icon-192.png",
  "./icon-512.png",
  "./orotava.geojson"
];

const AUDIO_URLS = [
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/0.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/1.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/2.0.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/2.1.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/2.2.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/2.3.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/2.4.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/3.1.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/3.2.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/3.3.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/3.4.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/3.5.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/4.1.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/4.2.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/4.3.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/4.4.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/4.5.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/4.6.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/5.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/6.1.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/6.2.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/6.3.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/6.4.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/6.5.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/6.6.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/6.7.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/6.8.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/6.9.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/6.10.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/6.11.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/6.12.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/6.13.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/7.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/8.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/9.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/10.1.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/10.2.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/orotava_fr/10.3.mp3"
];

const TILE_URLS = [
  "./tiles/11/927/854.png",
  "./tiles/11/927/855.png",
  "./tiles/11/927/856.png",
  "./tiles/11/927/857.png",
  "./tiles/11/927/858.png",
  "./tiles/11/928/854.png",
  "./tiles/11/928/855.png",
  "./tiles/11/928/856.png",
  "./tiles/11/928/857.png",
  "./tiles/11/928/858.png",
  "./tiles/11/929/854.png",
  "./tiles/11/929/855.png",
  "./tiles/11/929/856.png",
  "./tiles/11/929/857.png",
  "./tiles/11/929/858.png",
  "./tiles/11/930/854.png",
  "./tiles/11/930/855.png",
  "./tiles/11/930/856.png",
  "./tiles/11/930/857.png",
  "./tiles/11/930/858.png",
  "./tiles/11/931/854.png",
  "./tiles/11/931/855.png",
  "./tiles/11/931/856.png",
  "./tiles/11/931/857.png",
  "./tiles/11/931/858.png",
  "./tiles/11/932/854.png",
  "./tiles/11/932/855.png",
  "./tiles/11/932/856.png",
  "./tiles/11/932/857.png",
  "./tiles/11/932/858.png",
  "./tiles/12/1855/1708.png",
  "./tiles/12/1855/1709.png",
  "./tiles/12/1855/1710.png",
  "./tiles/12/1855/1711.png",
  "./tiles/12/1855/1712.png",
  "./tiles/12/1855/1713.png",
  "./tiles/12/1855/1714.png",
  "./tiles/12/1855/1715.png",
  "./tiles/12/1855/1716.png",
  "./tiles/12/1856/1708.png",
  "./tiles/12/1856/1709.png",
  "./tiles/12/1856/1710.png",
  "./tiles/12/1856/1711.png",
  "./tiles/12/1856/1712.png",
  "./tiles/12/1856/1713.png",
  "./tiles/12/1856/1714.png",
  "./tiles/12/1856/1715.png",
  "./tiles/12/1856/1716.png",
  "./tiles/12/1857/1708.png",
  "./tiles/12/1857/1709.png",
  "./tiles/12/1857/1710.png",
  "./tiles/12/1857/1711.png",
  "./tiles/12/1857/1712.png",
  "./tiles/12/1857/1713.png",
  "./tiles/12/1857/1714.png",
  "./tiles/12/1857/1715.png",
  "./tiles/12/1857/1716.png",
  "./tiles/12/1858/1708.png",
  "./tiles/12/1858/1709.png",
  "./tiles/12/1858/1710.png",
  "./tiles/12/1858/1711.png",
  "./tiles/12/1858/1712.png",
  "./tiles/12/1858/1713.png",
  "./tiles/12/1858/1714.png",
  "./tiles/12/1858/1715.png",
  "./tiles/12/1858/1716.png",
  "./tiles/12/1859/1708.png",
  "./tiles/12/1859/1709.png",
  "./tiles/12/1859/1710.png",
  "./tiles/12/1859/1711.png",
  "./tiles/12/1859/1712.png",
  "./tiles/12/1859/1713.png",
  "./tiles/12/1859/1714.png",
  "./tiles/12/1859/1715.png",
  "./tiles/12/1859/1716.png",
  "./tiles/12/1860/1708.png",
  "./tiles/12/1860/1709.png",
  "./tiles/12/1860/1710.png",
  "./tiles/12/1860/1711.png",
  "./tiles/12/1860/1712.png",
  "./tiles/12/1860/1713.png",
  "./tiles/12/1860/1714.png",
  "./tiles/12/1860/1715.png",
  "./tiles/12/1860/1716.png",
  "./tiles/12/1861/1708.png",
  "./tiles/12/1861/1709.png",
  "./tiles/12/1861/1710.png",
  "./tiles/12/1861/1711.png",
  "./tiles/12/1861/1712.png",
  "./tiles/12/1861/1713.png",
  "./tiles/12/1861/1714.png",
  "./tiles/12/1861/1715.png",
  "./tiles/12/1861/1716.png",
  "./tiles/12/1862/1708.png",
  "./tiles/12/1862/1709.png",
  "./tiles/12/1862/1710.png",
  "./tiles/12/1862/1711.png",
  "./tiles/12/1862/1712.png",
  "./tiles/12/1862/1713.png",
  "./tiles/12/1862/1714.png",
  "./tiles/12/1862/1715.png",
  "./tiles/12/1862/1716.png",
  "./tiles/12/1863/1708.png",
  "./tiles/12/1863/1709.png",
  "./tiles/12/1863/1710.png",
  "./tiles/12/1863/1711.png",
  "./tiles/12/1863/1712.png",
  "./tiles/12/1863/1713.png",
  "./tiles/12/1863/1714.png",
  "./tiles/12/1863/1715.png",
  "./tiles/12/1863/1716.png",
  "./tiles/12/1864/1708.png",
  "./tiles/12/1864/1709.png",
  "./tiles/12/1864/1710.png",
  "./tiles/12/1864/1711.png",
  "./tiles/12/1864/1712.png",
  "./tiles/12/1864/1713.png",
  "./tiles/12/1864/1714.png",
  "./tiles/12/1864/1715.png",
  "./tiles/12/1864/1716.png",
  "./tiles/13/3718/3420.png",
  "./tiles/13/3718/3421.png",
  "./tiles/13/3718/3422.png",
  "./tiles/13/3719/3420.png",
  "./tiles/13/3719/3421.png",
  "./tiles/13/3719/3422.png",
  "./tiles/13/3720/3420.png",
  "./tiles/13/3720/3421.png",
  "./tiles/13/3720/3422.png",
  "./tiles/13/3721/3420.png",
  "./tiles/13/3721/3421.png",
  "./tiles/13/3721/3422.png",
  "./tiles/14/7438/6842.png",
  "./tiles/14/7438/6843.png",
  "./tiles/14/7438/6844.png",
  "./tiles/14/7439/6842.png",
  "./tiles/14/7439/6843.png",
  "./tiles/14/7439/6844.png",
  "./tiles/14/7440/6842.png",
  "./tiles/14/7440/6843.png",
  "./tiles/14/7440/6844.png",
  "./tiles/14/7441/6842.png",
  "./tiles/14/7441/6843.png",
  "./tiles/14/7441/6844.png",
  "./tiles/15/14877/13685.png",
  "./tiles/15/14877/13686.png",
  "./tiles/15/14877/13687.png",
  "./tiles/15/14877/13688.png",
  "./tiles/15/14878/13685.png",
  "./tiles/15/14878/13686.png",
  "./tiles/15/14878/13687.png",
  "./tiles/15/14878/13688.png",
  "./tiles/15/14879/13685.png",
  "./tiles/15/14879/13686.png",
  "./tiles/15/14879/13687.png",
  "./tiles/15/14879/13688.png",
  "./tiles/15/14880/13685.png",
  "./tiles/15/14880/13686.png",
  "./tiles/15/14880/13687.png",
  "./tiles/15/14880/13688.png",
  "./tiles/15/14881/13685.png",
  "./tiles/15/14881/13686.png",
  "./tiles/15/14881/13687.png",
  "./tiles/15/14881/13688.png",
  "./tiles/15/14882/13685.png",
  "./tiles/15/14882/13686.png",
  "./tiles/15/14882/13687.png",
  "./tiles/15/14882/13688.png",
  "./tiles/16/29756/27372.png",
  "./tiles/16/29756/27373.png",
  "./tiles/16/29756/27374.png",
  "./tiles/16/29756/27375.png",
  "./tiles/16/29756/27376.png",
  "./tiles/16/29757/27372.png",
  "./tiles/16/29757/27373.png",
  "./tiles/16/29757/27374.png",
  "./tiles/16/29757/27375.png",
  "./tiles/16/29757/27376.png",
  "./tiles/16/29758/27372.png",
  "./tiles/16/29758/27373.png",
  "./tiles/16/29758/27374.png",
  "./tiles/16/29758/27375.png",
  "./tiles/16/29758/27376.png",
  "./tiles/16/29759/27372.png",
  "./tiles/16/29759/27373.png",
  "./tiles/16/29759/27374.png",
  "./tiles/16/29759/27375.png",
  "./tiles/16/29759/27376.png",
  "./tiles/16/29760/27372.png",
  "./tiles/16/29760/27373.png",
  "./tiles/16/29760/27374.png",
  "./tiles/16/29760/27375.png",
  "./tiles/16/29760/27376.png",
  "./tiles/16/29761/27372.png",
  "./tiles/16/29761/27373.png",
  "./tiles/16/29761/27374.png",
  "./tiles/16/29761/27375.png",
  "./tiles/16/29761/27376.png",
  "./tiles/16/29762/27372.png",
  "./tiles/16/29762/27373.png",
  "./tiles/16/29762/27374.png",
  "./tiles/16/29762/27375.png",
  "./tiles/16/29762/27376.png",
  "./tiles/16/29763/27372.png",
  "./tiles/16/29763/27373.png",
  "./tiles/16/29763/27374.png",
  "./tiles/16/29763/27375.png",
  "./tiles/16/29763/27376.png",
  "./tiles/17/59516/54746.png",
  "./tiles/17/59516/54747.png",
  "./tiles/17/59516/54748.png",
  "./tiles/17/59516/54749.png",
  "./tiles/17/59516/54750.png",
  "./tiles/17/59517/54746.png",
  "./tiles/17/59517/54747.png",
  "./tiles/17/59517/54748.png",
  "./tiles/17/59517/54749.png",
  "./tiles/17/59517/54750.png",
  "./tiles/17/59518/54746.png",
  "./tiles/17/59518/54747.png",
  "./tiles/17/59518/54748.png",
  "./tiles/17/59518/54749.png",
  "./tiles/17/59518/54750.png",
  "./tiles/17/59519/54746.png",
  "./tiles/17/59519/54747.png",
  "./tiles/17/59519/54748.png",
  "./tiles/17/59519/54749.png",
  "./tiles/17/59519/54750.png",
  "./tiles/17/59520/54746.png",
  "./tiles/17/59520/54747.png",
  "./tiles/17/59520/54748.png",
  "./tiles/17/59520/54749.png",
  "./tiles/17/59520/54750.png",
  "./tiles/17/59521/54746.png",
  "./tiles/17/59521/54747.png",
  "./tiles/17/59521/54748.png",
  "./tiles/17/59521/54749.png",
  "./tiles/17/59521/54750.png",
  "./tiles/17/59522/54746.png",
  "./tiles/17/59522/54747.png",
  "./tiles/17/59522/54748.png",
  "./tiles/17/59522/54749.png",
  "./tiles/17/59522/54750.png",
  "./tiles/17/59523/54746.png",
  "./tiles/17/59523/54747.png",
  "./tiles/17/59523/54748.png",
  "./tiles/17/59523/54749.png",
  "./tiles/17/59523/54750.png"
];

// 1. INSTALL: Instant installation of core app shell
self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[SW] Pre-caching core app shell...");
      return cache.addAll(CORE_ASSETS).catch((err) => {
        console.warn("[SW] App shell pre-cache warning:", err);
      });
    })
  );
});

// 2. ACTIVATE: Clean old caches, claim clients & run parallel background pre-cache
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    ).then(() => self.clients.claim())
  );

  // Background caching of all audio files & map tiles (non-blocking)
  preCacheOfflineContent();
});

// Message listener for skip waiting
self.addEventListener("message", (e) => {
  if (e.data && e.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// Fast parallel batch precaching function
async function preCacheOfflineContent() {
  try {
    const cache = await caches.open(CACHE_NAME);
    console.log("[SW] Starting background precache for tiles and audio...");

    // Helper for fast parallel batch fetch
    async function fetchBatch(urls, batchSize) {
      for (let i = 0; i < urls.length; i += batchSize) {
        const batch = urls.slice(i, i + batchSize);
        await Promise.all(
          batch.map(async (url) => {
            try {
              const req = url.endsWith(".mp3") ? new Request(url, { method: "GET" }) : url;
              const res = await fetch(req);
              if (res && res.status === 200) {
                await cache.put(url, res);
              }
            } catch (err) {
              // Silently ignore individual tile/audio network glitches
            }
          })
        );
      }
    }

    // Pre-cache all audio MP3 files (3 at a time)
    await fetchBatch(AUDIO_URLS, 3);
    // Pre-cache all map tile PNGs (15 at a time)
    await fetchBatch(TILE_URLS, 15);

    console.log("[SW] Background precache complete! Notifying app...");

    // Notify all open client tabs/windows
    const clientsList = await self.clients.matchAll();
    for (const client of clientsList) {
      client.postMessage({ type: "CACHE_COMPLETE" });
    }
  } catch (err) {
    console.warn("[SW] Background precache warning:", err);
  }
}

// 3. FETCH: Smart Cache-First for Assets/Tiles + HTTP Range Request Handler for Audios
self.addEventListener("fetch", (e) => {
  const url = e.request.url;

  // Audio Range Request Handler for HTML5 Audio (iOS & Android)
  if (url.endsWith(".mp3") || url.includes("supabase.co/storage/v1/object/public/")) {
    e.respondWith(handleAudioFetch(e.request));
    return;
  }

  // Cache-First strategy for Map Tiles & App Assets
  e.respondWith(
    caches.match(e.request).then((cachedRes) => {
      if (cachedRes) return cachedRes;
      return fetch(e.request).then((netRes) => {
        if (netRes && netRes.status === 200) {
          const resToCache = netRes.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, resToCache));
        }
        return netRes;
      }).catch(() => {
        if (e.request.mode === "navigate") {
          return caches.match("./index.html");
        }
      });
    })
  );
});

// Helper: Handle HTTP Range Requests for cached audio files
async function handleAudioFetch(request) {
  const cache = await caches.open(CACHE_NAME);
  let response = await cache.match(request.url);

  if (!response) {
    try {
      const cleanReq = new Request(request.url, { method: "GET" });
      const netRes = await fetch(cleanReq);
      if (netRes && netRes.status === 200) {
        await cache.put(request.url, netRes.clone());
        response = netRes;
      } else {
        return netRes;
      }
    } catch (err) {
      console.error("[SW] Audio offline & not cached:", request.url);
      return new Response("Audio offline not available", { status: 503 });
    }
  }

  const rangeHeader = request.headers.get("range");
  if (rangeHeader && response) {
    const arrayBuffer = await response.clone().arrayBuffer();
    const bytes = rangeHeader.replace(/bytes=/, "").split("-");
    const start = parseInt(bytes[0], 10) || 0;
    const end = bytes[1] ? parseInt(bytes[1], 10) : arrayBuffer.byteLength - 1;
    const chunk = arrayBuffer.slice(start, end + 1);

    return new Response(chunk, {
      status: 206,
      statusText: "Partial Content",
      headers: new Headers({
        "Content-Range": `bytes ${start}-${end}/${arrayBuffer.byteLength}`,
        "Content-Length": chunk.byteLength,
        "Content-Type": "audio/mpeg",
        "Accept-Ranges": "bytes"
      })
    });
  }

  return response;
}
