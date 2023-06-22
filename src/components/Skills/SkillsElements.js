import styled from "styled-components";

export const SkillsContainer = styled.div`
position: relative;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
background-color: var(--secondary);
color: var(--primary);
width: 100%;
min-height: 40vh;
`

export const Skill = styled.p`
font-size: 3.5rem;
margin: 2.5rem;

@media screen and (max-width: 768px) {
    font-size: 3rem;
}

@media screen and (max-width: 550px) {
    font-size: 2.5rem;
}
`