import React from 'react';
import {
  StyledTextContainer,
  StyledParagraph,
  StyledWhySponsorContainer
} from './WhySponsor.styles';

import { P, H3, H4 } from '../../../../shared-ui/style/typography';
import { colors } from '../../../../shared-ui/style/colors';
import { StyledFennecFox } from './WhySponsor.styles';
import FennecFox from '../../../../shared-ui/images/fennec-fox.svg';
import { Col, Row } from 'antd';

const WnySponsor: React.FC = () => {
  return (
    <StyledWhySponsorContainer>
      <StyledTextContainer>
        <H3 color={colors.BUTTON_GREEN}>
          How can sponsoring HackBeanpot help your company?
        </H3>
        <StyledParagraph>
          <Row gutter={20}>
            <Col span={12} className="gutter-row">
              <H4 color={colors.WHITE} style={{ marginBottom: '0.5em' }}>
                Recruitment
              </H4>
              <P>
                Scout the next generation of talent here. Sponsoring HackBeanpot
                is a great way to expand and diversify your company’s
                full-time,  internship, co-op program’s applicant pool! 
              </P>
            </Col>
            <Col span={12} className="gutter-row">
              <H4 color={colors.WHITE} style={{ marginBottom: '0.5em' }}>
                Market your company and product
              </H4>
              <P>
                Market your product and receive feedback by sponsoring a
                company-specific prize, hosting a workshop, giving a product
                demo, or mentoring hackers that are eager to hear your advice
                and implement your technologies for their projects.
              </P>
            </Col>
          </Row>
        </StyledParagraph>
      </StyledTextContainer>
      <StyledFennecFox src={FennecFox} />
    </StyledWhySponsorContainer>
  );
};

export default WnySponsor;
