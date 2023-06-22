import styled from "styled-components";

export const ProjectsContainer = styled.div`
min-height: 100vh;
width: 100%;
background-color: var(--primary);
display: grid;
grid-template-rows: 100%;
grid-template-columns: 15% 70% 15%;

@media screen and (max-width: 550px){
    grid-template-columns: 100%;
    grid-template-rows: 15% 85%;
}
`

export const ProjectWrapper = styled.div`
width: 100%;
min-height: 100%;
padding: 3rem;
grid-column: 2 / 3;
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;

@media screen and (max-width: 550px){
    grid-column: 1 / 2;
    grid-row: 2 / 3;
}
`