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
  StyledEventItemArrowContainer
} from './EventItem.styles';
import { EventItemProps } from '../../../lib/types';

const EventItem:  React.FC<EventItemProps> = (eventItem) => {
  console.log(eventItem);
  return (
    <StyledEventItemContainer>
        <StyledEventTimeTopicContainer>
            <StyledEventItemTime>{eventItem.eventItem.time}</StyledEventItemTime>
        <StyledEventItemTopic>{eventItem.eventItem.eventType}</StyledEventItemTopic>
        </StyledEventTimeTopicContainer>
      <StyledEventItemNameLocationContainer>
        <StyledEventItemHeader>{eventItem.eventItem.eventName}</StyledEventItemHeader>
        <StyledPinpointLocationContainer>
          <StyledPinpoint src={pinpoint} />
          <StyledEventitemLocation>{eventItem.eventItem.eventLocation}</StyledEventitemLocation>
        </StyledPinpointLocationContainer>
      </StyledEventItemNameLocationContainer>

      <StyledEventItemArrowContainer>
      <StyledArrow src={arrow}/>
      </StyledEventItemArrowContainer>
 </StyledEventItemContainer>
  );
};
export default EventItem;
