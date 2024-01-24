import React from 'react';
import {
  StyledSponsorUsHeader,
  StyledSponsorUsSectionContainer,
  StyledButtonContainer,
  StyledParagraph,
  StyledContainer
} from './SponsorLandingPage.styles';

import { colors } from '../../../../shared-ui/style/colors';

import { SponsorUsLandingProps } from '../../../lib/types';
import ToggleMode from '../../../../shared-ui/components/toggle-mode/ToggleMode';
// import { StyledStar } from '../../landing-section/LandingSection.styles';

const SponsorUsLanding: React.FC<SponsorUsLandingProps> = ({
  isDay,
  setIsDay
}) => {
  return (
    <StyledContainer>
      <ToggleMode isDay={isDay} setIsDay={setIsDay} location={'main-site'} />
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
