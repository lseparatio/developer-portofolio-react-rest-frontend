import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from 'react-bootstrap/Alert'
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { Col, Container, Row, Image } from 'react-bootstrap';
import loginImage from "../../assets/img/login.webp"
import styles from "../../styles/SignIn.module.css";
import { Flip, toast } from 'react-toastify';



const SignInForm = () => {

    const setCurrentUser = useSetCurrentUser();
    const setUser = setCurrentUser[0]
    const [signInData, setSignInData] = useState({
        email: "",
        password: "",
    });
    const { email, password, } = signInData;

    const [errors, setErrors] = useState({});
    const [revealed, setRevealed] = useState(false);
    const [showAlert, setShowAlert] = useState(true);

    const navigate = useNavigate();

    const handleChange = (event) => {
        setSignInData({
            ...signInData,
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
            const { data } = await axios.post("dj-rest-auth/login/", signInData);
            setUser(data.user);
            navigate(`/profile/${data.user.username}`);
            toast.success('Your was sign in successfully!', {
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
                    <Image fluid src={loginImage} alt='Two persones filling a form'></Image>
                </Col>
                <Col md={6} className="d-flex align-items-center justify-content-center">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-4" controlId="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" name='email' value={email} onChange={handleChange} className={styles.Input} />
                        </Form.Group>
                        {errors.email?.map((message, idx) => (
                            <Alert show={showAlert} variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type={(revealed) ? "text" : "password"} placeholder="Password" name='password' value={password} onChange={handleChange} className={styles.Input} />
                        </Form.Group>
                        {errors.password?.map((message, idx) => (
                            <Alert show={showAlert} variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Form.Group className='mb-3' controlId="signInCheckbox">
                            <Form.Check type="checkbox" label="Show Password" onClick={handleReveal} />
                        </Form.Group>

                        <div className="d-grid gap-2">
                            <Button variant="secondary" size="lg" type="submit">
                                Log In
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
export default SignInForm;