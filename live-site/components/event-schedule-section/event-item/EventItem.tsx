import React from 'react';
import pinpoint from '../../../lib/pinpoint.svg';
import arrow from '../../../lib/arrow.svg';

import {
  StyledEventItemContainer,
  StyledEventItemHeader,
  StyledEventItemTime,
  StyledEventItemTopic,
  StyledEventTimeTopicContainer,
  StyledPinpoint,
  StyledEventitemLocation,
  StyledEventItemNameLocationContainer,
  StyledPinpointLocationContainer,
  StyledArrow,
  StyledEventItemLeftSideContainer,
  StyledEventItemMobileContainer
} from './EventItem.styles';
import { EventItemProps } from '../../../lib/types';

const EventItem: React.FC<EventItemProps> = ({ eventItem }) => {
  return (
    <StyledEventItemContainer>
      <StyledEventItemMobileContainer>
        <StyledEventItemLeftSideContainer>
          <StyledEventTimeTopicContainer>
            <StyledEventItemTime>{eventItem.time}</StyledEventItemTime>
            <StyledEventItemTopic>{eventItem.eventType}</StyledEventItemTopic>
          </StyledEventTimeTopicContainer>
          <StyledEventItemNameLocationContainer>
            <StyledEventItemHeader>{eventItem.eventName}</StyledEventItemHeader>
            <StyledPinpointLocationContainer>
              <StyledPinpoint src={pinpoint} />
              <StyledEventitemLocation>
                {eventItem.eventLocation}
              </StyledEventitemLocation>
            </StyledPinpointLocationContainer>
          </StyledEventItemNameLocationContainer>
        </StyledEventItemLeftSideContainer>
        <StyledArrow src={arrow} />
      </StyledEventItemMobileContainer>
    </StyledEventItemContainer>
  );
};
export default EventItem;
