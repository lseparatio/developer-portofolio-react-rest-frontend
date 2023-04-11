import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const id = useParams();
  const idToString = id

  


  return (
    <div>Project details, under construction {[idToString.id]}</div>
  )
}

export default ProjectDetail