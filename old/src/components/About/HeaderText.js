import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

const glowing = keyframes`
    0%, 100% {
      color: #ff7900;
      filter: blur(1px);
      text-shadow: 0 0 5px #ff7900
    }
    30% {
        color: #FF4040;
        filter: blue(1px);
        text-shadow: 0 0 5px #ff4040;
    }
    50%, 65% {
      color: #fff;
      text-shadow: none;
      filter: blur(0px);
    }
`

const wiggle = keyframes`
0% { transform: rotate(0deg) translateY(0); }
25% { transform: rotate(5deg) translateY(-30px); }
50% { transform: translateY(-0px); }
75% { transform: rotate(-5deg) translateY(-15px); }
100% { transform: rotate(0deg) translateY(0); }
`
    

const HeaderWrapper = styled.h1`
display: flex;
`

const ItemSpan = styled.span`
    font-size: 3.5rem;
    font-family: 'Poppins', 'sans-serif';
    font-weight: 800;
    color: ${(props) => (props.animate ? "#fff" : "#ff7900")};
    pointer-events: auto;
    cursor: pointer;
    animation: ${(props) => (props.animate ? css`${wiggle} 1s forwards` : null)};

    &:nth-child(1) {
        animation-delay: 0s;
    }
    &:nth-child(2) {
        animation-delay: 0s;
    }
    &:nth-child(3) {
        animation-delay: 0s;
    }
    &:nth-child(4) {
        animation-delay: 0s;
    }
    &:nth-child(5) {
        animation-delay: 0s;
    }
    &:nth-child(6) {
        animation-delay: 0s;
    }
    &:nth-child(7) {
        animation-delay: 0s;
    }
    &:nth-child(8) {
        animation-delay: 0s;
    }
    &:nth-child(9) {
        animation-delay: 0s;
    }
    &:nth-child(10) {
        animation-delay: 0s;
    }
    &:nth-child(11) {
        animation-delay: 0s;
    }

    @media screen and (max-width: 960px){
        font-size: 2rem;
    }
    @media screen and (max-width: 768px){
        font-size: 4rem;
    }
    @media screen and (max-width: 550px){
        font-size: 3rem;
    }
    @media screen and (max-width: 450px){
        font-size: 2rem;
    }
`

const HeaderText = () => {
const [animate, setAnimate] = useState(false);

const title = " More About Me".split("");
const animateLetter = index => {
    if(animate === index) {
            setAnimate(null);
        console.log(animate);
    }
    setAnimate(index);
    console.log(animate);
}


  return (
    <section>
  <HeaderWrapper>
    {title.map((item, index) => {
        if (index === 0) {
            return null
        }
        return (
            animate === index 
            ?
            <ItemSpan key={index} animate={animate} onMouseEnter={() => animateLetter(index)}>{item}</ItemSpan>
            :
            <ItemSpan key={index} onMouseEnter={() => animateLetter(index)}>{item}</ItemSpan>
        )
    })}
  </HeaderWrapper>
</section>
  )
}

export default HeaderText;
