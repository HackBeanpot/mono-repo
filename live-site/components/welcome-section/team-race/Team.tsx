import React from 'react';
import { TeamProps } from '../../../lib/types';
import {
  StyledTeamContainer,
  StyledTeamName,
  StyledTeamPoint
} from './Team.styles';
import TeamCar from './TeamCar';

const Team: React.FC<TeamProps> = ({ name, points }) => {
  return (
    <StyledTeamContainer>
      <StyledTeamName>{name}</StyledTeamName>
      <TeamCar points={points} />
      <StyledTeamPoint>{points}</StyledTeamPoint>
    </StyledTeamContainer>
  );
};

export default Team;
