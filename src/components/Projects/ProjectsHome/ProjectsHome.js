import React, { useState } from 'react';
import { ProjectsContainer, ProjectWrapper } from './ProjectsHomeStyling';
import ProjectsItem from '../ProjectsItem/ProjectsItem';
import BackgroundText from '../../BackgroundText/BackgroundText';
import TechStack from '../TechStack/TechStack';
import BackgroundCard from '../../BackgroundCard/BackgroundCard';

const Projects = () => {

    const [description, setDescription] = useState(false);

    return (
        <ProjectsContainer id="projects">
            <BackgroundText header={"PROJECTS"} />
            <BackgroundCard left={"95%"} right={"0%"} rotate={"10deg"} bottom={"-10%"} mobile={"0%"} translate={"-50%"}/>
            <ProjectWrapper>
                <ProjectsItem description={description} setDescription={setDescription}/>
            </ProjectWrapper>
            <TechStack />
        </ProjectsContainer>
    )
}

export default Projects