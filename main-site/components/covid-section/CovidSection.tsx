import React from 'react';
import {
  StyledCovidSectionContainer,
  StyledDesertVan,
  StyledCovidTitleAndInformation,
  StyledCovidSectionInformation,
  StyledTitle
} from './CovidSection.styles';
import DesertVan from '../../../shared-ui/images/desert-van.svg';
import { colors } from '../../../shared-ui/style/colors';

const CovidSection: React.FC = () => {
  return (
    <StyledCovidSectionContainer>
      <StyledDesertVan src={DesertVan} />
      <StyledCovidTitleAndInformation>
        <StyledTitle color={colors.BLACK}>Safety first!</StyledTitle>
        <StyledCovidSectionInformation color={colors.TEXT_BROWN}>
          HackBeanpot is committed to ensuring that hackers feel safe and
          activities comply with local COVID-19 policies.
          <br />
          <br />
          For this reason, we ask that hackers upload proof of vaccination when
          asked after registration and encourage everyone to wear masks during
          the event as it is indoors.
        </StyledCovidSectionInformation>
      </StyledCovidTitleAndInformation>
    </StyledCovidSectionContainer>
  );
};

export default CovidSection;
