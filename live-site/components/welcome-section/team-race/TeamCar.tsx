import React from 'react';
import { TeamCarProps } from '../../../lib/types';
import { StyledTeamCar, StyledTeamCarContainer } from './Team.styles';
import car1 from '../../../images/van-dark-green.svg';
import car2 from '../../../images/van-orange.svg';
import car3 from '../../../images/van-light-green.svg';
import car4 from '../../../images/van-blue.svg';
import car5 from '../../../images/van-purple.svg';

const TeamCar: React.FC<TeamCarProps> = ({ points, index }) => {
  const calculateDistance = (): number => {
    return points * 0.8;
  };
  const retrieveCar = (index: number): string => {
    return [car1, car2, car3, car4, car5][index];
  };

  return (
    <StyledTeamCarContainer>
      <StyledTeamCar
        src={retrieveCar(index)}
        alt="Team Car"
        margin={calculateDistance()}
      />
    </StyledTeamCarContainer>
  );
};

export default TeamCar;
