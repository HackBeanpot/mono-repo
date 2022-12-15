import React from 'react';
import { StyledBackButton, StyledCenteredDropdown, StyledJudgingScheduleSection, StyledWelcomePerson } from '../judging-schedule-welcome/JudgingScheduleWelcome.styles';
import { StyledSecondaryDropdown } from '../../../../shared-ui/components/secondary-dropdown/SecondaryDropdown.styles';
import PrimaryButton from '../../../../shared-ui/components/primary-button/PrimaryButton';
import { JudgingScheduleWelcomeProps } from '../../../lib/types';

const JudgingScheduleWelcome: React.FC<JudgingScheduleWelcomeProps> = ({ schedulePersonType }) => {
  return (
    <div>
      <StyledBackButton> 
        <PrimaryButton btnText='back' btnLink='../' /> 
      </StyledBackButton>
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
