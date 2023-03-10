import React from 'react'
import { useCurrentUser } from '../contexts/CurrentUserContext'
import { NavLink } from "react-router-dom";
import HomeHeroSection from '../components/HomeHeroSection';
import SkillsFeature from '../components/SkillsFeature';
import { Col, Row } from 'react-bootstrap';

const Home = () => {
  const currentUser = useCurrentUser();
  // console.log(currentUser[0])
  // console.log(currentUser[1])
  return (
    <>
      <Row md={12}>
        <Col>
          <HomeHeroSection />
        </Col>
      </Row>
      <Row >
        <Col md={12}>
          <SkillsFeature />
        </Col>
      </Row>
      <NavLink to={`/profile/update/${currentUser[0]?.profile_id}`} > Work in progress </NavLink>
    </>
  )
}

export default Home