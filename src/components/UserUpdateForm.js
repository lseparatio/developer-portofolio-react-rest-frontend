import React, { useState, useEffect, } from 'react'
import { Col, Container, Row, Form, Button, Alert } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from "axios";
import { axiosReq } from "../api/axiosDefaults";
import styles from "../styles/UserUpdateForm.module.css"
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';

import { Flip, toast } from 'react-toastify';

const UserUpdateForm = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const user = currentUser[0];
  const profile = currentUser[1];
  const setUser = setCurrentUser[0];
  console.log(user)


  const [errors, setErrors] = useState({});
  console.log(errors.username)
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(true);

  const [userData, setUserData] = useState({
    pk: "",
    email: "",
    username: "",
    first_name: "",
    last_name: "",
    profile_id: "",
  });


  const { username, first_name, last_name, } = userData;


  useEffect(() => {
    const handleMount = async () => {
      if (user?.profile_id?.toString() === profile?.id?.toString()) {

        try {
          const { data } = await axiosReq.get("dj-rest-auth/user/");
          const { pk, email, username, first_name, last_name, profile_id } = data;
          setUserData({ pk, email, username, first_name, last_name, profile_id });
        } catch (err) {
          console.log(err);
          setErrors(err.response?.data);
        }
      } else {
        <Navigate to="*" replace={true} />
      }
    };

    handleMount();
  }, [user, profile]);


  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setShowAlert(false)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    if (user.username !== username) {
      formData.append("username", username);
    }
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    try {
      await axios.patch(`/dj-rest-auth/user/`, formData);
      toast.success('Your profile was updated successfully', {
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
      setUser(userData)
      navigate(`/profile/${username}`);
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
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" name='username' value={username} onChange={handleChange} className={styles.Input} />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert show={showAlert} variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group className="mb-3" controlId="first_name">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" name='first_name' value={first_name} onChange={handleChange} className={styles.Input} />
            </Form.Group>
            {errors.first_name?.map((message, idx) => (
              <Alert show={showAlert} variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group className="mb-3" controlId="last_name">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" name='last_name' value={last_name} onChange={handleChange} className={styles.Input} />
            </Form.Group>
            {errors.last_name?.map((message, idx) => (
              <Alert show={showAlert} variant="warning" key={idx}>
                {message}
              </Alert>
            ))}


            <div className="d-grid gap-2">
              <Button variant="secondary" type="submit">
                Update User Details
              </Button>
            </div>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert show={showAlert} key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default UserUpdateForm;