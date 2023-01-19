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
  StyledOneEventContainer
} from './ComingUp.styles';
import { min } from '../../../shared-ui/lib/responsive';
import useMatchMedia from 'react-use-match-media';
import { useAirtableApi } from '../../src/hooks/useAirtable';

const ComingUpSection: React.FC = () => {
  const { data } = useAirtableApi('Relevant', 'relevant');
  let count = 0; 
  let events: UpcomingEvent[]= Array.from(
    new Set(
    data.map((event) => {
      count = count + 1;
        return {
          id: count,
          header: event.fields.title,
          time: event.fields.time,
          body: event.fields.notes,
        } 
    }))
  )
  events = events.slice(0, 3); 
  const isDesktop = useMatchMedia(min.tablet);
  if (events.length === 0) {
    return <NoUpcoming />;
  }
  if (events.length === 1 && !isDesktop) {
    const event: UpcomingEvent = events[0];
    return (
      <StyledSectionContainer>
        <StyledSectionHeader>Coming up...</StyledSectionHeader>
        <StyledOneEventContainer>
          <StyledEvent key={event.id}>
            <StyledTextContainer>
              <StyledHeader>{event.header}</StyledHeader>
              <StyledTime>{event.time}</StyledTime>
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
              <StyledTime>{event.time}</StyledTime>
              <StyledBody>{event.body}</StyledBody>
            </StyledTextContainer>
          </StyledEvent>
        ))}
      </StyledEvents>
    </StyledSectionContainer>
  );
};

export default ComingUpSection;
