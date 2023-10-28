import React from 'react';
import EventsSeaweed from '../../../shared-ui/images/seaweed-rock.svg';
import EventsSeaweedDark from '../../../shared-ui/images/seaweed-rock-dark.svg';
import EventsFishSchool from '../../../shared-ui/images/school-fish.svg';
import EventsFishSchoolDark from '../../../shared-ui/images/school-fish-dark.svg';

import {
  StyledEventsSeaweed,
  StyledEventsFishSchool,
  StyledEventsContainer,
  StyledEventsCalendar,
  StyledSectionContainer,
  StyledH2
} from './EventsCalendarSection.styles';
import { min } from '../../../shared-ui/lib/responsive';
import useMatchMedia from 'react-use-match-media';
import DesktopTexts from './texts/DesktopTexts';
import { eventsCalendarData } from '../../lib/data';

const EventsCalendarSection: React.FC = ({ isDay }) => {
  const isDesktop = useMatchMedia(min.tablet);
  return (
    <div id="calendar">
      <StyledSectionContainer>
        <StyledH2>Events Calendar</StyledH2>
        <StyledEventsContainer>
          {isDesktop && (
            <StyledEventsFishSchool
              src={isDay ? EventsFishSchool : EventsFishSchoolDark}
            />
          )}
          <StyledEventsCalendar>
            <DesktopTexts />
          </StyledEventsCalendar>
          {isDesktop && (
            <StyledEventsSeaweed
              src={isDay ? EventsSeaweed : EventsSeaweedDark}
              numberOfEvents={eventsCalendarData.length}
            />
          )}
        </StyledEventsContainer>
      </StyledSectionContainer>
    </div>
  );
};

export default EventsCalendarSection;
