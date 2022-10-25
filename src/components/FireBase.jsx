import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Toast } from "react-bootstrap";
import { getTokenFunc, onMessageListener } from "../firebase/firebase";

const FireBase = () => {
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });
  const [isTokenFound, setTokenFound] = useState(false);

  useEffect(() => {
    getTokenFunc(setTokenFound);
  }, []);

  useEffect(() => {
    onMessageListener()
      .then((payload) => {
        console.log("payload at FireBase.tsx", payload);
        setShow(true);
        setNotification({
          title: payload.notification.title,
          body: payload.notification.body,
        });
      })
      .catch((err) => console.log("failed: ", err));
  });

  return (
    <div>
      <h1>Fire Base</h1>
      <Toast
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide
        animation
        style={{
          position: "absolute",
          top: 20,
          right: 20,
        }}
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">{notification.title}</strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>{notification.body}</Toast.Body>
      </Toast>
      {isTokenFound
        ? "Notification permission enabled 👍🏻"
        : "Need notification permission ❗️"}
      <Button onClick={() => setShow(true)}>Show Toast</Button>
    </div>
  );
};

export default FireBase;
