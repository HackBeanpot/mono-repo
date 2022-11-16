import React from 'react';
import {
  StyledCovidSectionContainer,
  StyledCovidSectionSubHeader,
  StyledDesertVan
} from './CovidSection.styles';
import DesertVan from '../../../shared-ui/images/desert-van.svg';

// 1. Have to van drive to the right
// 2. Enable to the user to the van
// 3. Make the driving realistic

const CovidSection: React.FC = () => {
  return (
    <> 
      <StyledCovidSectionSubHeader>Move | Drag</StyledCovidSectionSubHeader>
      <StyledCovidSectionContainer>
        <StyledDesertVan src={DesertVan} />
      </StyledCovidSectionContainer>
    </>
  );
};

export default CovidSection;
