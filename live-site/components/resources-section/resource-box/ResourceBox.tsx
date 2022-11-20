import React from 'react';
import { ResourceBoxProps } from '../../../lib/types';
import { StyledLabel, StyledResourceBox } from './ResourceBox.styles';

const ResourceBox: React.FC<ResourceBoxProps> = ({ label }) => {
  return (
<StyledResourceBox>
  <StyledLabel>
    {label}
    </StyledLabel>

  </StyledResourceBox>
  );
  
};

export default ResourceBox;
