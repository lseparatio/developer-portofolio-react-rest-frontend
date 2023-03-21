import React, { useState } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import axios from "axios";
import Alert from 'react-bootstrap/Alert'
import styles from "../styles/ChangePasswordForm.module.css"
import { toast, Flip } from 'react-toastify';
import RevealPasswordButton from '../shared/RevealPasswordButton';




const ChangePasswordForm = () => {
  const [changePasswordData, setChangePasswordData] = useState({
    old_password: "",
    new_password1: "",
    new_password2: "",
  });

  const { old_password, new_password1, new_password2, } = changePasswordData;

  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(true);
  /* Updated in RevealPasswordButton */
  const [revealOldPassword, setRevealOldPasswordValue] = useState(false);
  const [revealNewPassword1, setRevealNewPasswordValue1] = useState(false);
  const [revealNewPassword2, setRevealNewPasswordValue2] = useState(false);
  /* Updated in RevealPasswordButton */


  const handleChange = (event) => {
    setChangePasswordData({
      ...changePasswordData,
      [event.target.name]: event.target.value,
    });
    setShowAlert(false)
  };



  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/password/change/", changePasswordData);
      toast.success('Your password was changed successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        transition: Flip,
        progress: undefined,
        theme: "light",
      });

      //navigate("/signin");
    } catch (err) {
      setShowAlert(true);
      setErrors(err.response?.data);
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col className="d-flex align-items-center justify-content-center">
          <Form onSubmit={handleSubmit} className={styles.Form}>
            <Form.Group className="mb-3" controlId="old_password">
              <Form.Label>Old Password</Form.Label>
              <div className="input-group">
                <Form.Control type={(revealOldPassword) ? "text" : "password"} placeholder="Old Password" name='old_password' value={old_password} onChange={handleChange} className={styles.Input} />
                <RevealPasswordButton state={revealOldPassword} setstate={setRevealOldPasswordValue} />
              </div>
            </Form.Group>
            {errors.old_password?.map((message, idx) => (
              <Alert show={showAlert} variant="warning" key={idx}>
                {message}
              </Alert>
            ))}


            <Form.Group className="mb-3" controlId="new_password1">
              <Form.Label>New Password</Form.Label>
              <div className="input-group">
                <Form.Control type={(revealNewPassword1) ? "text" : "password"} placeholder="New Password" name='new_password1' value={new_password1} onChange={handleChange} className={styles.Input} />
                <RevealPasswordButton state={revealNewPassword1} setstate={setRevealNewPasswordValue1} />
              </div>
            </Form.Group>
            {errors.new_password1?.map((message, idx) => (
              <Alert show={showAlert} variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group className="mb-3" controlId="new_password2">
              <Form.Label>Confirm Password</Form.Label>
              <div className="input-group">
                <Form.Control type={(revealNewPassword2) ? "text" : "password"} placeholder="Confirm Password" name='new_password2' value={new_password2} onChange={handleChange} className={styles.Input} />
                <RevealPasswordButton state={revealNewPassword2} setstate={setRevealNewPasswordValue2} />
              </div>
            </Form.Group>
            {errors.new_password2?.map((message, idx) => (
              <Alert show={showAlert} variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

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