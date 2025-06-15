 <!-- 
    // ============== sw.js ==============
    const CACHE_NAME = 'well-app-cache-v2';
    // キャッシュするファイルのリスト
    const urlsToCache = [
        '/',
        '/index.html',
        'https://cdn.tailwindcss.com',
        'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
        'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
        'https://cdn.jsdelivr.net/npm/chart.js'
    ];

    // install イベント: アプリケーションのシェル（UI）をキャッシュする
    self.addEventListener('install', event => {
        event.waitUntil(
            caches.open(CACHE_NAME)
                .then(cache => {
                    console.log('キャッシュを開きました');
                    return cache.addAll(urlsToCache);
                })
        );
    });

    // fetch イベント: ネットワークリクエストを横取りし、キャッシュを優先して返す
    self.addEventListener('fetch', event => {
        event.respondWith(
            caches.match(event.request)
                .then(response => {
                    // キャッシュにあればそれを返す
                    if (response) {
                        return response;
                    }
                    // なければネットワークから取得しに行く
                    return fetch(event.request);
                })
        );
    });
    -->