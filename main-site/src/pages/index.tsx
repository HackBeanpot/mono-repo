import * as React from 'react';
import type { HeadFC } from 'gatsby';
import '../../../shared-ui/index.css';
import '../../../shared-ui/style/global.css';
import LandingSection from '../../components/landing-section/LandingSection';
import Header from '../../../shared-ui/components/header/Header';
import { homeTabInfo } from '../../../shared-ui/lib/data';
// import Footer from '../../../shared-ui/components/footer/Footer';
import Background from '../../../shared-ui/components/background/Background';
import { useState } from 'react';

const IndexPage: React.FC = () => {
  const [isDay, setIsDay] = useState<boolean>(true);
  return (
    <div>
      <Header tabs={homeTabInfo} isDay={isDay} />
      <Background isDay={isDay} />
      <LandingSection isDay={isDay} setIsDay={setIsDay} />
      {/* // <Footer tabs={homeTabInfo} isDay={isDay} /> */}
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
