import React, { useState } from 'react';
import { ToastContainer } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';


function NotificationToasts(props) {

  const [showNotificationToasts, setShowNotificationToasts] = useState(false);

   if (props.show === true) {
    setShowNotificationToasts(true)
   }


  return (
<ToastContainer position="top-end"  className="position-absolute">
    <Toast bg='dark' className="text-white" onClose={() => setShowNotificationToasts(false)} show={showNotificationToasts} delay={5000} autohide position="top-end">
      <Toast.Header>
        <strong className="me-auto">{props.title}Ionut</strong>
      </Toast.Header>
      <Toast.Body className={'Dark' && 'text-white'}>{props.body}Test test test</Toast.Body>
    </Toast>
    </ToastContainer>
  );
}

export default NotificationToasts;