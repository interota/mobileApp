importScripts(
  "https://www.gstatic.com/firebasejs/9.0.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.1/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyBLyuaGWEDFR1f0Y8FfikAv9a7_5P_scgg",
  authDomain: "mobileapp-25294.firebaseapp.com",
  projectId: "mobileapp-25294",
  storageBucket: "<your-storage-bucket>",
  messagingSenderId: "769843496392",
  appId: "1:769843496392:web:c6a9dfc849dcfabf7becfd",
  measurementId: "<your-measurement-id>",
});

const isSupported = firebase.messaging.isSupported();
if (isSupported) {
  const messaging = firebase.messaging();
  messaging.onBackgroundMessage(({ notification: { title, body, image } }) => {
    self.registration.showNotification(title, {
      body,
      icon: image || "/assets/shapes.svg",
    });
  });
}
