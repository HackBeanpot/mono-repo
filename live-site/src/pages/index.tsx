import React, { useEffect, useState } from 'react';
import type { HeadFC } from 'gatsby';
import '../../../shared-ui/style/global.css';
import Header from '../../../shared-ui/components/header/Header';
import liveSiteTabInfo from '../../lib/data';
// import Footer from '../../../shared-ui/components/footer/Footer';
import '../../../shared-ui/index.css';
import Background from '../../../shared-ui/components/backgrounds/Backgrounds';
import HackingRemaining from '../../components/hacking-remaning/HackingRemaining';

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
      <h1>hello</h1>
      {Date.now() && <HackingRemaining />}
      <Background isDay={true} />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
