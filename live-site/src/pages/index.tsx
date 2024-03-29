import React, { useEffect, useState } from 'react';
import type { HeadFC } from 'gatsby';
import '../../../shared-ui/style/globals.css';
import HackingRemaining from '../../components/hacking-remaning/HackingRemaining';
import { liveSiteTabInfo } from '../../lib/data';
import { min } from '../../../shared-ui/lib/responsive';
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
import FeedbackJoinCoreSection from '../../components/feedback-join-core-section/FeedbackJoinCoreSection';
import LandingSection from '../../components/landing-section/LandingSection';
import Header from '../../../shared-ui/components/header/Header';
import OurTeamSection from '../../components/our-team-section/OurTeamSection';
import BottomImageFooter from '../../../shared-ui/components/bottom-image-footer/BottomImageFooter';
import OceanLayers from '../../../shared-ui/images/OceanLayers.svg';

const handleMode = (): boolean => {
  const currentHour = new Date().getHours();
  return 6 <= currentHour && currentHour < 18;
};

const IndexPage: React.FC = () => {
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
      <Header tabs={liveSiteTabInfo} isDay showMLHBadge={false} />
      <ToggleMode isDay={isDay} setIsDay={setIsDay} location={'live-site'} />
      <LandingSection isDay={isDay} />
      {isDesktop && new Date() < new Date('2024-02-25T09:00:00-05:00') && (
        <HackingRemaining target={new Date('02/25/2024 9:00:00')} isDay={isDay} />
      )}
      <ComingUpSection />
      <WelcomeSection isDay={isDay} />
      <EventScheduleSection />
      <MentorsSection />
      <ResourcesSection />
      <OurTeamSection />
      <MeetTheTeamSection />
      <FeedbackJoinCoreSection />
      <BottomImageFooter oceanLayers={OceanLayers} />
      <Footer tabs={liveSiteTabInfo} isDay />
    </StyledPageContainer>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>HackBeanpot</title>;
