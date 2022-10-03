import React from 'react';
import { min } from '../../../shared-ui/lib/responsive';
import useMatchMedia from 'react-use-match-media';
import EventsCalender from '../../../shared-ui/images/events-calender.svg';

const EventsCalenderSection: React.FC = () => {
  const isDesktop = useMatchMedia(min.tablet);
  return (
    <StyledEventsCalender src={EventsCalender} />
  );
};

export default EventsCalenderSection;
