import React from 'react'
import { createGlobalStyle } from 'styled-components'

// Components
import AnimatedTitle from './AnimatedTitle'
import WhoIs from './WhoIs'

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
    <GlobalStyled />
  </>

export default App
