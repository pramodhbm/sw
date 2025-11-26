self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'No payload',
    vibrate: [100, 50, 100],
    icon: '/images/checkmark.png',
    badge: '/images/checkmark.png',
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {action: 'explore', title: 'Explore this new world',
        icon: '/images/checkmark.png'},
      {action: 'close', title: 'Close',
        icon: '/images/xmark.png'},
    ]
  };

  event.waitUntil(
    // Check if any client (tab) is focused
    self.clients.matchAll({
      type: 'window',
      includeUncontrolled: true
    }).then(clientList => {
      const isAnyClientFocused = clientList.some(client => client.focused);
      
      if (isAnyClientFocused) {
        // Tab is active - send message to page instead of showing notification
        return clientList.forEach(client => {
          if (client.focused) {
            client.postMessage({
              type: 'PUSH_RECEIVED',
              data: event.data ? event.data.text() : 'No payload'
            });
          }
        });
      } else {
        // No tab is focused - show notification
        return self.registration.showNotification('Push Notification', options);
      }
    })
  );
});

// Handle notification action clicks
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('https://example.com')
    );
  } else if (event.action === 'close') {
    // Just close the notification
    console.log('Notification closed by user');
  } else {
    // Handle notification body click (no action button)
    event.waitUntil(
      clients.openWindow('https://example.com')
    );
  }
});
