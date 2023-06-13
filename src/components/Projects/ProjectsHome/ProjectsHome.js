import React, { useState } from 'react';
import { ProjectsContainer, ProjectWrapper } from './ProjectsHomeStyling';
import ProjectsItem from '../ProjectsItem/ProjectsItem';
import BackgroundText from '../BackgroundText/BackgroundText';

const NewProjects = () => {

    const [description, setDescription] = useState(false);

    return (
        <ProjectsContainer id="projects">
            <BackgroundText />
            <ProjectWrapper>
                <ProjectsItem description={description} setDescription={setDescription}/>
            </ProjectWrapper>
        </ProjectsContainer>
    )
}

export default NewProjects