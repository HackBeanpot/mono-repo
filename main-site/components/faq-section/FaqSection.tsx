import React from 'react';
// import cactus from '../../../shared-ui/images/cactus.svg';
import octopus from '../../../shared-ui/images/octopus.svg';
import LightHouse from '../../../shared-ui/images/LightHouse.svg';
import {
  StyledLightHouse,
  StyledContactUsButton,
  StyledFaqSectionContainer,
  StyledFaqSectionTitle,
  StyledH4,
  StyledOctopus
} from './FaqSection.styles';
import Faq from './faq/Faq';
import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';

const FaqSection: React.FC = () => {
  return (
    <div id="faq">
      <StyledFaqSectionContainer>
        <StyledFaqSectionTitle>FAQ</StyledFaqSectionTitle>
        <StyledOctopus src={octopus} />
        <StyledLightHouse src={LightHouse} />
        <Faq />
        <StyledH4>
          Don't see your question?
          <br />
          <br />
          Reach out to us at core@hackbeanpot.com!
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
