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
function getColumnHeaders(listOfEntries: JudgeEntryType[] | HackerEntryType[], tableType: string): string[] {
  const tableHeaders = [];
  const rows = [[]];

  for (let i = 0; i < listOfEntries.length; i++) {
    const entry = listOfEntries[i];
    const curRow = []
    let deletecurRow = false;
    for (const key of Object.keys(entry)) {
      if (typeof entry[key] != "string") { // value is an array
        if (typeof entry[key][0] == "string") { 
          // not sure what's supposed to happen for hackers


        } else { // first value of array is an object
          const subList = entry[key];
          for (let j = 0; j < subList.length; j++) {
            const curNewRow = [...curRow];
            for (const subKey of subList[j]) {
              if (j==0) {
                tableHeaders.push(subKey);
              }
              curNewRow.push(subList[j][subKey]);
              
            }
            rows.push(curNewRow);
            
          }
          curRow = []; // only works if there's nothing after the objects
        }
  
  
      } else {
        if (i==0) {
          tableHeaders.push(key);
        }
        curRow.push(entry[key]);
      }
  
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
