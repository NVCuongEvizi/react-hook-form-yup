import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Toast } from "react-bootstrap";

const FireBase = () => {
  const [show, setShow] = useState(false);

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
          <strong className="mr-auto">Notification</strong>
          <small>12 mins ago</small>
        </Toast.Header>
        <Toast.Body>There are some new updates that you might love!</Toast.Body>
      </Toast>
      <Button onClick={() => setShow(true)}>Show Toast</Button>
    </div>
  );
};

export default FireBase;
