import React, { useEffect } from 'react';
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
import variants from '../../../shared-ui/animations/variants';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInUp } from './EventsCalenderSection.animation';
import { EventsCalenderSectionProps } from '../../lib/types';

const EventsCalendarSection: React.FC<EventsCalenderSectionProps> = ({ isDay }) => {
  const isDesktop = useMatchMedia(min.tablet);
  
  const animationControls = useAnimation();
  const [ref, inView] = useInView();

  // if the section is in view, start the animation for the section
  useEffect(() => {
    inView ? animationControls.start("animate") : animationControls.set("initial")
  }, [animationControls, inView])

  return (
    <div id="calendar">
      <StyledSectionContainer ref = {ref} initial = "initial" animate = {animationControls}>
        <StyledH2 variants = {fadeInUp}>Events Calendar</StyledH2>
        <StyledEventsContainer variants = {fadeInUp}>
          {isDesktop && (
            <StyledEventsFishSchool
              src={isDay ? EventsFishSchool : EventsFishSchoolDark}
            />
          )}
          <StyledEventsCalendar>
            <DesktopTexts isDay={isDay} />
          </StyledEventsCalendar>
        </StyledEventsContainer>
      </StyledSectionContainer>
    </div>
  );
};

export default EventsCalendarSection;
