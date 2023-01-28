import React from 'react';
import useMatchMedia from 'react-use-match-media';
import { min } from '../../../lib/responsive';
import { MobileTeamColumnProps, TeamColumnInfo } from '../../../lib/types';
import { StyledImageContainer } from '../MeetTheTeamSection.styles';
import DesktopTeamColumn from './desktop-team-column/DesktopTeamColumn';
import MobileTeamColumn from './mobile-team-column/MobileTeamColumn';

const TeamColumn: React.FC<MobileTeamColumnProps> = ({ listOfColumnInfo }) => {
  const isDesktop = useMatchMedia(min.tablet);
  return (
    <div id="teamColumnInfo">
      {isDesktop && (
        <StyledImageContainer>
          {listOfColumnInfo.map((teamColumn: TeamColumnInfo) => (
            <DesktopTeamColumn
              columnInfo={teamColumn}
              key={teamColumn.teamLabel}
            />
          ))}
        </StyledImageContainer>
      )}
      {!isDesktop && <MobileTeamColumn listOfColumnInfo={listOfColumnInfo} />}
    </div>
  );
};

export default TeamColumn;
