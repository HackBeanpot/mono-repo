import React, { useEffect, useState } from 'react';
import type { HeadFC } from 'gatsby';

import '../../../shared-ui/style/global.css';
import Header from '../../../shared-ui/components/header/Header';
import liveSiteTabInfo from '../../lib/data';
import { min } from '../../../shared-ui/lib/responsive';
import Footer from '../../../shared-ui/components/footer/Footer';
import '../../../shared-ui/index.css';
import useMatchMedia from 'react-use-match-media';


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
      <Header tabs={liveSiteTabInfo} isDay={isDay} />
      <Footer tabs={liveSiteTabInfo} isDay={isDay} />
    </div>
  )
};


export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
