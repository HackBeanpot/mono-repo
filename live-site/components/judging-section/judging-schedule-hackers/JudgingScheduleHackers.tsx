import React from 'react';
import { StyledWelcomePerson } from './JudgingScheduleHackers.styles';
import { StyledSecondaryDropdown } from '../../../../shared-ui/components/secondary-dropdown/SecondaryDropdown.styles';
import PrimaryButton from '../../../../shared-ui/components/primary-button/PrimaryButton';

const JudgingScheduleHackers: React.FC = () => {
  const options: string[] = [];
  options.push('Select your name');
  // todo: import hacker teams list in to this file
  options.push('hacker team names list');

  return (
    <div>
      <PrimaryButton btnText='back' btnLink={'/judging'} />
      <StyledWelcomePerson> Welcome, Hacker! </StyledWelcomePerson>
      <StyledSecondaryDropdown options={options} />
    </div>
  );
};

export default JudgingScheduleHackers;
