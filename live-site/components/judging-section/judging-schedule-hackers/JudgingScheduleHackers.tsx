import React, { useState } from 'react';
import hackerList from '../../../../judging-algorithm/data/json_outputs/hackerResults.json'
import { HackerEntryType } from '../../../lib/types';
import {
  StyledBackButton,
  StyledBackButtonContainer,
  StyledJudgesDropdownContainer,
  StyledJudgesDropdownWrapper,
  StyledJudgingScheduleSection,
  StyledWelcomePerson
} from '../judging-schedule-welcome/JudgingScheduleWelcome.styles';
import { StyledHackerP, StyledInfoSection } from './JudgingScheduleHackers.styles';

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
        {projectSelected !== 'Select your project' && 
        <StyledInfoSection>
        <StyledHackerP>Time: {hackerSelected.time}</StyledHackerP>
        <StyledHackerP>Judges: {commaSeparatedJudges(hackerSelected.judges)}</StyledHackerP>
        <StyledHackerP>Room: {hackerSelected.room}</StyledHackerP>
        </StyledInfoSection>}
      </StyledJudgingScheduleSection>
    </div>
  );
};

export default JudgingScheduleHackers;
