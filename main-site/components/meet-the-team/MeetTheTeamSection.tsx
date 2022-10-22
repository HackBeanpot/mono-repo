import React from 'react';
import { teamInfo } from '../../../shared-ui/lib/data';
import { TeamColumnInfo } from '../../../shared-ui/lib/types';
import { H2 } from '../../../shared-ui/style/typography';
import {
    StyledMeetTheTeamSection, 
    StyledImageContainer
  } from './MeetTheTeamSection.styles';
import TeamColumn from './team-column/TeamColumn';

const MeetTheTeamSection: React.FC = () => {
  const teamColumnsInfo: TeamColumnInfo[] = teamInfo;
  return (
    <StyledMeetTheTeamSection>
    <H2>Meet the Team</H2>
    {/* if desktop --> then do the styled image container, mobile render mobile team column */}
      <StyledImageContainer>
          {teamColumnsInfo.map((teamColumn: TeamColumnInfo) => (
            <TeamColumn columnInfo={teamColumn}/>
          ))}
      </StyledImageContainer>
      {/*for mobile jsut pass in the const teamColumnsInfo*/}
    </StyledMeetTheTeamSection>
  );
};

export default MeetTheTeamSection;
