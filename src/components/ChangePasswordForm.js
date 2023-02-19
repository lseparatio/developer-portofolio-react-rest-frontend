import React, { useState } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import axios from "axios";
import Alert from 'react-bootstrap/Alert'
import styles from "../styles/ChangePasswordForm.module.css"
import NotificationToasts from './NotificationToasts';



const ChangePasswordForm = () => {
  const [changePasswordData, setChangePasswordData] = useState({
    old_password: "",
    new_password1: "",
    new_password2: "",
  });
  const { old_password, new_password1, new_password2, } = changePasswordData;

  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(true);
  const [revealed, setRevealed] = useState(false);


  const handleChange = (event) => {
    setChangePasswordData({
      ...changePasswordData,
      [event.target.name]: event.target.value,
    });
    setShowAlert(false)
  };

  const handleReveal = () => {
    setRevealed(!revealed)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/password/change/", changePasswordData);
      <NotificationToasts
      show="true"
      title="Congratiulations!!"
      body="Your password was updated!"
      />

      //navigate("/signin");
    } catch (err) {
      setShowAlert(true);
      setErrors(err.response?.data);
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="old_password">
              <Form.Label>Old Password</Form.Label>
              <Form.Control type={(revealed) ? "text" : "password"} placeholder="Old Password" name='old_password' value={old_password} onChange={handleChange} className={styles.Input} />
            </Form.Group>
            {errors.old_password?.map((message, idx) => (
              <Alert show={showAlert} variant="warning" key={idx}>
                {message}
              </Alert>
            ))}


            <Form.Group className="mb-3" controlId="new_password1">
              <Form.Label>New Password</Form.Label>
              <Form.Control type={(revealed) ? "text" : "password"} placeholder="New Password" name='new_password1' value={new_password1} onChange={handleChange} className={styles.Input} />
            </Form.Group>
            {errors.new_password1?.map((message, idx) => (
              <Alert show={showAlert} variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group className="mb-3" controlId="new_password2">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type={(revealed) ? "text" : "password"} placeholder="Confirm Password" name='new_password2' value={new_password2} onChange={handleChange} className={styles.Input} />
            </Form.Group>
            {errors.new_password2?.map((message, idx) => (
              <Alert show={showAlert} variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group className='mb-3' controlId="revealPassword">
              <Form.Check type="checkbox" label="Show Passwords" onClick={handleReveal} />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="secondary" type="submit">
                Change Password
              </Button>
            </div>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert show={showAlert} key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
        </Col>
      </Row >
    </Container >
  );
}
export default ChangePasswordForm;