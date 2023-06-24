import styled from "styled-components";

export const ProjectsContainer = styled.div`
height: auto;
width: 100%;
background-color: var(--primary);
display: grid;
grid-template-rows: 100%;
grid-template-columns: 15% 70% 15%;
padding: 1rem 0;
position: relative;
font-family: 'Poppins', sans-serif;
place-items: center;
overflow: hidden;

@media screen and (max-width: 1024px){
    min-height: auto;
    grid-template-columns: 100%;
    grid-template-rows: 15% 85%;
}
`

export const ProjectWrapper = styled.div`
width: 100%;
height: auto;
padding: 3rem;
grid-column: 2 / 3;
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;

@media screen and (max-width: 1024px){
    grid-column: 1 / 2;
    grid-row: 2 / 3;
}
`