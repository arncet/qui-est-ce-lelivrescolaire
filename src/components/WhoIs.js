import React, { Component } from 'react'
import shuffle from 'lodash/shuffle'
import size from 'lodash/size'
import preload from 'image-preload'

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
    const persons = shuffle(PERSONS_NEW)
    this.state = {
      persons,
      current: 0,
      flipped: false,
      difficulty: '0'
    }
    preload([persons[0].picture, persons[1].picture])
  }

  componentWillUnmount = () => this.timeout && clearTimeout(this.timeout)

  updateCurrent = current => {
    // If the card if flipped wait flip back aniamtion to reroll the person
    const { flipped } = this.state
    const delay = flipped ? 130 : 0
    this.setState({ flipped: false })
    this.timeout = setTimeout(() => this.setState({ current }), delay)
  }

  reroll = () => {
    const persons = shuffle(this.state.persons)
    preload([persons[0].picture])
    this.setState({ persons, current: 0 })
    preload([persons[1].picture])
    this.updateCurrent(0)
  }

  next = () => {
    const { current, persons } = this.state
    if (current === size(persons) - 1) this.reroll()
    else {
      const next = current + 1
      const nextNextPerson = persons[next + 1]
      nextNextPerson && preload([nextNextPerson.picture])
      this.updateCurrent(next)
    }
  }

  flip = () => this.setState(({ flipped }) => ({ flipped: !flipped }))

  onChangeDifficulty = e => {
    const difficulty = e.target.value
    const persons = difficulty === '0' ? PERSONS_NEW : PERSONS_OLD
    this.setState({ difficulty, persons: shuffle(persons) }, this.reroll)
  }

  render() {
    const { current, persons, flipped, difficulty } = this.state

    return (
      <StyledWhoIs>
        <StyledTopTitle>
          <StyledQuiEstCeLogo src={`${process.env.PUBLIC_URL}/images/QuiEstce.png`} />
          <StyledLlsTexte>Lelivrescolaire.fr</StyledLlsTexte>
        </StyledTopTitle>
        <Flashcard person={persons[current]} flipped={flipped} flip={this.flip} />
        <StyledNextButton onClick={this.next}>Suivant</StyledNextButton>
        <Settings onChangeDifficulty={this.onChangeDifficulty} difficulty={difficulty} />
      </StyledWhoIs>
    )
  }
}

export default WhoIs
