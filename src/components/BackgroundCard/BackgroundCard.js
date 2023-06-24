import React from 'react';
import { JokerCard } from './BackgroundCardElements';

const BackgroundCard = ({ left, right, rotate, bottom, mobile, translate }) => {
  return (
    <JokerCard 
    left={left} 
    right={right} 
    rotate={rotate} 
    translate={translate}
    bottom={bottom}
    mobile={mobile}
    />
  )
}

export default BackgroundCard