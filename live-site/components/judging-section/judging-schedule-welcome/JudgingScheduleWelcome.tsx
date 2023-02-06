import React, { useState } from 'react';
import {
  StyledBackButtonContainer,
  StyledBackButton,
  StyledJudgesDropdownContainer,
  StyledJudgesDropdownWrapper,
  StyledJudgingScheduleSection,
  StyledWelcomePerson
} from '../judging-schedule-welcome/JudgingScheduleWelcome.styles';
import { JudgingScheduleWelcomeProps } from '../../../lib/types';
import JudgingScheduleTable from '../judging-schedule-table/JudgingScheduleTable';

const JudgingScheduleWelcome: React.FC<JudgingScheduleWelcomeProps> = ({
  schedulePersonType
}) => {
  const personOptions = ['Select your name', 'Lisa', 'Surbhs']; // inside judges.json => only do the keys
  const [personSelected, setPersonSelected] =
    useState<string>('Select your name');
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
          <StyledJudgesDropdownWrapper
            id="position-filter"
            onChange={(e): void => {
              setPersonSelected(e.target.value);
            }}
          >
            {/* this -- above-- is a select */}
            {personOptions.map((currPerson: string) => (
              // on change, then we want to set the person differently
              <option value={currPerson} key={currPerson}>
                {currPerson}
              </option>
            ))}
          </StyledJudgesDropdownWrapper>
        </StyledJudgesDropdownContainer>
        {personSelected != 'Select your name' && <JudgingScheduleTable headers={['hi', 'hi', 'hi', 'hi']} rows={[['lol', 'lol', 'lol', 'lol']]}/>}
      </StyledJudgingScheduleSection>
    </div>
  );
};

export default JudgingScheduleWelcome;
