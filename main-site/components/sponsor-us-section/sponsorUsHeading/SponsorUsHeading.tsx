import React from 'react';
import {
  StyledSponsorUsHeader,
  StyledSponsorUsSectionContainer,
  StyledButtonContainer,
  StyledParagraph
} from './SponsorUsHeading.styles';

import PrimaryButton from '../../../../shared-ui/components/primary-button/PrimaryButton';
import { colors } from '../../../../shared-ui/style/colors';

const SponsorUsHeading: React.FC = () => {
  return (
    <>
      <StyledSponsorUsSectionContainer>
        <StyledSponsorUsHeader>Sponsor Us</StyledSponsorUsHeader>
        <StyledParagraph color={colors.TEXT_BROWN}>
          Sponsors empower HackBeanpot in <strong>celebrating innovation, diversity, and inclusion</strong> in the tech
          community. HackBeanpot is a selective hackathon, drawing candidates
          from schools throughout Boston to propel passionate, committed, and
          motivated technologists to grow their skillset. We provide sponsors
          the ability to provide mentorship that will shape the lives of
          emerging individuals, as well as the opportunity to network and bond
          early on with our hackers to hone their aptitude and potential into
          professional careers in the long run.
        </StyledParagraph>
        <StyledButtonContainer>
          <PrimaryButton
            btnText="View our sponsorship packet"
            btnLink="https://drive.google.com/file/d/1ttohaF5r457ymHIPI9Tx2jXkt9HLz8gn/view?usp=sharing"
            newTab
          />
        </StyledButtonContainer>
      </StyledSponsorUsSectionContainer>
    </>
  );
};

export default SponsorUsHeading;
