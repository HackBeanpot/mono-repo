import React from 'react';
import {
  StyledCovidSectionContainer,
  StyledRotateSectionSubHeader,
  StyledStar
} from './RotateSection.styles';
import Sun from '../../../shared-ui/images/sun.svg';


const RotateSection: React.FC = () => {
  return (
    <>
      <StyledRotateSectionSubHeader>Rotate</StyledRotateSectionSubHeader>
      <StyledCovidSectionContainer>
      <StyledStar src={Sun} /> 
      </StyledCovidSectionContainer>
    </>
  );
};

export default RotateSection;