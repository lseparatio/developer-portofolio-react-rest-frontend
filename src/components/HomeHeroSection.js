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
                            <h1 className={styles.H1}>I’m a full stack web developer!</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className={styles.P}>Trained to develop a product from idea to deployment. I specialize in UI/UX Design, Responsive Web Design, and Visual Development.</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="d-flex align-items-center justify-content-center">
                            <NavLink to="/signup">
                                <Button variant='secondary' className={styles.Button}>CONNECT WITH ME</Button>
                            </NavLink>
                        </Col>
                    </Row>
                </Col >
                <Col md={5} sm={12} className="d-flex align-items-center justify-content-center">
                    <Image rounded fluid={true} src={heroImage} className={styles.Image}></Image>
                </Col>
            </Row >
        </Container>
    )
};

export default HomeHeroSection;