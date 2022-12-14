import React, { useEffect, useState } from 'react';
import type { HeadFC } from 'gatsby';
import Header from '../../../../shared-ui/components/header/Header';
import useMatchMedia from 'react-use-match-media';
import '../../../shared-ui/style/globals.css';
import HackingRemaining from '../../../components/hacking-remaning/HackingRemaining';
import { liveSiteTabInfo } from '../../../lib/data';
import { min } from '../../../../shared-ui/lib/responsive';
import Background from '../../../../shared-ui/components/backgrounds/Backgrounds';
import Footer from '../../../../shared-ui/components/footer/Footer';
import JudgingSelection from '../../../components/judging-section/judging-selection-section/JudgingSelection';

const JudgingPage: React.FC = () => {
  const isDesktop = useMatchMedia(min.tablet);
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
      {isDesktop && new Date() > new Date('2023-02-10T17:00:00-05:00') && (
        <HackingRemaining />
      )}
      <Background isDay={true} />
      <JudgingSelection />
      <Footer tabs={liveSiteTabInfo} isDay />
    </div>
  );
};

export default JudgingPage;

export const Judging: HeadFC = () => <title>Judging Page</title>;
