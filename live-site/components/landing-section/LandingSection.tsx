import React, { useEffect, useState } from 'react';
import { TimeLeft } from '../../lib/data';
import { StyledLandingSectionContainer } from './LandingSection.styles';
import TimeRemaining from '../../../shared-ui/components/time-remaining/TimeRemaining';
const LandingSection: React.FC = () => {

  return (
    <StyledLandingSectionContainer>
     <TimeRemaining target={new Date('02/12/2023 14:00:00')} />
    </StyledLandingSectionContainer>
  );
};

export default LandingSection;
