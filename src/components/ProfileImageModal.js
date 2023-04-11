import React, { useEffect, useRef, useState } from 'react'
import { Alert, Button, Form, Image, Modal } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import styles from "../styles/ProfileImageModal.module.css"
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
import { Flip, toast } from 'react-toastify';
import axios from 'axios';
import { axiosReq } from '../api/axiosDefaults';

function ProfileImageModal(props) {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const user = currentUser[0];
  const profile = currentUser[1];
  const setProfile = setCurrentUser[1];
  const imageFile = useRef();


  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(true);
  const navigate = useNavigate();

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


  useEffect(() => {
    const handleMount = async () => {
      if (user?.profile_id?.toString() === profile?.id?.toString()) {

        try {
          const { data } = await axiosReq.get(`/profiles/${profile?.id?.toString()}/`);
          const { id, user, birth_date, phone_number, street_address1, street_address2, town_or_city, county, postcode, country, image } = data;
          setProfileData({ id, user, birth_date, phone_number, street_address1, street_address2, town_or_city, county, postcode, country, image });
        } catch (err) {
          //console.log(err);
        }
      } else {
        <Navigate to="*" replace={true} />
      }
    };

    handleMount();
  }, [user, profile]);

  const handleChange = (e) => {
    if (e.target.files.length) {
      setProfileData({
        ...profileData,
        image: URL.createObjectURL(e.target.files[0]),
      });
      //setPreviewImage(image)
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    if (imageFile?.current?.files[0]) {
      formData.append("image", imageFile?.current?.files[0]);
    }
    try {
      await axios.patch(`profiles/${user?.profile_id}/`, formData);
      toast.success('Your profile image updated successfully', {
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
      setShowAlert(true);
      setErrors(err.response?.data);
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="ms-auto">
          Update profile picture
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='mx-auto'>
        <Image fluid src={profileData.image} className={styles.Avatar} alt='Profile Image' ></Image>
        <Form id='uploadProfileImage'>
          <Form.Group controlId="formFileLg" className="mb-3">
            <Form.Label className="ms-auto">Upload new picture</Form.Label>
            <Form.Control type="file" required size="lg" ref={imageFile}
              accept="image/*"
              onChange={handleChange} />
          </Form.Group>
          {errors?.image?.map((message, idx) => (
            <Alert show={showAlert} key={idx} variant="warning">
              {message}
            </Alert>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" form='uploadProfileImage' onClick={handleSubmit} type="submit">
          Save New Profile Image
        </Button>
        <Button variant="danger" onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProfileImageModal