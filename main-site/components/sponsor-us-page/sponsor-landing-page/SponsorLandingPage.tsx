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

import Sun from '../../../../shared-ui/images/sun.svg';
import Moon from '../../../../shared-ui/images/moon.svg';
import {
  moonRock,
  sunRays
} from '../../landing-section/LandingSection.animations';
import { SponsorUsLandingProps } from '../../../lib/types';
// import { StyledStar } from '../../landing-section/LandingSection.styles';

const SponsorUsLanding: React.FC<SponsorUsLandingProps> = ({
  isDay,
  setIsDay
}) => {
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
        <StyledParagraph color={colors.WHITE}>
          With 11 years of experience working with sponsors to meet their
          marketing and recruiting needs, HackBeanpot uniquely positions
          sponsors to connect with young talent and innovators. 
        </StyledParagraph>
      </StyledSponsorUsSectionContainer>
    </StyledContainer>
  );
};

export default SponsorUsLanding;
