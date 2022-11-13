import React from 'react';
import {
  StyledHackathonText,
  StyledThemeText,
  StyledLandingSectionContainer,
  StyledToggle,
  StyledLandingTextContainer,
  StyledStar,
  StyledEmoji
} from './LandingSection.styles';
import Toggle from '../../../shared-ui/images/toggle-day-dark.svg';
import Sun from '../../../shared-ui/images/sun.svg';
import Moon from '../../../shared-ui/images/moon.svg';
import { LandingSectionProps } from '../../lib/types';
import { emojiRotate, fadeInUp } from './LandingSectionAnimations';

const LandingSection: React.FC<LandingSectionProps> = ({ isDay, setIsDay }) => {
  return (
    <StyledLandingSectionContainer  initial='initial' animate='animate'>
      <StyledToggle
        src={Toggle}
        alt="toggle-day-night"
        onClick={(): void => setIsDay(!isDay)}
      />

      {isDay ? <StyledStar src={Sun} /> : <StyledStar src={Moon} />}
      <StyledLandingTextContainer variants={fadeInUp}>
        <StyledHackathonText >
          Tech Team 2023
        </StyledHackathonText>
        <StyledThemeText>
          Animations Workshop
        </StyledThemeText>
        <StyledHackathonText>
          Framer Motion <br />
          By Mike
        </StyledHackathonText>
        <StyledEmoji variants={emojiRotate}>🤪</StyledEmoji>
      </StyledLandingTextContainer>
    </StyledLandingSectionContainer>
  );
};

export default LandingSection;
