import styled, { keyframes } from "styled-components";

const patternOne = keyframes`
0% { transform: translateX(-20vw) translateY(30vh); }
20% { transform: translateX(120vw) translateY(00vh); }
40% { transform: translateX(-20vw) translateY(60vh); }
60% { transform: translateX(120vw) translateY(90vh); }
80% { transform: translateX(-20vw) translateY(10vh); }
100% { transform: translateX(120vw) translateY(90vh); }
`


export const BackgroundSocialContainer = styled.div`
height: 100vh;
width: 100%;
background: transparent;
position: absolute;
top: 0;
left: 0;
z-index: -1;
`

export const IconContainer = styled.div`
display: flex;
animation-name: ${patternOne};
animation-duration: 180s;
animation-fill-mode: forwards;
animation-iteration-count: infinite;
animation-timing-function: linear;
z-index: 0;
align-items: center;
justify-content: center;
position: absolute;
left: -15vw;
top: 0vw;
min-width: 300px;

&:nth-child(1) {
  animation-delay: 0s;
}
&:nth-child(2) {
  animation-delay: 5s;
}
&:nth-child(3) {
  animation-delay: 10s;
}
&:nth-child(4) {
  animation-delay: 15s;
}
`

export const Icon = styled.div`
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

export const IconText = styled.p`
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