import * as React from 'react';
import type { HeadFC } from 'gatsby';
import ExampleButton from '../../../shared-ui/components/example-button/ExampleButton';
import Logo from '../../../shared-ui/images/hackbeanpot-logo.png';
import StyledDayBackground  from '../../../shared-ui/components/day-background/DayBackground.style';

const IndexPage: React.FC = () => {
  return (
    <div>
      <StyledDayBackground >
        Welcome to our main site!!! <ExampleButton />
        <img src={Logo} />
      </StyledDayBackground >
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
