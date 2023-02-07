import React, { useEffect, useState } from 'react';
import type { HeadFC } from 'gatsby';
import '../../../shared-ui/style/globals.css';
import '../../../shared-ui/style/globals.css';
import LandingSection from '../../components/landing-section/LandingSection';
import Header from '../../../shared-ui/components/header/Header';
import { mainSiteTabInfo } from '../../../shared-ui/lib/data';
import Footer from '../../../shared-ui/components/footer/Footer';
import ExploreSection from '../../components/explore-section/ExploreSection';
import EventsCalendarSection from '../../components/events-calendar-section/EventsCalendarSection';
import FaqSection from '../../components/faq-section/FaqSection';
import AdventureAheadSection from '../../components/adventure-ahead-section/AdventureAheadSection';
import CovidSection from '../../components/covid-section/CovidSection';
import PastPhotosSection from '../../components/past-photos-section/PastPhotosSection';
import AboutSection from '../../components/about-section/AboutSection';
import TestimonialsSection from '../../components/testimonials-section/TestimonialsSection';
import MeetTheTeamSection from '../../../shared-ui/components/meet-the-team/MeetTheTeamSection';
import PastProjectsSection from '../../components/past-projects-section/PastProjectsSection';
import useMatchMedia from 'react-use-match-media';
import { min } from '../../../shared-ui/lib/responsive';
import TimeRemaining from '../../../shared-ui/components/time-remaining/TimeRemaining';
import { StyledPageContainer } from '../../../shared-ui/styled-components/Background.styles';

const IndexPage: React.FC = () => {
  const [isDay, setIsDay] = useState<boolean>(true);
  const isDesktop = useMatchMedia(min.tabletSm);
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
      <Header tabs={mainSiteTabInfo} isDay={isDay} />
      <LandingSection isDay={isDay} setIsDay={setIsDay} />
      <ExploreSection />
      <AboutSection />
      <EventsCalendarSection />
      <TestimonialsSection />
      <PastProjectsSection />
      <FaqSection />
      <PastPhotosSection />
      <CovidSection />
      <MeetTheTeamSection />
      <AdventureAheadSection />
      <TimeRemaining />
      <Footer tabs={mainSiteTabInfo} isDay={isDay} />
    </StyledPageContainer>
  );
};

export default IndexPage;
export const Head: HeadFC = () => <title>HackBeanpot</title>;
