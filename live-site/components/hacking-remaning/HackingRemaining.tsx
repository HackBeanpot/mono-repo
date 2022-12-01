import React, { useEffect, useState } from 'react';
import { TimeLeft } from '../../lib/data';
import {
  StyledHackingRemainingContainer,
  StyledHackingRemainingHeader,
  StyledTime
} from './HackingRemaining.styles';

const calculateTimeLeft = (): TimeLeft[] => {
  const difference =
    +new Date('2023-02-12T12:00:00-05:00') -
    +new Date('2023-02-10T17:00:00-05:00');
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
        {timeLeft.map((time) => (
          <>
            <span>{time.value}</span>
            {time.timeType !== 'seconds' && <span>:</span>}
          </>
        ))}
      </StyledTime>
    </StyledHackingRemainingContainer>
  );
};

export default HackingRemaining;
