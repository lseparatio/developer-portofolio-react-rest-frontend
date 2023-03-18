import React from 'react'
import { Col, Row, Accordion } from 'react-bootstrap'
import styles from '../styles/WhatIDo.module.css'

const WhatIDo = () => {
  return (
    <>
      <Row>
        <Col md={12} className={`d-flex align-items-center justify-content-center`}>
          <p className={styles.ParagrafTitle}>What I Can Do for You?</p>
        </Col>
      </Row>
      <Row>
        <Col md={6} sm={12}>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header className={styles.AccordionHeader}>Planning / User Stories</Accordion.Header>
              <Accordion.Body className={styles.AccordionBody}>
                The first step is to determine the purpose of the website,
                the target audience, and the goals that the website is meant to achieve.
                This also involves creating a sitemap and wireframes to define the website's
                structure and content.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className={styles.AccordionHeader}>UX/UI Design</Accordion.Header>
              <Accordion.Body className={styles.AccordionBody}>
                Once the planning is done, the next step is to design the website's visual elements,
                including the layout, color scheme, typography, and images.
                This involves creating a design mockup to demonstrate how the website will look and feel.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header className={styles.AccordionHeader}>Development</Accordion.Header>
              <Accordion.Body className={styles.AccordionBody}>
                With the design finalized, the website can move into the development phase.
                This involves writing the code for the website's front-end and back-end functionality,
                including HTML, CSS, JavaScript, and server-side languages like Python.
                I usually use React for Frontend and Django for backend.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col md={6} sm={12}>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="4">
              <Accordion.Header className={styles.AccordionHeader}>Content Creation</Accordion.Header>
              <Accordion.Body className={styles.AccordionBody}>
                While the development work is being done, the website's content needs to be created.
                This includes writing text content, creating images and videos, and sourcing other relevant materials.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header className={styles.AccordionHeader}>Testing and Quality Assurance</Accordion.Header>
              <Accordion.Body className={styles.AccordionBody}>
                After the development and content creation are done,
                the website needs to be tested to ensure that it works properly and is free of errors.
                This involves testing for usability, accessibility,
                and compatibility with different devices and browsers.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header className={styles.AccordionHeader}>Launch/ Deployment</Accordion.Header>
              <Accordion.Body className={styles.AccordionBody}>
                Once the website has been thoroughly tested and refined,
                it is ready to be launched. This involves making the website live on a server and configuring any necessary
                settings to ensure that it is accessible to visitors. I am proud to say that i can deploy in any chosen environment: Dedicated Server, VPS, AWS.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </>
  )
}

export default WhatIDo