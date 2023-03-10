import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import styles from "../styles/SkillsFeature.module.css";


function SkillsFeature() {
    useEffect(() => {
        const root = document.documentElement;
        const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
        const marqueeContent = document.querySelector("ul.marquee-content");
        root.style.setProperty("--marquee-elements", marqueeContent.children.length);

        for (let i = 0; i < marqueeElementsDisplayed; i++) {
            marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
        }
    });

    return (
        <Row className={styles.Row} md={12}>
            <Col md={2} className={`d-flex align-items-center justify-content-center ${styles.TextCol}`}>
                <h5>
                    The technology utilized in my projects:
                </h5>
            </Col>
            <Col md={10} className={`marquee ${styles.Marquee}`}>
                <ul className={`marquee-content ${styles.MarqueeContent}`}>
                    <li><i class="fa-brands fa-html5"></i></li>
                    <li><i class="fa-brands fa-css3-alt"></i></li>
                    <li><i class="fa-brands fa-square-js"></i></li>
                    <li><i class="fa-brands fa-bootstrap"></i></li>
                    <li><i class="fa-brands fa-square-font-awesome-stroke"></i></li>
                    <li><i class="fab fa-react"></i></li>
                    <li><i class="fab fa-wordpress"></i></li>
                    <li><i class="fab fa-github"></i></li>
                    <li><i class="fa-brands fa-git"></i></li>
                    <li><i class="fab fa-aws"></i></li>
                    <li><i class="fa-brands fa-linux"></i></li>
                    <li><i class="fa-brands fa-ubuntu"></i></li>
                    <li><i class="fa-brands fa-redhat"></i></li>
                    <li><i class="fa-brands fa-centos"></i></li>
                    <li><i class="fa-brands fa-stripe"></i></li>
                </ul>
            </Col>
        </Row>
    )
}

export default SkillsFeature