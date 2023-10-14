import React from 'react';
import {
  EventsHeader,
  EventsSubHeader,
  EventsP,
  StyledEventsBox,
  StyledTextContainer,
  EventsLocationP,
  EventsLeftContainer,
  StyledDesktopTextsContainer,
  EventsRightContainer,
  EventsLocationContainer,
  EventsImage
} from '../EventsCalendarSection.styles';
import { eventsCalendarData } from '../../../lib/data';
import MissingPhoto from '../../../../shared-ui/images/missing_image.png'

const DesktopTexts: React.FC = () => {
  const currentDate = new Date();

  return (
    <StyledDesktopTextsContainer>
      {eventsCalendarData.map((event) => (
        <StyledEventsBox elapsedEvent = {currentDate > event.date}>
          <StyledTextContainer>
            <EventsLeftContainer>
              <EventsHeader>
                {event.title}
              </EventsHeader>
              {<EventsSubHeader>Prerequisites: {event.prerequisites || "XXX, XXX"}</EventsSubHeader>}
              {event.description && <EventsP>{event.description}</EventsP>}
            </EventsLeftContainer>
            <EventsRightContainer>
              <EventsImage src={ event.image || MissingPhoto}></EventsImage>
              <EventsLocationContainer>
                <EventsLocationP>When?</EventsLocationP>
                <EventsLocationP>{event.date.toDateString()}<br/>{event.time}</EventsLocationP>
                <EventsLocationP>Where?</EventsLocationP>
                <EventsLocationP>{event.room}</EventsLocationP>
              </EventsLocationContainer>
            </EventsRightContainer>
          </StyledTextContainer>
        </StyledEventsBox>
      ))}
    </StyledDesktopTextsContainer>
  );
};

export default DesktopTexts;
