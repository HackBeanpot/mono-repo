import React, { useState } from 'react';
import SecondaryEventButton from '../../../../shared-ui/components/secondary-button/SecondaryEventButton';
import { StyledSelection } from './JudgingSelection.styles';

const JudgingSelection: React.FC = () => {
  const [personIsJudge, setPersonIsJudge] = useState<boolean>(true);

  const handleJudge(): void {
    setPersonIsJudge(true);
  };

  const handleTeam(): void {
    setPersonIsJudge(false);
  };

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
