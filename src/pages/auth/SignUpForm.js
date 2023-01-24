import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from 'react-bootstrap/Alert'


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

    const navigate = useNavigate();

    const handleChange = (event) => {
        setSignUpData({
            ...signUpData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("dj-rest-auth/registration/", signUpData);
            navigate("/signin");
        } catch (err) {
            setErrors(err.response?.data);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" name='username' value={username} onChange={handleChange} />
            </Form.Group>
            {errors.username?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group className="mb-3" controlId="first_name">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" name='first_name' value={first_name} onChange={handleChange} />
            </Form.Group>
            {errors.first_name?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group className="mb-3" controlId="last_name">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" name='last_name' value={last_name} onChange={handleChange} />
            </Form.Group>
            {errors.last_name?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group className="mb-3" controlId="email">
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

            <Form.Group className="mb-3" controlId="password1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password1' value={password1} onChange={handleChange} />
            </Form.Group>
            {errors.password1?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group className="mb-3" controlId="password2">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" name='password2' value={password2} onChange={handleChange} />
            </Form.Group>
            {errors.password2?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Sign Up
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
                <Alert key={idx} variant="warning" className="mt-3">
                    {message}
                </Alert>
            ))}
        </Form>
    );
}
export default SignUpForm;