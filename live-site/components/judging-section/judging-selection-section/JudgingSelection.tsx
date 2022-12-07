import React from 'react';
import SecondaryEventButton from '../../../../shared-ui/components/secondary-button/SecondaryEventButton';
import { JudgingSelectionProps } from '../../../lib/data';
import { StyledSelection } from './JudgingSelection.styles';

const JudgingSelection: React.FC<JudgingSelectionProps> = (handleJudge, handleTeam) => {
  
  return (
    <div>
      <StyledSelection> Who are you? </StyledSelection>
      <span>
        <SecondaryEventButton btnText='I am a judge' btnOnClick={handleJudge} />
        <SecondaryEventButton btnText='I am a hacker' btnOnClick={handleTeam} />
      </span>
    </div>
  );
};

export default JudgingSelection;
