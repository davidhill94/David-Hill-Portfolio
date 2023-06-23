import styled from "styled-components";

export const BackgroundHeader = styled.p`
font-size: 6rem;
font-weight: 800;
color: var(--secondary);
writing-mode: vertical-rl;
opacity: 0.1;
pointer-events: none;
grid-column: 1 / 2;
display: flex;
align-items: center;
justify-content: center;
height: 100%;

@media screen and (max-width: 768px){
    writing-mode: horizontal-tb;
    grid-row: 1 / 2;
}
`