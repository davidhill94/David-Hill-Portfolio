import styled from 'styled-components';
import { GiCardJoker } from 'react-icons/gi';

export const AboutContainer = styled.div`
position: relative;
min-height: auto;
width: 100%;
background-color: var(--primary);
display: grid;
grid-template-columns: 15% 70% 15%;
grid-template-rows: 100%;
text-align: center;
font-family: 'Poppins', sans-serif;
overflow: hidden;
z-index: 1;
padding: 3rem 0;

@media screen and (max-width: 1024px){
    min-height: auto;
    grid-template-columns: 100%;
    grid-template-rows: 15% 85%;
    padding: 0;
}
`

export const AboutBackgroundText = styled.p`
font-size: 7rem;
font-weight: 800;
color: var(--secondary);
writing-mode: vertical-rl;
opacity: 0.1;
pointer-events: none;
grid-column: 1 / 2;
display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width: 1024px){
    font-size: 5rem;
    grid-row: 1 / 2;
    writing-mode: horizontal-tb;
}
@media screen and (max-width: 820px), and (min-width: 650px), and (orientation: portrait){
    font-size: 5rem;
    grid-row: 1 / 2;
    writing-mode: horizontal-tb;
}
@media screen and (max-width: 550px){
    font-size: 2.5rem;
    grid-row: 1 / 2;
    writing-mode: horizontal-tb;
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
align-items: center;
margin-left: 3rem;
justify-content: center;
pointer-events: none;
grid-column: 2 / 3;

@media screen and (max-width: 1024px){
    flex-direction: column;
    margin-left: 0;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
}
@media screen and (max-width: 820px), and (min-width: 650px), and (orientation: portrait){
    flex-direction: column;
    margin-left: 0;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    padding-bottom: 4rem;
}
@media screen and (max-width: 550px){
    grid-column: 1 / 2;
    grid-row: 2 / 3;
}
`

export const AboutImage = styled.img`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
height: 400px;
width: auto;
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

@media screen and (max-width: 1024px){
    width: 30rem;
    align-items: center;
    margin-top: 2rem;
    padding: 0 1rem;
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

@media screen and (max-width: 1024px){
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

