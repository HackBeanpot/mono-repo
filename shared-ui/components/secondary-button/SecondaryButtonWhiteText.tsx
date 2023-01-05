import React from 'react';
import { StyledSecondaryButtonWhiteText } from './SecondaryButton.styles';
import { ButtonProps } from '../../lib/types';

const SecondaryButtonWhiteText: React.FC<ButtonProps> = ({ btnText, btnLink }) => {
  return (
    <a href={btnLink}>
      <StyledSecondaryButtonWhiteText>{btnText}</StyledSecondaryButtonWhiteText>
    </a>
  );
};

export default SecondaryButtonWhiteText;
