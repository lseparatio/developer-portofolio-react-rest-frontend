import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from 'react-bootstrap/Alert'
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { Col, Container, Row, Image } from 'react-bootstrap';
import loginImage from "../../assets/img/login.webp"



const SignInForm = () => {
    const setCurrentUser = useSetCurrentUser();
    const [signInData, setSignInData] = useState({
        email: "",
        password: "",
    });
    const { email, password, } = signInData;

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const handleChange = (event) => {
        setSignInData({
            ...signInData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios.post("dj-rest-auth/login/", signInData);
            setCurrentUser(data.user);
            navigate("/");
        } catch (err) {
            setErrors(err.response?.data);
        }
    };

    return (
        <Container fluid>
            <Row>
                <Col md={6}>
                    <Image fluid src={loginImage} alt='Two persones filling a form'></Image>
                </Col>
                <Col md={6} className="d-flex align-items-center justify-content-center">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-4" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name='email' value={email} onChange={handleChange} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        {errors.email?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name='password' value={password} onChange={handleChange} />
                        </Form.Group>
                        {errors.password1?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}


                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button variant="secondary" size="lg" type="submit">
                                Log In
                            </Button>
                        </div>
                        {errors.non_field_errors?.map((message, idx) => (
                            <Alert key={idx} variant="warning" className="mt-3">
                                {message}
                            </Alert>
                        ))}
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
export default SignInForm;