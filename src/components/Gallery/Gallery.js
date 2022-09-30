import React, { useEffect, useState }  from 'react';
import { BackButton, GalleryCarousel, GalleryContainer, GalleryImage, GalleryItem, GalleryWrapper, GalleryItemMobile, GalleryImageMobile, LinkButton } from './GalleryElements';
import { MdFastForward, MdFastRewind} from 'react-icons/md';

export const Gallery = ({data, setGallery, link}) => {

    const [mobile, setMobile] = useState(false);

    const switchMobileLayout = () => {
        window.innerWidth <= 768 ? setMobile(true) : setMobile(false);
    }

    useEffect(() => {
        switchMobileLayout()
        window.addEventListener("resize", switchMobileLayout);
        return () => window.removeEventListener("resize", switchMobileLayout)
      });

  return (
    <GalleryContainer mobile={mobile}>
        <BackButton onClick={() => setGallery(false)}><MdFastRewind/>{"   Back"}</BackButton>
        <LinkButton href={link} target="_blank">{"Visit  "}<MdFastForward /></LinkButton>
        {
            mobile ?
        <GalleryWrapper>
        {data.map((item, index) => {
            if (index === 0) {
                return null
            }
            return (
                <GalleryItemMobile key={index}>
                    <GalleryImageMobile src={item.image} alt={item.alt}></GalleryImageMobile>
                </GalleryItemMobile>
            )
        })}
        </GalleryWrapper>

            :

            <GalleryCarousel indicators={true} variant="dark">
        {data.map((item, index) => {
                if (index === 0) {
                return null
            }
            return (
                <GalleryItem key={index}>
        <GalleryImage
          src={item.image}
          alt={item.alt}
        />
      </GalleryItem>
            )
        })}
            </GalleryCarousel>
        }
    </GalleryContainer>
  )
}
