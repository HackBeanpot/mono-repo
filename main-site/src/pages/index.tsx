import React, { useEffect, useState } from 'react';
import type { HeadFC } from 'gatsby';
import '../../../shared-ui/style/globals.css';
import LandingSection from '../../components/landing-section/LandingSection';
import Header from '../../../shared-ui/components/header/Header';
import {
  mainSiteTabInfo,
  mainSiteTabInfoFooter,
  mainSiteTabInfoFooterSecondary
} from '../../../shared-ui/lib/data';
import Footer from '../../../shared-ui/components/footer/Footer';
import ExploreSection from '../../components/explore-section/ExploreSection';
import EventsCalendarSection from '../../components/events-calendar-section/EventsCalendarSection';
import FaqSection from '../../components/faq-section/FaqSection';
import AdventureAheadSection from '../../components/adventure-ahead-section/AdventureAheadSection';
// import CovidSection from '../../components/covid-section/CovidSection';
import PastPhotosSection from '../../components/past-photos-section/PastPhotosSection';
import AboutSection from '../../components/about-section/AboutSection';
import KeynoteSection from '../../components/keynote-section/KeynoteSection';
import TestimonialsSection from '../../components/testimonials-section/TestimonialsSection';
import MeetTheTeamSection from '../../../shared-ui/components/meet-the-team/MeetTheTeamSection';
import PastProjectsSection from '../../components/past-projects-section/PastProjectsSection';
import useMatchMedia from 'react-use-match-media';
import { min } from '../../../shared-ui/lib/responsive';
// import TimeRemaining from '../../../shared-ui/components/time-remaining/TimeRemaining';
import { StyledPageContainer } from '../../../shared-ui/styled-components/Background.styles';
import SponsorsSection from '../../components/sponsors-section/SponsorsSection';
import { testimonialSectionData } from '../../lib/data';
import BottomImageFooter from '../../../shared-ui/components/bottom-image-footer/BottomImageFooter';
import OceanLayers from '../../../shared-ui/images/OceanLayers.svg';

const IndexPage: React.FC = () => {
  const [isDay, setIsDay] = useState<boolean>(true);
  const isDesktop = useMatchMedia(min.tabletXs);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const getBackgroundClassName = () : string => {
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

  const mlhStyles = {
    display: 'block',
    maxWidth: 100,
    minWidth: '60',
    position: 'fixed',
    right: '50px',
    top: '0',
    width: '10%',
    zIndex: '10000'
  } as React.CSSProperties;

  return (
    <>
      <StyledPageContainer className={getBackgroundClassName()}>
        <Header tabs={mainSiteTabInfo} isDay={isDay} />
        <LandingSection isDay={isDay} setIsDay={setIsDay} />
        <ExploreSection isDay={isDay} />
        <AboutSection />
        <KeynoteSection />
        <EventsCalendarSection isDay={isDay} />
        <TestimonialsSection testimonialData={testimonialSectionData} />
        <PastProjectsSection isDay={isDay} />
        <PastPhotosSection />
        <FaqSection />
        {/* <CovidSection /> */}
        <SponsorsSection />
        <MeetTheTeamSection />
        <AdventureAheadSection />
        <BottomImageFooter oceanLayers={OceanLayers} />
        <Footer
          tabs={mainSiteTabInfoFooter}
          secondaryTabs={mainSiteTabInfoFooterSecondary}
          isDay={isDay}
        />
      </StyledPageContainer>
    </>
  );
};

export default IndexPage;
export const Head: HeadFC = () => <title>HackBeanpot</title>;
