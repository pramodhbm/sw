self.addEventListener('push', event => {
  const data = event.data ? event.data.text() : 'No payload';
  event.waitUntil(
    self.registration.showNotification('Push Notification', {
      body: data,
    })
  );
});
