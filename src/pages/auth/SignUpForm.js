import React, { useState } from 'react';
import { Col, Container, Row, Image, Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from 'react-bootstrap/Alert'
import registerImage from "../../assets/img/register.webp"
import styles from "../../styles/SignUp.module.css"
import { Flip, toast } from 'react-toastify';


const SignUpForm = () => {
    const [signUpData, setSignUpData] = useState({
        username: "",
        email: "",
        first_name: "",
        last_name: "",
        password1: "",
        password2: "",
    });
    const { username, email, first_name, last_name, password1, password2, } = signUpData;

    const [errors, setErrors] = useState({});
    const [revealed, setRevealed] = useState(false);
    const [showAlert, setShowAlert] = useState(true);

    const navigate = useNavigate();

    const handleChange = (event) => {
        setSignUpData({
            ...signUpData,
            [event.target.name]: event.target.value,
        });
        setShowAlert(false)
    };

    const handleReveal = () => {
        setRevealed(!revealed)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("dj-rest-auth/registration/", signUpData);
            navigate("/signin");
            toast.success('Your registration is successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                transition: Flip,
                progress: undefined,
                theme: "light",
            });
            toast.warn('An verification mail was sent please check your email!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                transition: Flip,
                progress: undefined,
                theme: "light",
            });
        } catch (err) {
            setShowAlert(true);
            setErrors(err.response?.data);
        }
    };

    return (
        <Container fluid>
            <Row>
                <Col md={6}>
                    <Image fluid src={registerImage} alt='Two persones filling a form'></Image>
                </Col>
                <Col md={6} className="d-flex align-items-center justify-content-center">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" name='username' value={username} onChange={handleChange} className={styles.Input} />
                        </Form.Group>
                        {errors.username?.map((message, idx) => (
                            <Alert show={showAlert} variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Form.Group className="mb-3" controlId="first_name">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" name='first_name' value={first_name} onChange={handleChange} className={styles.Input} />
                        </Form.Group>
                        {errors.first_name?.map((message, idx) => (
                            <Alert show={showAlert} variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Form.Group className="mb-3" controlId="last_name">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" name='last_name' value={last_name} onChange={handleChange} className={styles.Input} />
                        </Form.Group>
                        {errors.last_name?.map((message, idx) => (
                            <Alert show={showAlert} variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name='email' value={email} onChange={handleChange} className={styles.Input} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        {errors.email?.map((message, idx) => (
                            <Alert show={showAlert} variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Form.Group className="mb-3" controlId="password1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type={(revealed) ? "text" : "password"} placeholder="Password" name='password1' value={password1} onChange={handleChange} className={styles.Input} />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId="signUpCheckbox">
                            <Form.Check type="checkbox" label="Show Passwords" onClick={handleReveal} />
                        </Form.Group>
                        {errors.password1?.map((message, idx) => (
                            <Alert show={showAlert} variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Form.Group className="mb-3" controlId="password2">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type={(revealed) ? "text" : "password"} placeholder="Confirm Password" name='password2' value={password2} onChange={handleChange} className={styles.Input} />
                        </Form.Group>
                        {errors.password2?.map((message, idx) => (
                            <Alert show={showAlert} variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label={<>Agree <a href='https://google.com' target='_blank' rel='noreferrer'> TOS & Privacy </a></>} required />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button variant="secondary" type="submit">
                                Sign Up
                            </Button>
                        </div>
                        {errors.non_field_errors?.map((message, idx) => (
                            <Alert show={showAlert} key={idx} variant="warning" className="mt-3">
                                {message}
                            </Alert>
                        ))}
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
export default SignUpForm;