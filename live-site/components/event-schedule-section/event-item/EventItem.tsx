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

const EventItem: React.FC = () => {
  return (
    <StyledEventItemContainer>
      <StyledEventTimeTopicContainer>
        <StyledEventItemTime>5:00 - 6:00 pm</StyledEventItemTime>
        <StyledEventItemTopic>launch event</StyledEventItemTopic>
      </StyledEventTimeTopicContainer>
      <StyledEventItemNameLocationContainer>
        <StyledEventItemHeader>Opening Ceremony!!!!</StyledEventItemHeader>
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
