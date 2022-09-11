import * as React from 'react';
import type { HeadFC } from 'gatsby';
import ExampleButton from '../../../shared-ui/components/example-button/ExampleButton';
import Logo from '../../../shared-ui/images/hackbeanpot-logo.png';
import { StyledDayBackground } from '../pageStyles/DayBackground.style';
import DayBackground from '../../../shared-ui/images/day-background.svg';

const IndexPage: React.FC = () => {
  return (
    <div>
      <StyledDayBackground src={DayBackground} />
      Welcome to our main site!!! <ExampleButton />
      <img src={Logo} />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
