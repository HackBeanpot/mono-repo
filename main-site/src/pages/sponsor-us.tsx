import React, { useEffect, useState } from 'react';
import type { HeadFC } from 'gatsby';
import '../../../shared-ui/style/globals.css';
import Header from '../../../shared-ui/components/header/Header';
import { mainSiteTabInfo } from '../../../shared-ui/lib/data';
import Footer from '../../../shared-ui/components/footer/Footer';
import useMatchMedia from 'react-use-match-media';
import { min } from '../../../shared-ui/lib/responsive';
import { StyledPageContainer } from '../../../shared-ui/styled-components/Background.styles';
import AboutSection from '../../components/about-section/AboutSection';
import ExploreSection from '../../components/explore-section/ExploreSection';
import EventsCalendarSection from '../../components/events-calendar-section/EventsCalendarSection';
import TestimonialsSection from '../../components/testimonials-section/TestimonialsSection';
import { sponsorTestimonialData } from '../../lib/data';

const SponsorUsPage: React.FC = () => {
  const [isDay, setIsDay] = useState<boolean>(true);
  const isDesktop = useMatchMedia(min.tabletXs);
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
      <ExploreSection />
      <AboutSection />
      <EventsCalendarSection />
      <TestimonialsSection testimonialData={sponsorTestimonialData}/>
      <Footer tabs={mainSiteTabInfo} isDay={isDay} />
    </StyledPageContainer>
  );
};

export default SponsorUsPage;

export const SponsorUsTitle: HeadFC = () => <title>Sponsor Us</title>;
