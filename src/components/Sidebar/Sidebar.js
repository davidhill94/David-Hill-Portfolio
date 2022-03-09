import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { 
    SidebarContainter, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    Socialbar,
    NavLogo,
    SocialIcon
} from './SidebarElements';
import logo from '../../images/logo.png';

const Sidebar = ({isOpen, toggle}) => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
  return(
      <SidebarContainter isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
              <CloseIcon />
          </Icon>
          <SidebarWrapper>
              <SidebarMenu>
                  <SidebarLink 
                  to="about" 
                  smooth={true} 
                  duration={500} 
                  spy={true} 
                  exact='true' 
                  offset={-80}
                  onClick={toggle}>ABOUT</SidebarLink>
                  <SidebarLink
                  to="projects" 
                  smooth={true} 
                  duration={500} 
                  spy={true} 
                  exact='true' 
                  offset={-80} 
                  onClick={toggle}>PROJECTS</SidebarLink>
                  <SidebarLink 
                  to="contact" 
                  smooth={true} 
                  duration={500} 
                  spy={true} 
                  exact='true' 
                  offset={-80}
                  onClick={toggle}>CONTACT</SidebarLink>
                  <Socialbar>
                      <SocialIcon href='//www.facebook.com/profile.php?id=675129624' target="_blank" aria-label="Facebook"><FaFacebook/></SocialIcon>
                      <SocialIcon href='//www.instagram.com/davidhill94/' target="_blank" aria-label="Instagram"><FaInstagram /></SocialIcon>
                      <SocialIcon href='//github.com/davidhill94' target="_blank" aria-label="Github"><FaGithub /></SocialIcon>
                      <SocialIcon href='//www.linkedin.com/in/david-hill-832ba293/' target="_blank" aria-label="Linkedin"><FaLinkedin /></SocialIcon>
              </Socialbar>
              <NavLogo to="/" onClick={toggleHome} src={logo} alt="logo"></NavLogo>
              </SidebarMenu>
          </SidebarWrapper>
      </SidebarContainter>
  ) 
};

export default Sidebar;
