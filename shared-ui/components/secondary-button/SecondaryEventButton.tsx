import React from 'react';
import { StyledSecondaryButton } from './SecondaryButton.styles';
import { ButtonEventProps } from '../../lib/types';

const SecondaryEventButton: React.FC<ButtonEventProps> = ({ btnText, btnOnClick }) => {
  return (
    <StyledSecondaryButton onClick={btnOnClick}> {btnText} </StyledSecondaryButton>
  );
};

export default SecondaryEventButton;
