import React, { useState } from 'react';
import { JudgingScheduleProps } from '../../../lib/data';
import { StyledWelcomePerson } from './JudgingSchedule.styles';
import { StyledSecondaryDropdown } from '../../../../shared-ui/components/secondary-dropdown/SecondaryDropdown.styles';
import PrimaryEventButton from '../../../../shared-ui/components/primary-button/PrimaryEventButton';

const JudgingSchedule: React.FC<JudgingScheduleProps> = ({ isPersonJudge, retToJudgingSelection }) => {
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
      <PrimaryEventButton btnText='back' btnOnClick={retToJudgingSelection} />
      <StyledWelcomePerson> Welcome, {isPersonJudge ? 'Judge' : 'Hacker'}! </StyledWelcomePerson>
      <StyledSecondaryDropdown options={options} onChange={handleSelectionChange} />
    </div>
  );
};

export default JudgingSchedule;
