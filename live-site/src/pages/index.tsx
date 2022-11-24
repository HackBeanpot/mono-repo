import React, { useEffect, useState } from 'react';
import type { HeadFC } from 'gatsby';
import '../../../shared-ui/style/global.css';
import Header from '../../../shared-ui/components/header/Header';
import liveSiteTabInfo from '../../lib/data';
import '../../../shared-ui/index.css';
import Background from '../../../shared-ui/components/backgrounds/Backgrounds';
import ResourcesSection from '../../components/resources-section/ResourcesSection';

const IndexPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <div>
      <Header tabs={liveSiteTabInfo} isDay={true} />
      <Background isDay={true} />
      <ResourcesSection/>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
