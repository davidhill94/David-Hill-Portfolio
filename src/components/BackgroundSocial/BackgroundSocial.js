import React, { useState } from 'react';
import styled, {keyframes} from 'styled-components';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const patternOne = keyframes`
0% { transform: translateX(-10vw) translateY(30vh); }
20% { transform: translateX(90vw) translateY(00vh); }
40% { transform: translateX(-10vw) translateY(60vh);}
60% { transform: translateX(90vw) translateY(90vh); }
80% { transform: translateX(-10vw) translateY(10vh); }
100% { transform: translateX(90vw) translateY(90vh); }
`

const BackgroundSocialContainer = styled.div`
height: 100vh;
width: 100%;
background: transparent;
position: absolute;
top: 0;
left: 0;
z-index: -1;
`

const IconContainer = styled.div`
display: flex;
animation-name: ${patternOne};
animation-duration: 180s;
animation-fill-mode: forwards;
animation-iteration-count: infinite;
z-index: 0;
align-items: center;
justify-content: center;
position: absolute;
left: -10vw;
top: 0vw;

&:nth-child(1) {
  animation-delay: 0s;
}
&:nth-child(2) {
  animation-delay: 20s;
}
&:nth-child(3) {
  animation-delay: 40s;
}
&:nth-child(4) {
  animation-delay: 60s;
}
`

const Icon = styled.div`
display: ${(props) => props.icon ? "none" : "flex"}; 
font-size: 3rem;
z-index: 0;
color: #fff;
opacity: 0.1;
cursor: pointer;

&:hover {
  color: var(--third);
  opacity: 0.6;
  z-index: 0;
  cursor: pointer;
}
`

const IconText = styled.p`
display: ${(props) => props.icon ? "flex" : "none"};
font-size: 2rem;
opacity: 0.1;
color: #fff;
cursor: pointer;

&:hover {
  color: var(--third);
  opacity: 0.6;
}
`

export const BackgroundSocial = () => {
  const socials = [
    {
      empty: ""
    },
    {
      logo: <FaGithub />,
      text: "davidhill94"
    },
    {
      logo: <FaInstagram />,
      text: "@davidhill94"
    },
    {
      logo: <FaFacebook />,
      text: "David Hill"
    },
    {
      logo: <FaLinkedin />,
      text: "David Hill"
    },
  ]
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
