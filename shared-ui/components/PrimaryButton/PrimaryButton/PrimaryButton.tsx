import React from 'react';
import { StyledPrimaryButton } from './PrimaryButton.styles';
import { ButtonProps } from '../../../lib/types';

const PrimaryButton: React.FC<ButtonProps> = ({ btnText, btnLink }) => {
  return (
    <a href={btnLink}>
      <StyledPrimaryButton>{btnText}</StyledPrimaryButton>
    </a>
  );
};

export default PrimaryButton;
