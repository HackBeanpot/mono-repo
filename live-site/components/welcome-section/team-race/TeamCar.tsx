import React from 'react';
import { TeamCarProps } from '../../../lib/types';
import { StyledTeamCar, StyledTeamCarContainer } from './Team.styles';
import car from '/home/dhivas/mono-repo/shared-ui/images/van.svg';

const TeamCar: React.FC<TeamCarProps> = ({ points }) => {
  const calculateDistance = (): number => {
    return points * 0.14;
  };
  return (
    <StyledTeamCarContainer>
      <StyledTeamCar src={car} alt="Team Car" margin={calculateDistance()} />
    </StyledTeamCarContainer>
  );
};

export default TeamCar;
