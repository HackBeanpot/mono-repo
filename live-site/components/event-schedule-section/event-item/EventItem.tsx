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
  StyledTagsContainer,
  StyledTag,
  StyledTagText
} from './EventItem.styles';
import { EventItemProps } from '../../../lib/types';
import useMatchMedia from 'react-use-match-media';

const EventItem: React.FC<EventItemProps> = ({ eventItem }) => {
  const arrowPresent = useMatchMedia('(min-width: 835px)');
  return (
    <StyledEventItemContainer>
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
      {arrowPresent && <StyledArrow src={arrow} />}
      <StyledTagsContainer>
        {eventItem.meal && (
          <StyledTag>
            <StyledTagText>Meal</StyledTagText>
          </StyledTag>
        )}
        {eventItem.beginner && (
          <StyledTag>
            <StyledTagText>Beginner-Friendly</StyledTagText>
          </StyledTag>
        )}
        {eventItem.workshop && (
          <StyledTag>
            <StyledTagText>Workshop</StyledTagText>
          </StyledTag>
        )}
      </StyledTagsContainer>
    </StyledEventItemContainer>
  );
};
export default EventItem;
