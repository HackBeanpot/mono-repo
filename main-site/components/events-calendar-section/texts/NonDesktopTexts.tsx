import React from 'react';
import {
  EventsHeader,
  EventsSubHeader,
  StyledEventsBox,
  StyledTextContainer,
  EventsLocationP,
  TextLeftContainer,
  StyledCybersecurityLocationContainer,
  EventsPBolded,
  EventsP,
  StyledDesktopTextsContainer
} from '../EventsCalendarSection.styles';
import { eventsCalendarData } from '../../../lib/data';
import { EventsCalendarData } from '../../../lib/types';

const NonDesktopTexts: React.FC = () => {
  const events: EventsCalendarData[] = eventsCalendarData;
  let CurrentDate = new Date();

  return (
    <StyledDesktopTextsContainer>
      {events.map((event) => (
        <StyledEventsBox elapsedEvent = {CurrentDate > event.date}>
          <StyledTextContainer>
            <TextLeftContainer>
              <EventsHeader>
                {event.title} -- {event.date.getMonth()}/{event.date.getDate()} {event.time}
              </EventsHeader>
              {event.subtitle && <EventsSubHeader>{event.subtitle}</EventsSubHeader>}
              {event.punchline && <EventsPBolded>{event.punchline}</EventsPBolded>}
              <br/>
              {event.description && <EventsP>{event.description}</EventsP>}
              {event.prerequisites && <EventsSubHeader>Prerequisites: {event.prerequisites}</EventsSubHeader>}
            </TextLeftContainer>
            <EventsLocationP>
              {event.location}<br/>
              {event.room}
            </EventsLocationP>
            
          </StyledTextContainer>
        </StyledEventsBox>
      ))}
    </StyledDesktopTextsContainer>
  );
};

export default NonDesktopTexts;
