import React from 'react';
import {
  StyledTextContainer,
  StyledParagraph,
  StyledWhySponsorContainer,
  StyledDescriptionContainer,
  StyledCenterImage,
  StyledItemContainer,
  StyledFennecFox,
  StyledHeaderLabel,
  StyledTextSpacing,
  HideInMobileView,
  ShowInMobileView,
  StyledStarfish,
  StyledReasonsContainer,
  StyledReason
} from './WhySponsorSection.styles';

import { H3, H4 } from '../../../../shared-ui/style/typography';
import { colors } from '../../../../shared-ui/style/colors';
import FennecFox from '../../../../shared-ui/images/fennec-fox.svg';
import { Col, Row } from 'antd';
import Recruitment from '../../../../shared-ui/images/sponsor-us/recruitment.png';
import MarketCompany from '../../../../shared-ui/images/sponsor-us/marketcompany.png';
import { SponsorUsLandingProps } from '../../../lib/types';
import OrangeStarfish from '../../../../shared-ui/images/orange-starfish.svg';
import RedStarfish from '../../../../shared-ui/images/red-starfish.svg';
import GreenStarfish from '../../../../shared-ui/images/green-starfish.svg';

const WhySponsor: React.FC<SponsorUsLandingProps> = ({ isDay, setIsDay }) => {
  return (
    <StyledWhySponsorContainer>
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
      </StyledTextContainer>
    </StyledWhySponsorContainer>
  );
};

export default WhySponsor;
