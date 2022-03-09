import React from 'react';
import { 
  AboutContainer,
  AboutBackgroundText,
  BackgroundCard,
  AboutWrapper,
  AboutImage,
  ContentWrapper,
  ContentText
} from './AboutElements';
import HeaderText from './HeaderText';
import { BackgroundSocial } from '../BackgroundSocial/BackgroundSocial';
import ProfileImage from '../../images/profile-image3.jpg';

const About = () => {
  return (
      <AboutContainer id="about">
          <BackgroundSocial />
          <AboutBackgroundText>ABOUT</AboutBackgroundText>
          <BackgroundCard />
          <AboutWrapper>
          <AboutImage src={ProfileImage} alt="Profile Picture"></AboutImage>
          <ContentWrapper>
            <HeaderText />
            <ContentText>
            My name is David Hill! I am a self-taught professional Web Developer from the United Kingdom. I went from fixing bodies as a Sports Therapist to fixing functions!
              
            </ContentText>
            <ContentText>
            Every morning I wake up with the desire to build 5* web pages and the commitment to design unique solutions for your website needs
            </ContentText>
            <ContentText>
            I focus on building my websites using React, but behind the scenes I'm always learning and testing new skills. I'm looking for my first breakthrough job as a Developer, who's going to give me a shot?
            </ContentText>
          </ContentWrapper>
          </AboutWrapper>
      </AboutContainer>
  )
};

export default About;
