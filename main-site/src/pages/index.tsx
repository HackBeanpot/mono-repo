import React, { useState } from 'react';
import type { HeadFC } from 'gatsby';
import '../../../shared-ui/index.css';
import '../../../shared-ui/style/global.css';
import LandingSection from '../../components/landing-section/LandingSection';
import Header from '../../../shared-ui/components/header/Header';
import { homeTabInfo } from '../../../shared-ui/lib/data';
import Footer from '../../../shared-ui/components/footer/Footer';
import Background from '../../../shared-ui/components/background/Background';
import ExploreSection from '../../components/explore-section/ExploreSection';
import EventsCalendarSection from '../../components/events-calendar-section/EventsCalendarSection';
import FaqSection from '../../components/faq-section/FaqSection';
import AdventureAheadSection from '../../components/adventure-ahead-section/AdventureAheadSection';
import CovidSection from '../../components/covid-section/CovidSection';
import PastPhotosSection from '../../components/past-photos-section/PastPhotosSection';
import AboutSection from '../../components/about-section/AboutSection';
import MeetTheTeamSection from '../../components/meet-the-team/MeetTheTeamSection';
import PastProjectsSection from '../../components/past-projects-section/PastProjectsSection';
import CovidSection from '../../components/covid-section/CovidSection';

const IndexPage: React.FC = () => {
  const [isDay, setIsDay] = useState<boolean>(true);
  return (
    <div>
      <Header tabs={homeTabInfo} isDay={isDay} />
      <Background isDay={isDay} />
      <LandingSection isDay={isDay} setIsDay={setIsDay} />
      <ExploreSection />
      <AboutSection />
      <PastProjectsSection />
      <PastPhotosSection />
      <EventsCalendarSection />
      <CovidSection />
      <FaqSection />
      <MeetTheTeamSection/>
      <AdventureAheadSection />
      <Footer tabs={homeTabInfo} isDay={isDay} />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
