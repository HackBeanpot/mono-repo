import React from 'react';
import SecondaryButton from '../../../../shared-ui/components/secondary-button/SecondaryButton';
import { StyledJudgingSelection, StyledWhoAreYou } from './JudgingSelection.styles';

const JudgingSelection: React.FC = () => {
  
  return (
    <StyledJudgingSelection>
      <StyledWhoAreYou> Who are you? </StyledWhoAreYou>
      <span>
        <SecondaryButton btnText='I am a judge' btnLink='judges' />
        <SecondaryButton btnText='I am a hacker' btnLink='hackers' />
      </span>
    </StyledJudgingSelection>
  );
};

export default JudgingSelection;
