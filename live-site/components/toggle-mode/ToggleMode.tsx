import React from 'react';
import Toggle from '../../../shared-ui/images/toggle-day-dark.svg';
import ToggleDay from '../../../shared-ui/images/toggle-day-light.svg';
import Sun from '../../../shared-ui/images/sun.svg';
import Moon from '../../../shared-ui/images/moon.svg';
import { StyledToggle, StyledStar } from './ToggleMode.styles';

interface ToggleModeProps {
  isDay: boolean;
  setIsDay: (isDay: boolean) => void;
}

const ToggleMode: React.FC<ToggleModeProps> = ({ isDay, setIsDay }) => {
  return (
    <div>
      {isDay ? (
        <StyledToggle
          src={ToggleDay}
          alt="toggle-day"
          onClick={(): void => setIsDay(!isDay)}
        />
      ) : (
        <StyledToggle
          src={Toggle}
          alt="toggle-day-night"
          onClick={(): void => setIsDay(!isDay)}
        />
      )}
      {isDay ? <StyledStar src={Sun} /> : <StyledStar src={Moon} />}
    </div>
  );
};

export default ToggleMode;
