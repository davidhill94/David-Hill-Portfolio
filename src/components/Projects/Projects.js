import React from 'react';
import { BackgroundSocial } from '../BackgroundSocial/BackgroundSocial';
import ProjectItems from './ProjectItems';
import {
  BackgroundCard2,
  ProjectContainer,
  ProjectsBackgroundText,
  ProjectWrapper
} from './ProjectsElements.js';


const Projects = (clicked, orange) => {

  return (
      <ProjectContainer id="projects">
          <BackgroundSocial />
          <BackgroundCard2 />
          <ProjectsBackgroundText>PROJECTS</ProjectsBackgroundText>
          <ProjectWrapper orange={orange} clicked={clicked}>
              <ProjectItems />
          </ProjectWrapper>
      </ProjectContainer>
  )
};

export default Projects;
