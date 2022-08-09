import * as React from 'react';
import type { HeadFC } from 'gatsby';
import ExampleButton from '../../../shared-ui/components/example-button/ExampleButton';

const IndexPage = () => {
  return (
    <div>
      Welcome to our main site!!!! <ExampleButton />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
