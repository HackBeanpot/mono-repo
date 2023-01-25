import React from 'react';
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
  StyledLoadingText
} from './ComingUp.styles';
import { min } from '../../../shared-ui/lib/responsive';
import useMatchMedia from 'react-use-match-media';
import { useAirtableApi } from '../../src/hooks/useAirtable';

const ComingUpSection: React.FC = () => {
  const { data, isLoading } = useAirtableApi('Relevant', 'relevant', true);
  const isDesktop = useMatchMedia(min.tablet);
  
  let count = 0;
  let events: UpcomingEvent[] = data.map((event) => {
    count = count + 1;
    return {
      id: count,
      header: event.fields.title,
      time: event.fields.start_time,
      display_start_time: event.fields.display_start_time,
      body: event.fields.notes
    };
  });

  events = events.filter((e) => Date.now() < Date.parse(e.time));
  events.sort((event1: UpcomingEvent, event2: UpcomingEvent) =>
    event1.time > event2.time ? 1 : -1
  );
  events = events.slice(0, 3);

  if (isLoading) {
    return <StyledLoadingText>Loading...</StyledLoadingText>;
  }

  if (events.length === 0) {
    return <NoUpcoming />;
  }
  if (events.length === 1 && !isDesktop) {
    const event: UpcomingEvent = events[0];
    return (
      <StyledSectionContainer>
        <StyledSectionHeader>{'Coming up...'}</StyledSectionHeader>
        <StyledOneEventContainer>
          <StyledEvent key={event.id}>
            <StyledTextContainer>
              <StyledHeader>{event.header}</StyledHeader>
              <StyledTime>{event.display_start_time}</StyledTime>
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
        {events.map((event: UpcomingEvent) => (
          <StyledEvent key={event.id}>
            <StyledTextContainer>
              <StyledHeader>{event.header}</StyledHeader>
              <StyledTime>{event.display_start_time}</StyledTime>
              <StyledBody>{event.body}</StyledBody>
            </StyledTextContainer>
          </StyledEvent>
        ))}
      </StyledEvents>
    </StyledSectionContainer>
  );
};

export default ComingUpSection;
