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
  EventsImage,
  EventsLocationPQuestion
} from '../EventsCalendarSection.styles';
import { eventsCalendarData } from '../../../lib/data';
import MissingPhoto from '../../../../shared-ui/images/missing_image.png';
import { max } from '../../../../shared-ui/lib/responsive';
import useMatchMedia from 'react-use-match-media';

const DesktopTexts: React.FC = () => {
  const currentDate = new Date();
  const isMobile = useMatchMedia(max.tabletSm);
  return (
    <StyledDesktopTextsContainer>
      {eventsCalendarData.map((event) => (
        <StyledEventsBox elapsedEvent = {currentDate > event.date}>
          <StyledTextContainer>
            <EventsLeftContainer>
              <EventsHeader>
                {event.title}
              </EventsHeader>
              {<EventsSubHeader>Prerequisites: {isMobile && <br/>}{event.prerequisites || "XXX, XXX"}</EventsSubHeader>}
              {event.description && <EventsP>{event.description}</EventsP>}
            </EventsLeftContainer>
            <EventsRightContainer>
              <EventsImage src={ event.image || MissingPhoto}></EventsImage>
              <EventsLocationContainer>
                <EventsLocationPQuestion>When?</EventsLocationPQuestion>
                <EventsLocationP>{event.date.toDateString()}<br/>{event.time}</EventsLocationP>
                <EventsLocationPQuestion>Where?</EventsLocationPQuestion>
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
