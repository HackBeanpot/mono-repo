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

const EventItem:  React.FC<StyledEventItemProps> = () => {
  return (
    <StyledEventItemContainer>
      <StyledEventTimeTopicContainer>
        <StyledEventItemTime>{}</StyledEventItemTime>
        <StyledEventItemTopic>launch event</StyledEventItemTopic>
      </StyledEventTimeTopicContainer>
      <StyledEventItemNameLocationContainer>
        <StyledEventItemHeader>{}</StyledEventItemHeader>
        <StyledPinpointLocationContainer>
          <StyledPinpoint src={pinpoint} />
          <StyledEventitemLocation>The Hub</StyledEventitemLocation>
        </StyledPinpointLocationContainer>
      </StyledEventItemNameLocationContainer>
      <StyledArrow src={arrow}/>
    </StyledEventItemContainer>
  );
};
export default EventItem;
