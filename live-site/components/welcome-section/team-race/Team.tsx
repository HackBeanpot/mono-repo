import React from 'react';
import { TeamProps } from '../../../lib/types';
import { StyledTeamTextContainer } from '../WelcomeSection.styles';
import {
  StyledFishContainer,
  StyledTeamContainer,
  StyledTeamName,
  StyledTeamPoint,
  StyledTeamPosition
} from './Team.styles';
import TeamFish from './TeamFish';

const Team: React.FC<TeamProps> = ({ name, points, position, index }) => {
  return (
    <StyledTeamContainer>
      <StyledTeamTextContainer>
        <StyledTeamPosition>{position}:</StyledTeamPosition>
        <StyledTeamName> {name}</StyledTeamName>
      </StyledTeamTextContainer>
      <StyledFishContainer>
        <TeamFish points={points} index={index} />
        <StyledTeamPoint>{points} PTS</StyledTeamPoint>
      </StyledFishContainer>
    </StyledTeamContainer>
  );
};

export default Team;
