import React from 'react';
import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';
import { mockData } from './EventScheduleMockData';

import {
  StyledBoldSubText,
  EventScheduleSectionContainer,
  StyledEventScheduleHeader,
  StyledEventScheduleSubText,
  ButtonContainer,
  EventScheduleTextButtonContainer
} from './EventScheduleSection.styles';
import EventScheduleTab from './event-schedule-tab/EventScheduleTab';

const EventScheduleSection: React.FC = () => {
  return (
    <EventScheduleSectionContainer>
      <StyledEventScheduleHeader>Event Schedule</StyledEventScheduleHeader>
      <EventScheduleTextButtonContainer>
        <StyledEventScheduleSubText>
          Dates and times are displayed in your local timezone. Schedule in EST
          can be found here.
          <br />
          <StyledBoldSubText>
            Please be sure to attend all events labeled "Everyone".
          </StyledBoldSubText>
        </StyledEventScheduleSubText>
        <ButtonContainer>
          <PrimaryButton
            btnText="Add to Calendar +"
            btnLink="https://calendar.google.com/calendar/ical/678296909d9c3c56059479fa83fecd0de5bf7ed2630fdef9bfbe16a700d196cb%40group.calendar.google.com/public/basic.ics"
          ></PrimaryButton>
        </ButtonContainer>
      </EventScheduleTextButtonContainer>
      <EventScheduleTab tabs={mockData}></EventScheduleTab>
    </EventScheduleSectionContainer>
  );
};

export default EventScheduleSection;
