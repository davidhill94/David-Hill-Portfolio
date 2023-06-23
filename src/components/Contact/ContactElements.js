import styled from "styled-components";
import { MdEmail, MdPhoneEnabled, MdLocationOn } from 'react-icons/md';
import { GiCardJoker } from 'react-icons/gi';

export const ContactContainer = styled.div`
position: relative;
display: grid;
grid-template-columns: 15% 70% 15%;
grid-template-rows: 100%;
align-items: center;
background-color: var(--primary);
color: white;
width: 100%;
min-height: auto;
font-size: 70px;
font-family: 'Poppins', sans-serif;
padding: 2rem 0;

@media screen and (max-width: 1024px){
    min-height: auto;
    grid-template-columns: 100%;
    grid-template-rows: 15% 85%;
    padding: 0;
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
grid-column: 2 / 3;

@media screen and (max-width: 1024px){
    flex-direction: column-reverse;
    margin-left: 0;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
}
`

export const ContactItems = styled.div`
display: flex;
flex-direction: column;
height: 400px;
max-width: 500px;
align-items: center;
justify-content: center;
text-align: center;
padding: 0 2rem;

@media screen and (max-width: 1024px){
    align-items: center;
}
`

export const ContactPreText = styled.p`
font-size: 1rem;
text-align: start;
width: 100%;

@media screen and (max-width: 450px){
    font-size: 0.8rem;
    padding: 0 4rem;
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
    font-size: 1rem;
    flex-direction: row-reverse;
}
@media screen and (max-width: 960px){
    min-width: 100%;
}
@media screen and (max-width: 450px){
    min-width: 90vw;
}
`
export const ItemWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: end;
justify-content: center;
width: 100%;
padding: 0 1rem;

@media screen and (max-width: 1024px){
    align-items: start;
    padding: 0;
}

@media screen and (max-width: 290px){
    align-items: start;
}
`

export const ItemText = styled.p`
font-size: 1rem;
color: var(--secondary);
margin: 0 24px;
white-space: nowrap;

@media screen and (max-width: 280px){
    font-size: 0.8rem;
}
`

export const EmailLogo = styled(MdEmail)`
font-size: 2.5rem;
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

@media screen and (max-width: 450px){
    margin-left: 2rem;
}
`

export const PhoneLogo = styled(MdPhoneEnabled)`
font-size: 2.5rem;
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
@media screen and (max-width: 450px){
    margin-left: 2rem;
}
`

export const LocationLogo = styled(MdLocationOn)`
font-size: 2.5rem;
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
@media screen and (max-width: 450px){
    margin-left: 2rem;
}
`

export const CopiedText = styled.div`
display: ${(props) => (props.email || props.phone || props.location ? 'flex' : 'none')};
font-size: 1.2rem;
color: var(--third);
`