import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll'; 

export const SidebarContainter = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #0d0d0d;
display: grid;
align-items: center;
justify-content: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
font-family: 'Poppins', sans-serif;
`

export const CloseIcon = styled(FaTimes)`
color: #fff;

&:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease;
    color: #ff7900;
}
`

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`

export const SidebarWrapper = styled.div`
color: #fff;
width: 100%;
`
export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-row: repeat(5, 80px);
text-align: center;
padding: 0;

@media screen and (max-width: 768px) {
    grid-template-rows: repeat(5, 60px);
}
`

export const SidebarLink = styled(LinkS)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: #fff;
cursor: pointer;
width: 100%;

&:hover {
    color: #ff7900;
    transtiion: 0.2s ease-in-out;
}
`

export const Socialbar = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 2rem;
margin-top: 16px;
`

export const SocialIcon = styled.a`
color: white;
margin: 0 12px;
cursor: pointer;

&:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease;
    color: #ff7900;
}
`

export const NavLogo = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    height: 100px;
    margin-top: 4rem;
`