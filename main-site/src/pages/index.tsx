import React, { useEffect, useState } from 'react';
import '../pageStyles/globals.css';
import type { HeadFC } from 'gatsby';
import '../../../shared-ui/index.css';
import '../../../shared-ui/style/global.css';
import LandingSection from '../../components/landing-section/LandingSection';
import Header from '../../../shared-ui/components/header/Header';
import { homeTabInfo } from '../../../shared-ui/lib/data';
import Footer from '../../../shared-ui/components/footer/Footer';
import CovidSection from '../../components/covid-section/CovidSection';
import PastProjectsSection from '../../components/past-projects-section/PastProjectsSection';
import useMatchMedia from 'react-use-match-media';
import { min } from '../../../shared-ui/lib/responsive';
import DesertShopSection from '../../components/desert-shop-section/DesertShopSection';
import RotateSection from '../../components/rotate-section/rotateSection';

const IndexPage: React.FC = () => {
  const [isDay, setIsDay] = useState<boolean>(true);
  const isDesktop = useMatchMedia(min.tablet);
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
    <div className={getBackgroundClassName()}>
      <Header tabs={homeTabInfo} isDay={isDay} />
      <LandingSection isDay={isDay} setIsDay={setIsDay} />
      <DesertShopSection/>
      <CovidSection />
      <RotateSection/>
      <PastProjectsSection />
      <Footer tabs={homeTabInfo} isDay={isDay} />
    </div>
  );
};

export default IndexPage;
export const Head: HeadFC = () => <title>Home Page</title>;
