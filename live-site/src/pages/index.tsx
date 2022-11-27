import React, { useEffect, useState } from 'react';
import type { HeadFC } from 'gatsby';
import '../../../shared-ui/style/global.css';
import Header from '../../../shared-ui/components/header/Header';
import '../../../shared-ui/index.css';
import Background from '../../../shared-ui/components/backgrounds/Backgrounds';
import HackingRemaining from '../../components/hacking-remaning/HackingRemaining';
import { isMobile } from 'react-device-detect';
import { liveSiteTabInfo } from '../../lib/data';

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
      {!isMobile && Date('20230210T170000-0500') && <HackingRemaining />}
      <Background isDay={true} />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
