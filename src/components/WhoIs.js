import React, { Component } from 'react'
import random from 'lodash/random'
import size from 'lodash/size'

// Fixtures
import PERSONS_OLD from '../fixtures/old'
import PERSONS_NEW from '../fixtures/new'

// Components
import Flashcard from './Flashcard'
import Settings from './Settings'

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
    const persons = PERSONS_NEW
    this.state = {
      persons,
      person: persons[random(0, size(persons) - 1)],
      flipped: false,
      difficulty: '0',
    }
  }

  componentWillUnmount = () => this.timeout && clearTimeout(this.timeout)

  reroll = () => {
    // If the card if flipped wait flip back aniamtion to reroll the person
    const { persons } = this.state
    const delayBeforeReroll = this.state.flipped ? 130 : 0
    this.setState({ flipped: false })
    this.timeout = setTimeout(() => {
      this.setState({ person: persons[random(0, size(persons) - 1)] })
    }, delayBeforeReroll)
  }

  flip = () => this.setState(({ flipped }) => ({ flipped: !flipped }))

  onChangeDifficulty = e => {
    const difficulty = e.target.value
    const persons = difficulty === '0' ? PERSONS_NEW : [...PERSONS_NEW, ...PERSONS_OLD]
    this.setState({ difficulty, persons }, this.reroll)
  }

  render() {
    const { person, flipped, difficulty } = this.state

    return (
      <StyledWhoIs>
        <StyledTopTitle>
          <StyledQuiEstCeLogo src='images/QuiEstce.png' />
          <StyledLlsTexte>Lelivrescolaire.fr</StyledLlsTexte>
        </StyledTopTitle>
        <Flashcard person={person} flipped={flipped} flip={this.flip} />
        <StyledNextButton onClick={this.reroll}>Nouveau</StyledNextButton>
        <Settings onChangeDifficulty={this.onChangeDifficulty} difficulty={difficulty} />
      </StyledWhoIs>
    )
  }
}

export default WhoIs
