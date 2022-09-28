import * as React from 'react';
import type { HeadFC } from 'gatsby';
import '../../../shared-ui/index.css';
import '../../../shared-ui/style/global.css';
import LandingSection from '../../components/landing-section/LandingSection';

const IndexPage: React.FC = () => {
  return (
    <div>
      <div>
        <LandingSection/>
      </div>
      
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
