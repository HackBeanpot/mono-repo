import React from 'react';
import EventsGrass from '../../../shared-ui/images/events-grass.svg';
import EventsCactus from '../../../shared-ui/images/events-cactus.svg';
import {
  StyledEventsCactus,
  StyledEventsGrass,
  StyledEventsContainer,
  StyledEventsCalendar, 
  StyledSectionContainer
} from './EventsCalendarSection.styles';
import { min } from '../../../shared-ui/lib/responsive';
import useMatchMedia from 'react-use-match-media';
import DesktopTexts from './texts/DesktopTexts';
import NonDesktopTexts from './texts/NonDesktopTexts';
import { H2 } from '../../../shared-ui/style/typography';

const EventsCalendarSection: React.FC = () => {
  const isDesktop = useMatchMedia(min.tablet);
  return (
    <StyledSectionContainer>
    <H2>Events Calendar</H2>
    <StyledEventsContainer>
      {isDesktop && <StyledEventsGrass src={EventsGrass} />}
      <StyledEventsCalendar>
        {isDesktop && <DesktopTexts />}
        {!isDesktop && <NonDesktopTexts />}
      </StyledEventsCalendar>
      {isDesktop && <StyledEventsCactus src={EventsCactus} />}
    </StyledEventsContainer>
    </StyledSectionContainer>
  );
};

export default EventsCalendarSection;
