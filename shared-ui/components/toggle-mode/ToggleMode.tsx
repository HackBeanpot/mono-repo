import React from 'react';
import Toggle from '../../../shared-ui/images/toggle-day-dark.svg';
import ToggleDay from '../../../shared-ui/images/toggle-day-light.svg';
import { StyledToggle, ToggleContainer } from './ToggleMode.styles';

interface ToggleModeProps {
  isDay: boolean;
  setIsDay: (isDay: boolean) => void;
  location: string;
}

const ToggleMode: React.FC<ToggleModeProps> = ({
  isDay,
  setIsDay,
  location
}) => {
  return (
    <ToggleContainer location={'right'}>
      ``
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
    </ToggleContainer>
  );
};

export default ToggleMode;
