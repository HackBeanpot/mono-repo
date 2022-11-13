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
import { emojiRotate, fadeInUp, stagger } from './LandingSectionAnimations';

const LandingSection: React.FC<LandingSectionProps> = ({ isDay, setIsDay }) => {
  return (
    <StyledLandingSectionContainer initial="initial" animate="animate">
      <StyledToggle
        src={Toggle}
        alt="toggle-day-night"
        onClick={(): void => setIsDay(!isDay)}
      />
      {isDay ? <StyledStar src={Sun} /> : <StyledStar src={Moon} />}
      <StyledLandingTextContainer variants={stagger}>
        <StyledHackathonText variants={fadeInUp}>
          Tech Team 2023
        </StyledHackathonText>
        <StyledThemeText variants={fadeInUp}>
          Animations Workshop
        </StyledThemeText>
        <StyledHackathonText variants={fadeInUp}>
          Framer Motion <br />
          By Mike
        </StyledHackathonText>
        <StyledEmoji
          whileHover={{ scale: 1.5 }}
          drag
          dragConstraints={{ left: -800, right: 800, top: -600, bottom: 5000 }}
          variants={emojiRotate}
        >
          🤪
        </StyledEmoji>
      </StyledLandingTextContainer>
    </StyledLandingSectionContainer>
  );
};

export default LandingSection;
