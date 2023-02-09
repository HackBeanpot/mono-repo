import React, { useState } from 'react';
import {
  StyledBackButtonContainer,
  StyledBackButton,
  StyledJudgesDropdownContainer,
  StyledJudgesDropdownWrapper,
  StyledJudgingScheduleSection,
  StyledWelcomePerson,
  StyledP
} from '../judging-schedule-welcome/JudgingScheduleWelcome.styles';
import { HackerEntryType, JudgeEntryType, JudgeOutputType, JudgingScheduleWelcomeProps } from '../../../lib/types';
import JudgingScheduleTable from '../judging-schedule-table/JudgingScheduleTable';
import judgesList from '../../../../judging-algorithm/judges.json';
import hackersList from '../../../../judging-algorithm/judges.json';




function getRowsAndRoomForJudge(curJudge: string, headers: string[]): JudgeOutputType {
  const judgeData = judgesList.filter((judge: JudgeEntryType) => judge.judge === curJudge)
  const rows = [];

  for (const project of judgeData[0].projects) {
    const curRow = [];
    for (const key of headers) {
      curRow.push(project[key]);
    }
    rows.push(curRow);
  }
  return {rows: rows, room: judgeData[0].room};
}

const JudgingScheduleWelcome: React.FC<JudgingScheduleWelcomeProps> = ({
  schedulePersonType
}) => {

  const personOptions = ['Select your name', ...judgesList.map((obj) => (obj["judge"]))]; // inside judges.json => only do the keys
  const headers = ["time", "project"];
  const [curRows, setCurRows] =
  useState<string[][]>([[]]);
  const [room, setRoom] =
  useState<string>('');
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
              setCurRows(getRowsAndRoomForJudge(e.target.value, headers).rows)
              setRoom(getRowsAndRoomForJudge(e.target.value, headers).room)
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
        {personSelected != 'Select your name' && <StyledP>{room}</StyledP> }
        {personSelected != 'Select your name' && <JudgingScheduleTable headers={headers} rows={curRows}/>}
      </StyledJudgingScheduleSection>
    </div>
  );
};

export default JudgingScheduleWelcome;
