import firebase from "firebase/compat/app"; //v9

// Scripts for firebase and firebase messaging
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyCRK60kracDt0pJYVtXLRrEd_HtNpqMrKA",
  authDomain: "cloud-message-firebase-a983f.firebaseapp.com",
  projectId: "cloud-message-firebase-a983f",
  storageBucket: "cloud-message-firebase-a983f.appspot.com",
  messagingSenderId: "904980663208",
  appId: "1:904980663208:web:ce034e92d8662706fe2b9d",
  measurementId: "G-2V09G0S94N",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload?.notification?.title;
  const notificationOptions = {
    body: payload.notification?.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
