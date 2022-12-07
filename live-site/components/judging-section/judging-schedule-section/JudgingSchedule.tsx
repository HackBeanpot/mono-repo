import React, { useState } from 'react';
import { JudgingScheduleProps } from '../../../lib/data';
import { StyledWelcomePerson } from './JudgingSchedule.styles';
import PrimaryButton from '../../../../shared-ui/components/primary-button/PrimaryButton';
import { StyledSecondaryDropdown } from '../../../../shared-ui/components/secondary-dropdown/SecondaryDropdown.styles';

const JudgingSchedule: React.FC<JudgingScheduleProps> = ({ isPersonJudge }) => {
  const [selectedOption, setSelectedOption] = useState<string>('Select your name');
  const options = [selectedOption];
  // todo: import judge and hacker lists in to this file
  if (isPersonJudge) {
    options.push('judge names list');
  } else {
    options.push('hacking team names list');
  }

  const handleSelectionChange = (option: string | null): void => {
    if (option) {
      setSelectedOption(option);
    }
  };

  return (
    <div>
      <PrimaryButton btnText='back' btnLink='#judging' />
      <StyledWelcomePerson> Welcome, {isPersonJudge ? 'Judge' : 'Hacker'}! </StyledWelcomePerson>
      <StyledSecondaryDropdown options={options} onChange={handleSelectionChange} />
    </div>
  );
};

export default JudgingSchedule;
