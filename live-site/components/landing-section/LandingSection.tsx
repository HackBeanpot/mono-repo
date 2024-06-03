import React, { useEffect, useState } from 'react';
import { TimeLeft } from '../../lib/data';
import {
  StyledHourglass,
  StyledLandingSectionContainer,
  StyledLandingSectionSand,
  StyledCountdownBubble,
  StyledBubbleLeft,
  StyledBubbleRight
} from './LandingSection.styles';
import TimeRemaining from '../../../shared-ui/components/time-remaining/TimeRemaining';
import hourglass from '../../../shared-ui/images/live-site-hourglass.svg';
import {
  StyledHackathonText,
  StyledThemeText
} from '../../../main-site/components/landing-section/LandingSection.styles';
import SandDay from '../../../shared-ui/images/live-site-landing-section-sand-day.svg';
import SandNight from '../../../shared-ui/images/live-site-landing-section-sand-night.svg';
import Bubble from '../../../shared-ui/images/live-site-bubble-countdown.svg';
import LeftBubble from '../../../shared-ui/images/live-site-landing-bubbles-left.svg';
import RightBubble from '../../../shared-ui/images/live-site-landing-bubbles-right.svg';
import { LandingSectionProps } from '../../../main-site/lib/types';

const LandingSection: React.FC<LandingSectionProps> = ({ isDay }) => {
  return (
    <StyledLandingSectionContainer>
      <StyledHackathonText>HackBeanpot 2024</StyledHackathonText>
      <StyledThemeText>Under the Sea</StyledThemeText>
      <StyledHourglass src={hourglass} />
      <TimeRemaining target={new Date('02/25/2024 9:00:00')} isDay={isDay} />
      <StyledCountdownBubble src={Bubble} />
      <StyledBubbleLeft src={LeftBubble} />
      <StyledBubbleRight src={RightBubble} />
      <StyledLandingSectionSand src={isDay ? SandDay : SandNight} />
    </StyledLandingSectionContainer>
  );
};

export default LandingSection;
