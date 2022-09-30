import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll'; 

export const Nav = styled.nav`
background: ${({ scrollNav }) => (scrollNav ? 'var(--primary)' : 'transparent')};
height: 80px;
display: flex;
justify-content: center;
align-items: center;
position: sticky;
font-size: 1rem;
top: 0;
z-index: 10;
font-family: 'Poppins', sans-serif;
transition: 0.8s all ease;

@media screen and (max-width: 960px) {
    transition: 0.8s all ease;
}
`
export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 100;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`
export const  NavLogo = styled.div`
cursor: pointer;
height: 60px;
width: auto;
display: block;
align-items: center;
margin: 12px;

@media screen and (max-width: 768px){
    height: 50px;
    margin: 24px;
}
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    margin: 24px;
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--secondary);
}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
width: 50%;
justify-content: space-between;
list-style: none;
text-align: center;

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavItem = styled.li`
height: 80px;
font-size: 2.5vw;
font-weight: 800;
`

export const NavLinks = styled(LinkS)`
color: var(--secondary);
display: flex;
align-items: center;
justify-content: center;
text-decoration: none;
padding: 0.1rem;
height: 100%;
cursor: pointer;
margin: 0.4rem 0.8rem 0 0.8rem;

&:hover {
    color: #ff7900;
}

&.active {
    border-bottom: 3px solid #ff7900;
    color: #ff7900;
}
`