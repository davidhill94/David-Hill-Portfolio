import React from 'react';
import { ButtonContainer, CardDescription, DescriptionButtons, DescriptionButtonsAlt, DescriptionText } from './ProjectsDescriptionStyling';

const ProjectsDescription = ({ item, index, clicked, handleTechClick, techClick }) => {
  return (
    index === clicked ?
    <CardDescription className='clicked' techClick={techClick}>
        <DescriptionText className='clicked'>{item.info}</DescriptionText>
        <ButtonContainer>
        <DescriptionButtons href={item.github} target="_blank">Github</DescriptionButtons>
        <DescriptionButtons href={item.link} target="_blank">Website</DescriptionButtons>
        <DescriptionButtonsAlt onClick={handleTechClick}>Tech Stack</DescriptionButtonsAlt>
        </ButtonContainer>
    </CardDescription>
    :
    <CardDescription>
    <DescriptionText>{item.info}</DescriptionText>
</CardDescription>
  )
}

export default ProjectsDescription