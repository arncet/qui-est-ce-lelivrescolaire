import styled, { keyframes } from 'styled-components'

const SHOW_ANIMTION = keyframes`
  0% {
    transform: scale3d(0, 0, 0) rotate3d(0, 1, 0, 180deg);
  }

  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 1, 0, 18deg);
  }

  100% {
    transform: scale3d(1, 1, 1) rotate3d(0, 1, 0, 0deg);
  }
`;

const JUMP_ANIMTION = keyframes`
  0% {
    transform: translate3d(0px, 0px, 0px);
  }

  50% {
    transform: translate3d(0px, -20px, 0px);
  }

  100% {
    transform: translate3d(0px, 0px, 0px);
  }
`;

const SHINE_ANIMTION = keyframes`
  0% {
    text-shadow: 0 0 17px transparent;
  }

  50% {
    text-shadow: 0 0 17px #FFF;
  }

  100% {
    text-shadow: 0 0 17px transparent;
  }
`;

const SHINE_CARD_ANIMTION = keyframes`
  0% {
    transform: skew(30deg) translate3d(0px, 0px, 0px);
  }

  20% {
    transform: skew(30deg) translate3d(620px, 0px, 0px);
  }

  100% {
    transform: skew(30deg) translate3d(620px, 0px, 0px);
  }
`

const HIDE_TITLE_ANIMTION = keyframes`
  0% {
    opacity: 1;
  }

  99% {
    opacity: 0;
    transform: scale3d(1, 1, 1);
  }

  100% {
    opacity: 0;
    transform: scale3d(0, 0, 0);
  }
`;

export const StyledAnimatedTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  color: #FFF;
  z-index: 1;
  box-shadow: 0px -11px 45px -6px rgba(0,0,0,0.75);
  background-color: #00B3DF;
  animation: ${HIDE_TITLE_ANIMTION} 0.5s 3.5s ease forwards;
`

export const StyledAnimatedTitle = styled.div`
  position: relative;
  transform: scale3d(0, 0, 0) rotate3d(0, 1, 0, 90deg);
  animation: ${SHOW_ANIMTION} 0.75s 0.5s ease forwards;
  max-width: 80%;
`

export const StyledAnimatedImage = styled.img`
  position: relative;
  z-index: 1;
  max-width: 100%;
`

export const StyledAnimatedImageRelief = styled.img`
  position: absolute;
  left: 0px;
  max-width: 100%;

  :nth-of-type(2) { top: 18px; left: 18px; }
  :nth-of-type(3) { top: 16px; left: 16px; }
  :nth-of-type(4) { top: 14px; left: 14px; }
  :nth-of-type(5) { top: 12px; left: 12px; }
  :nth-of-type(6) { top: 10px; left: 10px; }
  :nth-of-type(7) { top: 8px; left: 8px; }
  :nth-of-type(8) { top: 6px; left: 6px; }
  :nth-of-type(9) { top: 4px; left: 4px; }
  :nth-of-type(10) { top: 2px; left: 2px; }
  :nth-of-type(11) { top: 0px; left: 0px; }
`

export const StyledAnimatedSubtitle = styled.div`
  font-size: 28px;
  letter-spacing: 10px;
  text-transform: uppercase;
  border-top: 1px solid;
  padding-top: 22px;
  text-shadow: 0 0 17px transparent;
  animation: ${SHINE_ANIMTION} 0.5s 1.5s ease, ${SHINE_ANIMTION} 0.75s 2.14s ease;
  max-width: 80%;

  @media (max-width: 480px) {
    font-size: 20px;
    letter-spacing: 4px;
  }
`

export const StyledAnimatedSubtitleLetter = styled.span`
  display: inline-block;
  animation: ${JUMP_ANIMTION} 0.3s ease forwards;

  :nth-child(1) { animation-delay: 1.3s }
  :nth-child(2) { animation-delay: 1.32s }
  :nth-child(3) { animation-delay: 1.34s }
  :nth-child(4) { animation-delay: 1.36s }
  :nth-child(5) { animation-delay: 1.38s }
  :nth-child(6) { animation-delay: 1.40s }
  :nth-child(7) { animation-delay: 1.42s }
  :nth-child(8) { animation-delay: 1.44s }
  :nth-child(9) { animation-delay: 1.46s }
  :nth-child(10) { animation-delay: 1.48s }
  :nth-child(11) { animation-delay: 1.50s }
  :nth-child(12) { animation-delay: 1.52s }
  :nth-child(13) { animation-delay: 1.54s }
  :nth-child(14) { animation-delay: 1.56s }
  :nth-child(15) { animation-delay: 1.58s }
  :nth-child(16) { animation-delay: 1.60s }
  :nth-child(17) { animation-delay: 1.62s }
  :nth-child(18) { animation-delay: 1.64s }
`

export const StyledWhoIs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #FFF;
`

export const StyledFlashcard = styled.div`
  background-color: transparent;
  width: 350px;
  height: 525px;
  perspective: 1000px;
  border-radius: 8px;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 300px;
    height: 400px;
  }
`

export const StyledFlashcardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
  transform-style: preserve-3d;
  transform: ${({ flipped }) => flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`

const commonFaceStyle = `
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 8px;
  box-shadow: 0px 0px 68px -15px rgba(0,0,0,0.75);
  overflow: hidden;
`

export const StyledFlashcardFront = styled.div`
  ${commonFaceStyle}
  background-image: ${({ picture }) => `url('${picture}')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 2px solid #003c67;

  :before{
    content: '';
    width: 100px;
    height: 100%;
    background-color: #ffffff4d;
    position: absolute;
    top: 0px;
    left: -120px;
    animation: ${SHINE_CARD_ANIMTION} 5s 2s ease infinite;
  }
`

export const StyledFlashcardBack = styled.div`
  ${commonFaceStyle}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #003c67;
  color: white;
  transform: rotateY(180deg);
  padding: 40px;
  box-sizing: border-box;
  text-align: center;
`

export const StyledPersonName = styled.div`
  font-size: 30px;
`

export const StyledPersonJob = styled.div`
  font-size: 22px;
  margin-top: 10px;
  padding-top: 10px;
  position: relative;

  :before{
    content: "";
    width: 40px;
    height: 1px;
    background-color: #FFF;
    position: absolute;
    left: calc(50% - 20px);
    top: -2px;
  }

  br {
    line-height: 38px;
  }
`

export const StyledNextButton = styled.button`
  margin: 50px 0px;
  padding: 15px 30px;
  box-shadow: none;
  background-color: #007594;
  border: none;
  color: #FFF;
  border-radius: 20px;
  font-size: 20px;
  box-shadow: 0px 17px 43px 0px rgba(0,0,0,0.75), 0px 20px 0px 0px rgba(0,0,0,0.6);
  transition: all 0.2s ease;
  transform: perspective(900px) rotateX(20deg);
  outline: none;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  :active{
    transform: translate3d(0px, 10px, 0px) perspective(900px) rotateX(20deg);
    box-shadow: 0px 17px 43px 0px rgba(0,0,0,0.75), 0px 10px 0px 0px rgba(0,0,0,0.75);
  }

  :before{
    content: '';
    width: 100px;
    height: 100%;
    background-color: #ffffffad;
    position: absolute;
    top: 0px;
    left: -120px;
    transform: skew(30deg);
    transition: transform 0.5s ease;
  }

  :hover:before{
    transform: skew(30deg) translate3d(300px, 0px, 0px);
  }

  @media (max-width: 480px) {
    margin-top: 30px;
  }
`

export const StyledLlsLogo = styled.img`
  position: absolute;
  opacity: 0.1;
  width: 200px;
`

export const StyledTopTitle = styled.div`
  margin-bottom: 50px;
  text-align: center;

  @media (max-width: 480px) {
    margin-bottom: 30px;
  }
`

export const  StyledQuiEstCeLogo = styled.img`
  width: 200px;

  @media (max-width: 480px) {
    width: 120px;
  }
`

export const StyledLlsTexte = styled.div`
  letter-spacing: 4px;
  text-transform: uppercase;
  font-size: 13px;
`

export const StyledSettings  = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  background-color: #ffffff52;
  border-radius: 3px;

  @media (max-width: 480px) {
    position: static;
  }
`

export const StyledSettingsTitle = styled.div`
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 3px;
  border-bottom: 1px solid;
  padding-bottom: 4px;
  margin-bottom: 10px;
`

export const StyledSetting  = styled.div`
  border-bottom: 1px dotted #FFF;
  padding: 0px 0px 6px 6px;
`

export const StyledSettingName = styled.div`
  text-transform: uppercase;
  font-size: 13px;
`

export const StyledLabel = styled.label`
  font-size: 14px;
`

export const StyledCheckbox = styled.input`
  margin-right: 5px;
`
