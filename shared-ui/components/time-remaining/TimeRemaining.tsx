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
    { text: days, label: 'days' },
    { text: -1, label: '\xa0'},
    { text: hours, label: 'hours' },
    { text: -1, label: '\xa0'},
    { text: minutes, label: 'minutes' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference <= 0) {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        setDays(days);
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        setHours(hours);
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        setMinutes(minutes);
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setSeconds(seconds);
      }  
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledTimeRemainingContainer>
      <StyledTimeRemainingHeader>TIME REMAINING:</StyledTimeRemainingHeader>
      <StyledTimerContainer>
        {timeUnit.map((curr, index) => (
          <div key={`${curr.text}-${index}`}>
            <StyledTimeRemainingText>
              {`${curr.text === -1 ? '\xa0:\xa0' : curr.text === 0 ? '00' : curr.text}`}
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
