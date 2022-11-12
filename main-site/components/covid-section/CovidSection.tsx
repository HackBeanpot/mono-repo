import React from 'react';
import {
  StyledCovidSectionContainer,
  StyledCovidSectionSubHeader,
  StyledDesertVan
} from './CovidSection.styles';
import DesertVan from '../../../shared-ui/images/desert-van.svg';


const CovidSection: React.FC = () => {
  return (
    <>
      <StyledCovidSectionSubHeader>Drag | Move</StyledCovidSectionSubHeader>
      <StyledCovidSectionContainer>
        <StyledDesertVan src={DesertVan} />
      </StyledCovidSectionContainer>
    </>
  );
};

export default CovidSection;
