import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axiosReq } from '../api/axiosDefaults';
import { Col, Image, Row } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import styles from '../styles/ProjectDetail.module.css'
import LoadingAnimation from '../utils/LoadingAnimation';


const ProjectDetail = () => {
  const { id } = useParams();

  const [project, setProject] = useState();
  const [readme, setReadme] = useState();
  const [gitHubProjectUsername, setGitHubProjectUsername] = useState();
  const [gitHubProjectName, setGitHubProjectName] = useState();
  const [readmeError, setReadmeError] = useState(false)

  /*
   Checking if there is a GitHub link. If is we show loading... if not we show: no readme found.
   And if is a link but for any reason we cant fetch him and get data we show No Readme Found.
  */
  const loadingOrError = readmeError ? (<p className={`d-flex align-items-center justify-content-center `}>No Readme Found</p>) : (project?.project_github_link ? (<LoadingAnimation />) : (<p className={`d-flex align-items-center justify-content-center `}>No Readme Found</p>))

  const githubReadme = async () => {
    try {
      const { data } = await axiosReq.get(`https://raw.githubusercontent.com/${gitHubProjectUsername}/${gitHubProjectName}/main/README.md`, { withCredentials: false });
      setReadme(data);
    } catch (err) {
      setReadmeError(true)
      //console.log(err);
    }
  };


  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/projects/${id}/`);
        setProject(data);
        const link = new URL(data.project_github_link);
        setGitHubProjectUsername(link.pathname.split("/")[1]);
        setGitHubProjectName(link.pathname.split("/")[2]);
      } catch (err) {
        //console.log(err);
      }
    };
    handleMount();

  }, [id]);


  if (project?.project_github_link) {
    githubReadme();
  }

  return (
    <>
      <Row>
        <Col md={12} className={`d-flex align-items-center justify-content-center `}>
          <h1>{project?.project_name}</h1>
        </Col>
        <Col md={12} className={`d-flex align-items-center justify-content-center `}>
          <p>{project?.project_description}</p>
        </Col>
        <Col md={12} className={`d-flex align-items-center justify-content-center `}>
          {project?.project_image ? (<Image fluid rounded src={project?.project_image.replace('http://', 'https://')} loading="lazy" alt={project.project_name}></Image>) : (<p>No image currently available!</p>)}
        </Col>
      </Row>
      <Row>
        <Col className={`d-flex align-items-center justify-content-center `}>

        </Col>
      </Row>
      <Row>
        <Col md={12} className={` align-items-center justify-content-center ${styles.Readme} `}>
          {readme ? (<ReactMarkdown rehypePlugins={[rehypeHighlight, rehypeRaw]} transformImageUri={uri =>
            uri.startsWith("https") ? uri : `https://raw.githubusercontent.com/${gitHubProjectUsername}/${gitHubProjectName}/main/${uri}`
          }>{readme}</ReactMarkdown>) : (loadingOrError)}
        </Col>
      </Row>
    </>
  )
}

export default ProjectDetail