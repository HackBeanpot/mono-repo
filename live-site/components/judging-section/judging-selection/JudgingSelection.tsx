import React from 'react';
import PrimaryButton from '../../../../shared-ui/components/primary-button/PrimaryButton';
import {
  StyledJudgingSelection,
  StyledJudgingWelcomeHeader,
  StyledJudgeButton,
  StyledHackerButton,
  StyledPersonTypeSelectSection
} from './JudgingSelection.styles';

const JudgingSelection: React.FC = () => {
  return (
    <StyledJudgingSelection>
      <StyledJudgingWelcomeHeader>Who are you?</StyledJudgingWelcomeHeader>
      <StyledPersonTypeSelectSection>
        <StyledJudgeButton>
          <PrimaryButton btnText="I am a judge" btnLink="/judging/judges" />
        </StyledJudgeButton>
        <StyledHackerButton>
          <PrimaryButton btnText="I am a hacker" btnLink="/judging/hackers" />
        </StyledHackerButton>
      </StyledPersonTypeSelectSection>
    </StyledJudgingSelection>
  );
};

export default JudgingSelection;
