import React, { useState } from 'react';
import { ProjectsContainer, ProjectWrapper } from './ProjectsHomeStyling';
import ProjectsItem from '../ProjectsItem/ProjectsItem';
import BackgroundText from '../../BackgroundText/BackgroundText';

const Projects = () => {

    const [description, setDescription] = useState(false);

    return (
        <ProjectsContainer id="projects">
            <BackgroundText header={"PROJECTS"} />
            <ProjectWrapper>
                <ProjectsItem description={description} setDescription={setDescription}/>
            </ProjectWrapper>
        </ProjectsContainer>
    )
}

export default Projects