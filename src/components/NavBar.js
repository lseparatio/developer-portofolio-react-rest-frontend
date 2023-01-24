import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/NavBar.module.css'
import { NavLink } from "react-router-dom";


import { useCurrentUser, } from '../contexts/CurrentUserContext';
import Avatar from './Avatar';
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import ProfileDropdown from './ProfileDropdown';
import ProfileDisplay from '../pages/profile/ProfileDisplay';




const NavBar = () => {
  const currentUser = useCurrentUser();


  const { expanded, setExpanded, ref } = useClickOutsideToggle();


  const loggedInIcons = (
    <>
      <NavLink to={`/profile/${currentUser?.username}`} element={<ProfileDisplay />}> <Avatar src={`${process.env.REACT_APP_API_URL}${currentUser?.profile_image}`} height={35} /></NavLink>
      <ProfileDropdown />
    </>
  );

  const loggedOutIcons = (
    <>
      <NavLink exact="true" className="nav-link" to="/signin">Sign In</NavLink>
      <NavLink exact="true" className="nav-link" to="/signup">Sign Up</NavLink>
    </>
  );

  return (
    <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed='top'>
      <Container >
        <NavLink exact="true" className="nav-link" to="/">
          <Navbar.Brand>Ionut Zapototchi</Navbar.Brand>
        </NavLink>

        <Navbar.Toggle ref={ref}
          onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" />

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
