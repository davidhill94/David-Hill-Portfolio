import React, { useState, useEffect } from 'react';
import { GiCardJoker } from 'react-icons/gi';
import {
    JokeContainer,
    Joke,
    JokeIcon,
    ModalWrapper,
    ModalBox,
    ModalJoke,
    ModalAnswer,
} from './JokesElements';

export const JokeOne = () => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    return setModal(!modal);
  }

  useEffect(() => {
    const modalTimeout = setTimeout(() => {
        setModal(false);
    }, 15500);
    return () => clearTimeout(modalTimeout);
}, [modal]);
  return (
      <JokeContainer>
          <Joke>
        <JokeIcon onClick={handleModal}><GiCardJoker /></JokeIcon>
      </Joke>
      <ModalWrapper modal={modal}>
        <ModalBox>
        <ModalJoke>What do you call a Spider that likes to write code?</ModalJoke>
        <ModalAnswer>A Web Developer!</ModalAnswer>
        </ModalBox>
      </ModalWrapper>
      </JokeContainer>
  )
};
export const JokeTwo = () => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    return setModal(!modal);
  }

  useEffect(() => {
    const modalTimeout = setTimeout(() => {
        setModal(false);
    }, 15500);
    return () => clearTimeout(modalTimeout);
}, [modal]);
  return (
    <JokeContainer>
    <Joke>
  <JokeIcon onClick={handleModal}><GiCardJoker /></JokeIcon>
</Joke>
<ModalWrapper modal={modal}>
  <ModalBox>
  <ModalJoke>What do you get if you cross a Volcano with a programming language?</ModalJoke>
  <ModalAnswer>LavaScript!</ModalAnswer>
  </ModalBox>
</ModalWrapper>
</JokeContainer>
  )
};
