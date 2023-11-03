import React from 'react';
import { StyledSecondaryButton } from './SecondaryButton.styles';
import { ButtonProps } from '../../lib/types';
import { StyledSecondaryHeaderButton } from './SecondaryButtonHeader.styles';

const SecondaryButton: React.FC<ButtonProps> = ({
  btnText,
  btnLink,
  isClickable = true,
  inHeader
}) => {
  return (
    <a href={btnLink}>
      {inHeader ? (
        <StyledSecondaryHeaderButton isClickable={isClickable}>
          {btnText}
        </StyledSecondaryHeaderButton>
      ) : (
        <StyledSecondaryButton isClickable={isClickable}>
          {btnText}
        </StyledSecondaryButton>
      )}
    </a>
  );
};

export default SecondaryButton;
