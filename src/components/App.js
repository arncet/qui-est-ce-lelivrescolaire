import React from 'react'
import { createGlobalStyle } from 'styled-components'

// Components
import AnimatedTitle from './AnimatedTitle'
import WhoIs from './WhoIs'
// import Tetris from './Tetris'

const GlobalStyled = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    background-color: #00B3DF;
  }
`

const App = () =>
  <>
    <AnimatedTitle/>
    <WhoIs />
    {/* <Tetris /> */}
    <GlobalStyled />
  </>

export default App
