import React, { useState } from 'react';
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
import DayBackgroundMobile from '../../../shared-ui/images/mobile-light-background.svg';
import NightBackgroundMobile from '../../../shared-ui/images/mobile-dark-background.svg';
import Sun from '../../../shared-ui/images/sun.svg';
import Moon from '../../../shared-ui/images/moon.svg';
import { min } from '../../../shared-ui/lib/responsive';
import useMatchMedia from 'react-use-match-media';
import {
  StyledBackgrounds,
  StyledStar
} from '../../../shared-ui/styled-components/Background.styles';
import Header from '../../../shared-ui/components/header/Header';
import { homeTabInfo } from '../../../shared-ui/lib/data';
import Footer from '../../../shared-ui/components/footer/Footer';

const LandingSection: React.FC = () => {
  const [isDay, setIsDay] = useState<boolean>(true);
  const isDesktop = useMatchMedia(min.tablet);
  return (
    <>
      <Header tabs={homeTabInfo} isDay={isDay} />
      <StyledToggle
        src={Toggle}
        alt="toggle-day-night"
        onClick={(): void => setIsDay(!isDay)}
      />
      {!isDesktop && isDay && (
        <StyledBackgrounds src={DayBackgroundMobile} />
      )}
      {!isDesktop && !isDay && (
        <StyledBackgrounds src={NightBackgroundMobile} />
      )}
       {isDesktop && isDay && (
        <StyledBackgrounds src={DayBackgroundDesktop} />
      )}
      {isDesktop && !isDay && (
        <StyledBackgrounds src={NightBackgroundDesktop} />
      )}
      {isDay ? <StyledStar src={Sun} /> : <StyledStar src={Moon} />}
      <StyledLandingSectionContainer>
        <StyledHackathonText>HackBeanpot 2023</StyledHackathonText>
        <StyledThemeText>Desert Exploration</StyledThemeText>
        <StyledLandingButtonContainer
          btnText="Join our mailing list"
          btnLink="https://hackbeanpot.us10.list-manage.com/subscribe?u=a98050d47fdae2481521f0474&id=dccd8c8431"
          newTab
        />
      </StyledLandingSectionContainer>
      <Footer tabs={homeTabInfo} isDay={isDay} />
    </>
  );
};

export default LandingSection;

