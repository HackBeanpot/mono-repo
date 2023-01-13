import React from 'react';
import { TeamProps, TeamRaceProps } from '../../../lib/types';
import { StyledRaceContainer } from '../WelcomeSection.styles';
import Team from './Team';

const TeamRace: React.FC<TeamRaceProps> = ({ teams }) => {
  const orderTeams = (teams: TeamProps[]): TeamProps[] => {
    return teams.sort((team1: TeamProps, team2: TeamProps) =>
      team1.points > team2.points ? 1 : -1
    );
  };

  return (
    <StyledRaceContainer>
      {orderTeams(teams).map((team: TeamProps) => (
        <Team name={team.name} points={team.points} />
      ))}
    </StyledRaceContainer>
  );
};

export default TeamRace;
