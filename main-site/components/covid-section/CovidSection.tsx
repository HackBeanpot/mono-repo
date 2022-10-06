import React from 'react';
import {
  StyledCovidSectionContainer,
  StyledDesertVan,
  StyledCovidInformationAndButton,
  StyledCovidPolicyButtonContainer,
  StyledCovidSectionInformation,
  StyledTitle
} from './CovidSection.styles';
import DesertVan from '../../../shared-ui/images/desert-van.svg';
import { colors } from '../../../shared-ui/style/colors';
import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';

const CovidSection: React.FC = () => {
  return (
    <StyledCovidSectionContainer>
      <StyledDesertVan src={DesertVan} />
      <StyledCovidInformationAndButton>
        <StyledTitle color={colors.BLACK}>Safety first!</StyledTitle>
        <StyledCovidSectionInformation color={colors.TEXT_BROWN}>
          In light of the COVID-19 pandemic, HackBeanpot is closely monitoring
          the situation and is fully prepared to go virtual if public health
          dictates (although we really hope to see you all in person!)
          <br />
          <br />
          HackBeanpot is preparing to follow CDC guidelines surrounding room
          capacity, maintaining cleanliness, wearing masks, supplying sanitizer
          stations, and more. Take a look at our policies to learn more.
        </StyledCovidSectionInformation>
        <StyledCovidPolicyButtonContainer>
          <PrimaryButton
            btnText="Our COVID Policies"
            btnLink="www.google.com"
            newTab
          />
        </StyledCovidPolicyButtonContainer>
      </StyledCovidInformationAndButton>
    </StyledCovidSectionContainer>
  );
};

export default CovidSection;
