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
import AboutSection from '../../components/about-section/AboutSection';

const IndexPage: React.FC = () => {
  const [isDay, setIsDay] = useState<boolean>(true);
  return (
    <div>
      <Header tabs={homeTabInfo} isDay={isDay} />
      <Background isDay={isDay} />
      <LandingSection isDay={isDay} setIsDay={setIsDay} />
      <ExploreSection />
      <AboutSection />
      <Footer tabs={homeTabInfo} isDay={isDay} />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
