import React from 'react';
import {
  StyledTextContainer,
  StyledParagraph,
  StyledWhySponsorContainer,
  StyledCenterImage,
  StyledItemContainer,
  StyledFennecFox,
  StyledHeaderLabel,
  StyledTextSpacing
} from './WhySponsorSection.styles';

import { H3 } from '../../../../shared-ui/style/typography';
import { colors } from '../../../../shared-ui/style/colors';
import FennecFox from '../../../../shared-ui/images/fennec-fox.svg';
import { Col, Row } from 'antd';
import Recruitment from '../../../../shared-ui/images/sponsor-us/recruitment.png';
import MarketCompany from '../../../../shared-ui/images/sponsor-us/marketcompany.png';

const WnySponsor: React.FC = () => {
  return (
    <StyledWhySponsorContainer>
      <StyledTextContainer>
        <H3 color={colors.BUTTON_GREEN}>
          How can sponsoring HackBeanpot help your company?
        </H3>
        <StyledParagraph>
          <Row gutter={35}>
            <Col span={12} className="gutter-row">
              <StyledHeaderLabel>Recruitment</StyledHeaderLabel>
              <StyledTextSpacing>
                Scout the next generation of talent here. Sponsoring HackBeanpot
                is a great way to expand and diversify your company’s
                full-time,  internship, co-op program’s applicant pool! 
                <br /> <br /> <br />
              </StyledTextSpacing>
              <StyledItemContainer>
                <StyledCenterImage src={Recruitment} />
              </StyledItemContainer>
            </Col>
            <Col span={12} className="gutter-row">
              <StyledHeaderLabel>
                Market your company and product
              </StyledHeaderLabel>
              <StyledTextSpacing>
                Market your product and receive feedback by sponsoring a
                company-specific prize, hosting a workshop, giving a product
                demo, or mentoring hackers that are eager to hear your advice
                and implement your technologies for their projects. <br />
                <br />
              </StyledTextSpacing>
              <StyledItemContainer>
                <StyledCenterImage src={MarketCompany} />
              </StyledItemContainer>
            </Col>
          </Row>
        </StyledParagraph>
      </StyledTextContainer>
      <StyledFennecFox src={FennecFox} />
    </StyledWhySponsorContainer>
  );
};

export default WnySponsor;
