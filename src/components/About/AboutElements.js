import styled  from 'styled-components';
import { GiCardJoker } from 'react-icons/gi';

export const AboutContainer = styled.div`
position: relative;
min-height: 90vh;
width: 100%;
background-color: var(--primary);
display: flex;
align-items: center;
justify-content: center;
text-align: center;
font-family: 'Poppins', sans-serif;
overflow: hidden;
z-index: 1;
padding: 3rem 0;

@media screen and (max-width: 768px){
    min-height: 140vh;
    flex-direction: column;
}
@media screen and (max-width: 550px){
    min-height: 130vh;
}
`

export const AboutBackgroundText = styled.p`
position: absolute;
font-size: 7rem;
font-weight: 800;
color: var(--secondary);
writing-mode: vertical-rl;
top: 0;
bottom: 0;
left: -2vw;
writing-mode: vertical-rl;
opacity: 0.1;
pointer-events: none;

@media screen and (max-width: 960px){
    font-size: 6rem;
}
@media screen and (max-width: 768px){
    font-size: 9rem;
    writing-mode: horizontal-tb;
    position: static;
}
@media screen and (max-width: 550px){
    font-size: 3rem;
}
`

export const BackgroundCard = styled(GiCardJoker)`
position: absolute;
bottom: -10%;
right: -5%;
font-size: 20rem;
display: flex;
transform: rotate(10deg);
pointer-events: none;
color: #fff;
opacity: 0.1;

@media screen and (max-width: 550px){
    font-size: 10rem;
}
`

export const AboutWrapper = styled.div`
display: flex;
width: 100%;
align-items: center;
margin-left: 3rem;
justify-content: center;
padding-bottom: 4rem;
pointer-events: none;

@media screen and (max-width: 960px){
    margin-left: 5rem;
    padding-bottom: 0;
}
@media screen and (max-width: 768px){
    flex-direction: column;
    margin-left: 0;
    padding-bottom: 4rem;
}
`

export const AboutImage = styled.img`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
height: 400px;
width: auto;
margin-left: 2rem;
border-radius: 5px;

@media screen and (max-width: 960px){
    height: 350px;
}
@media screen and (max-width: 768px){
    height: 375px;
    margin-left: 0;
}
@media screen and (max-width: 550px){
    height: 350px;
}
`

export const ContentWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: start;
justify-content: center;
width: 28rem;
pointer-events: none;
height: 400px;
padding: 1.5rem;

@media screen and (max-width: 960px){
    width: 23rem;
}
@media screen and (max-width: 768px){
    width: 30rem;
    align-items: center;
    margin-top: 2rem;
    padding: 2rem 1rem;
}
@media screen and (max-width: 550px){
    width: 23rem;
}
@media screen and (max-width: 450px){
    width: 18rem;
    margin-top: 3rem;
}
`

export const ContentHeader = styled.h2`
color: var(--third);
font-weight: 800;
font-size: 3.5rem;
pointer-events: none;
`

export const ContentText = styled.p`
color: var(--secondary);
width: 100%;
text-align: start;
pointer-events: none;
font-size: 1rem;

@media screen and (max-width: 960px){
    font-size: 0.9rem;
}
@media screen and (max-width: 768px){
    font-size: 1rem;
    text-align: center;
}
@media screen and (max-width: 550px){
    font-size: 0.9rem;
}
`

export const HeaderTextContainer = styled.div`
display: flex;
pointer-events: none;
`

