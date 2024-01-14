import React, { useState } from 'react';
import { BackgroundSocialContainer, Icon, IconContainer, IconText } from './BackgroundSocialElements';
import {socials} from '../BackgroundSocial/SocialData';


export const BackgroundSocial = () => {
  
  const [icon, setIcon] = useState(false);
  const handleIcon = (index) => {
    if(icon === index) {
      return setIcon(null)
  }
  setIcon(index);
  console.log(index);
  }
  return (
  <BackgroundSocialContainer>
    {socials.map((item, index) => {
      if(index === 0) {
        return null;
      }
      return (
          icon === index ?
            <IconContainer key={index}>
          <Icon onClick={() => handleIcon(index)} icon={icon}>{item.logo}</Icon>
          <IconText onClick={() => handleIcon(index)} icon={icon}>{item.text}</IconText>
          </IconContainer>
          :
          <IconContainer key={index}>
          <Icon onClick={() => handleIcon(index)}>{item.logo}</Icon>
          <IconText onClick={() => handleIcon(index)}>{item.text}</IconText>
         </IconContainer>
      )
    })}
  </BackgroundSocialContainer>
    )
};
