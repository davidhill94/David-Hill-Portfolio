import styled from "styled-components";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';


export const ProjectCarouselContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 444px;
width:${(props) => (props.slide ? '444px' : '0px')};
background: rgba(255, 255, 255, 0.5);
border-radius: 20px 20px;
transition: all 2s;
margin: 0 6px;
opacity: ${(props) => (props.slide ? "1" : "0")};
pointer-events: auto;
position: relative;

&:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--primary);
    transition: all 1s;
    border-radius: 0% 30% 30% 0%;
}


@media screen and (max-width: 1024px){
    height: 400px;
    width:${(props) => (props.slide ? '394px' : '0px')};
}
@media screen and (max-width: 960px){
    height: 325px;
    width:${(props) => (props.slide ? '321px' : '0px')};
}
@media screen and (max-width: 768px){
    width: 400px;
    height:${(props) => (props.slide ? '394px' : '0px')};
    margin: 8px 0;

    &:before {
        border-radius: 0% 0% 30% 30%;
    }
}
@media screen and (max-width: 550px){
    width: 320px;
    height:${(props) => (props.slide ? '314px' : '0px')};
}
@media screen and (max-width: 450px){
    width: 260px;
    height:${(props) => (props.slide ? '254px' : '0px')};
}
`

export const CarouselContainer = styled(Carousel)`
    height: 100%;
    width:${(props) => (props.slide ? '100%' : '0px')};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const CarouselItem = styled(Carousel.Item)`
    height: 444px;
    width:${(props) => (props.slide ? '100%' : '0px')};
`

export const Content = styled.div`
height: 70%;
width: 70%;
align-items: center;
justify-content: center;
display: flex;
flex-direction: column;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`
export const CardImage = styled.img`
    opacity: ${(props) => (props.slide ? '1' : '0')};
    height: auto;
    width: ${(props) => (props.slide ? '100%' : '0%')};
    transition: all 2.5s ease;

    @media screen and (max-width: 768px){
        width: 100%;
        height:  ${(props) => (props.slide ? 'auto' : '0')};
    }
    @media screen and (max-width: 550px){
        width: 75%;
    }
`

export const TextWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 2rem;
`

export const CardText = styled(Card.Text)`
    font-size: ${(props) => (props.slide ? '1rem' : '0')};
    font-weight: 800;
    color: var(--secondary);
    opacity: ${(props) => (props.slide ? '1' : '0')};
    transition: all 2s ease;
    margin: 0;

    @media screen and (max-width: 550px){
    font-size: ${(props) => (props.slide ? '0.8rem' : '0')};
    }
`

export const CarouselLink = styled.a`
display: inline;
font-size: ${(props) => (props.slide ? '1rem' : '0')};
font-weight: 800;
color: var(--secondary);
margin-top: 2rem;
opacity: ${(props) => (props.slide ? '1' : '0')};
transition: all 2s ease;
transition: color 0.2s ease;
cursor: pointer;

&:hover {
    color: var(--third);
}

@media screen and (max-width: 550px){
    font-size: ${(props) => (props.slide ? '0.8rem' : '0')};
    }
`