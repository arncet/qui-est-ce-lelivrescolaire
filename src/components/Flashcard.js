import React from 'react'

// Styles
import {
  StyledFlashcard,
  StyledFlashcardInner,
  StyledFlashcardFront,
  StyledFlashcardBack,
  StyledPersonName,
  StyledLlsLogo
} from './Styled'

const Flashcard = ({ person: { name, picture }, flip, flipped }) =>
  <StyledFlashcard onClick={flip}>
    <StyledFlashcardInner flipped={flipped}>
      <StyledFlashcardFront picture={picture} />
      <StyledFlashcardBack>
        <StyledPersonName>{name}</StyledPersonName>
        <StyledLlsLogo src='images/lelivrescolaire.jpg' />
      </StyledFlashcardBack>
    </StyledFlashcardInner>
  </StyledFlashcard>

export default Flashcard
