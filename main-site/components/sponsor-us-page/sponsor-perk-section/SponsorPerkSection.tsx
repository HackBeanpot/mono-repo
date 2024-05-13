import React from 'react';
import {
  StyledTextContainer,
  StyledParagraph,
  StyledSponsorPerkSectionContainer,
  StyledTextSmallerContainer,
  StyledTreasureChestGroup,
  StyledPirateFlagGroup,
} from './SponsorPerkSection.styles';
import { StyledButtonContainer } from '../past-sponsor-section/PastSponsor.styles';
import { H3 } from '../../../../shared-ui/style/typography';
import { colors } from '../../../../shared-ui/style/colors';
import PrimaryButton from '../../../../shared-ui/components/primary-button/PrimaryButton';
import TreasureChestGroup from '../../../images/treasure-chest.png';
import PirateFlagGroup from '../../../../shared-ui/images/pirateFlag.png';

const SponsorPerk: React.FC = () => {
  return (
    <StyledSponsorPerkSectionContainer>
      <StyledPirateFlagGroup src={PirateFlagGroup} />
      <StyledTreasureChestGroup src={TreasureChestGroup} />
      <StyledTextContainer>
        <H3 color={colors.WHITE}>Sponsorship perks include:</H3>
        <StyledParagraph color={colors.WHITE}>
          <ul>
            <li>
              Hacker resumes (optionally filtered by career interests or
              experience)
            </li>
            <li>Onsite interviews</li>
            <li>Proposing a problem for hackers to solve using your product</li>
            <li>Promoting your company at our career fair </li>
            <li>
              Promotion on our newsletter and social medias (cumulative reach of
              4,000 students)
            </li>
            <li>Product demo</li>
            <li>...and more!</li>
          </ul>
          Detailed perks and pricing can be found our sponsorship packet

        </StyledParagraph>
        <StyledButtonContainer>
        <PrimaryButton
          btnText="View our sponsorship packet"
          btnLink="https://drive.google.com/file/d/17hO3lgm_XYCrxd066B-AXIfq8gBnu8aE/view"
        />
      </StyledButtonContainer>
      </StyledTextContainer>

      <StyledTextSmallerContainer>
        <StyledParagraph color={colors.WHITE}>
         
        Additionally, we provide the flexibility to create 
        your own perk or package. Let us know your ideas and package choice at core@hackbeanpot.com. Our 
        team will work with you to answer any questions 
        and guide you through the next steps in becoming 
        a HackBeanpot 2024 sponsor!

        </StyledParagraph>
        <StyledButtonContainer>
        <PrimaryButton
          btnText="View our information packet"
          btnLink="https://drive.google.com/file/d/17hO3lgm_XYCrxd066B-AXIfq8gBnu8aE/view"
        />
      </StyledButtonContainer>
      </StyledTextSmallerContainer>

    </StyledSponsorPerkSectionContainer>
  );
};

export default SponsorPerk;
