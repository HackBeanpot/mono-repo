import React from 'react';
import { StyledBackButtonContainer, StyledBackButton, StyledCenteredDropdown, StyledJudgingScheduleSection, StyledWelcomePerson } from '../judging-schedule-welcome/JudgingScheduleWelcome.styles';
import { StyledSecondaryDropdown } from '../../../../shared-ui/components/secondary-dropdown/SecondaryDropdown.styles';
import { JudgingScheduleWelcomeProps } from '../../../lib/types';

const JudgingScheduleWelcome: React.FC<JudgingScheduleWelcomeProps> = ({ schedulePersonType }) => {
  return (
    <div>
      <StyledBackButtonContainer> 
        <StyledBackButton btnText='back' btnLink='../' /> 
      </StyledBackButtonContainer>
      <StyledJudgingScheduleSection>
        <StyledWelcomePerson> Welcome, {schedulePersonType}! </StyledWelcomePerson>
        <StyledCenteredDropdown>
          <StyledSecondaryDropdown> 
              <option value="select your name">Select your name</option>
          </StyledSecondaryDropdown>
        </StyledCenteredDropdown>
      </StyledJudgingScheduleSection>
    </div>
  );
};

export default JudgingScheduleWelcome;
