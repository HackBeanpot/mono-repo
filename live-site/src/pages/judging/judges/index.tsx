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

const JudgingScheduleJudgesPage: React.FC = () => {
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
      <JudgingScheduleWelcome schedulePersonType={'Judge'} />;
      <Footer tabs={liveSiteTabInfo} isDay/>
    </StyledPageContainer>
  );
};

export default JudgingScheduleJudgesPage;

export const JudgingJudgesTitle: HeadFC = () => (
  <title>Judging Schedule Judges</title>
);
