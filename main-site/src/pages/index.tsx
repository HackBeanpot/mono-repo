import * as React from 'react';
import type { HeadFC } from 'gatsby';
import '../../../shared-ui/index.css';
import useMatchMedia from 'react-use-match-media';
import '../../../shared-ui/style/global.css';
import { min } from '../../../shared-ui/lib/responsive';
import { StyledDayBackground } from '../../../shared-ui/styled-components/Background.styles';
import DayBackgroundDesktop from '../../../shared-ui/images/day-background-desktop.svg';
import DayBackgroundMobile from '../../../shared-ui/images/day-background-mobile.svg';
import Footer from '../../../shared-ui/components/footer/Footer';
import Header from '../../../shared-ui/components/header/Header';
import { homeTabInfo } from '../../../shared-ui/lib/data';
import LandingSection from '../../components/landing-section/LandingSection';

const IndexPage: React.FC = () => {
  const isDesktop = useMatchMedia(min.tablet);
  return (
    <div>
      <div>
        <Header tabs={homeTabInfo} />
        {isDesktop ? (
          <StyledDayBackground src={DayBackgroundDesktop} />
        ) : (
          <StyledDayBackground src={DayBackgroundMobile} />
        )}
        <LandingSection/>
      </div>
      <Footer tabs={homeTabInfo} />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
