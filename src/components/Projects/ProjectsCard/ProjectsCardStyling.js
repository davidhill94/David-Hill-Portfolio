import styled from "styled-components";

export const CardWrapper = styled.div`
height: 180px;
width: 200px;
background-color: var(--third);
border-radius: ${(props) => (props.clicked ? "2% 2% 0 0" : "2%")};
border: 2px solid var(--third);
z-index: 3;
color: #000;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

&:before {
content: "";
height: 180px;
width: 200px;
background-color: var(--secondary);
border-radius: 10%;
border: none;
z-index: 3;
color: #000;
transform: ${(props) => (props.clicked ? "scale(0)" : "scale(1)")};
transition: all 0.75s ease;
transition-delay: 0.1s;
position: absolute;
top: 0;
left: 0;
cursor: pointer;
box-shadow: ${(props) => (props.clicked ? "none" : "-2px -2px 9px 4px rgba(0,0,0,0.24) inset")};
-webkit-box-shadow: ${(props) => (props.clicked ? "none" : "-2px -2px 9px 4px rgba(0,0,0,0.24) inset")};
-moz-box-shadow: ${(props) => (props.clicked ? "none" : "-2px -2px 9px 4px rgba(0,0,0,0.24) inset")};
}
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