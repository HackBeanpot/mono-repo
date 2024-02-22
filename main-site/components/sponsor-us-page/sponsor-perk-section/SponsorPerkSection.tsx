import React from 'react';
import {
  StyledTextContainer,
  StyledParagraph,
  StyledSponsorPerkSectionContainer,
  StyledSponsorPacketButtonContainer,
  StyledInfoPacketButtonContainer,
  StyledFlag,
  StyledTreasureChest,
  StyledTextContainerGreen,
  StyledFlexPerksContainer
} from './SponsorPerkSection.styles';
import TreasureChest from '../../../../shared-ui/images/treasureChestSea.png';
import { H3 } from '../../../../shared-ui/style/typography';
import { colors } from '../../../../shared-ui/style/colors';
import Flag from '../../../../shared-ui/images/PirateFlagLonger.svg';

const SponsorPerk: React.FC = () => {
  return (
    <StyledSponsorPerkSectionContainer>
      <StyledFlag src={Flag} />
      <StyledTreasureChest src={TreasureChest} />
      <StyledTextContainer>
        <H3 color={colors.WHITE}>Sponsorship perks include:</H3>
        <StyledParagraph color={colors.WHITE}>
          <ul>
            <li>
              Hacker resumes (optionally filtered by career interests or
              experience)
            </li>
            <li>Sponsoring a company specific prize </li>
            <li>Onsite interviews</li>
            <li>A spot in our career fair</li>
            <li>
              Promotion on our newsletter and social medias (cumulative reach of
              4,000 students)
            </li>
            <li>Product demo</li>
            <li>...and more!</li>
          </ul>
          <StyledFlexPerksContainer>
            Detailed perks and pricing can be found in our sponsorship packet.
            </StyledFlexPerksContainer>
            <StyledSponsorPacketButtonContainer
              btnText="View our sponsorship packet"
              btnLink="https://drive.google.com/file/d/17hO3lgm_XYCrxd066B-AXIfq8gBnu8aE/view"
              isSponsorPacketButton={true}
              newTab
            />
        </StyledParagraph>
      </StyledTextContainer>
      <br />
      <br />
      <StyledTextContainerGreen>
        <StyledParagraph>
          <StyledFlexPerksContainer>
            Additionally, we provide the flexibility to create your own perk or
            package. Let us know your ideas and package choice at{' '}
            <u>core@hackbeanpot.com</u>. Our team will work with you to answer
            any questions and guide you through the next steps in becoming a
            HackBeanpot 2024 sponsor!
            </StyledFlexPerksContainer>
            <StyledInfoPacketButtonContainer
              btnText="View our information packet"
              btnLink="https://drive.google.com/file/d/1x0OxOq_Ce-6RqzlhGkP5YxPNwrx0RdMW/view"
              isInfoPacketButton={true}
              newTab
            />
        </StyledParagraph>
      </StyledTextContainerGreen>
    </StyledSponsorPerkSectionContainer>
  );
};


export default SponsorPerk;

