import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import styles from '../styles/ProvidingStelar.module.css'
import { NavLink } from 'react-router-dom'

const ProvidingStelar = () => {
    return (

        <Container fluid className={styles.Container}>
            <Row className={`d-flex align-items-center justify-content-center `}>
                <Col md={8} className={`d-flex align-items-center justify-content-center ${styles.TextCol}`}>
                    <p>Providing stellar results for every client or employer!</p>
                </Col>
            </Row>
            <Row className={`d-flex align-items-center justify-content-center `}>
                <Col md={8} className={`d-flex align-items-center justify-content-center ${styles.Button}`}>
                    <NavLink to="/projects">
                        <Button variant="secondary">EXPLORE ALL PROJECTS</Button>
                    </NavLink>
                </Col>
            </Row>
        </Container>

    )
}

export default ProvidingStelar