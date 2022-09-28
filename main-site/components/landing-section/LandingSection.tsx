import React, { useState } from 'react';
import { H1 } from '../../../shared-ui/style/typography';
import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';
import {
  H3White,
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
import Header from '../../../shared-ui/components/header/Header';
import { homeTabInfo } from '../../../shared-ui/lib/data';
import Footer from '../../../shared-ui/components/footer/Footer';

const LandingSection: React.FC = () => {
  // const isDesktop = useMatchMedia(min.tablet);
  const [isDay, setIsDay] = useState<boolean>(true);
  return (
    <>
    <Header tabs={homeTabInfo} isDay={isDay}/>
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
        <H3White>HackBeanpot 2023</H3White>
        <H1>Desert Exploration</H1>

        <StyledLandingButtonContainer>
          <PrimaryButton
            btnText="Join our mailing list"
            btnLink="https://hackbeanpot.us10.list-manage.com/subscribe?u=a98050d47fdae2481521f0474&id=dccd8c8431"
            newTab
          />
        </StyledLandingButtonContainer>
      </StyledLandingSectionContainer>
      <Footer tabs={homeTabInfo} isDay={isDay}/>
    </>
  );
};

export default LandingSection;
