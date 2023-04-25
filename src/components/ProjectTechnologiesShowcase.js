import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import styles from "../styles/ProjectTechnologiesShowcase.module.css";
import GreenCheck from "../assets/img/green-check.webp";
import RedCheck from "../assets/img/red-check.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function ProjectTechnologiesShowcase(props) {
  const technologiesUsed = props.props;

  // Putting all true or false in variables.
  // Green Tick Image
  const greenCheckInP = (
    <Image
      src={GreenCheck}
      fluid
      className={styles.GreenCheck}
      alt="green check"
    ></Image>
  );
  const redCheckInP = (
    <Image
      src={RedCheck}
      fluid
      className={styles.RedCheck}
      alt="red check"
    ></Image>
  );
  // Prog Languages
  const htmlP = technologiesUsed?.html ? <>HTML{greenCheckInP}</> : <></>;
  const cssP = technologiesUsed?.css ? <>CSS{greenCheckInP}</> : <></>;
  const javascriptP = technologiesUsed?.javascript ? (
    <>JavaScript{greenCheckInP}</>
  ) : (
    <></>
  );
  const pythonP = technologiesUsed?.python ? <>Python{greenCheckInP}</> : <></>;
  // Frameworks
  const bootstrapP = technologiesUsed?.bootstrap ? (
    <>Bootstrap{greenCheckInP}</>
  ) : (
    <></>
  );
  const materializeP = technologiesUsed?.materialize ? (
    <>Materialize{greenCheckInP}</>
  ) : (
    <></>
  );
  const flaskP = technologiesUsed?.flask ? <>Flask{greenCheckInP}</> : <></>;
  const djangoP = technologiesUsed?.django ? <>Django{greenCheckInP}</> : <></>;
  const reactP = technologiesUsed?.reactJS ? <>ReactJS{greenCheckInP}</> : <></>;
  // Databases
  const mongodbP = technologiesUsed?.mongodb ? (
    <>MongoDB{greenCheckInP}</>
  ) : (
    <></>
  );
  const sqlP = technologiesUsed?.sql ? <>SQL{greenCheckInP}</> : <></>;
  const postgreSQLP = technologiesUsed?.postgres ? (
    <>PostgreSQL{greenCheckInP}</>
  ) : (
    <></>
  );
  const use_databaseP = technologiesUsed?.use_database ? (
    <>
      {mongodbP} {sqlP} {postgreSQLP}
    </>
  ) : (
    <>This project don't require database{redCheckInP}</>
  );
  // Deployment and servers
  // Servers
  const sharedHostingP = technologiesUsed?.shared_hosting ? (
    <>Shared Hosting{greenCheckInP}</>
  ) : (
    <></>
  );
  const herokuP = technologiesUsed?.heroku ? <>Heroku{greenCheckInP}</> : <></>;
  const awsP = technologiesUsed?.aws ? <>AWS{greenCheckInP}</> : <></>;
  const vpsP = technologiesUsed?.vps ? <>VPS{greenCheckInP}</> : <></>;
  const emailP = technologiesUsed?.email_server_setup  ? (
    <>Email Server{greenCheckInP}</>
  ) : (
    <></>
  );
  // Payments procesors
  const paypalP = technologiesUsed?.paypal ? <>PayPal{greenCheckInP}</> : <></>;
  const stripeP = technologiesUsed?.stripe ? <>Stripe{greenCheckInP}</> : <></>;
  const deployedP = technologiesUsed?.is_deployed  ? (
    <>
      {sharedHostingP} {herokuP} {awsP} {vpsP} {emailP} {paypalP} {stripeP}
    </>
  ) : (
    <>This project is not deployed{redCheckInP}</>
  );
  // Icons
  const liveLinkP = technologiesUsed?.project_live_link ? (
    <a
      target="_blank"
      href={technologiesUsed?.project_live_link.replace(
        "http://",
        "https://"
      )}
      rel="noreferrer"
    >
      View Live
      <FontAwesomeIcon icon={faArrowRight} size="2xl" fixedWidth beatFade />
    </a>
  ) : (
    <>This project is not deployed{redCheckInP}</>
  );
  const githubP = technologiesUsed?.project_github_link ? (
    <a
      target="_blank"
      href={technologiesUsed?.project_github_link.replace(
        "http://",
        "https://"
      )}
      rel="noreferrer"
    >
      View GitHub
      <FontAwesomeIcon icon={faArrowRight} size="2xl" fixedWidth beatFade />
    </a>
  ) : (
    <>This project is not on GitHub{redCheckInP}</>
  );

  //console.log(technologiesUsed);
  return (
    <Row className={styles.MainRow}>
      <Col md={12}>
        <Row>
          <Col>
            <p className={styles.ProjectOverviev}>Project Overview</p>
          </Col>
        </Row>
        <Row>
          <Col className={styles.FirstColSecondRow}>
            <div>
              <p>
                Technologies: {htmlP} {cssP} {javascriptP} {pythonP}
              </p>
            </div>
            <p>
              Frameworks: {bootstrapP} {materializeP} {flaskP} {djangoP} {reactP}
            </p>
            <p>Database: {use_databaseP}</p>
            <p>Servers and Payments: {deployedP}</p>
          </Col>
          <Col md={4} className={styles.SecondColSecondRow}>
            <p>Title:</p>
            <p>Client: Ionut Zapototchi</p>
            <p className={styles.Punderline}>Date: 21.10.2023</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className={styles.ProjectLinks}>Project Links</p>
            <p className={styles.LinksP}>
              {liveLinkP} {githubP}
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default ProjectTechnologiesShowcase;
