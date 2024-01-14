import styled from "styled-components";

export const TechStackWrapper = styled.div`
width: 200px;
height: 0;
opacity: 0;
transition: all 0.75s ease;

&.techClicked{
    height: 50px;
    opacity: 1;
}
`

export const InnerWrapper = styled.div`
width: 200px;
height: 0;
opacity: 0;
background-color: var(--third);
border-radius: 0 0 2px 2px;
transition: all 0.75s ease;
padding: 0.5rem;
font-size: 0.75rem;
display: flex;
align-items: center;
justify-content: start;

&.techClicked{
    height: 50px;
    opacity: 1;
}
`