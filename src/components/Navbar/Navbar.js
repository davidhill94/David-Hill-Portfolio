import React, { useEffect, useState } from 'react';
import logo from '../../images/logo.png';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks 
} from './NavbarElements'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 60) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    };

  return (
  <>
    <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome} src={logo} alt="logo">
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks 
                    to="about" 
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}
                    activeClass='active' 
                    >ABOUT</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks 
                    to="projects" 
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}
                    activeClass='active' 
                    >PROJECTS</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks 
                    to="contact"
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}
                    activeClass='active' 
                    >CONTACT</NavLinks>
                </NavItem>
            </NavMenu>
        </NavbarContainer>
    </Nav>
  </>
  );
};


export default Navbar;
