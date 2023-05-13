import React from 'react';
import {
  EventsHeader,
  EventsPBolded,
  EventsSubHeader,
  EventsP,
  // StyledPastEventsBox,
  StyledEventsBox,
  StyledTextContainer,
  EventsLocationP,
  TextLeftContainer,
  StyledDesktopTextsContainer,
  StyledCybersecurityLocationContainer
} from '../EventsCalendarSection.styles';

const DesktopTexts: React.FC = () => {
  return (
    <StyledDesktopTextsContainer>
      {/* <StyledPastEventsBox>
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
              Perfect for beginners who are looking to get started on their web
              development journey!
            </EventsP>
            <EventsSubHeader>Prerequisites: NONE!</EventsSubHeader>
          </TextLeftContainer>
          <EventsLocationP>
            Northeastern University <br />
            Shillman Hall 210
          </EventsLocationP>
        </StyledTextContainer>
      </StyledPastEventsBox>

      <StyledPastEventsBox>
        <StyledTextContainer>
          <EventsHeader>
            MiniHacks Workshop #2 -- 10/16 10am-12:30pm <br />
            Intro to React.js
          </EventsHeader>
        </StyledTextContainer>
      </StyledPastEventsBox>

      <StyledPastEventsBox>
        <StyledTextContainer>
          <EventsHeader>
            Cybersecurity Workshop + Minihack -- 1/15 12pm-3pm
          </EventsHeader>
        </StyledTextContainer>
        <StyledCybersecurityLocationContainer>
          <EventsLocationP>
            Northeastern University <br />
            West Village H 366
          </EventsLocationP>
        </StyledCybersecurityLocationContainer>
      </StyledPastEventsBox> */}

      <StyledEventsBox>
        <StyledTextContainer>
          <EventsHeader>
            No events to display
          </EventsHeader>
        </StyledTextContainer>
      </StyledEventsBox>
    </StyledDesktopTextsContainer>
  );
};

export default DesktopTexts;
