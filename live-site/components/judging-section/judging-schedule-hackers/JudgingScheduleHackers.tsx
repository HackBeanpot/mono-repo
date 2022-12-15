import React from 'react';
import { StyledJudgingScheduleSection, StyledWelcomePerson } from '../JudgingSchedule.styles';
import { StyledSecondaryDropdown } from '../../../../shared-ui/components/secondary-dropdown/SecondaryDropdown.styles';
import PrimaryButton from '../../../../shared-ui/components/primary-button/PrimaryButton';

const JudgingScheduleHackers: React.FC = () => {
  const options: string[] = [];
  options.push('Select your name');
  // todo: import hacker teams list in to this file
  options.push('hacker team names list');

  return (
    <StyledJudgingScheduleSection>
      <PrimaryButton btnText='back' btnLink='../' />
      <StyledWelcomePerson> Welcome, Hacker! </StyledWelcomePerson>
      <StyledSecondaryDropdown options={options} />
    </StyledJudgingScheduleSection>
  );
};

export default JudgingScheduleHackers;
