import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { StyledDayBackground } from '../../../shared-ui/styled-components/day-background/background.style';
import DayBackground from '../../../shared-ui/images/day-background.svg';

const IndexPage: React.FC = () => {
  return (
    <div>
      <StyledDayBackground src={DayBackground} />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
