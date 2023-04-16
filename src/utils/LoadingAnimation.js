import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

function LoadingAnimation() {
    return (
        <>
            <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
            />
        </>
    )
}

export default LoadingAnimation