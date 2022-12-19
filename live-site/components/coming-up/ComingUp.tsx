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
  StyledEvents
} from './ComingUp.styles';
import { min } from '../../../shared-ui/lib/responsive';
import useMatchMedia from 'react-use-match-media';

const ComingUpSection: React.FC = () => {
  const event: UpcomingEvent = {
    id: 0,
    header: 'Register your team',
    time: 'Complete by 12:00am EST',
    body: 'hello hello hello hello hello hello hello hello hi hi hello hello hello hi hi'
  };
  const events: UpcomingEvent[] = [event, event, event];
  const isDesktop = useMatchMedia(min.tablet);
  if (events.length === 0) {
    return <NoUpcoming />;
  }
  if (events.length === 1 && !isDesktop) {
    return (
      <StyledEvent key={event.id}>
        <StyledTextContainer>
          <StyledHeader>{event.header}</StyledHeader>
          <StyledTime>{event.time}</StyledTime>
          <StyledBody>{event.body}</StyledBody>
        </StyledTextContainer>
      </StyledEvent>
    );
  } else {
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
  }
};

export default ComingUpSection;
