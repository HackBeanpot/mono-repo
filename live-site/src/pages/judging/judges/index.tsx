import React, { useEffect, useState } from 'react';
import type { HeadFC } from 'gatsby';
import Header from '../../../../../shared-ui/components/header/Header';
import useMatchMedia from 'react-use-match-media';
import '../../../../../shared-ui/style/globals.css';
import HackingRemaining from '../../../../components/hacking-remaning/HackingRemaining';
import { liveSiteTabInfo } from '../../../../lib/data';
import { min } from '../../../../../shared-ui/lib/responsive';
import Footer from '../../../../../shared-ui/components/footer/Footer';
import JudgingScheduleWelcome from '../../../../components/judging-section/judging-schedule-welcome/JudgingScheduleWelcome';
import { StyledPageContainer } from '../../../../../shared-ui/styled-components/Background.styles';

const handleMode = (): boolean => {
  const currentHour = new Date().getHours();
  return 6 <= currentHour && currentHour < 18;
};

const JudgingScheduleJudgesPage: React.FC = () => {
  const [isDay, setIsDay] = useState<boolean>(handleMode());
  const isDesktop = useMatchMedia(min.tabletXs);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const getBackgroundClassName = (): string => {
    if (isDay && isDesktop) {
      return 'day-gradient-desktop';
    }
    if (isDay && !isDesktop) {
      return 'mobile-light-gradient';
    }
    if (!isDay && isDesktop) {
      return 'dark-gradient-desktop';
    }
    return 'mobile-dark-gradient';
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <StyledPageContainer className={getBackgroundClassName()}>
      <Header tabs={liveSiteTabInfo} isDay={true} isLiveSite={true} />
      {isDesktop && new Date() > new Date('2023-02-10T17:00:00-05:00') && (
        <HackingRemaining
          target={new Date('02/25/2024 9:00:00')}
          isDay={isDay}
        />
      )}
      <JudgingScheduleWelcome schedulePersonType={'Judge'} />;
      <Footer tabs={liveSiteTabInfo} isDay />
    </StyledPageContainer>
  );
};

export default JudgingScheduleJudgesPage;

export const JudgingJudgesTitle: HeadFC = () => (
  <title>Judging Schedule Judges</title>
);
