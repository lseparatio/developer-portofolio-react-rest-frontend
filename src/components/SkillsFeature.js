import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../styles/SkillsFeature.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faSquareJs,
  faBootstrap,
  faSquareFontAwesomeStroke,
  faReact,
  faWordpress,
  faGithub,
  faGit,
  faAws,
  faLinux,
  faUbuntu,
  faRedhat,
  faCentos,
  faStripe,
} from "@fortawesome/free-brands-svg-icons";

function SkillsFeature() {
  useEffect(() => {
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
      "--marquee-elements-displayed"
    );
    const marqueeContent = document.querySelector("ul.marquee-content");
    root.style.setProperty(
      "--marquee-elements",
      marqueeContent.children.length
    );

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
  });

  return (
    <Row className={styles.Row} md={12}>
      <Col
        md={2}
        className={`d-flex align-items-center justify-content-center ${styles.TextCol}`}
      >
        <p className={styles.Paragraf}>The technology utilized in my projects:</p>
      </Col>
      <Col md={10} className={`marquee ${styles.Marquee}`}>
        <ul className={`marquee-content ${styles.MarqueeContent}`}>
          <li>
            <FontAwesomeIcon icon={faHtml5} />
          </li>
          <li>
            <FontAwesomeIcon icon={faCss3} />
          </li>
          <li>
            <FontAwesomeIcon icon={faSquareJs} />
          </li>
          <li>
            <FontAwesomeIcon icon={faBootstrap} />
          </li>
          <li>
            <FontAwesomeIcon icon={faSquareFontAwesomeStroke} />
          </li>
          <li>
            <FontAwesomeIcon icon={faReact} />
          </li>
          <li>
            <FontAwesomeIcon icon={faWordpress} />
          </li>
          <li>
            <FontAwesomeIcon icon={faGithub} />
          </li>
          <li>
            <FontAwesomeIcon icon={faGit} />
          </li>
          <li>
            <FontAwesomeIcon icon={faAws} />
          </li>
          <li>
            <FontAwesomeIcon icon={faLinux} />
          </li>
          <li>
            <FontAwesomeIcon icon={faUbuntu} />
          </li>
          <li>
            <FontAwesomeIcon icon={faRedhat} />
          </li>
          <li>
            <FontAwesomeIcon icon={faCentos} />
          </li>
          <li>
            <FontAwesomeIcon icon={faStripe} />
          </li>
        </ul>
      </Col>
    </Row>
  );
}

export default SkillsFeature;
