import * as React from 'react';
import type { HeadFC } from 'gatsby';

const IndexPage: React.FC = () => {
  return (
    <div>
      Welcome to our live site!!!! 
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
