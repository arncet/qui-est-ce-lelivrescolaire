import React from 'react'

// Styles
import {
  StyledSettings,
  StyledSettingsTitle,
  StyledSetting,
  StyledSettingName,
  StyledLabel,
  StyledCheckbox
} from './Styled'

const Settings = ({ difficulty, onChangeDifficulty }) =>
  <StyledSettings>
    <StyledSettingsTitle>Paramètres</StyledSettingsTitle>
    <StyledSetting>
      <StyledSettingName>Difficulté</StyledSettingName>
      <StyledLabel>
        <StyledCheckbox
          type='radio'
          name='difficulty'
          value='0'
          checked={difficulty === '0'}
          onChange={onChangeDifficulty}
        />
        Facile
      </StyledLabel>
      <br/>
      <StyledLabel>
        <StyledCheckbox
          type='radio'
          name='difficulty'
          value='1'
          checked={difficulty === '1'}
          onChange={onChangeDifficulty}
        />
        Difficile
      </StyledLabel>
    </StyledSetting>
  </StyledSettings>

export default Settings
