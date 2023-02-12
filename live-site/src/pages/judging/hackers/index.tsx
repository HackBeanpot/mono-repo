import React, { useEffect, useState } from 'react';
import type { HeadFC } from 'gatsby';
import Header from '../../../../../shared-ui/components/header/Header';
import useMatchMedia from 'react-use-match-media';
import '../../../../../shared-ui/style/globals.css';
import HackingRemaining from '../../../../components/hacking-remaning/HackingRemaining';
import { liveSiteTabInfo } from '../../../../lib/data';
import { min } from '../../../../../shared-ui/lib/responsive';
import Footer from '../../../../../shared-ui/components/footer/Footer';
import JudgingScheduleHackers from '../../../../components/judging-section/judging-schedule-hackers/JudgingScheduleHackers';
import { StyledPageContainer } from '../../../../../shared-ui/styled-components/Background.styles';
import ToggleMode from '../../../../../shared-ui/components/toggle-mode/ToggleMode';

const JudgingScheduleHackersPage: React.FC = () => {

  const isDesktop = useMatchMedia(min.tablet);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getBackgroundClassName = (): string => {
    if (isDesktop) {
      return 'day-background-desktop';
    }
    return 'mobile-light-background';
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <StyledPageContainer className = {getBackgroundClassName()}>
      <Header tabs={liveSiteTabInfo} isDay={true} />
      {isDesktop && new Date() > new Date('2023-02-10T17:00:00-05:00') && (
        <HackingRemaining />
      )}
      <JudgingScheduleHackers />
      <Footer tabs={liveSiteTabInfo} isDay />
    </StyledPageContainer>
  );
};

export default JudgingScheduleHackersPage;

export const JudgingHackersTitle: HeadFC = () => (
  <title>Judging Schedule Hackers</title>
);
