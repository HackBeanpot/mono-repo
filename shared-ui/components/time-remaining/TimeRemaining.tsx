import React, { useEffect, useState } from 'react';
import PrimaryButton from '../primary-button/PrimaryButton';
import {
  StyledTimeRemainingHeader,
  StyledButtonContainer,
  StyledTimeRemainingContainer,
  StyledTimeRemainingText,
  StyledTimerContainer,
  StyledTimeRemainingLabel
} from './TimeRemaining.styles';
import {
  TimeRemainingInfo,
  TimeRemainingProps
} from '../../../shared-ui/lib/types';

const TimeRemaining: React.FC<TimeRemainingProps> = ({ target }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const timeUnit: TimeRemainingInfo[] = [
    { text: days, label: 'Days' },
    { text: hours, label: 'Hours' },
    { text: minutes, label: 'Minutes' },
    { text: seconds, label: 'Seconds' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledTimeRemainingContainer>
      <StyledTimeRemainingHeader>Time Remaining</StyledTimeRemainingHeader>
      <StyledTimerContainer>
        {timeUnit.map((curr, index) => (
          <div key={`${curr.text}-${index}`}>
            <StyledTimeRemainingText>
              {curr.text} {curr.label === 'Seconds' ? '' : ':'}
            </StyledTimeRemainingText>
            <StyledTimeRemainingLabel>{curr.label}</StyledTimeRemainingLabel>
          </div>
        ))}
      </StyledTimerContainer>
      <StyledButtonContainer>
        <PrimaryButton btnText="Share with friends!" newTab />
      </StyledButtonContainer>
    </StyledTimeRemainingContainer>
  );
};
export default TimeRemaining;
