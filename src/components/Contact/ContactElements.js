import styled from "styled-components";
import { MdEmail, MdPhoneEnabled, MdLocationOn } from 'react-icons/md';
import { GiCardJoker } from 'react-icons/gi';

export const ContactContainer = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: var(--primary);
color: white;
width: 100%;
min-height: 70vh;
font-size: 70px;
font-family: 'Poppins', sans-serif;

padding: 2rem 0;

@media screen and (max-width: 960px){
    min-height: 110vh;
}
@media screen and (max-width: 550px){
    min-height: 105vh;
}
`

export const ContactBackgroundText = styled.div`
position: absolute;
font-size: 6rem;
font-weight: 800;
color: var(--secondary);
writing-mode: vertical-rl;
top: -5%;
left: -2vw;
opacity: 0.1;
pointer-events: none;

@media screen and (max-width: 768px){
    position: static;
    writing-mode: horizontal-tb;
}
@media screen and (max-width: 550px){
    font-size: 3rem;
}
`

export const BackgroundCard = styled(GiCardJoker)`
position: absolute;
bottom: -30%;
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
text-align: center;
font-size: 20rem;
display: flex;
transform: rotate(10deg);
opacity: 0.1;
pointer-events: none;

@media screen and (max-width: 550px){
    bottom: -20%;
    font-size: 10rem;
}
`

export const ContactWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
pointer-events: none;
width: 80%;
margin-left: 4rem;

@media screen and (max-width: 960px){
    flex-direction: column-reverse;
    margin-left: 0;
}
`

export const ContactItems = styled.div`
display: flex;
flex-direction: column;
height: 400px;
align-items: flex-end;
justify-content: center;
text-align: center;
margin: 0 1rem;

@media screen and (max-width: 960px){
    align-items: center;
}
`

export const ContactPreText = styled.p`
font-size: 1.2rem;
text-align: flex-end;
width: 90%;

@media screen and (max-width: 1024px){
    font-size: 1.1rem;
}
@media screen and (max-width: 768px){
    font-size: 1rem;
    text-align: center;
    width: 100%;
}
@media screen and (max-width: 450px){
    font-size: 0.8rem;
    padding: 0 1rem;
}
`

export const ContactItem = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
margin: 12px 0;
height: 60px;
position: relative;

@media screen and (max-width: 1024px){
    font-size: 1.1rem;
}
@media screen and (max-width: 960px){
    min-width: 60vw;
    flex-direction: row-reverse;
}
@media screen and (max-width: 450px){
    min-width: 90vw;
}
`

export const ItemText = styled.p`
font-size: 1.4rem;
color: var(--secondary);
margin: 0 24px;
white-space: nowrap;

@media screen and (max-width: 1024px){
    font-size: 1.1rem;
}
@media screen and (max-width: 960px){
    font-size: 1rem;
}
@media screen and (max-width: 768px){
    font-size: 1rem;
}
`

export const EmailLogo = styled(MdEmail)`
font-size: 3.5rem;
color: var(--secondary);
background-color: var(--third);
padding: 6px;
border-radius: 50%;
cursor: pointer;
pointer-events: auto;

&:hover {
    transform: scale(1.1);
    transition: transform 0.1s ease; 
}

@media screen and (max-width: 1024px){
    font-size: 3rem;
}
@media screen and (max-width: 450px){
    margin-left: 2rem;
}
`

export const PhoneLogo = styled(MdPhoneEnabled)`
font-size: 3.5rem;
color: var(--secondary);
background-color: var(--third);
padding: 6px;
border-radius: 50%;
cursor: pointer;
pointer-events: auto;


&:hover {
    transform: scale(1.1);
    transition: transform 0.1s ease; 
}

@media screen and (max-width: 1024px){
    font-size: 3rem;
}
@media screen and (max-width: 450px){
    margin-left: 2rem;
}
`

export const LocationLogo = styled(MdLocationOn)`
font-size: 3.5rem;
color: var(--secondary);
background-color: var(--third);
padding: 6px;
border-radius: 50%;
cursor: pointer;
pointer-events: auto;

&:hover {
    transform: scale(1.1);
    transition: transform 0.1s ease; 
}

@media screen and (max-width: 1024px){
    font-size: 3rem;
}
@media screen and (max-width: 450px){
    margin-left: 2rem;
}
`

export const CopiedText = styled.div`
display: ${(props) => (props.email || props.phone || props.location ? 'flex' : 'none')};
font-size: 1.2rem;
color: var(--third);
`