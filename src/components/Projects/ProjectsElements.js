import styled, { keyframes } from 'styled-components';
import { GiCardJoker } from 'react-icons/gi';

const orangeFade = (height) => keyframes`
0% { height: 0; }
15% { height: 0; }
100% { height: ${height}; }
`
const orangeFadeHorizontal = (width) => keyframes`
0% { width: 0; }
15% { width: 0; }
100% { width: ${width}; }
`

export const ProjectContainer = styled.div`
display: flex;
min-height: 80vh;
width: 100%;
background-color: var(--primary);
align-items: center;
justify-content: center;
text-align: center;
position: relative;
font-family: 'Poppins', sans-serif;
z-index: 1;

@media screen and (max-width: 768px){
    min-height: 100vh;
}
@media screen and (max-width: 550px){
    flex-direction: column;
    min-height: 90vh;
}
`

export const ProjectsBackgroundText = styled.p`
position: absolute;
font-size: 6rem;
font-weight: 800;
color: var(--secondary);
writing-mode: vertical-rl;
top: 0;
bottom: 0;
right: 0;
opacity: 0.1;
pointer-events: none;

@media screen and (max-width: 650px){
    display: none;
}
@media screen and (max-width: 550px){
    display: flex;
    font-size: 3rem;
    writing-mode: horizontal-tb;
    position: static;
}
`

export const BackgroundCard2 = styled(GiCardJoker)`
position: absolute;
bottom: -10%;
left: -5%;
font-size: 20rem;
display: flex;
transform: rotate(-10deg);
pointer-events: none;
color: #fff;
opacity: 0.1;

@media screen and (max-width: 550px){
    font-size: 10rem;
}
`

export const ProjectWrapper = styled.div`
display: flex;
width: 70%;
min-height: 60vh;
margin: 0 10rem;
padding: 3rem 0rem;
align-items: center;
justify-content: flex-end;
text-align: center;
pointer-events: none;

@media screen and (max-width: 1024px){
    width: 80%;
    padding: 3rem 0;
}
@media screen and (max-width: 768px){
    align-items: end;
    justify-content: center;
    margin: 0;
    padding: 0;
}
`

export const ProjectItemsContainer = styled.div`
display: flex;

@media screen and (max-width: 768px){
    flex-direction: column;
}
`

export const ProjectItem = styled.div`
display: flex;

@media screen and (max-width: 768px){
    flex-direction: column;
}
`

export const ProjectSlide = styled.div`
display: flex;
`

export const ProjectHeader = styled.div`
display: flex;
text-align: center;
height: 450px;
width: 50px;
border-bottom: solid 10px var(--third);
border-radius: 5px 20px;
background: rgb(255,255,255);
background: -moz-linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(214,214,214,1) 50%, rgba(255,255,255,1) 100%);
background: -webkit-linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(214,214,214,1) 50%, rgba(255,255,255,1) 100%);
background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(214,214,214,1) 50%, rgba(255,255,255,1) 100%);
color: var(--primary);
writing-mode: vertical-rl;
font-weight: 800;
justify-content: center;
align-items: center;
cursor: pointer;
position: relative;
margin: 0 6px;
transition: all 1s ease;
white-space: nowrap;
z-index: 2;
pointer-events: auto;

&:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    background: linear-gradient(to top, #FF7900, #FF4040);
    transition: all 1s;
    border-radius: 5px 20px;
}

&:hover:before {
    animation-name: ${orangeFade("450px")};
    animation-duration: 1s;
    animation-fill-mode: forwards;
}

@media screen and (max-width: 1024px){
    height: 400px;

    &:hover:before {
        animation-name: ${orangeFade("400px")};
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }
}
@media screen and (max-width: 960px){
    height: 325px;
    width: 40px;
    margin: 0 3px;

    &:hover:before {
        animation-name: ${orangeFade("325px")};
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }
}
@media screen and (max-width: 768px){
    height: 50px;
    width: 400px;
    border-right: solid 10px var(--third);
    border-bottom: none;
    margin: 0.2rem 0;

    &:before{
        width: 0;
        height: 50px;
    }

    &:hover:before {
        animation-name: ${orangeFadeHorizontal("400px")};
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }
}
@media screen and (max-width: 550px){
    width: 320px;

    &:hover:before {
        animation-name: ${orangeFadeHorizontal("320px")};
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }
}
@media screen and (max-width: 450px){
    width: 260px;
    height: 40px;

    &:before{
        height: 40px;
    }

    &:hover:before {
        animation-name: ${orangeFadeHorizontal("260px")};
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }
}
`

export const ProjectHeaderAlt = styled.div`
display: flex;
text-align: center;
height: 450px;
width: 50px;
border-radius: 20px 5px;
box-shadow: 2px 2px 10px;
background: linear-gradient(to top, #FF7900, #FF4040);
justify-content: center;
align-items: center;
cursor: pointer;
position: relative;
margin: 0 6px;
pointer-events: auto;

@media screen and (max-width: 1024px){
    height: 400px;
}
@media screen and (max-width: 960px){
    height: 325px;
    width: 40px;
}
@media screen and (max-width: 768px){
    height: 50px;
    width: 400px;
    margin: 0.2rem 0;
}
@media screen and (max-width: 550px){
    width: 320px;
} 
@media screen and (max-width: 450px){
        width: 260px;
        height: 40px;
}
`

export const ProjectTitle = styled.h3`
color: var(--primary);
writing-mode: vertical-rl;
font-size: 1.2rem;
font-weight: 800;
z-index: 2;

@media screen and (max-width: 768px){
    writing-mode: horizontal-tb;
    margin-top: 0.4rem;
}
`

export const ImageBackground = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 444px;
width:${(props) => (props.clicked ? '444px' : '0px')};
background: rgba(255, 255, 255, 0.5);
border-radius: 20px 20px;
transition: all 2s;
margin: 0 6px;
cursor: pointer;
opacity: ${(props) => (props.clicked ? "1" : "0")};
pointer-events: auto;
position: relative;

&:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--primary);
    transition: all 1s;
    border-radius: 30% 0% 0% 30%;
}

@media screen and (max-width: 1024px){
    height: 400px;
    width:${(props) => (props.clicked ? '394px' : '0px')};
}
@media screen and (max-width: 960px){
    height: 325px;
    width:${(props) => (props.clicked ? '321px' : '0px')};
}
@media screen and (max-width: 768px){
    width: 400px;
    height:${(props) => (props.clicked ? '394px' : '0px')};
    margin: 8px 0;

    &:before {
        border-radius: 30% 30% 0% 0%;
    }
}
@media screen and (max-width: 550px){
    width: 320px;
    height:${(props) => (props.clicked ? '314px' : '0px')};
}
@media screen and (max-width: 450px){
    width: 260px;
    height:${(props) => (props.clicked ? '254px' : '0px')};
}

`

export const ProjectImage = styled.img`
display: ${(props) => (props.hoverImage ? "none" : "flex")};
height: auto;
width:${(props) => (props.clicked ? '300px' : '0px')};
transition: all 2s;
cursor: pointer;
opacity: 0.6;
z-index: 1;

@media screen and (max-width: 1024px){
    width:${(props) => (props.clicked ? '220px' : '0px')};
}
@media screen and (max-width: 960px){
    width:${(props) => (props.clicked ? '180px' : '0px')};
}
@media screen and (max-width: 768px){
    width:${(props) => (props.clicked ? '220px' : '0px')};
}
@media screen and (max-width: 550px){
    width:${(props) => (props.clicked ? '180px' : '0px')};
}
`

export const ProjectInfo = styled.p`
display: ${(props) => (props.hoverImage ? "flex" : "none")};
height: 100%;
width:${(props) => (props.clicked ? '444px' : '0px')};
transition: all 2s;
font-size:${(props) => (props.clicked ? '1.2rem' : '0rem')};
color: var(--secondary);
align-items: center;
justify-content: center;
padding: ${(props) => (props.clicked ? "0 24px" : "0")};
margin: 6px 6px;
cursor: pointer;
z-index: 2;
opacity: ${(props) => (props.clicked ? "1" : "0")};

@media screen and (max-width: 1024px){
    width:${(props) => (props.clicked ? '394px' : '0px')};
    font-size:${(props) => (props.clicked ? '1.1rem' : '0rem')};
}
@media screen and (max-width: 960px){
    width:${(props) => (props.clicked ? '321px' : '0px')};
    font-size:${(props) => (props.clicked ? '1rem' : '0rem')};
}
@media screen and (max-width: 768px){
    width:${(props) => (props.clicked ? '321px' : '0px')};
}
@media screen and (max-width: 550px){
    width:${(props) => (props.clicked ? '314px' : '0px')};
    font-size: 0.9rem;
}
@media screen and (max-width: 450px){
    width:${(props) => (props.clicked ? '250px' : '0px')};
    font-size: 0.9rem;
}
`

export const ProjectText = styled.img`
height: 425px;
width: auto;
transform: translateX(${(props) => (props.clicked || props.slide ? '-400px' : '0px')});
transition: transform 2s;
margin: 1rem 2rem;
pointer-events: none;

@media screen and (max-width: 1100px){
    margin: 1rem 0rem;
}
@media screen and (max-width: 1024px){
    height: 350px;
}
@media screen and (max-width: 960px){
    height: 275px;
}
@media screen and (max-width: 768px){
    height: 300px;
    transform: none;
}
@media screen and (max-width: 550px){
    height: 250px;
}
@media screen and (max-width: 450px){
    height: 200px;
    margin: 0;
    margin-bottom: 1rem;
}
`