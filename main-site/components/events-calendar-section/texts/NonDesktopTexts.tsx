import React from 'react';
import {
  EventsHeader,
  EventsSubHeader,
  StyledEventsBox,
  StyledTextContainer,
  EventsLocationP,
  TextLeftContainer
} from '../EventsCalendarSection.styles';

const NonDesktopTexts: React.FC = () => {
  return (
    <>
      <StyledEventsBox>
        <StyledTextContainer>
          <TextLeftContainer>
            <EventsHeader>
              MiniHacks Workshop #1 <br />
              10/16 1:30pm-3pm
            </EventsHeader>
            <EventsSubHeader>
              Intro to HTML, CSS, and JavaScript
            </EventsSubHeader>
            <EventsSubHeader>Prerequisites: NONE!</EventsSubHeader>
            <br />
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
            MiniHacks Workshop #2 <br />
            10/16 10am-12:30pm <br />
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

export default NonDesktopTexts;
