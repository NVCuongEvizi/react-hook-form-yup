import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCRK60kracDt0pJYVtXLRrEd_HtNpqMrKA",
  authDomain: "cloud-message-firebase-a983f.firebaseapp.com",
  projectId: "cloud-message-firebase-a983f",
  storageBucket: "cloud-message-firebase-a983f.appspot.com",
  messagingSenderId: "904980663208",
  appId: "1:904980663208:web:ce034e92d8662706fe2b9d",
  measurementId: "G-2V09G0S94N",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const getTokenFunc = async (setTokenFound) => {
  return getToken(messaging, {
    vapidKey:
      "BD5jJb7yGPeOn6kbu8Z1CVpIDxAoLvSy4JVWlL47lN3GdK1SiuXZu4VzagVHbId0CSVcUSDOELeOMd7aIuT2rC8",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        setTokenFound(true);
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        setTokenFound(false);
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
