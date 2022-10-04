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
import Sun from '../../../shared-ui/images/sun.svg';
import Moon from '../../../shared-ui/images/moon.svg';
import { LandingSectionProps } from '../../../shared-ui/lib/types';

const LandingSection: React.FC<LandingSectionProps> = ({ isDay, setIsDay }) => {
  return (
    <StyledLandingSectionContainer>
      <StyledToggle
        src={Toggle}
        alt="toggle-day-night"
        onClick={(): void => setIsDay(!isDay)}
      />

      {isDay ? <StyledStar src={Sun} /> : <StyledStar src={Moon} />}
      <StyledLandingTextContainer>
        <StyledHackathonText>HackBeanpot 2023</StyledHackathonText>
        <StyledThemeText>Desert Exploration</StyledThemeText>
        <StyledLandingButtonContainer
          btnText="Join our mailing list"
          btnLink="https://hackbeanpot.us10.list-manage.com/subscribe?u=a98050d47fdae2481521f0474&id=dccd8c8431"
          newTab
        />
      </StyledLandingTextContainer>
    </StyledLandingSectionContainer>
  );
};

export default LandingSection;
