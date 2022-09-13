import * as React from 'react';
import type { HeadFC } from 'gatsby';
import useMatchMedia from 'react-use-match-media';
import { min } from '../../../shared-ui/lib/responsive';
import { StyledDayBackground } from '../../../shared-ui/styled-components/day-background.style';
import DayBackgroundDesktop from '../../../shared-ui/images/day-background-desktop.svg';
import DayBackgroundMobile from '../../../shared-ui/images/day-background-mobile.svg';
//import Test from '../../../shared-ui/images/hackbeanpot-logo.png';

//CHANGE THE CSS STUFF

const IndexPage: React.FC = () => {
  // idk if this is working
const isWideViewport = useMatchMedia({ minWidth: min.tablet});
  return (
    <div>
      {isWideViewport ? (
        <StyledDayBackground src={DayBackgroundDesktop} />
      ) : (
        <StyledDayBackground src={DayBackgroundMobile} />
      )}
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
