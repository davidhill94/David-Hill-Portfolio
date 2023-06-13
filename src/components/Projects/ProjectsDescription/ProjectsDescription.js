import React from 'react';
import { ButtonContainer, CardDescription, DescriptionButtons, DescriptionText } from './ProjectsDescriptionStyling';

const ProjectsDescription = ({ item, description, index, clicked }) => {
  return (
    index === clicked ?
    <CardDescription className='clicked'>
        <DescriptionText className='clicked'>{item.info}</DescriptionText>
        <ButtonContainer>
        <DescriptionButtons href={item.github} target="_blank">Github</DescriptionButtons>
        <DescriptionButtons href={item.link} target="_blank">Website</DescriptionButtons>
        </ButtonContainer>
    </CardDescription>
    :
    <CardDescription>
    <DescriptionText>{item.info}</DescriptionText>
</CardDescription>
  )
}

export default ProjectsDescription