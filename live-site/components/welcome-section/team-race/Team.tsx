import React from 'react';
import { TeamProps } from '../../../lib/types';
import {
  StyledTeamContainer,
  StyledTeamName,
  StyledTeamPoint,
  StyledTeamPosition
} from './Team.styles';
import TeamCar from './TeamCar';

const Team: React.FC<TeamProps> = ({ name, points, position, index }) => {
  return (
    <StyledTeamContainer>
      <StyledTeamPosition>{position}:</StyledTeamPosition>
      <StyledTeamName> {name}</StyledTeamName>
      <TeamCar points={points} index={index} eventItem={undefined} />
      <StyledTeamPoint>{points} PTS</StyledTeamPoint>
    </StyledTeamContainer>
  );
};

export default Team;
