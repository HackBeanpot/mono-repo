import React from 'react';
import cactus from '../../../shared-ui/images/cactus.svg';
import {
  StyledCactus,
  StyledFaqSectionContainer,
  StyledH4
} from './FaqSection.styles';
import { H2 } from '../../../shared-ui/style/typography';
import { FaqSectionData } from '../../lib/data';
import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';
import Faq from './faq/Faq';

const FaqSection: React.FC = () => {
  return (
    <StyledFaqSectionContainer>
      <H2>FAQ</H2>
      <StyledCactus src={cactus} />
      <Faq data={FaqSectionData} />
      <StyledH4>
        Don't see your question?
        <br />
        <br />
        Reach out to us at team@hackbeanpot.com!
      </StyledH4>
      <PrimaryButton
        btnText={'Contact Us'}
        btnLink={'mailto:team@hackbeanpot.com'}
        newTab={true}
      ></PrimaryButton>
    </StyledFaqSectionContainer>
  );
};

export default FaqSection;
