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
  StyledHappeningNow
} from './ComingUp.styles';
import { min } from '../../../shared-ui/lib/responsive';
import useMatchMedia from 'react-use-match-media';
import { useAirtableApi } from '../../src/hooks/useAirtable';
import { isHappeningNow } from '../../lib/utils';

const ComingUpSection: React.FC = () => {
  const { data, isLoading } = useAirtableApi('Relevant', 'relevant', true);
  const [comingUpEvents, setComingUpEvents] = useState<UpcomingEvent[]>([]);
  const isDesktop = useMatchMedia(min.tablet);
  let events: UpcomingEvent[] = [];
  useEffect(() => {
    let count = 0;
    events = data.map((event) => {
      count = count + 1;
      return {
        id: count,
        header: event.fields.title,
        startTime: event.fields.start_time,
        endTime: event.fields.end_time,
        displayStartTime: event.fields.display_start_time,
        body: event.fields.notes
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
  if (comingUpEvents.length === 1 && !isDesktop) {
    const event: UpcomingEvent = comingUpEvents[0];
    return (
      <StyledSectionContainer>
        <StyledSectionHeader>{'Coming up...'}</StyledSectionHeader>
        <StyledOneEventContainer>
          <StyledEvent key={event.id}>
            <StyledTextContainer>
              <StyledHeader>{event.header}</StyledHeader>
              <StyledTime>{event.displayStartTime}</StyledTime>
              <StyledBody>{event.body}</StyledBody>
              {isHappeningNow(event.startTime, event.endTime) && (
                <StyledHappeningNow>happening now!</StyledHappeningNow>
              )}
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
            <StyledTextContainer>
              <StyledHeader>{event.header}</StyledHeader>
              <StyledTime>{event.displayStartTime}</StyledTime>
              <StyledBody>{event.body}</StyledBody>
              {isHappeningNow(event.startTime, event.endTime) && (
                <StyledHappeningNow>happening now!</StyledHappeningNow>
              )}
            </StyledTextContainer>
          </StyledEvent>
        ))}
      </StyledEvents>
    </StyledSectionContainer>
  );
};

export default ComingUpSection;
