
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'
import { axiosReq } from '../api/axiosDefaults';
import AlertsBig from './AlertsBig';
import styles from '../styles/EmailConfirmationValidation.module.css'

const EmailConfirmationValidation = () => {
    const [response, setResponse] = useState(100)
    const { key } = useParams();
    const [content, setConent] = useState(<AlertsBig variant="info" heading="Wellcome!" p="We are attempting to verify your email now!" />)


    useEffect(() => {
        const checkEmail = async () => {
            try {
                const res = await axiosReq.post(`/accounts/confirm-email/${key}/`, { key });
                const data = res.status;
                setResponse(data)
            } catch (err) {
                if (err.response) {
                    setResponse(err.response.status)
                }
            }
        };
        checkEmail();
    }, [key]);

    const linkToSignIn = (
        <Link to="/signin"> Sign In now!</Link>
    );

    useEffect(() => {
        if (response === 100) {
            setConent(<AlertsBig variant="info" heading="Wellcome!" p="We are attempting to verify your email now!" />)
        } if (response === 200 || response === 304) {
            setConent(<AlertsBig variant="success" heading="Congratulation!" p="Your email was successfully verified! You can" signIn={linkToSignIn} />)
        } else {
            setConent(<AlertsBig variant="danger" heading="Something went wrong!" p="We was not able to verify your email address. Please contact us on: contact@ionutzapototchi.com" />)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [response]);

    console.log(response)
    return (
        <div className={styles.Div}>
            <Row className={styles.Row}>
                <Col>
                    {content}
                </Col>
            </Row>
        </div>

    )
}

export default EmailConfirmationValidation