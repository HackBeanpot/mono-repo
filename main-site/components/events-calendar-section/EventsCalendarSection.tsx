import React from 'react';
import EventsGrass from '../../../shared-ui/images/events-grass.svg';
import EventsCactus from '../../../shared-ui/images/events-cactus.svg';
import {
  StyledEventsCactus,
  StyledEventsGrass,
  StyledEventsContainer,
  StyledEventsCalendar,
  StyledSectionContainer,
  StyledH2
} from './EventsCalendarSection.styles';
import { min } from '../../../shared-ui/lib/responsive';
import useMatchMedia from 'react-use-match-media';
import DesktopTexts from './texts/DesktopTexts';

const EventsCalendarSection: React.FC = () => {
  const isDesktop = useMatchMedia(min.tablet);
  return (
    <div id="calendar">
      <StyledSectionContainer>
        <StyledH2>Events Calendar</StyledH2>
        <StyledEventsContainer>
          {isDesktop && <StyledEventsGrass src={EventsGrass} />}
          <StyledEventsCalendar>
            <DesktopTexts />
          </StyledEventsCalendar>
          {isDesktop && <StyledEventsCactus src={EventsCactus} />}
        </StyledEventsContainer>
      </StyledSectionContainer>
    </div>
  );
};

export default EventsCalendarSection;
