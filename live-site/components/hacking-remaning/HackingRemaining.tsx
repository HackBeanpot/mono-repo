import React, { useEffect, useState } from 'react';
import { TimeLeft } from '../../lib/data';
import {
  StyledHackingRemainingContainer,
  StyledHackingRemainingHeader,
  StyledTime
} from './HackingRemaining.styles';

const calculateTimeLeft = (): TimeLeft => {
  const difference =
    +new Date('2023-02-12T12:00:00-05:00') -
    +new Date('2023-02-10T17:00:00-05:00');
  let timeLeft = { hours: 0, minutes: 0, seconds: 0 };

  if (difference > 0) {
    timeLeft = {
      hours: Math.floor(difference / (1000 * 60 * 60)),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
};

const HackingRemaining: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <StyledHackingRemainingContainer>
      <StyledHackingRemainingHeader>
        HACKING REMAINING
      </StyledHackingRemainingHeader>
      <StyledTime>
        <span>{timeLeft.hours}</span>
        <span>:</span>
        <span>{timeLeft.minutes}</span>
        <span>:</span>
        <span>{timeLeft.seconds}</span>
      </StyledTime>
    </StyledHackingRemainingContainer>
  );
};

export default HackingRemaining;
