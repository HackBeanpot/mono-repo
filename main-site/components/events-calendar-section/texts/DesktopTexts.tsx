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
  StyledEventsSeaweed,
  StyledEventsSoon
} from '../EventsCalendarSection.styles';
import { eventsCalendarData } from '../../../lib/data';
import { max, min } from '../../../../shared-ui/lib/responsive';
import useMatchMedia from 'react-use-match-media';
import EventsSeaweed from '../../../../shared-ui/images/seaweed-rock.svg';
import EventsSeaweedDark from '../../../../shared-ui/images/seaweed-rock-dark.svg';

const DesktopTexts: React.FC<{ isDay: boolean }> = ({ isDay }) => {
  const currentDate = new Date();
  const isTablet = useMatchMedia(min.tablet);
  const isMobile = useMatchMedia(max.tabletLg);
  const isDesktop = useMatchMedia(max.desktopLg);

  // filtering events where the current date > event date
  const upcomingEvents = eventsCalendarData.filter(
    (event) => currentDate <= new Date(event.date)
  );

  const eventCheck = upcomingEvents.length;

  return (
    <StyledDesktopTextsContainer>
      {eventCheck > 0 ? (
        upcomingEvents.map((event) => (
          <StyledEventsBox>
            <StyledTextContainer>
              <EventsLeftContainer>
                <EventsHeader>{event.title}</EventsHeader>
                {
                  <EventsSubHeader>
                    Prerequisites: {isMobile && <br />}
                    {event.prerequisites || 'XXX, XXX'}
                  </EventsSubHeader>
                }
                {event.description && <EventsP>{event.description}</EventsP>}
              </EventsLeftContainer>
              <EventsRightContainer>
                {event.image && <EventsImage src={event.image}></EventsImage>}
                <EventsLocationContainer>
                  <EventsLocationPQuestion>When?</EventsLocationPQuestion>
                  <EventsLocationP>
                    {event.date.toDateString()}
                    <br />
                    {event.time}
                  </EventsLocationP>
                  {isTablet && isDesktop && <br />}
                  <EventsLocationPQuestion>Where?</EventsLocationPQuestion>
                  <EventsLocationP>
                    {event.location} {event.room}
                  </EventsLocationP>
                </EventsLocationContainer>
              </EventsRightContainer>
            </StyledTextContainer>
          </StyledEventsBox>
        ))
      ) : (
        <StyledEventsSoon>Events Coming Soon!</StyledEventsSoon>
      )}

      {!isMobile && (
        <StyledEventsSeaweed
          src={isDay ? EventsSeaweed : EventsSeaweedDark}
          numberOfEvents={eventsCalendarData.length}
        />
      )}
    </StyledDesktopTextsContainer>
  );
};

export default DesktopTexts;
