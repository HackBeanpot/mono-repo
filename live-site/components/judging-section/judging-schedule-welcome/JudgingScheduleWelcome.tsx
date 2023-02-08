import React, { useState } from 'react';
import {
  StyledBackButtonContainer,
  StyledBackButton,
  StyledJudgesDropdownContainer,
  StyledJudgesDropdownWrapper,
  StyledJudgingScheduleSection,
  StyledWelcomePerson
} from '../judging-schedule-welcome/JudgingScheduleWelcome.styles';
import { HackerEntryType, JudgeEntryType, JudgingScheduleWelcomeProps } from '../../../lib/types';
import JudgingScheduleTable from '../judging-schedule-table/JudgingScheduleTable';
import judgesList from '../../../../judging-algorithm/judges.json';
import hackersList from '../../../../judging-algorithm/judges.json';

function getJudge() {

}


// abstract this for both hackers and judges
function getColumnHeaders(entryObject: JudgeEntryType | HackerEntryType, tableType: string): string[] {
  const tableHeaders = [];
  const rows = [[]];

  for (const key of Object.keys(entryObject)) {
    if (type of entryObject[key] != "string") {

    }

  }
}

function getRows(): string[][] {
  
}

const JudgingScheduleWelcome: React.FC<JudgingScheduleWelcomeProps> = ({
  schedulePersonType
}) => {
  console.log(judgesList);
  const personOptions = ['Select your name', ...judgesList.map((obj) => (obj["judge"]))]; // inside judges.json => only do the keys
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
        {personSelected != 'Select your name' && <JudgingScheduleTable headers={judgeList} rows={[['lol', 'lol', 'lol', 'lol']]}/>}
      </StyledJudgingScheduleSection>
    </div>
  );
};

export default JudgingScheduleWelcome;
