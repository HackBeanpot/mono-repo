import React from 'react';
import {
  StyledTextContainer,
  StyledParagraph,
  StyledSponsorPerkSectionContainer,
  StyledExplorer,
  StyledCamel
} from './SponsorPerk.styles';
import CamelBody from '../../../../shared-ui/images/CamelBody.svg';
import { H3 } from '../../../../shared-ui/style/typography';
import { colors } from '../../../../shared-ui/style/colors';
import Explorer from '../../../../shared-ui/images/explorer.svg';
import { min } from '../../../../shared-ui/lib/responsive';
import useMatchMedia from 'react-use-match-media';

const SponsorPerk: React.FC = () => {
  const isDesktop = useMatchMedia(min.tablet);
  return (
    <StyledSponsorPerkSectionContainer>
      <StyledExplorer src={Explorer} />
      <StyledTextContainer>
        <H3 color={colors.BUTTON_GREEN}>Sponsorship perks include:</H3>
        <StyledParagraph color={isDesktop ? colors.WHITE : colors.TEXT_BROWN}>
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
          </ul>
          Additionally, we provide the flexibility to create your own perk or
          package. Let us know your ideas and package choice at{' '}
          <u>core@hackbeanpot.com</u>. Our team will work with you to answer any
          questions and guide you through the next steps in becoming a
          HackBeanpot 2024 sponsor!
        </StyledParagraph>
      </StyledTextContainer>
      <StyledCamel src={CamelBody} />
    </StyledSponsorPerkSectionContainer>
  );
};

export default SponsorPerk;
