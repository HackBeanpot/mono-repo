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
    <div id="schedule">
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
          <PrimaryButton btnText="Add to Calendar +" btnLink=""></PrimaryButton>
        </ButtonContainer>
      </EventScheduleTextButtonContainer>
      <EventScheduleTab tabs={mockData}></EventScheduleTab>
    </EventScheduleSectionContainer>
    </div>
  );
};

export default EventScheduleSection;
