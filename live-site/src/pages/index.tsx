import React, { useEffect, useState } from 'react';
import type { HeadFC } from 'gatsby';
import Header from '../../../shared-ui/components/header/Header';
import '../../../shared-ui/style/globals.css';
import HackingRemaining from '../../components/hacking-remaning/HackingRemaining';
import { liveSiteTabInfo } from '../../lib/data';
import { min } from '../../../shared-ui/lib/responsive';
import Background from '../../../shared-ui/components/backgrounds/Backgrounds';
import MeetTheTeamSection from '../../../shared-ui/components/meet-the-team/MeetTheTeamSection';
import Footer from '../../../shared-ui/components/footer/Footer';
import ResourcesSection from '../../components/resources-section/ResourcesSection';
import ComingUpSection from '../../components/coming-up/ComingUp';
import useMatchMedia from 'react-use-match-media';
import MentorsSection from '../../components/mentors-section/MentorsSection';
import { StyledPageContainer } from '../../../shared-ui/styled-components/Background.styles';
import ToggleMode from '../../../shared-ui/components/toggle-mode/ToggleMode';
import EventScheduleSection from '../../components/event-schedule-section/EventScheduleSection';
import WelcomeSection from '../../components/welcome-section/WelcomeSection';

const handleMode = (): boolean => {
  const currentHour = new Date().getHours();
  return 6 <= currentHour && currentHour < 18;
};

const IndexPage: React.FC = () => {
  const [isDay, setIsDay] = useState<boolean>(handleMode());
  const isDesktop = useMatchMedia(min.tabletLg);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getBackgroundClassName = (): string => {
    if (isDay && isDesktop) {
      return 'day-background-desktop';
    }
    if (isDay && !isDesktop) {
      return 'mobile-light-background';
    }
    if (!isDay && isDesktop) {
      return 'dark-background-desktop';
    }
    return 'mobile-dark-background';
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <StyledPageContainer className={getBackgroundClassName()}>
      <Header tabs={liveSiteTabInfo} isDay={true} />
      <ToggleMode isDay={isDay} setIsDay={setIsDay} location={'live-site'} />
      {isDesktop && new Date() > new Date('2023-02-10T17:00:00-05:00') && (
        <HackingRemaining />
      )}
      <Background isDay={true} />
      <ComingUpSection />
      <WelcomeSection />
      <EventScheduleSection />
      <ResourcesSection />
      <MeetTheTeamSection />
      <MentorsSection />
      <Footer tabs={liveSiteTabInfo} isDay />
    </StyledPageContainer>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>HackBeanpot</title>;
