import React from 'react';
import {
  StyledEventItemContainer,
  StyledEventItemHeader,
  StyledEventItemTime,
  StyledEventItemTopic,
  StyledEventTimeTopicContainer
} from './EventItem.styles';

const EventItem: React.FC = () => {
  return (
    <StyledEventItemContainer>
      <StyledEventTimeTopicContainer>
        <StyledEventItemTime>5:00 - 6:00 pm</StyledEventItemTime>
        <StyledEventItemTopic>launch event</StyledEventItemTopic>
      </StyledEventTimeTopicContainer>
      <StyledEventItemHeader>Opening Ceremony!!!!</StyledEventItemHeader>
    </StyledEventItemContainer>
  );
};
export default EventItem;
