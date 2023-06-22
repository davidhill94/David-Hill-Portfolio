import styled, { keyframes } from "styled-components";

const submitAnimation = keyframes`
0% { width: 0; font-size: 0rem; }
25% { width: 60px; font-size: 1rem; }
75% { width: 60px; font-size: 1rem; }
100% { width: 0px; font-size: 0rem; }
`

export const ContactFormContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-bottom: 2rem;
width: 100%;
padding: 0 2rem;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
font-size: 1rem;
width: 100%;
height: 400px;
pointer-events: none;

@media screen and (max-width: 1024px){
    width: 500px;
}
@media screen and (max-width: 768px){
    width: 100%;
}
@media screen and (max-width: 550px){
    height: 300px;
}
`

export const FormItem = styled.div`
display: flex;
flex-direction: column;
margin: 12px 0;
`

export const NameLabel = styled.label`
display: flex;
pointer-events: auto;

@media screen and (max-width: 550px){
    font-size: 0.9rem;
}
`

export const NameInput = styled.input`
display: flex;
padding: 0 8px;
pointer-events: auto;

@media screen and (max-width: 550px){
    font-size: 0.9rem;
}
`

export const EmailLabel = styled.label`
display: flex;
pointer-events: auto;

@media screen and (max-width: 550px){
    font-size: 0.9rem;
}
`

export const EmailInput = styled.input`
display: flex;
padding: 0 8px;
pointer-events: auto;

@media screen and (max-width: 550px){
    font-size: 0.9rem;
}
`

export const MessageLabel = styled.label`
display: flex;
pointer-events: auto;

@media screen and (max-width: 550px){
    font-size: 0.9rem;
}
`

export const MessageText = styled.textarea`
display: flex;
padding: 5px 8px;
pointer-events: auto;

@media screen and (max-width: 550px){
    font-size: 0.9rem;
}
`

export const SumbitItem = styled.div`
display: flex;
height: 30px;
`

export const SubmitBtn = styled.input`
display: flex;
width: 100px;
height: 30px;
justify-content: center;
align-items: center;
border: none;
border-radius: 3px;
pointer-events: auto;
background-color: var(--secondary);
color: var(--primary);

&:hover {
    background-color: var(--third);
}

@media screen and (max-width: 550px){
    font-size: 0.9rem;
}
`

export const SubmitText = styled.p`
font-size: 1rem;
width: ${(props) => (props.active ? '60px' : '0px')};
height: 30px;
background-color: var(--third);
color: var(--secondary);
border-radius: 3px;
display: ${(props) => (props.active ? 'flex' : 'none')};
align-items: center;
justify-content: center;
margin-left: 48px;
transition: all 0.5s ease;
animation-name: ${submitAnimation};
animation-duration: 3s;
animation-fill-mode: forwards;
pointer-events: auto;

@media screen and (max-width: 550px){
    font-size: 0.9rem;
}
`