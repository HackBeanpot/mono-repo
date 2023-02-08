import React from 'react';
import { ResourceBoxProps } from '../../../lib/types';
import { StyledLabel, StyledResourceBox } from './ResourceBox.styles';

const ResourceBox: React.FC<ResourceBoxProps> = ({ label, link }) => {
  return (
    <StyledResourceBox href={link} target="_blank">
      <StyledLabel>{label}</StyledLabel>
    </StyledResourceBox>
  );
};

export default ResourceBox;
