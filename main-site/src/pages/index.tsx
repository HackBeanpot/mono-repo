import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { H1, H2, H3, H4, P } from '../../../shared-ui/style/typography';
import '../../../shared-ui/index.css';
import useMatchMedia from 'react-use-match-media';
import '../../../shared-ui/style/global.css';
import { min } from '../../../shared-ui/lib/responsive';
import { StyledDayBackground } from '../../../shared-ui/styled-components/Background.styles';
import DayBackgroundDesktop from '../../../shared-ui/images/day-background-desktop.svg';
import DayBackgroundMobile from '../../../shared-ui/images/day-background-mobile.svg';
import Header from '../../../shared-ui/components/header/Header';
import { homeTabInfo } from '../../../shared-ui/lib/data';
import ExploreSection from '../../components/explore-section/ExploreSection';

const IndexPage: React.FC = () => {
  const isDesktop = useMatchMedia(min.tablet);
  return (
    <div>
      <Header tabs={homeTabInfo} />
      {isDesktop ? (
        <StyledDayBackground src={DayBackgroundDesktop}/>
      ) : (
        <StyledDayBackground src={DayBackgroundMobile}/>
      )}
      <ExploreSection/>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
