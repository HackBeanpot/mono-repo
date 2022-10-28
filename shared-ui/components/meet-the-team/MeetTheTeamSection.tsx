import React from 'react';
import { teamInfo } from '../../lib/data';
import { min } from '../../lib/responsive';
import { TeamColumnInfo } from '../../lib/types';
import { H2 } from '../../style/typography';
import useMatchMedia from 'react-use-match-media';
import {
  StyledMeetTheTeamSection,
  StyledImageContainer
} from './MeetTheTeamSection.styles';
import MobileTeamColumn from './mobile-team-column/MobileTeamColumn';
import TeamColumn from './team-column/TeamColumn';

const MeetTheTeamSection: React.FC = () => {
  const teamColumnsInfo: TeamColumnInfo[] = teamInfo;
  const isDesktop = useMatchMedia(min.tablet);
  return (
    <StyledMeetTheTeamSection>
      <H2>Meet the Team</H2>
      {isDesktop && (
        <StyledImageContainer>
          {teamColumnsInfo.map((teamColumn: TeamColumnInfo) => (
            <TeamColumn columnInfo={teamColumn} />
          ))}
        </StyledImageContainer>
      )}
      {!isDesktop && (<MobileTeamColumn listOfColumnInfo={teamColumnsInfo}/>)}
    </StyledMeetTheTeamSection>
  );
};

export default MeetTheTeamSection;

