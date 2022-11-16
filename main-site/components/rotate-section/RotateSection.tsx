import React from 'react';
import {
  StyledCovidSectionContainer,
  StyledRotateSectionSubHeader,
  StyledStar
} from './RotateSection.styles';
import Sun from '../../../shared-ui/images/sun.svg';

// 1. Setup animations file
// 2. create rotate object 
// 3. Use animate, rotate, and transition to make the sun rotate forever
// 4. Implement animation on the sun in the landing page

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