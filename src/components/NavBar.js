import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/NavBar.module.css'
import { NavLink } from "react-router-dom";


import { useCurrentUser, useSetCurrentUser, } from '../contexts/CurrentUserContext';
import Avatar from './Avatar';
import axios from "axios";




const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const loggedInIcons = <>
    <NavLink className="nav-link" to={`/profiles/${currentUser?.profile_id}`}><Avatar src={`https://api.ionutzapototchi.com${currentUser?.profile_image}`} text="Profile" height={40} /></NavLink>
    <NavLink className="nav-link" to="/" onClick={handleSignOut}>Sign Out</NavLink>
  </>;

  const loggedOutIcons = (
    <>
      <NavLink exact="true" className="nav-link" to="/signin">Sign In</NavLink>
      <NavLink exact="true" className="nav-link" to="/signup">Sign Up</NavLink>
    </>
  )

  return (
    <Navbar className={styles.NavBar} expand="md" fixed='top'>
      <Container>
        <NavLink exact="true" className="nav-link" to="/">
          <Navbar.Brand>Ionut Zapototchi</Navbar.Brand>
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <NavLink exact="true" className="nav-link" to="/">Home</NavLink>
            <NavLink exact="true" className="nav-link" to="/about">About</NavLink>
            <NavLink exact="true" className="nav-link" to="/projects">Projects</NavLink>
            <NavLink exact="true" className="nav-link" to="/blog">Blog</NavLink>
            <NavLink exact="true" className="nav-link" to="/contact">Contact</NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
