import React, { useState } from 'react';
import {
    PageBreakContainer,
    LineContainer,
    PageBreakLine,
    PageBreakText,
} from './PageBreakElements.js';
import { JokeOne, JokeTwo } from '../Jokes/Jokes.js';

export const ChapterOne = () => {
    return (
        <PageBreakContainer>
            <LineContainer>
            <PageBreakLine />
            <PageBreakText>Chapter One</PageBreakText>
            <PageBreakLine />
            </LineContainer>
        </PageBreakContainer>
    )
  };

export const ChapterTwo = () => {
    const [alternative, setAlternative] = useState(true);
  return (
      <PageBreakContainer alternative={alternative}>
          <LineContainer alternative={alternative}>
          <PageBreakLine />
          <PageBreakText>Chapter Two</PageBreakText>
          <PageBreakLine />
          </LineContainer>
          <JokeOne />
      </PageBreakContainer>
  )
};

export const ChapterThree = (alternative) => {
  return (
      <PageBreakContainer alternative={alternative}>
          <LineContainer alternative={alternative}>
          <PageBreakLine />
          <PageBreakText>Chapter Three</PageBreakText>
          <PageBreakLine />
          </LineContainer>
          <JokeTwo />
      </PageBreakContainer>
  )
};

export const EndLine = () => {
    return (
        <PageBreakContainer>
            <LineContainer>
            <PageBreakLine />
            <PageBreakText>The End</PageBreakText>
            <PageBreakLine />
            </LineContainer>
        </PageBreakContainer>
    )
};

