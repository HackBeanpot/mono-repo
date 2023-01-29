import React, { useState } from 'react';
import pinpoint from '../../../images/pinpoint.svg';
import arrow from '../../../images/arrow.svg';

import {
  StyledEventItemContainer,
  StyledEventItemHeader,
  StyledEventItemTime,
  StyledEventItemTopic,
  StyledEventTimeTopicContainer,
  StyledPinpoint,
  StyledEventItemLocation,
  StyledEventItemNameLocationContainer,
  StyledPinpointLocationContainer,
  StyledArrow,
  StyledEventItemLeftSideContainer,
  StyledTagsContainer,
  StyledEventItemDescription,
  StyledEventItemDescriptionText
} from './EventItem.styles';
import { EventItemProps } from '../../../lib/types';
import useMatchMedia from 'react-use-match-media';
import EventItemTag from '../event-item-tag/EventItemTag';

const EventItem: React.FC<EventItemProps> = ({ eventItem }) => {
  const arrowPresent = useMatchMedia('(min-width: 835px)');
  const [activeEventItem, setEventItem] = useState<number>(0);
  const openEventItem = (index: number): void => {
    isOpen ? setEventItem(0) : setEventItem(index);
  };
  const isOpen = activeEventItem == { eventItem }.eventItem.id;
  return (
    <div>
      <StyledEventItemContainer
        onClick={(): void => openEventItem(eventItem.id)}
      >
        <StyledEventItemLeftSideContainer>
          <StyledEventTimeTopicContainer>
            <StyledEventItemTime>{eventItem.time}</StyledEventItemTime>
            <StyledEventItemTopic>{eventItem.eventType}</StyledEventItemTopic>
          </StyledEventTimeTopicContainer>
          <StyledEventItemNameLocationContainer>
            <StyledEventItemHeader>{eventItem.eventName}</StyledEventItemHeader>
            <StyledPinpointLocationContainer>
              <StyledPinpoint src={pinpoint} />
              <StyledEventItemLocation>
                {eventItem.eventLocation}
              </StyledEventItemLocation>
            </StyledPinpointLocationContainer>
          </StyledEventItemNameLocationContainer>
        </StyledEventItemLeftSideContainer>
        {arrowPresent && (
          <StyledArrow
            src={arrow}
            onClick={(): void => openEventItem(eventItem.id)}
            isOpen={isOpen}
          />
        )}
        <StyledTagsContainer>
          {eventItem.tags.map((tag) => (
            <EventItemTag key={eventItem.id} tagType={tag} />
          ))}
        </StyledTagsContainer>
      </StyledEventItemContainer>
      {isOpen && (
        <StyledEventItemDescription>
          <StyledEventItemDescriptionText>
            {eventItem.description}
          </StyledEventItemDescriptionText>
        </StyledEventItemDescription>
      )}
    </div>
  );
};
export default EventItem;
