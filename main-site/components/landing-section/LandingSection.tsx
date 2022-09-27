import React, { useState } from 'react';
import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';
import {
  StyledHackathonText,
  StyledThemeText,
  StyledLandingButtonContainer,
  StyledLandingSectionContainer,
  StyledToggle
} from './LandingSection.styles';
import Toggle from '../../../shared-ui/images/toggle-day-dark.svg';
import DayBackgroundDesktop from '../../../shared-ui/images/day-background-desktop.svg';
import NightBackgroundDesktop from '../../../shared-ui/images/dark-background-desktop.svg';
import Sun from '../../../shared-ui/images/sun.svg';
import Moon from '../../../shared-ui/images/moon.svg';
import { StyledBackgrounds, StyledStar } from '../../../shared-ui/styled-components/Background.styles';

const LandingSection: React.FC = () => {
  // const isDesktop = useMatchMedia(min.tablet);
  const [isDay, setIsDay] = useState<boolean>(true);
  return (
    <>
      <StyledToggle
        src={Toggle}
        alt="toggle-day-night"
        onClick={(): void => setIsDay(!isDay)}
      />
      {isDay ? (
        <StyledBackgrounds src={DayBackgroundDesktop} />
      ) : (
        <StyledBackgrounds src={NightBackgroundDesktop} />
      )}
      {isDay ? (
        <StyledStar src={Sun} />
      ) : (
        <StyledStar src={Moon} />
      )}
      <StyledLandingSectionContainer>
        <StyledHackathonText>HackBeanpot 2023</StyledHackathonText>
        <StyledThemeText>Desert Exploration</StyledThemeText>

        <StyledLandingButtonContainer>
          <PrimaryButton
            btnText="Join our mailing list"
            btnLink="https://hackbeanpot.us10.list-manage.com/subscribe?u=a98050d47fdae2481521f0474&id=dccd8c8431"
            newTab
          />
        </StyledLandingButtonContainer>
      </StyledLandingSectionContainer>
    </>
  );
};

export default LandingSection;
