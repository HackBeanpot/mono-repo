import React from 'react';
import { ToolTipProps } from '../../../lib/types';
import { StyledToolTip, StyledToolTipText } from './ToolTip.styles';

const ToolTip: React.FC<ToolTipProps> = ({ toolTipInfo, team }) => {
  return (
    <StyledToolTip team={team}>
      <StyledToolTipText>
        {toolTipInfo.name}
        <div>{toolTipInfo.year}</div>
        <div>{toolTipInfo.major}</div>
        <div>{toolTipInfo.pronouns}</div>
      </StyledToolTipText>
    </StyledToolTip>
  );
};

export default ToolTip;
