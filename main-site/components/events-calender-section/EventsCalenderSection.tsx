import React from 'react';
import EventsGrass from '../../../shared-ui/images/events-grass.svg';
import EventsCactus from '../../../shared-ui/images/events-cactus.svg';
import {
  StyledEventsCactus,
  StyledEventsGrass,
  StyledEventsContainer,
  StyledEventsCalender,
  EventsHeader,
  EventsPBolded,
  EventsSubHeader,
  EventsP,
  StyledEventsBox, 
  StyledTextContainer, 
  EventsLocationP, 
  TextLeftContainer
} from './EventsCalenderSection.styles';
import { min } from '../../../shared-ui/lib/responsive';
import useMatchMedia from 'react-use-match-media';

const EventsCalenderSection: React.FC = () => {
  const isDesktop = useMatchMedia(min.tablet);
  return (
    <StyledEventsContainer>
      {isDesktop && <StyledEventsGrass src={EventsGrass} />}
      <StyledEventsCalender>
        <StyledEventsBox>
          <StyledTextContainer>
            <TextLeftContainer>
            <EventsHeader>
              MiniHacks Workshop #1 -- 10/16 1:30pm-3pm
            </EventsHeader>
            <EventsSubHeader>
              Intro to HTML, CSS, and JavaScript
            </EventsSubHeader>
            <EventsPBolded>
              Putting the FUN in Fundamentals of Web Development
            </EventsPBolded>
            <br />
            <EventsP>
              Create your very first website with HTML, CSS, and JavaScript.{' '}
              <br />
              Perfect for beginners who are looking to get started on their{' '}
              <br />
              web development journey!
            </EventsP>
            <EventsSubHeader>Prerequisites: NONE!</EventsSubHeader>
            </TextLeftContainer>
            <EventsLocationP>
              Northeastern University <br />
              Shillman Hall 210
            </EventsLocationP>
            </StyledTextContainer>
            </StyledEventsBox>

            <StyledEventsBox>
              <StyledTextContainer>
            <EventsHeader>
              MiniHacks Workshop #2 -- 10/16 10am-12:30pm <br/>
              Intro to React.js
            </EventsHeader>
            </StyledTextContainer>
            </StyledEventsBox>
            
            <StyledEventsBox>
              <StyledTextContainer>
            <EventsHeader>
              Security + Tech Discussion - mid November
            </EventsHeader>
            </StyledTextContainer>
            </StyledEventsBox>

            <StyledEventsBox>
              <StyledTextContainer>
            <EventsHeader>
              Go Workshop - mid January
            </EventsHeader>
            </StyledTextContainer>
            </StyledEventsBox>
          
        
      </StyledEventsCalender>

      {isDesktop && <StyledEventsCactus src={EventsCactus} />}
    </StyledEventsContainer>
  );
};

export default EventsCalenderSection;
