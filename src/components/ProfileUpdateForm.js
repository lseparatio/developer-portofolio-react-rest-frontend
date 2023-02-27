import React, { useState, useEffect, } from 'react'
import { Col, Container, Row, Image, Form, Button, Alert } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from "axios";
import { axiosReq } from "../api/axiosDefaults";
import styles from "../styles/ProfileUpdateForm.module.css"
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';

import { Flip, toast } from 'react-toastify';

const ProfileUpdateForm = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const user = currentUser[0];
  const profile = currentUser[1];
  const setProfile = setCurrentUser[1];


  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(true);

  const [profileData, setProfileData,] = useState({
    id: "",
    user: "",
    birth_date: "",
    phone_number: "",
    street_address1: "",
    street_address2: "",
    town_or_city: "",
    county: "",
    postcode: "",
    country: "",
    image: "",
  });


  const { birth_date, phone_number, street_address1, street_address2, town_or_city, county, postcode, country } = profileData;


  useEffect(() => {
    const handleMount = async () => {
      if (user?.profile_id?.toString() === profile?.id?.toString()) {

        try {
          const { data } = await axiosReq.get(`/profiles/${profile?.id?.toString()}/`);
          const { id, user, birth_date, phone_number, street_address1, street_address2, town_or_city, county, postcode, country, image } = data;
          setProfileData({ id, user, birth_date, phone_number, street_address1, street_address2, town_or_city, county, postcode, country, image });
        } catch (err) {
          console.log(err);
        }
      } else {
        <Navigate to="*" replace={true} />
      }
    };

    handleMount();
  }, [user, profile]);


  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
    setShowAlert(false)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("birth_date", birth_date);
    formData.append("phone_number", phone_number);
    formData.append("street_address1", street_address1);
    formData.append("street_address2", street_address2);
    formData.append("town_or_city", town_or_city);
    formData.append("county", county);
    formData.append("postcode", postcode);
    formData.append("country", country);
    try {
      await axios.patch(`profiles/${user?.profile_id}/`, formData);
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
      setProfile(profileData)
      navigate(`/profile/${user?.username}`);
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <Image fluid src={profile?.image} alt='Two persones filling a form'></Image>
        </Col>

        <Col md={6} className="d-flex align-items-center justify-content-center">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="birth_date">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" placeholder="Date of Birth" name='birth_date' value={birth_date} onChange={handleChange} className={styles.Input} />
            </Form.Group>
            {errors.birth_date?.map((message, idx) => (
              <Alert show={showAlert} variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group className="mb-3" controlId="phone_number">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Phone Number" name='phone_number' value={phone_number} onChange={handleChange} className={styles.Input} />
            </Form.Group>
            {errors.phone_number?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group className="mb-3" controlId="street_address1">
              <Form.Label>Street Address 1</Form.Label>
              <Form.Control type="text" placeholder="Street Address 1" name='street_address1' value={street_address1} onChange={handleChange} className={styles.Input} />
            </Form.Group>
            {errors.street_address1?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group className="mb-3" controlId="street_address2">
              <Form.Label>Street Address 2</Form.Label>
              <Form.Control type="text" placeholder="Street Address 2" name='street_address2' value={street_address2} onChange={handleChange} className={styles.Input} />
            </Form.Group>
            {errors.street_address2?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group className="mb-3" controlId="town_or_city">
              <Form.Label>Town Or City</Form.Label>
              <Form.Control type="text" placeholder="Town Or City" name='town_or_city' value={town_or_city} onChange={handleChange} className={styles.Input} />
            </Form.Group>
            {errors.town_or_city?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group className="mb-3" controlId="county">
              <Form.Label>County</Form.Label>
              <Form.Control type="text" placeholder="County" name='county' value={county} onChange={handleChange} className={styles.Input} />
            </Form.Group>
            {errors.county?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group className="mb-3" controlId="postcode">
              <Form.Label>Post Code</Form.Label>
              <Form.Control type="text" placeholder="Post Code" name='postcode' value={postcode} onChange={handleChange} className={styles.Input} />
            </Form.Group>
            {errors.postcode?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}


            <Form.Group className="mb-3" controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" placeholder="Country" name='country' value={country} onChange={handleChange} className={styles.Input} />
            </Form.Group>
            {errors.country?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <div className="d-grid gap-2">
              <Button variant="secondary" type="submit">
                Update Profile
              </Button>
            </div>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfileUpdateForm;