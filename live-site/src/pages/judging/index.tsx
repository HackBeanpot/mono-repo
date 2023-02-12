import React, { useEffect, useState } from 'react';
import Header from '../../../../shared-ui/components/header/Header';
import useMatchMedia from 'react-use-match-media';
import '../../../../shared-ui/style/globals.css';
import HackingRemaining from '../../../components/hacking-remaning/HackingRemaining';
import { liveSiteTabInfo } from '../../../lib/data';
import { min } from '../../../../shared-ui/lib/responsive';
import Footer from '../../../../shared-ui/components/footer/Footer';
import JudgingSelection from '../../../components/judging-section/judging-selection/JudgingSelection';
import { StyledPageContainer } from '../../../../shared-ui/styled-components/Background.styles';
import ToggleMode from '../../../../shared-ui/components/toggle-mode/ToggleMode';

const JudgingPage: React.FC = () => {
  const handleMode = (): boolean => {
    const currentHour = new Date().getHours();
    return 6 <= currentHour && currentHour < 18;
  };
  const isDesktop = useMatchMedia(min.tablet);
  const [isDay, setIsDay] = useState<boolean>(handleMode());
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null;
  }


  const getBackgroundClassName = (): string => {
    if (isDay && isDesktop) {
      return 'day-background-desktop';
    }
    if (isDay && !isDesktop) {
      return 'mobile-light-background';
    }
    if (!isDay && isDesktop) {
      return 'dark-background-desktop';
    }
    return 'mobile-dark-background';
  };

  return (
    <StyledPageContainer className = {getBackgroundClassName()}>
      <Header tabs={liveSiteTabInfo} isDay={true} />
      <ToggleMode isDay={isDay} setIsDay={setIsDay} location={'live-site'} />
      {isDesktop && new Date() > new Date('2023-02-10T17:00:00-05:00') && (
        <HackingRemaining />
      )}
      <JudgingSelection />
      <Footer tabs={liveSiteTabInfo} isDay />
    </StyledPageContainer>
  );
};

export default JudgingPage;

