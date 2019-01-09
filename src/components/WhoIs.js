import React, { Component } from 'react'
import random from 'lodash/random'
import size from 'lodash/size'

// Fixtures
import PERSONS from '../fixtures/Persons'

// Components
import Flashcard from './Flashcard'

// Styles
import {
  StyledWhoIs,
  StyledNextButton,
  StyledTopTitle,
  StyledQuiEstCeLogo,
  StyledLlsTexte
} from './Styled'

class WhoIs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      person: PERSONS[random(0, size(PERSONS) - 1)],
      flipped: false
    }
  }

  componentWillUnmount = () => this.timeout && clearTimeout(this.timeout)

  reroll = () => {
    // If the card if flipped wait flip back aniamtion to reroll the person
    const delayBeforeReroll = this.state.flipped ? 130 : 0
    this.setState({ flipped: false })
    this.timeout = setTimeout(() => {
      this.setState({ person: PERSONS[random(0, size(PERSONS) - 1)] })
    }, delayBeforeReroll)
  }

  flip = () => this.setState(({ flipped }) => ({ flipped: !flipped }))

  render() {
    const { person, flipped } = this.state

    return (
      <StyledWhoIs>
        <StyledTopTitle>
          <StyledQuiEstCeLogo src='images/QuiEstce.png' />
          <StyledLlsTexte>Lelivrescolaire.fr</StyledLlsTexte>
        </StyledTopTitle>
        <Flashcard person={person} flipped={flipped} flip={this.flip} />
        <StyledNextButton onClick={this.reroll}>Nouveau</StyledNextButton>
      </StyledWhoIs>
    )
  }
}

export default WhoIs
