import React, { Component } from "react";
import Slider from "react-slick";
import Card from 'react-bootstrap/Card';
import { Col, Row } from "react-bootstrap";
import styles from "../styles/ProjectsPresentationCarousel.module.css"
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default class ProjectsPresentationCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = { projects: [] };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }


    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }

    componentDidMount() {

        axios.get(`/projects`)
            .then(res => {
                const projects = res.data.results;
                this.setState({ projects });
            })
    }

    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0,
            autoplay: false,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (

            <div className={styles.Top}>
                <Row>
                    <Col md={12}>
                        <Slider ref={c => (this.slider = c)} {...settings}>

                            {
                                this.state.projects.map((project) =>
                                    <div key={project.id} className={`d-flex align-items-center justify-content-center text-center`}>
                                        <Card style={{ width: '100%', height: '100%' }} className={styles.Card}>
                                            <Card.Img variant="top" src={project.project_image} loading="lazy" className={styles.CardImage} alt={project.project_name} />
                                            <Card.Body>
                                                <Card.Title>{project.project_name}</Card.Title>
                                                <Card.Text>
                                                    {project.project_description}
                                                </Card.Text>
                                                <Link to={`/project/${project.id}`}>VIEW PROJECT<FontAwesomeIcon icon={faArrowRight} size="2xl" fixedWidth beatFade /></Link>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            }
                        </Slider>
                    </Col>
                </Row>
                <Row className={styles.Top}>
                    <Col md={12} className={`d-flex align-items-center justify-content-center `}>
                        <p className={styles.Left} onClick={this.previous}>
                            <FontAwesomeIcon className={styles.Chevron} icon={faCircleChevronLeft} />
                        </p>
                        <p className={styles.Right} onClick={this.next}>
                            <FontAwesomeIcon className={styles.Chevron} icon={faCircleChevronRight} />
                        </p>

                    </Col>
                </Row>
            </div>
        );
    }
}