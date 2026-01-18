# My PWA App

A Progressive Web App (PWA) that works on both **iOS** and **Android** devices. Features offline functionality, push notifications, and native app-like experience.

## Project Structure

```
my-pwa-app
├── src
│   ├── index.html        # Main HTML with iOS/Android meta tags
│   ├── css
│   │   └── styles.css    # Responsive styles with dark mode
│   ├── js
│   │   └── app.js        # PWA logic, install prompts, push notifications
│   ├── sw.js             # Service worker (caching, push, offline)
│   ├── manifest.json     # Web app manifest for Android/Chrome
│   └── icons/            # App icons (all sizes needed)
└── README.md
```

## Prerequisites

1. **HTTPS required** - PWAs only work over HTTPS (or localhost for development)
2. **Icons** - Create icons in all required sizes (see Icons section below)
3. **VAPID Keys** - For push notifications, generate VAPID keys

## Setup Instructions

### 1. Generate Required Icons

Create these icon files in the `src/icons/` folder:

| File | Size | Purpose |
|------|------|---------|
| `icon-72x72.png` | 72×72 | Android badge |
| `icon-96x96.png` | 96×96 | Android small |
| `icon-128x128.png` | 128×128 | Android medium |
| `icon-144x144.png` | 144×144 | Android |
| `icon-152x152.png` | 152×152 | iOS default |
| `icon-167x167.png` | 167×167 | iPad Pro |
| `icon-180x180.png` | 180×180 | iPhone Retina |
| `icon-192x192.png` | 192×192 | Android (required) |
| `icon-384x384.png` | 384×384 | Android large |
| `icon-512x512.png` | 512×512 | Android splash (required) |
| `icon-32x32.png` | 32×32 | Favicon |
| `favicon.ico` | 16×16/32×32 | Browser tab |

**Splash screens (optional for iOS):**
- `splash-640x1136.png` - iPhone 5
- `splash-750x1334.png` - iPhone 6/7/8
- `splash-1242x2208.png` - iPhone Plus

### 2. Set Up VAPID Keys (for Push Notifications)

```bash
# Install web-push globally
npm install -g web-push

# Generate VAPID keys
web-push generate-vapid-keys
```

Copy the **Public Key** and replace `YOUR_PUBLIC_VAPID_KEY` in `src/js/app.js`.

### 3. Serve the App

```bash
# Option 1: Using Python
cd src
python3 -m http.server 8080

# Option 2: Using Node.js http-server
npx http-server src -p 8080

# Option 3: Using live-server (with auto-reload)
npx live-server src --port=8080
```

### 4. Access the App

- **Local development:** http://localhost:8080
- **Production:** Must be served over HTTPS

---

## 📱 Installing on Android

### Method 1: Install Banner (Automatic)
1. Open the PWA in **Chrome** browser
2. Wait a few seconds - Chrome shows "Add to Home screen" banner at bottom
3. Tap **"Install"** or **"Add"**
4. The app icon appears on your home screen

### Method 2: Chrome Menu
1. Open the PWA in **Chrome**
2. Tap the **⋮ (three dots)** menu in top-right
3. Tap **"Install app"** or **"Add to Home screen"**
4. Confirm by tapping **"Install"**
5. App icon appears on home screen

### Method 3: In-App Button
1. Open the PWA
2. Tap the **"📲 Install App"** button (appears on Android)
3. Follow the install prompt

### After Installation (Android)
- ✅ App opens in full-screen (no browser UI)
- ✅ App appears in app drawer and recent apps
- ✅ Works offline
- ✅ Receives push notifications
- ✅ Can be uninstalled like any app

---

## 🍎 Installing on iOS (iPhone/iPad)

### Requirements
- **iOS 11.3+** for basic PWA support
- **Safari browser** (required - other browsers don't support Add to Home Screen)

### Installation Steps
1. Open the PWA URL in **Safari** (not Chrome or other browsers!)
2. Tap the **Share button** (square with arrow pointing up) ⬆️
3. Scroll down and tap **"Add to Home Screen"**
4. Edit the name if desired
5. Tap **"Add"** in the top-right corner
6. App icon appears on your home screen

### After Installation (iOS)
- ✅ App opens in full-screen (standalone mode)
- ✅ App icon on home screen with your custom icon
- ✅ Works offline (cached content)
- ⚠️ Push notifications: Limited support (iOS 16.4+ only for home screen apps)
- ⚠️ No automatic install prompt (must use Share > Add to Home Screen)

### iOS Limitations
| Feature | iOS Support |
|---------|-------------|
| Add to Home Screen | ✅ Yes (Safari only) |
| Offline Support | ✅ Yes |
| Full Screen Mode | ✅ Yes |
| Push Notifications | ⚠️ iOS 16.4+ only |
| Background Sync | ❌ No |
| Install Prompt | ❌ No (manual only) |

---

## Features

### ✅ Works on Both Platforms
- **Offline Support** - Service worker caches all resources
- **Full Screen Mode** - No browser UI when installed
- **Home Screen Icon** - Custom app icon
- **Responsive Design** - Adapts to all screen sizes
- **Dark Mode** - Automatic dark theme support

### 📱 Android-Specific
- Automatic install prompt
- Push notifications
- Background sync
- Notification badges

### 🍎 iOS-Specific  
- Apple touch icons
- Status bar customization
- iOS-specific splash screens
- Manual install banner with instructions

---

## Push Notification Setup (Backend)

To send push notifications, you need a backend server. Here's a Node.js example:

```javascript
const webpush = require('web-push');

// Your VAPID keys
webpush.setVapidDetails(
  'mailto:your@email.com',
  'YOUR_PUBLIC_VAPID_KEY',
  'YOUR_PRIVATE_VAPID_KEY'
);

// Send notification (subscription from client)
webpush.sendNotification(subscription, JSON.stringify({
  title: 'Hello!',
  body: 'This is a push notification',
  url: '/'
}));
```

---

## Troubleshooting

### App Won't Install
- Ensure HTTPS (or localhost)
- Check manifest.json is valid (use Chrome DevTools > Application > Manifest)
- Verify icons exist and are correct sizes
- Clear browser cache and try again

### Service Worker Not Registering
- Check browser console for errors
- Ensure sw.js is in the root (or update scope)
- Verify HTTPS/localhost

### iOS Not Working
- Must use Safari (not Chrome/Firefox)
- Must use Share button method
- Check for iOS 11.3+

### Push Notifications Not Working
- Check Notification permission is granted
- Verify VAPID key is correct
- On iOS: requires iOS 16.4+ and app must be added to home screen

---

## Browser Support

| Browser | Install | Offline | Push |
|---------|---------|---------|------|
| Chrome (Android) | ✅ | ✅ | ✅ |
| Chrome (Desktop) | ✅ | ✅ | ✅ |
| Safari (iOS) | ✅* | ✅ | ⚠️** |
| Safari (macOS) | ✅ | ✅ | ✅ |
| Firefox | ❌ | ✅ | ✅ |
| Edge | ✅ | ✅ | ✅ |
| Samsung Internet | ✅ | ✅ | ✅ |

*Manual install via Share menu  
**iOS 16.4+ required for push notifications