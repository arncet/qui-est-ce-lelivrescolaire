import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components'
import preload from 'image-preload'

// Components
import AnimatedTitle from './AnimatedTitle'
import WhoIs from './WhoIs'

// Fixtures
import PERSONS from '../fixtures/Persons'

const GlobalStyled = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    background-color: #00B3DF;
  }
`

class App extends Component {
  state = { isLoading: true }

  componentDidMount = () => {
    const images = PERSONS.map(person => person.picture)
    preload(images, { onComplete: this.onComplete })
  }

  onComplete = () => this.setState({ isLoading: false })

  onSingleImageComplete = () => this.setState({ isLoading: false })

  render() {
    const { isLoading } = this.state
    console.log({ isLoading })
    return (
      <>
        <AnimatedTitle isLoaded={!isLoading} />
        <WhoIs />
        <GlobalStyled />
      </>
    )
  }
}

export default App
