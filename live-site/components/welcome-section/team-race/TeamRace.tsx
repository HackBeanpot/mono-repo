import React from 'react';
import { P } from '../../../../shared-ui/style/typography';
import { TeamProps, TeamRaceProps } from '../../../lib/types';
import {
  StyledRaceSectionContainer,
  StyledRaceContainer,
  StyledRaceContent,
  StyledCoralGroup
} from '../WelcomeSection.styles';
import Team from './Team';
import { StyledTeamHeader } from './Team.styles';
import CoralGroup from '../../../images/coral-group.svg'

const TeamRace: React.FC<TeamRaceProps> = ({teams,isDay}) => {
  const orderTeams = (teams: TeamProps[]): TeamProps[] => {
    return teams.sort(
      (team1: TeamProps, team2: TeamProps) => team2.points - team1.points
    );
  };

  return (
    <>
    <StyledRaceSectionContainer>
    <StyledCoralGroup src = {CoralGroup} />
      <StyledRaceContainer isDay={isDay} teams={[]}>
        <StyledRaceContent>
          <StyledTeamHeader>Treasure Hunt Race</StyledTeamHeader>
          <P>{`Earn points for yourself and your cabin by participating in events! Let’s see which cabin wins the 2024 Treasure Hunt Race!`}</P>
        </StyledRaceContent>
        {orderTeams(teams).map((team: TeamProps, position: number) => (
          <Team
            key={team.index}
            name={team.name}
            points={team.points}
            position={position + 1}
            index={team.index}
          />
        ))}
      </StyledRaceContainer>
      </StyledRaceSectionContainer>
    </>
  );
};

export default TeamRace;
