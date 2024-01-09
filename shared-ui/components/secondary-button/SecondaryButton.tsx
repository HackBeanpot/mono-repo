import React from 'react';
import { StyledSecondaryButton } from './SecondaryButton.styles';
import { ButtonProps } from '../../lib/types';
import { StyledSecondaryHeaderButton } from './SecondaryButtonHeader.styles';
<<<<<<< HEAD
=======
import { StyledLink } from '../../style/typography';

>>>>>>> 68dd83ee2593b77f98d857147e44094f55659acc

const SecondaryButton: React.FC<ButtonProps> = ({
  btnText,
  btnLink,
  isClickable = true,
  inHeader
}) => {
  return (
<<<<<<< HEAD
    <a href={btnLink}>
=======
    <StyledLink href={btnLink}>
>>>>>>> 68dd83ee2593b77f98d857147e44094f55659acc
      {inHeader ? (
        <StyledSecondaryHeaderButton isClickable={isClickable}>
          {btnText}
        </StyledSecondaryHeaderButton>
      ) : (
        <StyledSecondaryButton isClickable={isClickable}>
          {btnText}
        </StyledSecondaryButton>
      )}
<<<<<<< HEAD
    </a>
=======
    </StyledLink>
>>>>>>> 68dd83ee2593b77f98d857147e44094f55659acc
  );
};

export default SecondaryButton;
