import React from 'react'

// Styles
import {
  StyledFlashcard,
  StyledFlashcardInner,
  StyledFlashcardFront,
  StyledFlashcardBack,
  StyledPersonName,
  StyledLlsLogo,
  StyledPersonJob
} from './Styled'

const Flashcard = ({ person: { name, picture, job }, flip, flipped }) =>
  <StyledFlashcard onClick={flip}>
    <StyledFlashcardInner flipped={flipped}>
      <StyledFlashcardFront picture={picture} />
      <StyledFlashcardBack>
        <StyledPersonName>{name}</StyledPersonName>
        {job && <StyledPersonJob dangerouslySetInnerHTML={{ __html: job }} />}
        <StyledLlsLogo src='images/lelivrescolaire.jpg' />
      </StyledFlashcardBack>
    </StyledFlashcardInner>
  </StyledFlashcard>

export default Flashcard
