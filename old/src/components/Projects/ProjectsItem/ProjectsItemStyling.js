import styled from "styled-components";

export const ProjectsItemWrapper = styled.div`
min-height: 160px;
width: 200px;
border-radius: 5px;
margin: 1rem 1rem;
position: relative;
box-shadow: 0px 20px 50px rgba(58,58,58,0.4);
-webkit-box-shadow: 0px 20px 50px rgba(58,58,58,0.4);
-moz-box-shadow: 0px 20px 50px rgba(58,58,58,0.4);

&:hover {
    transform: scale(1.05);
    transition: ease-in-out 0.2s transform;
}
`