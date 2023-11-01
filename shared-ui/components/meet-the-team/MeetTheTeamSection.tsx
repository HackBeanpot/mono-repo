import React from 'react';
import { teamInfo } from '../../lib/data';
import { TeamColumnInfo } from '../../lib/types';
import { H2 } from '../../style/typography';
import { StyledMeetTheTeamSection } from './MeetTheTeamSection.styles';
import TeamColumn from './team-column/TeamColumn';
import MeetAllCore from './meet-all-core/MeetAllCore';

const MeetTheTeamSection: React.FC = () => {
  const teamColumnsInfo: TeamColumnInfo[] = teamInfo;
  return (
    <div id="team">
      <StyledMeetTheTeamSection>
        <H2>Meet the Team</H2>
        {/* <MeetAllCore /> */}
        <TeamColumn listOfColumnInfo={teamColumnsInfo} />
      </StyledMeetTheTeamSection>
    </div>
  );
};

export default MeetTheTeamSection;
