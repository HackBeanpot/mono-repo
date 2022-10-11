import React from 'react';
import EventsGrass from '../../../shared-ui/images/events-grass.svg';
import EventsCactus from '../../../shared-ui/images/events-cactus.svg';
import {
  StyledEventsCactus,
  StyledEventsGrass,
  StyledEventsContainer,
  StyledEventsCalender, 
  StyledH3
} from './EventsCalenderSection.styles';
import { min } from '../../../shared-ui/lib/responsive';
import useMatchMedia from 'react-use-match-media';
import DesktopTexts from './texts/DesktopTexts';
import NonDesktopTexts from './texts/NonDesktopTexts';

const EventsCalenderSection: React.FC = () => {
  const isDesktop = useMatchMedia(min.tablet);
  return (
    <>
    <StyledH3>Events Calender</StyledH3>
    <StyledEventsContainer>
      {isDesktop && <StyledEventsGrass src={EventsGrass} />}
      <StyledEventsCalender>
        {isDesktop && <DesktopTexts />}
        {!isDesktop && <NonDesktopTexts />}
      </StyledEventsCalender>
      {isDesktop && <StyledEventsCactus src={EventsCactus} />}
    </StyledEventsContainer>
    </>
  );
};

export default EventsCalenderSection;
