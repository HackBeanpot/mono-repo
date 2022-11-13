import * as React from 'react';
import type { HeadFC } from 'gatsby';
import Header from '../../../shared-ui/components/header/Header';
import liveSiteTabInfo from '../../lib/data';
import { min } from '../../../shared-ui/lib/responsive';
import { mainSiteTabInfo } from '../../../shared-ui/lib/data';
import Footer from '../../../shared-ui/components/footer/Footer';
import LandingSection from '../../../main-site/components/landing-section/LandingSection';


const IndexPage: React.FC = () => {
  const [isDay, setIsDay] = React.useState<boolean>(true);
  const isDesktop = matchMedia(min.tablet);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
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
  return (

    <div >
      <Header tabs={liveSiteTabInfo} isDay={isDay} />
      <Footer tabs={liveSiteTabInfo} isDay={isDay} />
    </div>
  )
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
