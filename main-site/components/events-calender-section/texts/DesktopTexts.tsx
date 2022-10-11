import React from 'react';
import {
    EventsHeader,
    EventsPBolded,
    EventsSubHeader,
    EventsP,
    StyledEventsBox, 
    StyledTextContainer, 
    EventsLocationP, 
    TextLeftContainer
  } from '../EventsCalenderSection.styles';

const DesktopTexts: React.FC = () => {
  return (
    <>
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
              Create your very first website with HTML, CSS, and JavaScript.
              Perfect for beginners who are looking to get started on their
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
            MiniHacks Workshop #2 -- 10/16 10am-12:30pm <br />
            Intro to React.js
          </EventsHeader>
        </StyledTextContainer>
      </StyledEventsBox>

      <StyledEventsBox>
        <StyledTextContainer>
          <EventsHeader>Security + Tech Discussion - mid November</EventsHeader>
        </StyledTextContainer>
      </StyledEventsBox>

      <StyledEventsBox>
        <StyledTextContainer>
          <EventsHeader>Go Workshop - mid January</EventsHeader>
        </StyledTextContainer>
      </StyledEventsBox>
    </>
  );
};

export default DesktopTexts;
