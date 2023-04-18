import { useCurrentUser } from "../../contexts/CurrentUserContext";
import NotFound from "../../components/NotFound";
import { Col, Image, Row } from "react-bootstrap";
import React, { useEffect } from "react";
import styles from "../../styles/ProfileDisplay.module.css";
import { Link, NavLink } from "react-router-dom";
import ProfileImageModal from "../../components/ProfileImageModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const ProfileDisplay = () => {
  const currentUser = useCurrentUser();
  const user = currentUser[0];
  const profile = currentUser[1];
  //console.log(user);
  const [modalShow, setModalShow] = React.useState(false);
  //console.log(profile)

  const loggedOutComponents = <NotFound />;

  useEffect(() => {
    setModalShow(false);
  }, [profile]);

  const loggedInComponents = (
    <>
      <Row>
        <Col md={6}>
          <div className={styles.ContainerImage}>
            <Image
              fluid
              src={profile?.image.replace('http://', 'https://')}
              alt="Profile Image"
              className={styles.Image}
            ></Image>
            <Link
              onClick={() => setModalShow(true)}
              className={styles.MobileIcon}
              title="Update profile picture"
            >
              <FontAwesomeIcon icon={faUpload} className={styles.MobileIcon} />
            </Link>
            <div className={styles.Overlay}>
              <Link
                onClick={() => setModalShow(true)}
                className={styles.Icon}
                title="Update profile picture"
              >
                <FontAwesomeIcon icon={faUpload} />
              </Link>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <NavLink to={`/profile/update/${currentUser[0]?.profile_id}`} > Update Profile </NavLink>
          <div>{user?.pk}</div>
          <div>{user?.username}</div>
          <div>{user?.first_name}</div>
          <div>{user?.last_name}</div>
          <div>{user?.email}</div>
          <div>{user?.profile_id}</div>
          <div>{profile?.birth_date}</div>
          <div>{profile?.street_address1}</div>
          <div>{profile?.street_address2}</div>
          <ProfileImageModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Col>
      </Row>
    </>
  );

  return <>{user ? loggedInComponents : loggedOutComponents}</>;
};

export default ProfileDisplay;
