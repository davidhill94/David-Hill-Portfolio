import styled from "styled-components";

export const CardDescription = styled.div`
height: 0;
width: 200px;
background-color: var(--secondary);
border-radius: 0 0 2% 2%;
z-index: 2;
transition: height 0.75s ease, opacity 0.2s ease;
opacity: 0;
display: grid;
grid-template-rows: 75% 25%;
pointer-events: none;

&.clicked {
    height: 200px;
    opacity: 1;
    pointer-events: auto;
}
`

export const DescriptionText = styled.p`
height: 0;
opacity: 0;
transition: all 0.75s ease-in;
display: flex;
align-items: start;
justify-content: start;
padding: 1rem 0.5rem;
font-size: 0.75rem;
grid-row: 1 / 2;

&.clicked {
    height: 150px;
    opacity: 1;
}
`

export const ButtonContainer = styled.div`
grid-row: 2 / 3;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
`

export const DescriptionButtons = styled.a`
width: auto;
padding: 0.25rem;
color: var(--primary);
font-size: 0.75rem;
background-color: transparent;
margin: 0.25rem;
border: 1px solid;
border-radius: 2px;
text-decoration: none;

&:hover{
    background-color: var(--third);
    color: var(--primary);
}
`