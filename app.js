// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered successfully:', registration.scope);
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error);
      });
  });
}

// Check if running as installed PWA (standalone mode)
function isRunningStandalone() {
  return (window.matchMedia('(display-mode: standalone)').matches) || 
         (window.navigator.standalone === true);
}

// Request notification permission
function requestNotificationPermission() {
  console.log('Requesting notification permission...');
  console.log('Notification API available:', 'Notification' in window);
  console.log('PushManager available:', 'PushManager' in window);
  console.log('Running as standalone PWA:', isRunningStandalone());
  
  // iOS requires the app to be installed as PWA for notifications
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  if (isIOS && !isRunningStandalone()) {
    alert('On iOS, please add this app to your Home Screen first, then open it from there to enable notifications.');
    return;
  }
  
  if ('Notification' in window) {
    Notification.requestPermission().then((permission) => {
      console.log('Permission result:', permission);
      if (permission === 'granted') {
        console.log('Notification permission granted');
        subscribeUserToPush();
      } else {
        console.log('Notification permission denied');
      }
    }).catch((error) => {
      console.error('Error requesting permission:', error);
    });
  } else {
    console.log('Notification API not supported on this browser/device');
    alert('Push notifications are not supported on this browser.');
  }
}

// Subscribe to push notifications
function subscribeUserToPush() {
  console.log('Subscribing user to push notifications...');
  navigator.serviceWorker.ready.then((registration) => {
    const vapidPublicKey = 'BDJC1medoCtJ_T7gY3Pk78WtEJklpL9zBMjqF2f3m6ijU--oORl22bmwFXQ7HHXUccdrauAz3AEOgpDonATwYcA'; // You'll need to generate this
    
    const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);
    
    registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: convertedVapidKey
    })
    .then((subscription) => {
      console.log('User is subscribed:', subscription);
      // Send subscription to your server
      // sendSubscriptionToServer(subscription);
      const subscriptionOutput = document.getElementById('subscriptionOutput');
      if (subscriptionOutput) {
        subscriptionOutput.value = JSON.stringify(subscription);
        subscriptionOutput.style.display = 'block';
      }
    })
    .catch((error) => {
      console.error('Failed to subscribe user:', error);
    });
  });
}

// Helper function to convert VAPID key
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

// Send subscription to your backend
function sendSubscriptionToServer(subscription) {
  fetch('/api/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(subscription)
  })
  .then(response => response.json())
  .then(data => console.log('Subscription sent to server:', data))
  .catch(error => console.error('Error sending subscription:', error));
}

// Test notification button
document.addEventListener('DOMContentLoaded', () => {
  const notifyBtn = document.getElementById('notifyBtn');
  
  if (notifyBtn) {
    notifyBtn.addEventListener('click', () => {
      requestNotificationPermission();
    });
  }
});

// Detect if app is installed
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later
  deferredPrompt = e;
  // Update UI to show install button
  showInstallPromotion();
});

function showInstallPromotion() {
  // Show your custom install button/banner
  console.log('App can be installed');
}

// Handle app installation
async function installApp() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to install prompt: ${outcome}`);
    deferredPrompt = null;
  }
}

// Detect when app is installed
window.addEventListener('appinstalled', () => {
  console.log('PWA was installed');
  deferredPrompt = null;
});

// Listen for messages from the service worker
navigator.serviceWorker.addEventListener('message', (event) => {
  console.log('Message from service worker:', event.data);
  
  if (event.data && event.data.type === 'NOTIFICATION_CLICKED') {
    displayNotificationData(event.data.data);
  }
});

function displayNotificationData(data) {
  const container = document.getElementById('notificationContainer');
  if (container) {
    container.style.display = 'block';
    document.getElementById('notificationId').textContent = data.id || '-';
    document.getElementById('notificationTitle').textContent = data.title || '-';
    document.getElementById('notificationBody').textContent = data.body || '-';
    document.getElementById('notificationTime').textContent = new Date(data.dateOfArrival).toLocaleString();
  }
}
