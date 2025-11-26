self.addEventListener('push', event => {

  var options = {
    body: event.data ? event.data.text() : 'No payload',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {action: 'explore', title: 'Explore this new world',
        icon: 'images/checkmark.png'},
      {action: 'close', title: 'Close',
        icon: 'images/xmark.png'},
    ]
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});
