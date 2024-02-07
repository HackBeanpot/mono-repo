import React from 'react';
import StarfishOrange from '../../../images/starfish-orange.png';
import StarfishRed from '../../../images/starfish-red.png';
import StarfishGreen from '../../../images/starfish-green.png';
import {
  StyledStarfishOne,
  StyledStarfishTwo,
  StyledStarfishThree,
  StyledStarfishFour,
  StyledStarfishFive,
  StyledStarfishContainer
} from './StarfishBanner.styles';

const StarfishBanner: React.FC = () => {
  return (
    <StyledStarfishContainer>
      <StyledStarfishOne src={StarfishOrange} />
      <StyledStarfishTwo src={StarfishRed} />
      <StyledStarfishThree src={StarfishGreen} />
      <StyledStarfishFour src={StarfishRed} />
      <StyledStarfishFive src={StarfishOrange} />
    </StyledStarfishContainer>
  );
};

export default StarfishBanner;
