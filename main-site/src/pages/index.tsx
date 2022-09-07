import * as React from 'react';
import type { HeadFC } from 'gatsby';
import ExampleButton from '../../../shared-ui/components/example-button/ExampleButton';
import Logo from '../../../shared-ui/images/hackbeanpot-logo.png';

const IndexPage: React.FC = () => {
  return (
    <div>
      Welcome to our main site!!! <ExampleButton />
      <img src={Logo} />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
