import React from 'react';
import { MOCK_PROJECT } from './MOCKProjects';


const ProjectPage = () => {
  return (
    <>
      <h1>Projects Page</h1>
      <pre>{JSON.stringify(MOCK_PROJECT, null, ' ')}</pre>
    </>
  );
};

export default ProjectPage;
