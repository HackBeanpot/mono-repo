import React from 'react';
import { StyledPrimaryButton } from './PrimaryButton.styles';
import { ButtonEventProps } from '../../lib/types';

const PrimaryEventButton: React.FC<ButtonEventProps> = ({ btnText, btnOnClick }) => {
  return (
    <StyledPrimaryButton onClick={btnOnClick}> {btnText} </StyledPrimaryButton>
  );
};

export default PrimaryEventButton;
