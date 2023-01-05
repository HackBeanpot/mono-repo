import React, { useState } from 'react';
import { StyledPrimaryButtonWide } from './PrimaryButton.styles';
import { ButtonProps } from '../../lib/types';
import { buttonAnimations } from './PrimaryButton.animations';

const PrimaryButton: React.FC<ButtonProps> = ({
  btnText,
  btnLink,
  newTab = false
}) => {
  const [isClicked, setIsClicked] = useState(false);
  if (!btnLink) {
    const ctaText = isClicked ? 'Copied to clipboard!' : btnText;
    const onClick = async (): void => {
      setIsClicked(true);
      // second argument is in milliseconds, so 3 * 1000 = 3 seconds
      // after 3 seconds, setTimeout will call the function you provide
      setTimeout(() => setIsClicked(false), 3 * 1000);

      const el = document.createElement('input');
      el.value = window.location.href;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    };
    return (
      <a onClick={onClick}>
        <StyledPrimaryButtonWide>{ctaText}</StyledPrimaryButtonWide>
      </a>
    );
  }

  return (
    <a href={btnLink} target={newTab ? '_blank' : '_self'}>
      <StyledPrimaryButtonWide
        whileHover="hover"
        whileTap="tap"
        variants={buttonAnimations}
      >
        {btnText}
      </StyledPrimaryButtonWide>
    </a>
  );
};
export default PrimaryButton;
