import React from 'react';
import { ResourceBoxProps } from '../../../lib/types';
import { StyledLabel, StyledResourceBox } from './ResourceBox.styles';
import beginnerResourceGuideImage from '../../../images/beginnerResourceGuide.png';

const ResourceBox: React.FC<ResourceBoxProps> = ({ label, link, image }) => {
  return (
    <a href={link} target="_blank">
      <StyledResourceBox src={image} />
    </a>
  );
};

export default ResourceBox;
