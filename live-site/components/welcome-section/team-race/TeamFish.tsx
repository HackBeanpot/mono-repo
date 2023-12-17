import React from 'react';
import { TeamFishProps } from '../../../lib/types';
import { StyledTeamFish, StyledTeamFishContainer } from './Team.styles';
import fish1 from '../../../images/fish-red.svg';
import fish2 from '../../../images/fish-pink.svg';
import fish3 from '../../../images/fish-green.svg';
import fish4 from '../../../images/fish-orange.svg';
import fish5 from '../../../images/fish-blue.svg';

const TeamFish: React.FC<TeamCarProps> = ({ points, index }) => {
  const calculateDistance = (): number => {
    return points * 0.5;
  };
  const retrieveFish = (index: number): string => {
    return [fish1, fish2, fish3, fish4, fish5][index];
  };

  return (
    <StyledTeamFishContainer>
      <StyledTeamFish
        src={retrieveFish(index)}
        alt="Team Fish"
        margin={calculateDistance()}
      />
    </StyledTeamFishContainer>
  );
};

export default TeamFish;
