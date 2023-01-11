import React from 'react';
import SecondaryButton from '../../../../shared-ui/components/secondary-button/SecondaryButton';
import { StyledJudgingSelection, StyledJudgingWelcomeHeader, StyledJudgeButton, StyledHackerButton, StyledPersonTypeSelectSection } from './JudgingSelection.styles';

const JudgingSelection: React.FC = () => {
  return (
    <StyledJudgingSelection>
      <StyledJudgingWelcomeHeader> Who are you? </StyledJudgingWelcomeHeader>
      <StyledPersonTypeSelectSection>
        <StyledJudgeButton>
          <SecondaryButton isJudgingSecondary={true} btnText='I am a judge' btnLink='/judging/judges' />
        </StyledJudgeButton>
        <StyledHackerButton>
          <SecondaryButton isJudgingSecondary={true} btnText='I am a hacker' btnLink='/judging/hackers' />
        </StyledHackerButton>        
      </StyledPersonTypeSelectSection>
    </StyledJudgingSelection>
  );
};

export default JudgingSelection;
