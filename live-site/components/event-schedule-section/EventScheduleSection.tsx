import React from 'react';
import { mockData } from './EventScheduleMockData';

import {
  StyledBoldSubText,
  EventScheduleSectionContainer,
  StyledEventScheduleHeader,
  StyledEventScheduleSubText,
  StyledAddCalenderButton,
  ButtonContainer,
  EventScheduleTextButtonContainer
} from './EventScheduleSection.styles';
import EventScheduleTab from './EventScheduleTab';

const EventScheduleSection: React.FC = () => {
  return (
    <EventScheduleSectionContainer>
      <StyledEventScheduleHeader>Event Schedule</StyledEventScheduleHeader>
      <EventScheduleTextButtonContainer>
        <StyledEventScheduleSubText>
          Dates and times are displayed in your local timezone. Schedule in EST
          can be found here.
          <br />
          The password for all Zoom meetings can be found pinned in the
          #announcements Slack channel.
          <br />
          <StyledBoldSubText>
            Please be sure to attend all events labeled "Everyone".
          </StyledBoldSubText>
        </StyledEventScheduleSubText>
        <ButtonContainer>
          <StyledAddCalenderButton
            btnText="Add to Calender +"
            btnLink=""
          ></StyledAddCalenderButton>
        </ButtonContainer>
      </EventScheduleTextButtonContainer>
      <EventScheduleTab tabs={mockData}></EventScheduleTab>
    </EventScheduleSectionContainer>
  );
};

export default EventScheduleSection;
