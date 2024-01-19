import React from 'react';
import {
  StyledTextContainer,
  StyledParagraph,
  StyledWhySponsorContainer,
  StyledCenterImage,
  StyledItemContainer,
  StyledFennecFox,
  StyledHeaderLabel,
  StyledTextSpacing,
  HideInMobileView,
  ShowInMobileView
} from './WhySponsorSection.styles';

import { H3 } from '../../../../shared-ui/style/typography';
import { colors } from '../../../../shared-ui/style/colors';
import FennecFox from '../../../../shared-ui/images/fennec-fox.svg';
import { Col, Row } from 'antd';
import Recruitment from '../../../../shared-ui/images/sponsor-us/recruitment.png';
import MarketCompany from '../../../../shared-ui/images/sponsor-us/marketcompany.png';
import { SponsorUsLandingProps } from '../../../lib/types';

const WnySponsor: React.FC<SponsorUsLandingProps> = ({ isDay, setIsDay }) => {
  return (
    <StyledWhySponsorContainer>
      <StyledTextContainer isDay={isDay}>
        <H3 color={colors.WHITE}>
          How can sponsoring HackBeanpot help your company?
        </H3>
      </StyledTextContainer>
    </StyledWhySponsorContainer>
  );
};

export default WnySponsor;
