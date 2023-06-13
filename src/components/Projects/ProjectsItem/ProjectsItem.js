import React from 'react';
import { ProjectsItemWrapper } from './ProjectsItemStyling';
import ProjectsCard from '../../Projects/ProjectsCard/ProjectsCard';
import { ProjectsData } from '../ProjectsData';
import ProjectsDescription from '../../Projects/ProjectsDescription/ProjectsDescription';
import { useState } from 'react';

const ProjectsItem = ({ description, setDescription }) => {

  const [clicked, setClicked] = useState(null);
  const [hovered, setHovered] = useState(false);

  const handleDescripton = (index) => {
    if(!hovered){
        setDescription(!description);
        clicked === index ? setClicked(null) : setClicked(index);
        console.log(index)
    }
    }
  
    const handleHover = (bool, index) => {
      setHovered(bool)
      setDescription(!description);
      clicked === index ? setClicked(null) : setClicked(index);
    }

  return (
    ProjectsData.map((item, index) => {
      if (index === 0) {
        return null
    }
    return (
      <ProjectsItemWrapper key={index} onMouseEnter={() => handleHover(true, index)} onMouseLeave={() => handleHover(false, index)} >
        <ProjectsCard handleDescripton={handleDescripton} item={item} index={index} clicked={clicked}/>
        <ProjectsDescription description={description} item={item} clicked={clicked} index={index}/>
      </ProjectsItemWrapper>
    )
    })
  )
}

export default ProjectsItem