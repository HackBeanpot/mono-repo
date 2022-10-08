import React from 'react';
import EventsGrass from '../../../shared-ui/images/events-grass.svg';
import EventsCactus from '../../../shared-ui/images/events-cactus.svg';
import {
  StyledEventsCactus,
  StyledEventsGrass,
  StyledEventsContainer,
  StyledEventsCalender
} from './EventsCalenderSection.styles';
import { min } from '../../../shared-ui/lib/responsive';
import useMatchMedia from 'react-use-match-media';
import DesktopTexts from './DesktopTexts';
import NonDesktopTexts from './NonDesktopTexts';

const EventsCalenderSection: React.FC = () => {
  const isDesktop = useMatchMedia(min.tablet);
  return (
    <StyledEventsContainer>
      {isDesktop && <StyledEventsGrass src={EventsGrass} />}
      <StyledEventsCalender>
        {isDesktop && <DesktopTexts />}
        {!isDesktop && <NonDesktopTexts />}
      </StyledEventsCalender>
      {isDesktop && <StyledEventsCactus src={EventsCactus} />}
    </StyledEventsContainer>
  );
};

export default EventsCalenderSection;
