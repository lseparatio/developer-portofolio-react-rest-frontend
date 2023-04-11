import React, { useEffect, useState } from 'react'
import { axiosRes } from '../api/axiosDefaults';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from '../styles/AllProjects.module.css'

const AllProjects = () => {
    const [projects, setProjects] = useState(
        []

    );

    const handleMount = async () => {
        try {
            const { data } = await axiosRes.get(`/projects`);
            setProjects(data.results);
        } catch (err) {
            //console.log(err);
        }
    };

    useEffect(() => {
        handleMount();
    }, []);


    return (
        <Row>
            {
                projects.map((project) =>

                    <Col md={6} key={project.id} >
                        <div className={`d-flex align-items-center justify-content-center text-center`}>
                            <Card style={{ width: '100%', height: '100%' }} className={styles.Card}>
                                <Card.Img variant="top" src={project.project_image} loading="lazy" className={styles.CardImage} />
                                <Card.Body>
                                    <Card.Title>{project.project_name}</Card.Title>
                                    <Card.Text>
                                        {project.project_description}
                                    </Card.Text>
                                    <Link to={`/project/${project.id}`}>VIEW PROJECT<FontAwesomeIcon icon={faArrowRight} size="2xl" fixedWidth beatFade /></Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                )
            }
        </Row>


    )
}

export default AllProjects