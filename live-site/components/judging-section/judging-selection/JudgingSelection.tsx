import React from 'react';
import { StyledJudgingSelection, StyledJudgingWelcomeHeader, StyledPersonTypeSelectButton, StyledPersonTypeSelectSection } from './JudgingSelection.styles';

const JudgingSelection: React.FC = () => {
  return (
    <StyledJudgingSelection>
      <StyledJudgingWelcomeHeader> Who are you? </StyledJudgingWelcomeHeader>
      <StyledPersonTypeSelectSection>
        <StyledPersonTypeSelectButton btnText='I am a judge' btnLink='/judging/judges' />
        <StyledPersonTypeSelectButton btnText='I am a hacker' btnLink='/judging/hackers' />
      </StyledPersonTypeSelectSection>
    </StyledJudgingSelection>
  );
};

export default JudgingSelection;
