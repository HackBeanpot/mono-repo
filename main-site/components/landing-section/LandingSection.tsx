import React from 'react';
import {
  StyledHackathonText,
  StyledThemeText,
  StyledLandingButtonContainer,
  StyledLandingSectionContainer,
  StyledToggle,
  StyledLandingTextContainer,
  StyledStar
} from './LandingSection.styles';
import Toggle from '../../../shared-ui/images/toggle-day-dark.svg';
import ToggleDay from '../../../shared-ui/images/toggle-day-light.svg';
import Sun from '../../../shared-ui/images/sun.svg';
import Moon from '../../../shared-ui/images/moon.svg';
import { LandingSectionProps } from '../../lib/types';

const LandingSection: React.FC<LandingSectionProps> = ({ isDay, setIsDay }) => {
  return (
    <StyledLandingSectionContainer>
      {isDay ? (
        <StyledToggle
          src={ToggleDay}
          alt="toggle-day"
          onClick={(): void => setIsDay(!isDay)}
        />
      ) : (
        <StyledToggle
          src={Toggle}
          alt="toggle-day-night"
          onClick={(): void => setIsDay(!isDay)}
        />
      )}
      {isDay ? <StyledStar src={Sun} /> : <StyledStar src={Moon} />}
      <StyledLandingTextContainer>
        <StyledHackathonText>HackBeanpot 2023</StyledHackathonText>
        <StyledThemeText>Desert Exploration</StyledThemeText>
        <StyledLandingButtonContainer
          btnText="Apply here!"
          btnLink="https://apply.hackbeanpot.com/"
          newTab
        />
      </StyledLandingTextContainer>
    </StyledLandingSectionContainer>
  );
};

export default LandingSection;
