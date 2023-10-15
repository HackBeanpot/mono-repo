import React from 'react';
import EventsSeaweed from '../../../shared-ui/images/seaweed-rock.svg';
import EventsFishSchool from '../../../shared-ui/images/school-fish.svg';
import {
  StyledEventsSeaweed,
  StyledEventsFishSchool,
  StyledEventsContainer,
  StyledEventsCalendar,
  StyledSectionContainer,
  StyledH2
} from './EventsCalendarSection.styles';
import { min } from '../../../shared-ui/lib/responsive';
import useMatchMedia from 'react-use-match-media';
import DesktopTexts from './texts/DesktopTexts';
import { eventsCalendarData } from '../../lib/data';

const EventsCalendarSection: React.FC = () => {
  const isDesktop = useMatchMedia(min.tablet);
  return (
    <div id="calendar">
      <StyledSectionContainer>
        <StyledH2>Events Calendar</StyledH2>
        <StyledEventsContainer>
          {isDesktop && <StyledEventsFishSchool src = {EventsFishSchool}/>}
          <StyledEventsCalendar>
            <DesktopTexts />
            {isDesktop && <StyledEventsSeaweed src={EventsSeaweed} numberOfEvents = {eventsCalendarData.length}/>}
          </StyledEventsCalendar>
        </StyledEventsContainer>
      </StyledSectionContainer>
    </div>
  );
};

export default EventsCalendarSection;
