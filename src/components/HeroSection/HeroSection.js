import React from 'react';
import { 
    HeroContainer, 
    BackgroundTextTop, 
    BackgroundTextBottom,
    HeroImage,
    HeroText
} from './HeroElements';
import image from '../../images/background-img-hero.png';
import text from '../../images/background-text-hero.png';
import { BackgroundSocial } from '../BackgroundSocial/BackgroundSocial';

const HeroSection = () => {
  return (
  <HeroContainer>
      <BackgroundSocial />
      <BackgroundTextTop>DA</BackgroundTextTop>
      <BackgroundTextBottom>VID</BackgroundTextBottom>
      <HeroImage src={image} href="hero"/>
      <HeroText src={text} href="hero-text" />
  </HeroContainer>
  )
};

export default HeroSection;
