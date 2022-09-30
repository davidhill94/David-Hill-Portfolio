import styled, { keyframes } from "styled-components";

const modalAnimation = keyframes`
0% { width: 0; }
10% { width: 100%; }
95% { width: 100%; }
100% { width: 0; }
`

const jokeAnimation = keyframes`
0% { opacity: 0; left: -50%; top: 50%; }
10% { opacity: 0; left: -50%; top: 50%; }
20% { opacity: 1; left: 50%; top: 50%; }
45% { opacity: 1; left: 50%; top: 50%; }
55% { opacity: 0; left: 50%; top: 100%; }
100% { opacity: 0; left: 50%; top: 100%; }
`

const punchlineAnimation = keyframes`
0% { opacity: 0; left: -50%; top: 50%; }
45% { opacity: 0; left: -50%; top: 50%; }
55% { opacity: 1; left: 50%; top: 50%; }
85% { opacity: 1; left: 50%; top: 50%; }
95% { opacity: 0; left: 50%; top: 100%; }
100% { opacity: 0; left: 50%; top: 100%; }
`

const cardAnimation = keyframes`
0% { transform: rotate(10deg); }
10% { transform: rotate(-10deg); }
20% { transform: rotate(10deg); }
30% { transform: rotate(-10deg); }
40% { transform: rotate(10deg); }
50% { transform: rotate(-10deg); }
60% { transform: rotate(10deg); }
70% { transform: rotate(-10deg); }
80% { transform: rotate(10deg); }
90% { transform: rotate(-10deg); }
100% { transform: rotate(10deg); }
`

export const JokeContainer = styled.div`
display: flex;
font-family: 'Poppins', sans-serif;
`

export const Joke = styled.div`
display: flex;
flex-direction: column;
position: relative;
height: 100px;
width: 100px;
align-items: center;
justify-content: center;

@media screen and (max-width: 768px){
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    text-align: center;
}
`

export const JokeIcon = styled.p`
display: flex;
font-size: 3rem;
cursor: pointer;
color: var(--third);
animation: ${cardAnimation};
animation-duration: 8s;
animation-fill-mode: forwards;
animation-iteration-count: infinite;
z-index: 3;

&:hover {
    font-size: 3.2rem;
    transition: all 0.2s ease;
}
`

export const ModalWrapper = styled.div`
display: ${(props) => (props.modal ? 'flex' : 'none')};
align-items: center;
justify-content: center;
z-index: 2;
position: absolute;
top: 0;
right: 0;
width: 100%;
height: 100%;
transition: 2s ease;
background-color: var(--third);
animation-name: ${modalAnimation};
animation-duration: 15s;
animation-fill-mode: forwards;
`

export const ModalBox = styled.div`
display: flex;
position: relative;
height: 100%;
width: 100%;
align-items: center;
justify-content: center;
`

export const ModalJoke = styled.h3`
color: var(--secondary);
font-size: 1.5rem;
animation-name: ${jokeAnimation};
animation-duration: 15s;
animation-fill-mode: forwards;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 70%;

@media screen and (max-width: 960px){
    font-size: 1.2rem;
}
@media screen and (max-width: 768px){
    font-size: 1rem;
}
@media screen and (max-width: 450px){
    font-size: 1rem;
}
`

export const ModalAnswer = styled.p`
color: var(--secondary);
font-size: 2rem;
animation-name: ${punchlineAnimation};
animation-duration: 15s;
animation-fill-mode: forwards;
z-index: 5;
font-weight: 800;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 70%;
`
