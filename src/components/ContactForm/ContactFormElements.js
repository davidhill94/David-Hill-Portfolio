import { FaCheckCircle } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

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

export const SubmitText = styled(FaCheckCircle)`
font-size: 4rem;
color: var(--third);
height: 30px;
opacity: ${(props) => (props.active ? "1" : "0")};
display: flex;
align-items: center;
justify-content: center;
margin-left: 48px;

@media screen and (max-width: 550px){
    font-size: 1.2rem;
}
`