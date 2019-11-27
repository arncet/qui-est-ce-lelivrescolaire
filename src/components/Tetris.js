import React from 'react'

import { StyledTetris, StyledTetrisGrid, StyledBlock } from './Styled'

const Block = () => {
  return <StyledBlock />
}

const Tetris = () =>
  <StyledTetris>
    <StyledTetrisGrid>
      <Block />
    </StyledTetrisGrid>
  </StyledTetris>

export default Tetris
