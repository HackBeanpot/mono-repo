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
  StyledArrow
} from './EventItem.styles';
import { EventItemProps } from '../../../lib/types';

const EventItem:  React.FC<EventItemProps> = (props) => {
  return (
    <StyledEventItemContainer>
        <StyledEventTimeTopicContainer>
            <StyledEventItemTime>{props.time}</StyledEventItemTime>
        <StyledEventItemTopic>{props.eventType}</StyledEventItemTopic>
        </StyledEventTimeTopicContainer>
      <StyledEventItemNameLocationContainer>
        <StyledEventItemHeader>{props.eventName}</StyledEventItemHeader>
        <StyledPinpointLocationContainer>
          <StyledPinpoint src={pinpoint} />
          <StyledEventitemLocation>{props.eventLocation}</StyledEventitemLocation>
        </StyledPinpointLocationContainer>
      </StyledEventItemNameLocationContainer>
      <StyledArrow src={arrow}/>
 </StyledEventItemContainer>

  );
};
export default EventItem;
