import React from 'react';
import { InnerWrapper, TechStackWrapper } from './TechStackElements';

const TechStack = ({ item, index, techClick, clicked }) => {
    return (
        index === clicked && techClick ?
        <TechStackWrapper className='techClicked'>
                <InnerWrapper className='techClicked'>{item.tech}</InnerWrapper>
        </TechStackWrapper>
        :
        <TechStackWrapper>
                <InnerWrapper></InnerWrapper>
        </TechStackWrapper>
    )
}

export default TechStack