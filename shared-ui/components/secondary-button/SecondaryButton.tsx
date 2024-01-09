import React from 'react';
import { StyledSecondaryButton } from './SecondaryButton.styles';
import { ButtonProps } from '../../lib/types';
import { StyledSecondaryHeaderButton } from './SecondaryButtonHeader.styles';
import { StyledLink } from '../../style/typography';


const SecondaryButton: React.FC<ButtonProps> = ({
  btnText,
  btnLink,
  isClickable = true,
  inHeader
}) => {
  return (
    <StyledLink href={btnLink}>
      {inHeader ? (
        <StyledSecondaryHeaderButton isClickable={isClickable}>
          {btnText}
        </StyledSecondaryHeaderButton>
      ) : (
        <StyledSecondaryButton isClickable={isClickable}>
          {btnText}
        </StyledSecondaryButton>
      )}
    </StyledLink>
  );
};

export default SecondaryButton;
