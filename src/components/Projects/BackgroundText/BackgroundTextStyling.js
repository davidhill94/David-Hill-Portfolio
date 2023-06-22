import styled from "styled-components";

export const ProjectsBackgroundText = styled.p`
font-size: 6rem;
font-weight: 800;
color: var(--secondary);
writing-mode: vertical-rl;
opacity: 0.1;
pointer-events: none;
grid-column: 1 / 2;
display: flex;
align-items: center;
justify-content: start;
height: 100%;

@media screen and (max-width: 550px){
    writing-mode: horizontal-tb;
    grid-row: 1 / 2;
}
`