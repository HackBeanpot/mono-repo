import React from 'react';
import { ResourceBoxProps } from '../../../lib/types';
import { StyledBottomLeftStarfish, StyledLabel, StyledNewTabIcon, StyledPurpleStarfish, StyledRedStarfish, StyledResourceBox } from './ResourceBox.styles';
import NewTabIcon from '../../../images/newTabIcon.png';
import OrangeStarfish from '../../../images/orangeStarfish.png';
import PurpleStarfish from '../../../images/purpleStarfish.png';
import GreenStarfish from '../../../images/greenStarfish.png';
import RedStarfish from '../../../images/redStarfish.png';

const ResourceBox: React.FC<ResourceBoxProps> = ({ label, link }) => {
  return (
    <StyledResourceBox href={link} target="_blank">
      <StyledLabel>{label}</StyledLabel>
      <StyledNewTabIcon src={NewTabIcon} />
      {label === 'Beginner Resource Guide' && (
        <StyledBottomLeftStarfish src={OrangeStarfish} />
      )}
      {label === 'Project Guide' && (
        <StyledPurpleStarfish src={PurpleStarfish} />
      )}
      {label === 'Project Demo Guide' && (
        <StyledBottomLeftStarfish src={GreenStarfish} />
      )}
      {label === 'Judging Process Guide' && (
        <StyledRedStarfish src={RedStarfish} />
      )}
    </StyledResourceBox>
  );
};

export default ResourceBox;
