import React, { useEffect, useState } from 'react';
import type { HeadFC } from 'gatsby';
import Header from '../../../shared-ui/components/header/Header';
import useMatchMedia from 'react-use-match-media';
import '../../../shared-ui/style/globals.css';
import HackingRemaining from '../../components/hacking-remaning/HackingRemaining';
import { liveSiteTabInfo } from '../../lib/data';
import { min } from '../../../shared-ui/lib/responsive';
import Background from '../../../shared-ui/components/backgrounds/Backgrounds';
import MeetTheTeamSection from '../../../shared-ui/components/meet-the-team/MeetTheTeamSection';
import Footer from '../../../shared-ui/components/footer/Footer';
import ResourcesSection from '../../components/resources-section/ResourcesSection';
import ComingUpSection from '../../components/coming-up/ComingUp';
import { UpcomingEvent } from '../../lib/types';

const IndexPage: React.FC = () => {
  const isDesktop = useMatchMedia(min.tablet);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const events: UpcomingEvent[] = [{
    header: 'Register your team',
    time: 'Complete by 12:00am EST',
    body: 'hello hello hello hello hello hello hello hello hi hi'
  }];

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
      <ComingUpSection eventsList={events} />
      <ResourcesSection />
      <MeetTheTeamSection />
      <Footer tabs={liveSiteTabInfo} isDay />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
