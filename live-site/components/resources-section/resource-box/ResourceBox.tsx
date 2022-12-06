import React from 'react';
import { ResourceBoxProps } from '../../../lib/types';
import { StyledLabel, StyledResourceBox } from './ResourceBox.styles';

const ResourceBox: React.FC<ResourceBoxProps> = ({ label }) => {
  return (
    <StyledResourceBox href="https://www.google.com/" target="_blank">
      <StyledLabel>{label}</StyledLabel>
    </StyledResourceBox>
  );
};

export default ResourceBox;
