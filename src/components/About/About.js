import React from 'react';
import { 
  AboutContainer,
  AboutWrapper,
  AboutImage,
  ContentWrapper,
  ContentText
} from './AboutElements';
import HeaderText from './HeaderText';
import { BackgroundSocial } from '../BackgroundSocial/BackgroundSocial';
import ProfileImage from '../../images/profile-image3.jpg';
import BackgroundText from '../BackgroundText/BackgroundText';
import BackgroundCard from '../BackgroundCard/BackgroundCard';

const About = () => {
  return (
      <AboutContainer id="about">
          <BackgroundSocial />
          <BackgroundText header={"ABOUT"} />
          <BackgroundCard left={"95%"} right={"0%"} rotate={"10deg"} bottom={"-10%"} mobile={"0%"} translate={"-50%"}/>
          <AboutWrapper>
          <AboutImage src={ProfileImage} alt="Profile Picture"></AboutImage>
          <ContentWrapper>
            <HeaderText />
            <ContentText>
            My name is David Hill! I am an aspiring self-taught Full Stack Developer from the United Kingdom. I went from fixing bodies as a Sports Therapist to fixing functions!
              
            </ContentText>
            <ContentText>
            Every morning I wake up with the desire to expand my skillset and get my breakthrough in the industry. 
            </ContentText>
            <ContentText>
            I am currently balancing my love for travelling with my love for coding. It's a hard balance to get right, but each day I find it harder to get off the keyboard no matter how beautiful the waterfall...
            </ContentText>
          </ContentWrapper>
          </AboutWrapper>
      </AboutContainer>
  )
};

export default About;
