import React from 'react';
import { StyledSecondaryButton } from './SecondaryButton.styles';
import { ButtonProps } from '../../lib/types';

const SecondaryButton: React.FC<ButtonProps> = ({
  btnText,
  btnLink,
  isClickable = true
}) => {
  return (
    <a href={btnLink}>
      <StyledSecondaryButton isClickable={isClickable}>
        {btnText}
      </StyledSecondaryButton>
    </a>
  );
};

export default SecondaryButton;
