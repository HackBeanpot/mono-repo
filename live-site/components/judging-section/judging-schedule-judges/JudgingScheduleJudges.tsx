import React from 'react';
import { StyledWelcomePerson } from './JudgingScheduleJudges.styles';
import { StyledSecondaryDropdown } from '../../../../shared-ui/components/secondary-dropdown/SecondaryDropdown.styles';
import PrimaryButton from '../../../../shared-ui/components/primary-button/PrimaryButton';

const JudgingScheduleJudges: React.FC = () => {
  const options: string[] = [];
  options.push('Select your name');
  // todo: import judges list in to this file
  options.push('judge names list');

  return (
    <div>
      <PrimaryButton btnText='back' btnLink='../' />
      <StyledWelcomePerson> Welcome, Judge! </StyledWelcomePerson>
      <StyledSecondaryDropdown options={options} />
    </div>
  );
};

export default JudgingScheduleJudges;
