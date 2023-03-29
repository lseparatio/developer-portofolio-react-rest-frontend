import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'

const AlertsBig = (props) => {

    const [show, setShow] = useState(true);

    return (
        <Alert show={show} className={`text-center`} variant={props.variant} onClose={() => setShow(false)} dismissible>
            <Alert.Heading className={`text-center`} >{props.heading}</Alert.Heading>
            <p>
                {props.p} {props.email}
                {props.signIn}
            </p>
        </Alert>
    )
}

export default AlertsBig