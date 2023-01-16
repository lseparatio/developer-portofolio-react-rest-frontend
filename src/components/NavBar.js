import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/NavBar.module.css'
import { NavLink } from "react-router-dom";

import { useCurrentUser } from '../contexts/CurrentUserContext';



const NavBar = () => {
  const currentUser = useCurrentUser();

  const loggedInIcons = <>{currentUser?.username}</>;

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
