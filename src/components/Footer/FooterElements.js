import styled from "styled-components";

export const FooterContainer = styled.div`
position: relative;
display: grid;
grid-template-columns: 33% 34% 33%;
justify-content: center;
align-items: center;
background-color: var(--primary);
color: black;
width: 100%;
height: 20vh;
font-size: 24px;
`

export const FooterCenter = styled.div`
grid-column: 2 / 3;
flex: display;
flex-direction: column;
display: flex;
align-items: center;
justify-content: center;
line-height: 6px;
`

export const Socialbar = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 2rem;
margin-bottom: 32px;
`

export const SocialIcon = styled.a`
color: var(--secondary);
margin: 0 12px;
cursor: pointer;
z-index: 2;

&:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease;
    color: #ff7900;
}
`

export const CopyrightText = styled.p`
font-size: 1rem;
color: var(--secondary);
white-space: nowrap;
`