import * as React from 'react';
import type { HeadFC } from 'gatsby';
import Button from '../../../shared-ui/components/Button';

const IndexPage = () => {
  return (
    <div>
      Welcome to our main site!!!! <Button />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
