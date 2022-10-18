import React from 'react';
import { teamInfo } from '../../../shared-ui/lib/data';
import { TeamColumnInfo } from '../../../shared-ui/lib/types';
import {
    StyledMeetTheTeamSection, 
    StyledImageContainer, 
    StyledH3
  } from './MeetTheTeamSection.styles';
import TeamColumn from './team-column/TeamColumn';

const MeetTheTeamSection: React.FC = () => {
  const teamColumnsInfo: TeamColumnInfo[] = teamInfo;
  return (
    <StyledMeetTheTeamSection>
    <StyledH3>Meet the Team</StyledH3>
      <StyledImageContainer>
          {teamColumnsInfo.map((teamColumn: TeamColumnInfo) => (
            <TeamColumn columnInfo={teamColumn}/>
          ))}
      </StyledImageContainer>
    </StyledMeetTheTeamSection>
  );
};

export default MeetTheTeamSection;
