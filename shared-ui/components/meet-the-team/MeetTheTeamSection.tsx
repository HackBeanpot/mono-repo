import React from 'react';
import { teamInfo } from '../../lib/data';
import { TeamColumnInfo } from '../../lib/types';
import { fonts } from '../../style/typography';
import { StyledMeetTheTeamSection, StyledSchoolOfFish } from './MeetTheTeamSection.styles';
import TeamColumn from './team-column/TeamColumn';
import SchoolOfFish from '../../../live-site/images/schoolOfFish.png';
import { StyledHeader } from './MeetTheTeamSection.styles';

const MeetTheTeamSection: React.FC = () => {
  const teamColumnsInfo: TeamColumnInfo[] = teamInfo;
  return (
    <div id="team">
      <StyledMeetTheTeamSection>
        <StyledHeader>Meet the Team</StyledHeader>
        {/* <MeetAllCore /> */}
        <TeamColumn listOfColumnInfo={teamColumnsInfo} />
        <StyledSchoolOfFish src={SchoolOfFish} />
      </StyledMeetTheTeamSection>
    </div>
  );
};

export default MeetTheTeamSection;
