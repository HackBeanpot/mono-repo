import React from 'react';
import SecondaryButtonWhiteText from '../../../../shared-ui/components/secondary-button/SecondaryButtonWhiteText';
import { StyledJudgingSelection, StyledJudgingWelcomeHeader, StyledJudgeButton, StyledHackerButton, StyledPersonTypeSelectSection } from './JudgingSelection.styles';

const JudgingSelection: React.FC = () => {
  return (
    <StyledJudgingSelection>
      <StyledJudgingWelcomeHeader> Who are you? </StyledJudgingWelcomeHeader>
      <StyledPersonTypeSelectSection>
        <StyledJudgeButton>
          <SecondaryButtonWhiteText btnText='I am a judge' btnLink='/judging/judges' />
        </StyledJudgeButton>
        <StyledHackerButton>
          <SecondaryButtonWhiteText btnText='I am a hacker' btnLink='/judging/hackers' />
        </StyledHackerButton>        
      </StyledPersonTypeSelectSection>
    </StyledJudgingSelection>
  );
};

export default JudgingSelection;
