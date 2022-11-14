/**
 * DESIGN: 
 * ToolTip components takes in one list
 * Then in the headshot section --> do state pass in the specific person there
 * 
 * one list: [year: 5th, major: CS, pronouns: she/her]
 */
import React from 'react';
import { ToolTipProps } from '../../../lib/types';
import { StyledToolTip, StyledToolTipText, StyledToolTipYear, StyledToolTipMajor, StyledToolTipPronouns } from './ToolTip.styles';

 const ToolTip: React.FC<ToolTipProps> = ({toolTipInfo, team}) => {
    return (
    <StyledToolTip team={team}>
        <StyledToolTipText>
        {toolTipInfo.name}
        <StyledToolTipYear>
            {toolTipInfo.year}
        </StyledToolTipYear>
        <StyledToolTipMajor>
            {toolTipInfo.major}
        </StyledToolTipMajor>
        <StyledToolTipPronouns>
            {toolTipInfo.pronouns}
        </StyledToolTipPronouns>
        </StyledToolTipText>

    </StyledToolTip>
    );
  };
  
  export default ToolTip;