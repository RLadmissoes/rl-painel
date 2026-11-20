// RL Demandas: permite instalar como app. Não guarda dados no aparelho (sempre busca o retrato novo).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
