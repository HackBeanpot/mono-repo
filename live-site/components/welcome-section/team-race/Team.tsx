import React from 'react';
import { TeamProps } from '../../../lib/types';
import { StyledTeamTextContainer } from '../WelcomeSection.styles';
import {
  StyledCarContainer,
  StyledTeamContainer,
  StyledTeamName,
  StyledTeamPoint,
  StyledTeamPosition
} from './Team.styles';
import TeamCar from './TeamCar';

const Team: React.FC<TeamProps> = ({ name, points, position, index }) => {
  return (
    <StyledTeamContainer>
      <StyledTeamTextContainer>
        <StyledTeamPosition>{position}:</StyledTeamPosition>
        <StyledTeamName> {name}</StyledTeamName>
      </StyledTeamTextContainer>
      <StyledCarContainer>
        <TeamCar points={points} index={index} eventItem={undefined} />
        <StyledTeamPoint>{points} PTS</StyledTeamPoint>
      </StyledCarContainer>
    </StyledTeamContainer>
  );
};

export default Team;
