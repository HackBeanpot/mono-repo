import * as React from 'react';
import type { HeadFC } from 'gatsby';
import '../../../shared-ui/index.css';
import '../../../shared-ui/style/global.css';
import Footer from '../../../shared-ui/components/footer/Footer';
import Header from '../../../shared-ui/components/header/Header';
import { homeTabInfo } from '../../../shared-ui/lib/data';
import LandingSection from '../../components/landing-section/LandingSection';

const IndexPage: React.FC = () => {
  return (
    <div>
      <div>
        <Header tabs={homeTabInfo} />
        
        <LandingSection/>
      </div>
      <Footer tabs={homeTabInfo} />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
