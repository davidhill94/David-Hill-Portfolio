import styled from "styled-components";

export const CardWrapper = styled.div`
height: 180px;
width: 200px;
background-color: ${(props) => (props.clicked ? "var(--third)" : "var(--secondary)")};
border-radius: ${(props) => (props.clicked ? "2% 2% 0 0" : "2%")};
z-index: 3;
color: #000;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`

export const Logo = styled.img`
width: 9rem;
height: auto;
opacity: 0.75;
`

export const CardIcon = styled.img`
width: 6rem;
height: auto;
opacity: 0.75;
color: var(--primary);
z-index: 4;
`