import React from 'react'
import { Button, Col, Image, Row, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import heroImage from "../assets/img/ionut.webp"
import styles from "../styles/HomeHeroSection.module.css"

const HomeHeroSection = () => {

    return (
        <Container fluid className={`d-flex align-items-center justify-content-center ${styles.Container}`}>
            <Row className={styles.Row1}>
                <Col md={7} className={styles.Coll}>
                    <Row>
                        <Col>
                            <h1 className={styles.H1}>I'am a Full Stack Web Developer and Product Specialist!</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className={styles.P}>I have a proven track record of driving product development from ideation to deployment.
                                My areas of specialization include UI/UX design, responsive web design, and visual development.
                                I am experienced in creating wireframes and user stories, utilizing git and SQL,
                                and deploying to servers to ensure efficient and effective product delivery.
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="d-flex align-items-center justify-content-center">
                            <NavLink to="/signup">
                                <Button variant='secondary' className={styles.Button}>HIRE ME NOW</Button>
                            </NavLink>
                        </Col>
                    </Row>
                </Col >
                <Col md={5} sm={12} className="d-flex align-items-center justify-content-center">
                    <Image rounded fluid={true} src={heroImage} className={styles.Image} alt="Ionut Zapototchi profile image"></Image>
                </Col>
            </Row >
        </Container>
    )
};

export default HomeHeroSection;