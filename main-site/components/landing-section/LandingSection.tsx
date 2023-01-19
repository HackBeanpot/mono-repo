import React from 'react';
import {
  StyledHackathonText,
  StyledThemeText,
  StyledLandingButtonContainer,
  StyledLandingSectionContainer,
  StyledLandingTextContainer,
  StyledStar
} from './LandingSection.styles';
import ToggleMode from '../../../shared-ui/components/toggle-mode/ToggleMode';
import Sun from '../../../shared-ui/images/sun.svg';
import Moon from '../../../shared-ui/images/moon.svg';
import { LandingSectionProps } from '../../lib/types';
import { moonRock, sunRays } from './LandingSection.animations';
import LocationTimeSection from '../location-time-section/LocationDateSection';

const LandingSection: React.FC<LandingSectionProps> = ({ isDay, setIsDay }) => {
  return (
    <StyledLandingSectionContainer>
      <ToggleMode isDay={isDay} setIsDay={setIsDay} location={'main-site'} />
      {isDay ? (
        <StyledStar animate="animate" variants={sunRays} src={Sun} />
      ) : (
        <StyledStar animate="animate" variants={moonRock} src={Moon} />
      )}
      <StyledLandingTextContainer>
        <StyledHackathonText>HackBeanpot 2023</StyledHackathonText>
        <StyledThemeText>Desert Exploration</StyledThemeText>
        <LocationTimeSection isDay={isDay}/>
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
