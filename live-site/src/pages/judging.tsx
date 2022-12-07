import React, { useEffect, useState } from 'react';
import type { HeadFC } from 'gatsby';
import Header from '../../../shared-ui/components/header/Header';
import useMatchMedia from 'react-use-match-media';
import '../../../shared-ui/style/globals.css';
import HackingRemaining from '../../components/hacking-remaning/HackingRemaining';
import { liveSiteTabInfo } from '../../lib/data';
import { min } from '../../../shared-ui/lib/responsive';
import Background from '../../../shared-ui/components/backgrounds/Backgrounds';
import Footer from '../../../shared-ui/components/footer/Footer';
import JudgingSelection from '../../components/judging-section/judging-selection-section/JudgingSelection';
import JudgingSchedule from '../../components/judging-section/judging-schedule-section/JudgingSchedule';

// personIsJudge updates & awaitingPersonType=false by child JudgingSelection 
const JudgingPage: React.FC = () => {
  const isDesktop = useMatchMedia(min.tablet);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [awaitingPersonType, setAwaitingPersonType] = useState<boolean>(true);
  const [personIsJudge, setPersonIsJudge] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null;
  }

  // when back is pressed on judgingSchedule, awaitingPersonType = true
  const handleResetJudgingSelection = (): void => {
    setAwaitingPersonType(true);
  };

  // when user selects that they are a judge in the JudgingSelection component
  const handlePersonIsJudge = (): void => {
    setAwaitingPersonType(false);
    setPersonIsJudge(true);
  };

  // when user selects that they are a hacker in the JudgingSelection component
  const handlePersonIsHacker = (): void => {
    setAwaitingPersonType(false);
    setPersonIsJudge(false);
  };

  return (
    <div>
      <Header tabs={liveSiteTabInfo} isDay={true} />
      {isDesktop && new Date() > new Date('2023-02-10T17:00:00-05:00') && (
        <HackingRemaining />
      )}
      <Background isDay={true} />
      {awaitingPersonType ? 
        <JudgingSelection handleJudge={handlePersonIsJudge} handleTeam={handlePersonIsHacker} /> :
        <JudgingSchedule isPersonJudge={personIsJudge} retToJudgingSelection={handleResetJudgingSelection} /> }
      <Footer tabs={liveSiteTabInfo} isDay />
    </div>
  );
};

export default JudgingPage;

export const Judging: HeadFC = () => <title>Judging Page</title>;
