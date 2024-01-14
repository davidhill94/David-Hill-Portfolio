import styled from "styled-components";

export const PageBreakContainer = styled.div`
display: flex;
flex-direction: column;
height: ${(props) => (props.alternative ? "150px" : "100px")};
width: 100%;
background-color: transparent;
justify-content: center;
align-items: center;
text-align: center;
color: var(--third);
font-family: 'Poppins', sans-serif;
position: relative;
border: none;
`

export const LineContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
margin-top: ${(props) => (props.alternative ? "2rem" : "2rem")};
`

export const PageBreakLine = styled.p`
display: flex;
width: 25%;
height: 3px;
background-color: var(--third);
`

export const PageBreakText = styled.p`
display: flex;
font-weight: 800;
`