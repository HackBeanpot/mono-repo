import React from 'react';
import EventsFishSchool from '../../../shared-ui/images/school-fish.svg';
import EventsFishSchoolDark from '../../../shared-ui/images/school-fish-dark.svg';

import {
  StyledEventsFishSchool,
  StyledEventsContainer,
  StyledEventsCalendar,
  StyledSectionContainer,
  StyledH2
} from './EventsCalendarSection.styles';
import { min } from '../../../shared-ui/lib/responsive';
import useMatchMedia from 'react-use-match-media';
import DesktopTexts from './texts/DesktopTexts';

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
            <DesktopTexts isDay = {isDay} />
          </StyledEventsCalendar>
        </StyledEventsContainer>
      </StyledSectionContainer>
    </div>
  );
};

export default EventsCalendarSection;
