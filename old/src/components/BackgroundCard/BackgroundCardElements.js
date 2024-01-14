import { GiCardJoker } from "react-icons/gi";
import styled from "styled-components";

export const JokerCard = styled(GiCardJoker)`
position: absolute;
bottom: ${(props) => props.bottom};
left: ${(props) => props.left};
right: ${(props) => props.right};
text-align: center;
font-size: 30rem;
display: flex;
transform: rotate(${(props) => props.rotate}) translateX(${(props) => props.translate});
opacity: 0.1;
z-index: 900;
pointer-events: none;
color: #fff;

@media screen and (max-width: 550px){
    bottom: ${(props) => props.mobile};
    font-size: 15rem;
}
`