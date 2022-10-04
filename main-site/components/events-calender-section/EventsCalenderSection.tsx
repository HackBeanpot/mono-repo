import React from 'react';
import EventsCalender from '../../../shared-ui/images/events-calender.svg';
import EventsGrass from '../../../shared-ui/images/events-grass.svg';
import EventsCactus from '../../../shared-ui/images/events-cactus.svg';
import EventsCalenderMobile from '../../../shared-ui/images/events-calender-mobile.svg';
import { StyledEventsCactus, StyledEventsCalender, StyledEventsGrass, StyledEventsContainer } from './EventsCalenderSection.styles';
import { min } from '../../../shared-ui/lib/responsive'
import useMatchMedia from 'react-use-match-media';

const EventsCalenderSection: React.FC = () => {
  const isDesktop = useMatchMedia(min.tablet);
  return (
    <StyledEventsContainer>
      {isDesktop && <StyledEventsGrass src={EventsGrass} />}
      {isDesktop && <StyledEventsCalender src={EventsCalender} />}
      {!isDesktop && <StyledEventsCalender src={EventsCalenderMobile} />}
      {isDesktop && <StyledEventsCactus src={EventsCactus} />}
      </StyledEventsContainer>
  );
};

export default EventsCalenderSection;


