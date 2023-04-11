import React from 'react'
import HomeHeroSection from '../components/HomeHeroSection';
import SkillsFeature from '../components/SkillsFeature';
import { Col, Row } from 'react-bootstrap';
import WhatIDo from '../components/WhatIDo';
import ProvidingStelar from '../components/ProvidingStelar';
import ProjectsPresentationCarousel from '../components/ProjectsPresentationCarousel';

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

        </Col>
      </Row>
      <SkillsFeature />
      <Row >
        <Col md={12}>
          <WhatIDo />
        </Col>
      </Row>
      <Row >
        <Col md={12}>
          <ProvidingStelar />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <ProjectsPresentationCarousel />
        </Col>
      </Row>
    </>
  )
}

export default Home