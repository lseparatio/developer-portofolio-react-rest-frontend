import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axiosReq } from '../api/axiosDefaults';
import { Col, Image, Row } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import styles from '../styles/ProjectDetail.module.css'

const ProjectDetail = () => {
  const { id } = useParams();

  const [project, setProject] = useState();
  const [readme, setReadme] = useState();
  const [gitHubProjectUsername, setGitHubProjectUsername] = useState();
  const [gitHubProjectName, setGitHubProjectName] = useState();
  //console.log(project, gitHubProjectUrl, gitHubProjectUsername, gitHubProjectName)


  const githubReadme = async () => {
    try {
      const { data } = await axiosReq.get(`https://raw.githubusercontent.com/${gitHubProjectUsername}/${gitHubProjectName}/main/README.md`, { withCredentials: false });
      setReadme(data);
    } catch (err) {
      //console.log(err);
    }
  };
  if (project) {
    githubReadme();
  }

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
        <Col md={12} className={styles.Readme}>
          {readme ? (<ReactMarkdown rehypePlugins={[rehypeHighlight, rehypeRaw]} transformImageUri={uri =>
            uri.startsWith("https") ? uri : `https://raw.githubusercontent.com/${gitHubProjectUsername}/${gitHubProjectName}/main/${uri}`
          }>{readme}</ReactMarkdown>) : (<p>No readme found</p>)}
        </Col>
      </Row>

    </>
  )
}

export default ProjectDetail