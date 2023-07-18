import React, {useState, useEffect} from 'react';
import type { HeadFC } from 'gatsby';
import '../../../shared-ui/style/globals.css';
import Header from '../../../shared-ui/components/header/Header';
import { mainSiteTabInfo } from '../../../shared-ui/lib/data';
import useMatchMedia from 'react-use-match-media';
import { min } from '../../../shared-ui/lib/responsive';
import { StyledPageContainer } from '../../../shared-ui/styled-components/Background.styles';
import WhySponsor from '../../components/sponsor-us-section/whySponsor/WhySponsor';
import SponsorUsLanding from '../../components/sponsor-us-section/sponsorUsLanding/SponsorUsLanding';

const SponsorUsPage: React.FC = () => {
  const [isDay, setIsDay] = useState<boolean>(true);
  const isDesktop = useMatchMedia(min.tabletXs);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <>
      <StyledPageContainer className={getBackgroundClassName()}>
        <Header tabs={mainSiteTabInfo} isDay={true} />
        <SponsorUsLanding isDay={isDay} setIsDay={setIsDay} />
        <WhySponsor />
      </StyledPageContainer>
    </>
  );
};

export default SponsorUsPage;

export const SponsorUsTitle: HeadFC = () => <title>Sponsor Us</title>;
