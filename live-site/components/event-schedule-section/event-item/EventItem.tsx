import React from 'react';
import Pinpoint from '../../../lib/pinpoint.svg';

import {
  StyledEventItemContainer,
  StyledEventItemHeader,
  StyledEventItemTime,
  StyledEventItemTopic,
  StyledEventTimeTopicContainer,
  StyledPinpoint,
  StyledEventitemLocation,
} from './EventItem.styles';

const EventItem: React.FC = () => {
  return (
    <StyledEventItemContainer>
      <StyledEventTimeTopicContainer>
        <StyledEventItemTime>5:00 - 6:00 pm</StyledEventItemTime>
        <StyledEventItemTopic>launch event</StyledEventItemTopic>
      </StyledEventTimeTopicContainer>


        
      <StyledEventItemHeader>Opening Ceremony!!!!</StyledEventItemHeader>
      <StyledPinpoint src={Pinpoint}/>
      <StyledEventitemLocation>The Hub</StyledEventitemLocation>
   
      </StyledEventItemContainer>

  );
};
export default EventItem;
