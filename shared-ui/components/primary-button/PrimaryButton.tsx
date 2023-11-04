import React, { useState } from 'react';
import { StyledPrimaryButton } from './PrimaryButton.styles';
import { ButtonProps } from '../../lib/types';
import { buttonAnimations } from './PrimaryButton.animations';

const PrimaryButton: React.FC<ButtonProps> = React.forwardRef(({
  btnText,
  btnLink,
  newTab = false,
  isSmallPrimary = false,
  transparent = false,
  isApplyButton = false,
}, ref) => {
  const [isClicked, setIsClicked] = useState(false);
  if (!btnLink) {
    const ctaText = isClicked ? 'Copied to clipboard!' : btnText;
    const onClick = async (): Promise<void> => {
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
      <a ref = {ref} onClick={onClick}>
        <StyledPrimaryButton $isSmallPrimary={isSmallPrimary} $transparent={transparent} $isApplyButton={isApplyButton}>
          {ctaText}
        </StyledPrimaryButton>
      </a>
    );
  }

  return (
    <a ref = {ref} href={btnLink} target={newTab ? '_blank' : '_self'}>
      <StyledPrimaryButton
        whileHover="hover"
        whileTap="tap"
        variants={buttonAnimations}
        $isSmallPrimary={isSmallPrimary}
        $transparent={transparent}
        $isApplyButton={isApplyButton}
      >
        {btnText}
      </StyledPrimaryButton>
    </a>
  );
});
export default PrimaryButton;
