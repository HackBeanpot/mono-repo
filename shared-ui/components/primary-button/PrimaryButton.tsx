import React from 'react';
import { StyledPrimaryButton } from './PrimaryButton.styles';
import { ButtonProps } from '../../lib/types';

const PrimaryButton: React.FC<ButtonProps> = ({
  btnText,
  btnLink,
  newTab = false
}) => {
  return (
    <a href={btnLink} target={newTab ? '_blank' : '_self'}>
      <StyledPrimaryButton>{btnText}</StyledPrimaryButton>
    </a>
  );
};
export default PrimaryButton;