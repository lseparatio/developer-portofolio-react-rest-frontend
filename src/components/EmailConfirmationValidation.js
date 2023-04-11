import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'
import { axiosReq } from '../api/axiosDefaults';
import AlertsBig from './AlertsBig';
import styles from '../styles/EmailConfirmationValidation.module.css'

const EmailConfirmationValidation = () => {
    var [response, setResponse] = useState(100)
    const { key } = useParams();
    const [content, setConent] = useState(<AlertsBig variant="info" heading="Wellcome!" p="We are attempting to verify your email now!" />)
    response = parseInt(response)



    useEffect(() => {
        const checkEmail = async () => {
            try {
                const res = await axiosReq.post(`/accounts/confirm-email/${key}/`, { key });
                const data = res.status.toString();
                setResponse(data)
            } catch (err) {
                if (err.response) {
                    setResponse(err.response.status.toString())
                }
            }
        };
        checkEmail();
    }, [key]);

    useEffect(() => {
        const linkToSignIn = (
            <Link to="/signin"> Sign In now!</Link>
        );
        const email = (
            <a href="mailto:contact@ionutzapototchi.com">contact@ionutzapototchi.com</a>
        );
        if ((response >= 500) || (response !== 304 && response >= 300 && response <= 399)) {
            setConent(<AlertsBig variant="danger" heading="Something went wrong with our servers!" p="Please contact us on: contact@ionutzapototchi.com try again latter or contact us on:" email={email} />)
        } else if (response >= 400 && response <= 499) {
            setConent(<AlertsBig variant="danger" heading="Something went wrong!" p="We was not able to verify your email address. Please contact us on:" email={email} />)
        } else if (response === 304 || (response >= 200 && response <= 299)) {
            setConent(<AlertsBig variant="success" heading="Congratulation!" p="Your email was successfully verified! You can" signIn={linkToSignIn} />)
        } else {
            <AlertsBig variant="info" heading="Wellcome!" p="We are attempting to verify your email now!" />
        }
    }, [response]);


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