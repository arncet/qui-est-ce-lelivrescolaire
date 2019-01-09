import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components'
import preload from 'image-preload'

// Components
import AnimatedTitle from './AnimatedTitle'
import WhoIs from './WhoIs'

// Fixtures
import PERSONS_OLD from '../fixtures/old'
import PERSONS_NEW from '../fixtures/new'

const GlobalStyled = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    background-color: #00B3DF;
  }
`

class App extends Component {
  state = { isLoading: true }

  componentDidMount = () => {
    const images = [
      ...PERSONS_OLD.map(person => person.picture),
      ...PERSONS_NEW.map(person => person.picture)
    ]
    preload(images, { onComplete: this.onComplete })
  }

  onComplete = () => this.setState({ isLoading: false })

  onSingleImageComplete = console.log

  render() {
    const { isLoading } = this.state
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
