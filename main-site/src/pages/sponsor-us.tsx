import React, {useState, useEffect} from 'react';
import type { HeadFC } from 'gatsby';
import '../../../shared-ui/style/globals.css';
import Header from '../../../shared-ui/components/header/Header';
import { mainSiteTabInfo } from '../../../shared-ui/lib/data';
import useMatchMedia from 'react-use-match-media';
import { min } from '../../../shared-ui/lib/responsive';
import { StyledPageContainer } from '../../../shared-ui/styled-components/Background.styles';
import TestimonialsSection from '../../components/testimonials-section/TestimonialsSection';
import { sponsorTestimonialData } from '../../lib/data';
import WhySponsor from '../../components/sponsor-us-page/why-sponsor-section/WhySponsorSection';
import SponsorUsLanding from '../../components/sponsor-us-page/sponsor-landing-page/SponsorLandingPage';
import SponsorPerk from '../../components/sponsor-us-page/sponsor-perk-section/SponsorPerkSection';
import PastSponsorsSection from '../../components/sponsor-us-page/past-sponsor-section/PastSponsors';
import Footer from '../../../shared-ui/components/footer/Footer';
import { navigate } from "gatsby"

const SponsorUsPage: React.FC = () => {

  // currently under dev, remove when developing
  return (<></>)

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
        <TestimonialsSection isSponsor={true} testimonialData={sponsorTestimonialData}/>
        <SponsorPerk />
        <PastSponsorsSection />
        <Footer tabs={mainSiteTabInfo} isDay={true} />
      </StyledPageContainer>
    </>
  );
};

export default SponsorUsPage;

export const SponsorUsTitle: HeadFC = () => <title>Sponsor Us</title>;
