import React from 'react'
import HomeHeroSection from '../components/HomeHeroSection';
import SkillsFeature from '../components/SkillsFeature';
import { Col, Row } from 'react-bootstrap';
import WhatIDo from '../components/WhatIDo';

const Home = () => {
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

      <Row >
        <Col md={12}>
          <WhatIDo />
        </Col>
      </Row>
    </>
  )
}

export default Home