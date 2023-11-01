import React from 'react';
import {
  StyledSponsorUsHeader,
  StyledSponsorUsSectionContainer,
  StyledButtonContainer,
  StyledParagraph,
  StyledContainer
} from './SponsorLandingPage.styles';

import PrimaryButton from '../../../../shared-ui/components/primary-button/PrimaryButton';
import { colors } from '../../../../shared-ui/style/colors';

import Sun from "../../../../shared-ui/images/sun.svg";
import Moon from '../../../../shared-ui/images/moon.svg';
import { moonRock, sunRays } from '../../landing-section/LandingSection.animations';
import { SponsorUsLandingProps } from '../../../lib/types';
// import { StyledStar } from '../../landing-section/LandingSection.styles';

const SponsorUsLanding: React.FC<SponsorUsLandingProps> = ({ isDay, setIsDay }) => {
  return (
    <StyledContainer>
      {/* {isDay ? (
        <StyledStar animate="animate" variants={sunRays} src={Sun} />
      ) : (
        <StyledStar animate="animate" variants={moonRock} src={Moon} />
      )} */}
      <StyledSponsorUsSectionContainer>
        <StyledSponsorUsHeader>
          <b>Sponsor Us</b>
        </StyledSponsorUsHeader>
        <StyledParagraph color={colors.TEXT_BROWN}>
          Sponsors empower HackBeanpot in{' '}
          <strong style={{ color: colors.TEXT_DARKBROWN }}>
            celebrating innovation, diversity, and inclusion
          </strong>{' '}
          in the tech community. HackBeanpot is a selective hackathon, drawing
          candidates from schools throughout Boston to propel passionate,
          committed, and motivated technologists to grow their skillset. We
          provide sponsors the ability to provide mentorship that will shape the
          lives of emerging individuals, as well as the opportunity to network
          and bond early on with our hackers to hone their aptitude and
          potential into professional careers in the long run.
        </StyledParagraph>
        <StyledButtonContainer>
          <PrimaryButton
            btnText="View our sponsorship packet"
            btnLink="https://drive.google.com/file/d/1G1qBIdoTtaCFI3E38ZYA1cVJSECSwMot/view"
            newTab
          />
        </StyledButtonContainer>
      </StyledSponsorUsSectionContainer>
    </StyledContainer>
  );
};

export default SponsorUsLanding;

