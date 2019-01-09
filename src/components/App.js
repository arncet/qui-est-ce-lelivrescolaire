import React, { Component } from 'react'
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

class App extends Component {
  render() {
    return (
      <>
        <AnimatedTitle />
        <WhoIs />
        <GlobalStyled />
      </>
    )
  }
}

export default App
