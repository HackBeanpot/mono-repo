import React, { useState } from 'react';
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
  StyledEventItemDescription,
  StyledEventItemDescriptionText
} from './EventItem.styles';
import { EventItemProps } from '../../../lib/types';
import useMatchMedia from 'react-use-match-media';
import EventItemTag from '../event-item-tag/EventItemTag';




const EventItem: React.FC<EventItemProps> = ({ eventItem }) => {
  const arrowPresent = useMatchMedia('(min-width: 835px)');
  const [activeEventItem, setEventItem] = useState<number>(0);
  const openEventItem = (index : number) : void => {
    isOpen ? setEventItem(0) : setEventItem(index)
  };
  const isOpen = activeEventItem == {eventItem}.eventItem.id;
  return (
    <div>
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
      {arrowPresent && <StyledArrow src={arrow} onClick={() : void => openEventItem(eventItem.id)} />}
      <StyledTagsContainer>
        {eventItem.meal && <EventItemTag type={'Meal'} />}
        {eventItem.beginner && <EventItemTag type={'Beginner-Friendly'} />}
        {eventItem.workshop && <EventItemTag type={'Workshop'} />}
        {eventItem.actionItem && <EventItemTag type={'Action Item'} />}
        {eventItem.everyone && <EventItemTag type={'Everyone'} />}
        {eventItem.sponsor && <EventItemTag type={'Sponsor Event'} />}
        {eventItem.social && <EventItemTag type={'Social/Fun Event'} />}
      </StyledTagsContainer>
    </StyledEventItemContainer>
    {isOpen && (
    <StyledEventItemDescription>
      <StyledEventItemDescriptionText>
        {eventItem.description}
      </StyledEventItemDescriptionText>
    </StyledEventItemDescription>)}
    </div>
  );
};
export default EventItem;
