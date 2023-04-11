import React from 'react'
import styles from '../styles/Footer.module.css'
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook, faSkype, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import CV from '../assets/downloads/cv.pdf'

const Footer = () => {
    return (
        <footer className={`container-fluid ${styles.Footer}`}>
            <Container>
                <Row>
                    <Col md={4}>
                        <p>© Ionut Zapototchi</p>
                        <p className={`inline-block`}>
                            This website was created by me for my own use and a example of my
                            skills.
                        </p>
                    </Col>

                    <Col md={4}>
                        <p>Social</p>
                        <ul className={`list-inline social-list`}>
                            <li className={`list-inline-item`}>
                                <a target="_blank" href="https://www.facebook.com/profile.php?id=100089995684092" rel="noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} size="2xl" fixedWidth transform="up-2" />
                                    <span className={`sr-only`}>Facebook Profile</span>
                                </a>
                            </li>
                            <li className={`list-inline-item`}>
                                <a target="_blank" href="https://www.linkedin.com/in/ionut-zapototchi/" rel="noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} size="2xl" fixedWidth transform="up-2" />
                                    <span className={`sr-only`}>LinkedIn Profile</span>
                                </a>
                            </li>
                            <li className={`list-inline-item`}>
                                <a target="_blank" href="https://github.com/lseparatio" rel="noreferrer">
                                    <FontAwesomeIcon icon={faGithubSquare} size="2xl" fixedWidth transform="up-2" />
                                    <span className={`sr-only`}>Git Hub Profile</span>
                                </a>
                            </li>
                            <li className={`list-inline-item`}>
                                <a target="_blank" href="tel:+441913592209" rel="noreferrer">
                                    <FontAwesomeIcon icon={faPhoneSquare} size="2xl" fixedWidth transform="up-2" />
                                    <span className={`sr-only`}>Call Me On: +441913592209</span>
                                </a>
                            </li>
                            <li className={`list-inline-item`}>
                                <a target="_blank" href="mailto:contact@ionutzapototchi.com" rel="noreferrer">
                                    <FontAwesomeIcon icon={faEnvelope} size="2xl" fixedWidth transform="up-2" />
                                    <span className={`sr-only`}>Mail Me On: contact@ionutzapototchi.com</span>
                                </a>
                            </li>
                            <li className={`list-inline-item`}>
                                <a target="_blank" href="https://join.skype.com/invite/L8VppZafmts8" rel="noreferrer">
                                    <FontAwesomeIcon icon={faSkype} size="2xl" fixedWidth transform="up-2" />
                                    <span className={`sr-only`}>My skype profile</span>
                                </a>
                            </li>
                        </ul>
                    </Col>

                    <Col md={4}>
                        <p>Download CV</p>
                        <Link rel="noreferrer" className={`nav-link ${styles.DownloadIcon}`} to={CV}
                            target="_blank" >If you
                            need my CV in PDF format you can download here:<span className={`sr-only`}>Download CV</span>
                            <FontAwesomeIcon icon={faDownload} size="2xl" fixedWidth transform="up-2" /></Link>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer