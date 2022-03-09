import React from 'react';
import {
    CarouselContainer,
    CarouselItem,
    CardImage,
    CardText,
    Content,
    CarouselLink,
    TextWrapper
} from './CarouselElements.js';

const Carousel = ({slide, imageOne, textOne, imageTwo, textTwo, link, title}) => {
    return (
        <CarouselContainer slide={slide} indicators={false}>
                <CarouselItem slide={slide}>
                <Content>
                    <CardImage
                        src={imageOne}
                        alt="First slide"
                        slide={slide}
                    />
                    <TextWrapper>
                    <CardText slide={slide}>{textOne}</CardText>
                    <CarouselLink slide={slide} href={link} target="_blank" aria-label={title}>Check it out!</CarouselLink>
                    </TextWrapper>
                    </Content>
                </CarouselItem>
                <CarouselItem slide={slide}>
                <Content>
                    <CardImage
                        src={imageTwo}
                        alt="Second slide"
                        slide={slide}
                    />
                    <TextWrapper>
                    <CardText slide={slide}>{textTwo}</CardText>
                    <CarouselLink slide={slide} href={link} target="_blank" aria-label={title}>Check it out!</CarouselLink>
                    </TextWrapper>
                    </Content>
                </CarouselItem>
        </CarouselContainer>
    );
};

export default Carousel;
