import React from 'react';
import { StyledSecondaryButton } from './SecondaryButton.styles';
import { ButtonProps } from '../../lib/types';

const SecondaryButton: React.FC<ButtonProps> = ({ btnText, btnLink }) => {
  return (
    <a href={btnLink}>
      <StyledSecondaryButton>{btnText}</StyledSecondaryButton>
    </a>
  );
};

export default SecondaryButton;
