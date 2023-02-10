import React, { useState } from 'react';
import hackerList from '../../../../judging-algorithm/hackers.json';
import { HackerEntryType } from '../../../lib/types';
import {
  StyledBackButton,
  StyledBackButtonContainer,
  StyledJudgesDropdownContainer,
  StyledJudgesDropdownWrapper,
  StyledJudgingScheduleSection,
  StyledP,
  StyledWelcomePerson
} from '../judging-schedule-welcome/JudgingScheduleWelcome.styles';

const JudgingScheduleHackers: React.FC = () => {
  const projectOptions = [
    'Select your project',
    ...hackerList.map((obj: HackerEntryType) => obj['project'])
  ];
  const [projectSelected, setProjectSelected] = useState<string>(
    'Select your project'
  );

  const [hackerSelected, setHackerSelected] = useState<HackEntryType>(null);

  function getProjectData(projectName: string): HackerEntryType {
    const hackerObj = hackerList.filter(
      (hackerObj: HackerEntryType) => hackerObj.project === projectName
    );
    return hackerObj[0];
  }

  function commaSeparatedJudges(judgeList: string[]): string[] {
    for (let i = 0; i < judgeList.length; i++) {
      if (i != judgeList.length-1 && !judgeList[i].includes(',')) {
        judgeList[i] = judgeList[i].concat(', ');
      }
    }
    return judgeList;
  }

  return (
    <div>
      <StyledBackButtonContainer>
        <StyledBackButton isSmallPrimary={true} btnText="back" btnLink="../" />
      </StyledBackButtonContainer>
      <StyledJudgingScheduleSection>
        <StyledWelcomePerson>Welcome, Hacker!</StyledWelcomePerson>
        <StyledJudgesDropdownContainer>
          <StyledJudgesDropdownWrapper
            id="position-filter"
            onChange={(e): void => {
              setProjectSelected(e.target.value);
              setHackerSelected(getProjectData(e.target.value));
            }}
          >
            {projectOptions.map((curProject: string) => (
              <option value={curProject} key={curProject}>
                {curProject}
              </option>
            ))}
          </StyledJudgesDropdownWrapper>
        </StyledJudgesDropdownContainer>
        {projectSelected != 'Select your project' && 
        <>
        <StyledP>{hackerSelected.time}</StyledP>
        <StyledP>{commaSeparatedJudges(hackerSelected.judges)}</StyledP>
        <StyledP>{hackerSelected.room}</StyledP>
        </>}
      </StyledJudgingScheduleSection>
    </div>
  );
};

export default JudgingScheduleHackers;
