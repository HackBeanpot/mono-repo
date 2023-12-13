import React, { useEffect, useState } from 'react';
import { TimeLeft } from '../../lib/data';
import { StyledHourglass, StyledLandingSectionContainer } from './LandingSection.styles';
import TimeRemaining from '../../../shared-ui/components/time-remaining/TimeRemaining';
import hourglass from '../../../shared-ui/images/live-site-hourglass.svg' 

const LandingSection: React.FC = () => {

  return (
    <StyledLandingSectionContainer>
     <StyledHourglass src={hourglass}/>
     <TimeRemaining target={new Date('02/12/2023 14:00:00')} />
    </StyledLandingSectionContainer>
  );
};

export default LandingSection;
