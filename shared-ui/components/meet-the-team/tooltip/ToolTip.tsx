/**
 * DESIGN: 
 * ToolTip components takes in one list
 * Then in the headshot section --> do state pass in the specific person there
 * 
 * one list: [year: 5th, major: CS, pronouns: she/her]
 */
 import React from 'react';
import { ToolTipInfo } from '../../../lib/types';

 const ToolTip: React.FC<ToolTipInfo> = (toolTipInfo) => {
    

    return (
    <ToolTip>
        <ToolTipYear>
            {toolTipInfo.year}
        </ToolTipYear>
        <ToolTipMajor>
            {toolTipInfo.major}
        </ToolTipYear>
        <ToolTipPronouns>
            {toolTipInfo.pronouns}
        </ToolTipPronoun>

    </ToolTip>
    );
  };
  
  export default ToolTip;