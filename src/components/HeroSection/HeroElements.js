import styled from 'styled-components';

export const HeroContainer = styled.div`
display: flex;
position: relative;
background: var(--primary);
min-height: 100vh;
width: 100%;
padding: 0 30px;
margin-top: -80px;
z-index: 1;
font-family: 'Poppins', sans-serif;
overflow-x: hidden;
overflow-y: hidden;

@media screen and (max-width: 550px){
    flex-direction: column-reverse;
    align-items: center;
    justify-content: end;   
}
`

export const BackgroundTextTop = styled.p`
font-size: 22rem;
font-weight: 800;
position: absolute;
right: 0;
top: 0;
height: 300px;
display: flex;
align-items: center;
opacity: 0.1;
color: #fff;
pointer-events: none;

@media screen and (max-width: 960px){
    font-size: 16rem;
    top: -5%;
}

@media screen and (max-width: 768px){
    font-size: 14rem;
    top: -10%;
}

@media screen and (max-width: 550px) {
    font-size: 12rem;
    top: -10%;
}
`

export const BackgroundTextBottom = styled.p`
font-size: 22rem;
font-weight: 800;
position: absolute;
bottom: 0;
left: 0;
height: 300px;
display: flex;
align-items: center;
opacity: 0.1;
color: #fff;
pointer-events: none;

@media screen and (max-width: 960px){
    font-size: 16rem;
    bottom: -5%;
}

@media screen and (max-width: 768px){
    font-size: 14rem;
    bottom: -10%;
}

@media screen and (max-width: 550px) {
    font-size: 13rem;
    bottom: -15%;
}
`

export const HeroImage = styled.img`
position: absolute;
right: 0;
bottom: 0;
width: 36rem;
height: auto;
z-index: 20;
pointer-events: none;

@media screen and (max-width: 960px) {
    right: 0;
    width: 32rem;
}

@media screen and (max-width: 768px) {
    width: 28rem;
}
@media screen and (max-width: 670px) {
    width: 22rem;
}
@media screen and (max-width: 550px) {
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    width: 24rem;
}
`

export const HeroText = styled.img`
position: absolute;
bottom: 20%;
left: 10%;
height: auto;
width: 22rem;
z-index: 2;
pointer-events: none;

@media screen and (max-width: 960px) {
    width: 20rem;
    top: 30%;
}

@media screen and (max-width: 768px) {
    width: 16rem;
    top: 35%;
}

@media screen and (max-width: 550px) {
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    top: 25%;
}

@media screen and (max-width: 320px) {
    width: 10rem;
}
`