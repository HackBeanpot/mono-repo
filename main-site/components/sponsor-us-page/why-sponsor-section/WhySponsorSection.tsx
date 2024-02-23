import React from 'react';
import {
  StyledTextContainer,
  StyledParagraph,
  StyledWhySponsorContainer,
  StyledDescriptionContainer,
  StyledHeaderLabel,
  StyledStarfish,
  StyledReasonsContainer,
  StyledReason,
  StyledWhale,
  StyledFishSchool,
  StyledJellyfish
} from './WhySponsorSection.styles';

import { H3 } from '../../../../shared-ui/style/typography';
import { colors } from '../../../../shared-ui/style/colors';
import { SponsorUsLandingProps } from '../../../lib/types';
import OrangeStarfish from '../../../../shared-ui/images/orange-starfish.svg';
import RedStarfish from '../../../../shared-ui/images/red-starfish.svg';
import GreenStarfish from '../../../../shared-ui/images/green-starfish.svg';
import Whale from '../../../../shared-ui/images/whale.svg';
import EventsFishSchool from '../../../../shared-ui/images/school-fish.svg';
import EventsFishSchoolDark from '../../../../shared-ui/images/school-fish-dark.svg';
import Jellyfish from '../../../../shared-ui/images/sponsor-us/sponsor-us-jellyfish.svg';


const WhySponsor: React.FC<SponsorUsLandingProps> = ({ isDay }) => {
  return (
    <StyledWhySponsorContainer>
      <StyledFishSchool src={isDay ? EventsFishSchool : EventsFishSchoolDark}/>
      <StyledWhale src={Whale}/>
      <StyledTextContainer isDay={isDay}>
        <H3 color={colors.WHITE}>
          How can sponsoring HackBeanpot help your company?
        </H3>
        <StyledReasonsContainer>
          <StyledReason>
            <StyledStarfish src={OrangeStarfish} />
            <StyledDescriptionContainer>
              <StyledHeaderLabel>Talent Recruitment</StyledHeaderLabel>
              <StyledParagraph>
                Direct access to high-quality hackers.
              </StyledParagraph>
            </StyledDescriptionContainer>
          </StyledReason>
          <StyledReason>
            <StyledStarfish src={RedStarfish} />
            <StyledDescriptionContainer>
              <StyledHeaderLabel>Brand Exposure</StyledHeaderLabel>
              <StyledParagraph>
                Our social medias have a combined reach of over 4,000 students and
                we can promote your company’s opportunities and product here.
              </StyledParagraph>
            </StyledDescriptionContainer>
          </StyledReason>
          <StyledReason>
            <StyledStarfish src={GreenStarfish} />
            <StyledDescriptionContainer>
              <StyledHeaderLabel>Tax Benefits</StyledHeaderLabel>
              <StyledParagraph>
                We're a 501(c)(3) nonprofit, making all donations deductible.
              </StyledParagraph>
            </StyledDescriptionContainer>
          </StyledReason>
        </StyledReasonsContainer>
        <StyledJellyfish src={Jellyfish}/>
      </StyledTextContainer>
    </StyledWhySponsorContainer>
  );
};

export default WhySponsor;
