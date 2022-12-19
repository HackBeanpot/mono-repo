import React from 'react';
import pinpoint from '../../../lib/pinpoint.svg';
import arrow from '../../../lib/arrow.svg';
import StyledEventItemProps from '../../../lib/types';


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

const EventItem:  React.FC<StyledEventItemProps> = (eventItem) => {
  return (
    <StyledEventItemContainer>
      {eventItem.map((item) => (
        <>
        <StyledEventTimeTopicContainer>
            <StyledEventItemTime>{item.time}</StyledEventItemTime>
        <StyledEventItemTopic>{item.eventType}</StyledEventItemTopic>
        </StyledEventTimeTopicContainer>
      <StyledEventItemNameLocationContainer>
        <StyledEventItemHeader>{item.eventName}</StyledEventItemHeader>
        <StyledPinpointLocationContainer>
          <StyledPinpoint src={pinpoint} />
          <StyledEventitemLocation>{item.eventLocation}</StyledEventitemLocation>
        </StyledPinpointLocationContainer>
      </StyledEventItemNameLocationContainer>
      <StyledArrow src={arrow}/>
      </>
        ))}
 </StyledEventItemContainer>


  );
};
export default EventItem;
