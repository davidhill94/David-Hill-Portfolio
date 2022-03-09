import styled from "styled-components";

export const SkillsContainer = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: var(--secondary);
color: var(--primary);
width: 100%;
min-height: 40vh;
`

export const SkillsColumn = styled.div`
display: flex;
width: 60%;
justify-content: space-between;
margin: 6px 0;

@media screen and (max-width: 768px) {
    width: 70%;
}
@media screen and (max-width: 550px) {
    width: 80%;
}
`

export const Skill = styled.p`
font-size: 3.5rem;

@media screen and (max-width: 768px) {
    font-size: 3rem;
}

@media screen and (max-width: 550px) {
    font-size: 2.5rem;
}
`