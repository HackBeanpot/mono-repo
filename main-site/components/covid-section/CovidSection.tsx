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
          In light of the COVID-19 pandemic, HackBeanpot is closely monitoring
          the situation and is fully prepared to go virtual if public health
          dictates (although we really hope to see you all in person!)
          <br />
          <br />
          HackBeanpot is preparing to follow CDC guidelines surrounding room
          capacity, maintaining cleanliness, wearing masks, supplying sanitizer
          stations, and more. Take a look at our policies to learn more.
        </StyledCovidSectionInformation>
      </StyledCovidTitleAndInformation>
    </StyledCovidSectionContainer>
  );
};

export default CovidSection;
