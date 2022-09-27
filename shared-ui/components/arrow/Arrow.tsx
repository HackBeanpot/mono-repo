import React from 'react';
import { ArrowProps } from '../../lib/types';
import LeftArrow from '../../images/left-arrow.svg';
import RightArrow from '../../images/right-arrow.svg';
import { StyledArrow } from './Arrow.styles';

const Arrow: React.FC<ArrowProps> = ({ left = true, onClick }) => {
  return <StyledArrow src={left ? LeftArrow : RightArrow} onClick={onClick} />;
};

export default Arrow;
