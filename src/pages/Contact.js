import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import Alert from 'react-bootstrap/Alert'

import { Col, Container, Row, Image } from 'react-bootstrap';
import contactImage from "../assets/img/contact.png"
import styles from "../styles/Contact.module.css";
import contactSuccess from '../assets/img/contact-succes.png'



const Contact = () => {

    const [contactData, setContactData] = useState({
        full_name: "",
        email: "",
        sent_message: "",
    });


    const { full_name, email, sent_message, } = contactData;
    const [errors, setErrors] = useState({});
    const [showAlert, setShowAlert] = useState(true);
    const [sent, setSent] = useState(false);


    const handleChange = (event) => {
        setContactData({
            ...contactData,
            [event.target.name]: event.target.value,
        });
        setShowAlert(false)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("contact/", contactData);
            setSent(true);
        } catch (err) {
            setShowAlert(true);
            setErrors(err.response?.data);
        }
    };


    const successImage = (
        <>
            <Image fluid src={contactSuccess} alt='Two persones filling a form' className={styles.ContactSucessImg}></Image>
            <p className={styles.SuccessP}>Your message was sent successfully!</p>
        </>

    );


    const contactForm = (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4" controlId="full_name">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Full Name" name='full_name' value={full_name} onChange={handleChange} className={styles.Input} />
            </Form.Group>
            {errors.full_name?.map((message, idx) => (
                <Alert show={showAlert} variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}
            <Form.Group className="mb-4" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" name='email' value={email} onChange={handleChange} className={styles.Input} />
            </Form.Group>
            {errors.email?.map((message, idx) => (
                <Alert show={showAlert} variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group className="mb-3" controlId="sent_message">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Your Message" name='sent_message' value={sent_message} onChange={handleChange} className={styles.Input} />
            </Form.Group>
            {errors.sent_message?.map((message, idx) => (
                <Alert show={showAlert} variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <div className="d-grid gap-2">
                <Button variant="secondary" size="lg" type="submit">
                    Send Message
                </Button>
            </div>
            {errors.non_field_errors?.map((message, idx) => (
                <Alert show={showAlert} key={idx} variant="warning" className="mt-3">
                    {message}
                </Alert>
            ))}
        </Form>
    )


    return (
        <Container fluid className={styles.Container}>
            <Row className={styles.Row}>
                <Col md={6} className="d-flex align-items-center justify-content-center">
                    <Image fluid src={contactImage} alt='Two persones filling a form'></Image>
                </Col>
                <Col md={6} id='contactForm' className="align-items-center justify-content-center">
                    {sent ? successImage : contactForm}
                </Col>
            </Row>
        </Container>
    );
}


export default Contact;