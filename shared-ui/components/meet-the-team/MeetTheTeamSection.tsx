import React from 'react';
import { teamInfo } from '../../lib/data';
import { TeamColumnInfo } from '../../lib/types';
import { H2, fonts } from '../../style/typography';
import { StyledMeetTheTeamSection, StyledSchoolOfFish } from './MeetTheTeamSection.styles';
import TeamColumn from './team-column/TeamColumn';
import MeetAllCore from './meet-all-core/MeetAllCore';
import SchoolOfFish from '../../../live-site/images/schoolOfFish.png';

const MeetTheTeamSection: React.FC = () => {
  const teamColumnsInfo: TeamColumnInfo[] = teamInfo;
  return (
    <div id="team">
      <StyledMeetTheTeamSection>
        <H2 style={{ fontFamily: fonts.berkshireSwash }}>Meet the Team</H2>
        {/* <MeetAllCore /> */}
        <TeamColumn listOfColumnInfo={teamColumnsInfo} />
        <StyledSchoolOfFish src={SchoolOfFish} />
      </StyledMeetTheTeamSection>
    </div>
  );
};

export default MeetTheTeamSection;
