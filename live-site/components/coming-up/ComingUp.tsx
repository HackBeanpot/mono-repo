import React from 'react';
import { UpcomingEvent } from '../../lib/types';
import NoUpcoming from './no-upcoming/NoUpcoming';
import {
  StyledEvent,
  StyledHeader,
  StyledTime,
  StyledBody, 
  StyledSectionContainer, 
  StyledEvents, 
  StyledTextContainer, 
  StyledSectionHeader
} from './ComingUp.styles';

// need coming up props because want to check that if it's empty then....
const ComingUpSection: React.FC = () => {
  const event1: UpcomingEvent = {
    header: 'Register your team',
    time: 'Complete by 12:00am EST',
    body: 'hello hello hello hello hello hello hello hello hi hi hello hello hello hi hi'
  };
  const event2: UpcomingEvent = {
    header: 'Register your team',
    time: 'Complete by 12:00am EST',
    body: 'hello hello hello hello hello hello hello hello hi hi hello hello hello hi hi'
  };
  const event3: UpcomingEvent = {
    header: 'Register your team',
    time: 'Complete by 12:00am EST',
    body: 'hello hello hello hello hello hello hello hello hi hi hello hello hello hi hi'
  };
  const events: UpcomingEvent[] = [event1, event2, event3];

  if (events.length == 0) {
    return <NoUpcoming />;
  } else {
    return (
      <StyledSectionContainer>
        <StyledSectionHeader>Coming up...</StyledSectionHeader>
        <StyledEvents>
        {events.map((event: UpcomingEvent) => (
          <StyledEvent>
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
  }
};

export default ComingUpSection;
