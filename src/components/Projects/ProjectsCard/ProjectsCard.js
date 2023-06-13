import React from 'react';
import { CardIcon, CardWrapper, Logo } from './ProjectsCardStyling';

const ProjectsCard = ({ handleDescripton, item, index, clicked }) => {


    return (
        clicked === index ?
            <CardWrapper
                onClick={() => handleDescripton(index)}
                clicked={clicked}
            >
                <Logo
                    src={item.image}
                    alt="minesweeper"></Logo>
            </CardWrapper>
            :
            <CardWrapper onClick={() => handleDescripton(index)}>
                <CardIcon src={item.icon} alt="Icon" />
            </CardWrapper>
    )
}

export default ProjectsCard