import React, { useState, useRef } from 'react';
import { ProjectsData } from './ProjectsData';
import ArrowText from '../../images/project-text.png';
import {
    ProjectItemsContainer,
    ProjectText,
    ProjectItem,
    ProjectSlide,
    ImageBackground,
    ProjectImage,
    ProjectHeader,
    ProjectHeaderAlt,
    ProjectTitle,
    ProjectInfo
} from './ProjectsElements.js';
import { Gallery } from '../Gallery/Gallery';


const ProjectItems = () => {

    const [clicked, setClicked] = useState(false);
    const [hoverOrange, setHoverOrange] = useState(false);
    const [orange, setOrange] = useState(false);
    const [hoverImage, setHoverImage] = useState(false);
    const [slide, setSlide] = useState(false);
    const [gallery, setGallery] = useState(false);

    const toggle = index => {

        if (orange === index) {
            setClicked(null);
            setOrange(null);
            setSlide(null);
        } else {
            setClicked(index);
            setOrange(index);
            setSlide(false);
        }
    }

    const handleHoverOrange = index => {
        if (index >= 0) {
            setHoverOrange(null);
        }
        setHoverOrange(index);
    }

    const handleHoverImage = () => {
        const elementWidth = document.getElementById("image-background");
        if (window.innerWidth > 1024) {
            if (elementWidth.offsetWidth > 400) {
                setHoverImage(!hoverImage);
            } else {
                return null
            }
        } else if (window.innerWidth > 960 && window.innerWidth <= 1024) {
            if (elementWidth.offsetWidth > 390) {
                setHoverImage(!hoverImage);
            } else {
                return null
            }
        } else if (window.innerWidth > 768 && window.innerWidth <= 960) {
            if (elementWidth.offsetWidth > 320) {
                setHoverImage(!hoverImage);
            } else {
                return null
            }
        } else if (window.innerWidth > 550 && window.innerWidth <= 768) {
            if (elementWidth.offsetHeight > 380) {
                setHoverImage(!hoverImage);
            } else {
                return null
            }
        } else if (window.innerWidth > 450 && window.innerWidth <= 550) {
            if (elementWidth.offsetHeight > 300) {
                setHoverImage(!hoverImage);
            } else {
                return null
            }
        } else if (window.innerWidth <= 450) {
            if (elementWidth.offsetHeight > 250) {
                setHoverImage(!hoverImage);
            } else {
                return null
            }
        }

    }

    const boxRef = useRef();

    return (
        <ProjectItemsContainer>
            <ProjectText clicked={clicked} slide={slide} src={ArrowText} alt="Arrow Text"></ProjectText>
            {ProjectsData.map((item, index) => {
                if (index === 0) {
                    return null
                }
                return (
                    <ProjectItem key={index}>
                        <ProjectSlide onClick={() => setGallery(true)}>
                            {orange === index ?
                                  <ImageBackground id="image-background" onMouseEnter={() => handleHoverImage()} onMouseLeave={() => setHoverImage(false)} clicked={clicked}>
                                    <ProjectInfo clicked={clicked} hoverImage={hoverImage}>{item.info}</ProjectInfo>
                                    <ProjectImage ref={boxRef} clicked={clicked} hoverImage={hoverImage} src={item.image} alt={item.alt}></ProjectImage>
                                </ImageBackground>
                                :
                                <ImageBackground>
                                    <ProjectInfo>{item.info}</ProjectInfo>
                                    <ProjectImage src={item.image} alt={item.alt}></ProjectImage>
                                </ImageBackground>
                            }
                        </ProjectSlide>
                        {
                            orange === index ?
                                <ProjectHeaderAlt slide={slide} onClick={() => toggle(index)} key={index}><ProjectTitle>{item.title}</ProjectTitle></ProjectHeaderAlt>
                                :
                                hoverOrange === index ?
                                    <ProjectHeader slide={slide} hoverOrange={hoverOrange} onMouseEnter={() => handleHoverOrange(index)} onMouseLeave={() => setHoverOrange(false)} onClick={() => toggle(index)} key={index}><ProjectTitle>{item.title}</ProjectTitle></ProjectHeader>
                                    :
                                    <ProjectHeader onMouseEnter={() => handleHoverOrange(index)} onMouseLeave={() => setHoverOrange(false)} onClick={() => toggle(index)} key={index}><ProjectTitle>{item.title}</ProjectTitle></ProjectHeader>
                        }
                        {
                            orange === index && gallery ?
                            <Gallery data={item.data} setGallery={setGallery} gallery={gallery} link={item.link}/>
                            :
                            null
                        }
                    </ProjectItem>
                )
            })}
        </ProjectItemsContainer>
    )
};

export default ProjectItems
