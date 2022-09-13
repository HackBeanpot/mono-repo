import * as React from 'react';
import type { HeadFC } from 'gatsby';
import useMatchMedia from 'react-use-match-media';
import '../../../shared-ui/style/global.css';
import { min } from '../../../shared-ui/lib/responsive';
import { StyledDayBackground } from '../../../shared-ui/styled-components/day-background.style';
import DayBackgroundDesktop from '../../../shared-ui/images/day-background-desktop.svg';
import DayBackgroundMobile from '../../../shared-ui/images/day-background-mobile.svg';


const IndexPage: React.FC = () => {
  const isDesktop = useMatchMedia(min.tablet);
  return (
    <div>
      {isDesktop ? (
        <StyledDayBackground src={DayBackgroundDesktop} />
      ) : (
        <StyledDayBackground src={DayBackgroundMobile} />
      )}
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
