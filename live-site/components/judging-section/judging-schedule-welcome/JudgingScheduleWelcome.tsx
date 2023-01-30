import React from 'react';
import {
  StyledBackButtonContainer,
  StyledBackButton,
  StyledJudgesDropdownContainer,
  StyledJudgesDropdownWrapper,
  StyledJudgingScheduleSection,
  StyledWelcomePerson
} from '../judging-schedule-welcome/JudgingScheduleWelcome.styles';
import { JudgingScheduleWelcomeProps } from '../../../lib/types';

const JudgingScheduleWelcome: React.FC<JudgingScheduleWelcomeProps> = ({
  schedulePersonType
}) => {
  const personOptions = ['Select your name'];

  return (
    <div>
      <StyledBackButtonContainer>
        <StyledBackButton isSmallPrimary={true} btnText="back" btnLink="../" />
      </StyledBackButtonContainer>
      <StyledJudgingScheduleSection>
        <StyledWelcomePerson>
          Welcome, {schedulePersonType}!
        </StyledWelcomePerson>
        <StyledJudgesDropdownContainer>
          <StyledJudgesDropdownWrapper id="position-filter">
            {personOptions.map((currPerson: string) => (
              <option value={currPerson}>{currPerson}</option>
            ))}
          </StyledJudgesDropdownWrapper>
        </StyledJudgesDropdownContainer>
      </StyledJudgingScheduleSection>
    </div>
  );
};

export default JudgingScheduleWelcome;
