import styled from "styled-components";
import Carousel from 'react-bootstrap/Carousel';

export const GalleryContainer = styled.div`
width: 100%;
position: absolute;
top: 0;
left: 0;
z-index: 998;
height: ${(props) => (props.mobile ? "100%" : "100%")};
padding: 2rem;
z-index: 998;
pointer-events: auto;
background-color: var(--secondary);
display: ${(props) => (props.mobile ? "block" : "auto")};
overflow: ${(props) => (props.mobile ? "auto": "none")};
`

export const LinkButton = styled.a`
font-size: 1.5rem;
position: absolute;
top: 0;
right: 0;
margin: 1rem;
color: var(--third);
background-color: transparent;
display: flex;
align-items: center;
justify-content: center;
border: none;
cursor: pointer;
text-decoration: none;
z-index: 999;

&:hover{
    color: var(--primary);
}
`

export const GalleryCarousel = styled(Carousel)`
height: 100%;
width: 100%;
position: relative;
display: flex;
align-items: center;
justify-content: center;
`

export const GalleryItem = styled(Carousel.Item)`
height: auto;
width: 100%;
`

export const GalleryImage = styled.img`
height: 20rem;
width: auto;

@media screen and (max-width: 960px){
    height: 18rem;
}
@media screen and (max-width: 768px){
    height: 15rem;
}
@media screen and (max-width: 500px){
    height: 8rem;
}
@media screen and (max-width: 375px){
    height: 4rem;
}
`

export const BackButton = styled.button`
font-size: 1.5rem;
position: absolute;
top: 0;
left: 0;
margin: 1rem;
color: var(--third);
background-color: transparent;
display: flex;
align-items: center;
justify-content: center;
border: none;
cursor: pointer;
text-decoration: none;
z-index: 999;

&:hover{
    color: var(--primary);
}
`

//MOBILE/TABLET STYLING

export const GalleryWrapper = styled.div`
-webkit-column-count: 1;
-moz-column-count: 1;
column-count: 1;
-webkit-column-width: 100%;
-moz-column-width: 100%;
column-width: 100%;
padding: 0 1rem;
margin-top: 4rem;
width: 100%;
min-height: 100vh;
display: block;
overflow: auto;
`

export const GalleryItemMobile = styled.div`
transition: all 350ms ease;
-webkit-transtion: all 350ms ease;
cursor: pointer;
margin-bottom: 1rem;

&:hover {
    opacity: 0.8;
}
`

export const GalleryImageMobile = styled.img`
width: 100%;
`
