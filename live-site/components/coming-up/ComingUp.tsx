import React, { useEffect, useState } from 'react';
import { UpcomingEvent } from '../../lib/types';
import NoUpcoming from './no-upcoming/NoUpcoming';
import {
  StyledEvent,
  StyledHeader,
  StyledTime,
  StyledBody,
  StyledSectionContainer,
  StyledTextContainer,
  StyledSectionHeader,
  StyledEvents,
  StyledOneEventContainer,
  StyledLoadingText,
  StyledHappeningNow,
  StyledHappeningNowBanner
} from './ComingUp.styles';
import { min } from '../../../shared-ui/lib/responsive';
import useMatchMedia from 'react-use-match-media';
import { useAirtableApi } from '../../src/hooks/useAirtable';
import { isHappeningNow } from '../../lib/utils';

const ComingUpSection: React.FC = () => {
  const { data, isLoading } = useAirtableApi(`${process.env.GATSBY_SCHEDULE_BASE_ID}`, 'schedule', true);
  const [comingUpEvents, setComingUpEvents] = useState<UpcomingEvent[]>([]);
  const isDesktop = useMatchMedia(min.tablet);
  let events: UpcomingEvent[] = [];
  useEffect(() => {
    let count = 0;
    events = data.map((event) => {
      count = count + 1;
      return {
        id: count,
        header: event.fields.eventName,
        startTime: event.fields.start_time,
        endTime: event.fields.end_time,
        displayStartTime: new Date(event.fields.start_time).toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true}),
        displayEndTime: new Date(event.fields.end_time).toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true}),
        body: event.fields.description
      };
    });
    events = events.filter((e) => Date.now() < Date.parse(e.endTime));
    events.sort((event1: UpcomingEvent, event2: UpcomingEvent) =>
      event1.startTime > event2.startTime ? 1 : -1
    );
    events = events.slice(0, 3);
    setComingUpEvents(events);
  }, [data, setComingUpEvents]);

  if (isLoading) {
    return <StyledLoadingText>Loading...</StyledLoadingText>;
  }

  if (comingUpEvents.length === 0) {
    return <NoUpcoming />;
  }
  if (comingUpEvents.length === 1 || !isDesktop) {
    const event: UpcomingEvent = comingUpEvents[0];
    return (
      <StyledSectionContainer>
        <StyledSectionHeader>{'Coming up...'}</StyledSectionHeader>
        <StyledOneEventContainer>
          <StyledEvent key={event.id}>
            {isHappeningNow(event.startTime, event.endTime) && (
            <StyledHappeningNowBanner><StyledHappeningNow>Happening now!</StyledHappeningNow></StyledHappeningNowBanner>
             )}
            <StyledTextContainer>
              <StyledHeader>{event.header}</StyledHeader>
              <StyledTime>{event.displayStartTime + ' - ' + event.displayEndTime}</StyledTime>
              <StyledBody>{event.body}</StyledBody>
            </StyledTextContainer>
          </StyledEvent>
        </StyledOneEventContainer>
      </StyledSectionContainer>
    );
  }
  return (
    <StyledSectionContainer>
      <StyledSectionHeader>Coming up...</StyledSectionHeader>
      <StyledEvents>
        {comingUpEvents.map((event: UpcomingEvent) => (
          <StyledEvent key={event.id}>
            {isHappeningNow(event.startTime, event.endTime) && (
            <StyledHappeningNowBanner><StyledHappeningNow>Happening now!</StyledHappeningNow></StyledHappeningNowBanner>
            )}
            <StyledTextContainer>
              <StyledHeader>{event.header}</StyledHeader>
              <StyledTime>{event.displayStartTime + ' - ' + event.displayEndTime}</StyledTime>
              <StyledBody>{event.body}</StyledBody>
            </StyledTextContainer>
          </StyledEvent>
        ))}
      </StyledEvents>
    </StyledSectionContainer>
  );
};

export default ComingUpSection;
