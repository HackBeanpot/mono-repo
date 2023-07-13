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
import SponsorsHeader from '../sponsors-section/SponsorsHeader';

const LandingSection: React.FC<LandingSectionProps> = ({ isDay, setIsDay, isSponsorPage }) => {
  return (
    <StyledLandingSectionContainer>
      {!isSponsorPage && (
        <ToggleMode isDay={isDay} setIsDay={setIsDay} location={'main-site'} />
      )}

      {isDay ? (
        <StyledStar animate="animate" variants={sunRays} src={Sun} />
      ) : (
        <StyledStar animate="animate" variants={moonRock} src={Moon} />
      )}
      <StyledLandingTextContainer>
        {!isSponsorPage ? (
          <>
            <StyledHackathonText>HackBeanpot 2023</StyledHackathonText>
            <StyledThemeText>Desert Exploration</StyledThemeText>
            <LocationTimeSection isDay={isDay} />
            <StyledLandingButtonContainer
              btnText="Join our mailing list"
              btnLink="https://hackbeanpot.us10.list-manage.com/subscribe?u=a98050d47fdae2481521f0474&id=dccd8c8431"
              newTab
            />
          </>
        ) : (
          <>
            <SponsorsHeader />
          </>
        )}
      </StyledLandingTextContainer>
    </StyledLandingSectionContainer>
  );
};

export default LandingSection;
