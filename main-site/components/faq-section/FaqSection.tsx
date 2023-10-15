import React from 'react';
import cactus from '../../../shared-ui/images/cactus.svg';
import {
  StyledCactus,
  StyledFaqSectionContainer,
  StyledFaqSectionTitle,
  StyledH4
} from './FaqSection.styles';
import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';
import Faq from './faq/Faq';

const FaqSection: React.FC = () => {
  return (
    <div id="faq">
      <StyledFaqSectionContainer>
        <StyledFaqSectionTitle>FAQ</StyledFaqSectionTitle>
        <StyledCactus src={cactus} />
        <Faq />
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
    </div>
  );
};

export default FaqSection;
