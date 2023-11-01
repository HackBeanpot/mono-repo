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
  EventsLocationPQuestion,
  StyledEventsSeaweed
} from '../EventsCalendarSection.styles';
import { eventsCalendarData } from '../../../lib/data';
import MissingPhoto from '../../../../shared-ui/images/missing_image.png';
import { max, min } from '../../../../shared-ui/lib/responsive';
import useMatchMedia from 'react-use-match-media';
import EventsSeaweed from '../../../../shared-ui/images/seaweed-rock.svg';
import EventsSeaweedDark from '../../../../shared-ui/images/seaweed-rock-dark.svg';

const DesktopTexts: React.FC = ({isDay}) => {
  const currentDate = new Date();
  const isTablet = useMatchMedia(min.tablet);
  const isMobile = useMatchMedia(max.tabletLg);
  const isDesktop = useMatchMedia(max.desktopLg);

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
                {isTablet && isDesktop && <br></br>}
                <EventsLocationPQuestion>Where?</EventsLocationPQuestion>
                <EventsLocationP>{event.room}</EventsLocationP>
              </EventsLocationContainer>
            </EventsRightContainer>
          </StyledTextContainer>
        </StyledEventsBox>
      ))}
      {!isMobile && <StyledEventsSeaweed src={isDay ? EventsSeaweed : EventsSeaweedDark } numberOfEvents = {eventsCalendarData.length}/>}
    </StyledDesktopTextsContainer>
  );
};

export default DesktopTexts;
