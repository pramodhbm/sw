const CACHE_NAME = 'my-pwa-cache-v5';
const urlsToCache = [
  // '/',
  // '/index.html',
  // '/app.js',
  // '/icons/advantest_A_192.png',
  // '/icons/advantest_A_512.png'
];

// Install event - cache files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

// Push notification event
self.addEventListener('push', (event) => {
  console.log('Push event received:', event);

  let notificationData = {
    id: null,
    title: 'Notification',
    body: 'New notification'
  };

  // Parse JSON payload if available
  if (event.data) {
    try {
      const payload = event.data.json();
        console.log('Push event data JSON:', payload);

      notificationData = {
        id: payload.id || null,
        title: payload.title || 'Notification',
        body: payload.body || 'New notification'
      };
    } catch (e) {
      // If not JSON, use text as message
      notificationData.body = event.data.text();
    }
  }

  const options = {
    body: notificationData.body,
    icon: '/icons/advantest_A_192.png',
    badge: '/icons/advantest_A_72.png',
    vibrate: [100, 50, 100],
    tag: 'push-notification-' + (notificationData.id || Date.now()), // Unique tag
    renotify: true,
    data: {
      id: notificationData.id,
      title: notificationData.title,
      body: notificationData.body,
      dateOfArrival: Date.now()
    },
    actions: [
      {
        action: 'explore',
        title: 'Open App',
        icon: '/icons/advantest_A_96.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icons/advantest_A_96.png'
      }
    ]
  };

  // Show notification immediately
  event.waitUntil(
    self.registration.showNotification(notificationData.title, options)
  );
});

// Notification click event
self.addEventListener('notificationclick', (event) => {
  const notificationData = event.notification.data;
  event.notification.close();

  // Handle close action - just close the notification
  if (event.action === 'close') {
    return;
  }

  // Ignore system notifications (no custom data)
  if (!notificationData || !notificationData.id) {
    return;
  }

  // For any other click (body tap or explore action), open/focus the app
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then((clientList) => {
        // If a window is already open, focus it and send the notification data
        for (const client of clientList) {
          if (client.url.includes(self.location.origin) && 'focus' in client) {
            client.postMessage({
              type: 'NOTIFICATION_CLICKED',
              data: notificationData
            });
            return client.focus();
          }
        }
        // Otherwise, open a new window
        if (clients.openWindow) {
          return clients.openWindow('/');
        }
      })
  );
});

// Listen for messages from clients
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'GET_LAST_NOTIFICATION') {
    // Client is asking for the last notification data (e.g., after page load)
    event.source.postMessage({
      type: 'LAST_NOTIFICATION',
      data: self.lastNotificationData || null
    });
  }
});
