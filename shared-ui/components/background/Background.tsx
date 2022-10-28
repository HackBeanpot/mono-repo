import React from 'react';
//import DayBackgroundDesktop from '../../../shared-ui/images/day-background-desktop.svg';
import DayLandingBackground from '../../../shared-ui/images/day-landing-background.svg';
import NightBackgroundDesktop from '../../../shared-ui/images/dark-background-desktop.svg';
import DayBackgroundMobile from '../../../shared-ui/images/mobile-light-background.svg';
import NightBackgroundMobile from '../../../shared-ui/images/mobile-dark-background.svg';
import { min } from '../../lib/responsive';
import useMatchMedia from 'react-use-match-media';
import { StyledBackgrounds } from '../../styled-components/Background.styles';
import { BackgroundProps } from '../../lib/types';

const Background: React.FC<BackgroundProps> = ({ isDay }) => {
  const isDesktop = useMatchMedia(min.tablet);
  return (
    <>
      {/* {!isDesktop && isDay && <StyledBackgrounds src={DayBackgroundMobile} />}
      {!isDesktop && !isDay && (
        <StyledBackgrounds src={NightBackgroundMobile} />
      )} */}
      {isDesktop && isDay && <StyledBackgrounds src={DayLandingBackground} />}
      {/* {isDesktop && !isDay && (
        <StyledBackgrounds src={NightBackgroundDesktop} />
      )} */}
    </>
  );
};

export default Background;
