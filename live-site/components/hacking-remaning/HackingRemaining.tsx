import React, { useEffect, useState } from 'react';
import { StyledTimerContainer, StyledTimeRemainingText, StyledTimeRemainingLabel } from '../../../shared-ui/components/time-remaining/TimeRemaining.styles';
import { HackingRemainingProps, TimeRemainingInfo } from '../../../shared-ui/lib/types';
import { TimeLeft } from '../../lib/data';
import {
  StyledHackingRemainingContainer,
  StyledHackingRemainingHeader,
  StyledTime
} from './HackingRemaining.styles';

const calculateTimeLeft = (): TimeLeft[] => {
  const endDate = new Date('2024-02-25T09:00:00-05:00').getTime();
  const now = Date.now();
  const difference = endDate - now;
  let timeLeft = [
    { timeType: 'hours', value: 0 },
    { timeType: 'minutes', value: 0 },
    { timeType: 'seconds', value: 0 }
  ];

  if (difference > 0) {
    timeLeft = [
      { timeType: 'hours', value: Math.floor(difference / (1000 * 60 * 60)) },
      { timeType: 'minutes', value: Math.floor((difference / 1000 / 60) % 60) },
      { timeType: 'seconds', value: Math.floor((difference / 1000) % 60) }
    ];
  }

  return timeLeft;
};

const HackingRemaining: React.FC<HackingRemainingProps> = ({ target, isDay }) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
  
    const timeUnit: TimeRemainingInfo[] = [
      { text: days, label: 'days' },
      { text: -1, label: '\xa0' },
      { text: hours, label: 'hours' },
      { text: -1, label: '\xa0' },
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
          const minutes = Math.floor(
            (difference % (1000 * 60 * 60)) / (1000 * 60)
          );
          setMinutes(minutes);
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);
          setSeconds(seconds);
        }
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

  return (
    <StyledHackingRemainingContainer>
      <StyledHackingRemainingHeader>
        HACKING REMAINING:
      </StyledHackingRemainingHeader>
      <StyledTime isDay={isDay}>
        {timeUnit.map((curr, index) => (
            <div key={`${curr.text}-${index}`}>
              <StyledTimeRemainingText isDay={isDay}>
                {`${
                  curr.text === -1
                    ? '\xa0:\xa0'
                    : curr.text === 0
                    ? '00'
                    : curr.text
                }`}
              </StyledTimeRemainingText>
              <StyledTimeRemainingLabel isDay={isDay}>
                {curr.label}
              </StyledTimeRemainingLabel>
            </div>
          ))} 
      </StyledTime> 
    </StyledHackingRemainingContainer>
  );
};

export default HackingRemaining;
