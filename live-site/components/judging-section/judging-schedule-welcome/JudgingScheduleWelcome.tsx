import React from 'react';
import { StyledBackButtonContainer, StyledBackButton, StyledCenteredDropdown, StyledPersonDropdown, StyledJudgingScheduleSection, StyledWelcomePerson } from '../judging-schedule-welcome/JudgingScheduleWelcome.styles';
import { JudgingScheduleWelcomeProps } from '../../../lib/types';

const JudgingScheduleWelcome: React.FC<JudgingScheduleWelcomeProps> = ({ schedulePersonType }) => {
  const personDropdown = ['Select your name'];

  return (
    <div>
      <StyledBackButtonContainer> 
        <StyledBackButton btnText='back' btnLink='../' /> 
      </StyledBackButtonContainer>
      <StyledJudgingScheduleSection>
        <StyledWelcomePerson> Welcome, {schedulePersonType}! </StyledWelcomePerson>
        <StyledCenteredDropdown>
          <StyledPersonDropdown options={personDropdown} > 
          </StyledPersonDropdown>
        </StyledCenteredDropdown>
      </StyledJudgingScheduleSection>
    </div>
  );
};

export default JudgingScheduleWelcome;
