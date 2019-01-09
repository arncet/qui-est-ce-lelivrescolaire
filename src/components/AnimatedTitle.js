import React, { Component } from 'react'

// Styles
import {
  StyledAnimatedTitleWrapper,
  StyledAnimatedTitle,
  StyledAnimatedImage,
  StyledAnimatedImageRelief,
  StyledAnimatedSubtitle,
  StyledAnimatedSubtitleLetter,
  StyledLoader
} from './Styled'

class AnimatedTitle extends Component {
  state = { animationIsFinished: false }

  componentDidMount = () => {
    this.timeout = setTimeout(() => this.setState({ animationIsFinished: true }), 2000)
  }

  componentWillUnmount = () => this.timeout && clearTimeout(this.timeout)

  render() {
    const { isLoaded } = this.props
    const { animationIsFinished } = this.state

    return (
      <StyledAnimatedTitleWrapper hide={animationIsFinished && isLoaded}>
        <StyledAnimatedTitle>
          <StyledAnimatedImageRelief src='images/QuiEstce.png' />
          <StyledAnimatedImageRelief src='images/QuiEstce.png' />
          <StyledAnimatedImageRelief src='images/QuiEstce.png' />
          <StyledAnimatedImageRelief src='images/QuiEstce.png' />
          <StyledAnimatedImageRelief src='images/QuiEstce.png' />
          <StyledAnimatedImageRelief src='images/QuiEstce.png' />
          <StyledAnimatedImageRelief src='images/QuiEstce.png' />
          <StyledAnimatedImageRelief src='images/QuiEstce.png' />
          <StyledAnimatedImageRelief src='images/QuiEstce.png' />
          <StyledAnimatedImageRelief src='images/QuiEstce.png' />
          <StyledAnimatedImage src='images/QuiEstce.png' />
        </StyledAnimatedTitle>
        <StyledAnimatedSubtitle>
          <StyledAnimatedSubtitleLetter>L</StyledAnimatedSubtitleLetter>
          <StyledAnimatedSubtitleLetter>e</StyledAnimatedSubtitleLetter>
          <StyledAnimatedSubtitleLetter>l</StyledAnimatedSubtitleLetter>
          <StyledAnimatedSubtitleLetter>i</StyledAnimatedSubtitleLetter>
          <StyledAnimatedSubtitleLetter>v</StyledAnimatedSubtitleLetter>
          <StyledAnimatedSubtitleLetter>r</StyledAnimatedSubtitleLetter>
          <StyledAnimatedSubtitleLetter>e</StyledAnimatedSubtitleLetter>
          <StyledAnimatedSubtitleLetter>s</StyledAnimatedSubtitleLetter>
          <StyledAnimatedSubtitleLetter>c</StyledAnimatedSubtitleLetter>
          <StyledAnimatedSubtitleLetter>o</StyledAnimatedSubtitleLetter>
          <StyledAnimatedSubtitleLetter>l</StyledAnimatedSubtitleLetter>
          <StyledAnimatedSubtitleLetter>a</StyledAnimatedSubtitleLetter>
          <StyledAnimatedSubtitleLetter>i</StyledAnimatedSubtitleLetter>
          <StyledAnimatedSubtitleLetter>r</StyledAnimatedSubtitleLetter>
          <StyledAnimatedSubtitleLetter>e</StyledAnimatedSubtitleLetter>
          <StyledAnimatedSubtitleLetter>.</StyledAnimatedSubtitleLetter>
          <StyledAnimatedSubtitleLetter>f</StyledAnimatedSubtitleLetter>
          <StyledAnimatedSubtitleLetter>r</StyledAnimatedSubtitleLetter>
        </StyledAnimatedSubtitle>
        <StyledLoader isLoaded={isLoaded}>Chargement ...</StyledLoader>
      </StyledAnimatedTitleWrapper>
    )
  }
}

export default AnimatedTitle
