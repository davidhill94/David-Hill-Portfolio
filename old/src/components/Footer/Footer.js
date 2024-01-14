import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { 
  FooterContainer,
  FooterCenter,
  Socialbar,
  SocialIcon,
  CopyrightText
} from './FooterElements';

const Footer = (toggleHome) => {

  return (
  <FooterContainer>
    <FooterCenter>
    <Socialbar>
      <SocialIcon href='//www.facebook.com/profile.php?id=675129624' target="_blank" aria-label="Facebook"><FaFacebook/></SocialIcon>
      <SocialIcon href='//www.instagram.com/davidhill94/' target="_blank" aria-label="Instagram"><FaInstagram /></SocialIcon>
      <SocialIcon href='//github.com/davidhill94' target="_blank" aria-label="Github"><FaGithub /></SocialIcon>
      <SocialIcon href='//www.linkedin.com/in/david-hill-832ba293/' target="_blank" aria-label="Linkedin"><FaLinkedin /></SocialIcon>
    </Socialbar>
    <CopyrightText>© Copyright 2022</CopyrightText>
    </FooterCenter>
  </FooterContainer>
  )
};

export default Footer;
