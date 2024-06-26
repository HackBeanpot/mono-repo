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
        onClick={
          eventItem.description
            ? (): void => openEventItem(eventItem.id)
            : undefined
        }
      >
        <StyledEventItemLeftSideContainer>
          <StyledEventTimeTopicContainer>
            <StyledEventItemTime>
              {eventItem.time.toLocaleTimeString('en-US', {
                timeStyle: 'short'
              })}
            </StyledEventItemTime>
            <StyledEventItemTopic>{eventItem.eventType}</StyledEventItemTopic>
          </StyledEventTimeTopicContainer>
          <StyledEventItemNameLocationContainer>
            <StyledEventItemHeader>{eventItem.eventName}</StyledEventItemHeader>
            {eventItem.eventLocation && (
              <StyledPinpointLocationContainer>
                <StyledPinpoint src={pinpoint} />
                <StyledEventItemLocation>
                  {eventItem.eventLocation}
                </StyledEventItemLocation>
              </StyledPinpointLocationContainer>
            )}
          </StyledEventItemNameLocationContainer>
        </StyledEventItemLeftSideContainer>
        {arrowPresent && eventItem.description && (
          <StyledArrow
            src={arrow}
            onClick={(): void => openEventItem(eventItem.id)}
            isOpen={isOpen}
          />
        )}
        <StyledTagsContainer>
          {eventItem.tags && (
            <EventItemTag
              key={`event-item-tab-${eventItem.id}-${eventItem.tags}`}
              tag={eventItem.tags}
            />
          )}
          {eventItem.difficulty && (
            <EventItemTag
              key={`event-item-tab-${eventItem.id}-${eventItem.difficulty}`}
              tag={eventItem.difficulty}
            />
          )}
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
