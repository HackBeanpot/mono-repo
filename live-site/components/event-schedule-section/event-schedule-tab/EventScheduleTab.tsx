/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import {
  EventItem as EventItemType,
  EventScheduleTabProps
} from '../../../lib/types';
import { useAirtableApi } from '../../../src/hooks/useAirtable';
import EventItem from '../event-item/EventItem';
import { EventDate } from '../EventScheduleMockData';

import {
  StyledTabTitleWrapper,
  StyledEventScheduleTabsContainer,
  StyledTabTitle,
  StyledTabContent,
  StyledTabContentContainer,
  StyledEventScheduleTabContainer
} from './EventScheduleTab.styles';

const AIRTABLE_BASE_ID = `${process.env.GATSBY_SCHEDULE_BASE_ID}`;
const AIRTABLE_SCHEDULE_TABLE_NAME = 'schedule';
const FRI_DATE = new Date(2024, 1, 23);
const SAT_DATE = new Date(2024, 1, 24);
const SUN_DATE = new Date(2024, 1, 25);

const renderEventData = (events: any[], activeTab: number): JSX.Element[] => {
  const toEventItemType = (event: any): EventItemType => {
    return { id: event.id, ...event.fields };
  };
  const convertStringToDate = (event: EventItemType): EventItemType => {
    return {
      ...event,
      time: new Date(Date.parse(event.start_time as unknown as string))
    };
  };
  const filterByDate = (event: EventItemType): boolean => {
    switch (activeTab) {
      case 0:
        return event.time < SAT_DATE && event.time > FRI_DATE;
      case 1:
        return event.time < SUN_DATE && event.time > SAT_DATE;
      case 2:
        return event.time > SUN_DATE;
      default:
        throw Error('Invalid tab.');
    }
  };
  const sortByTime = (event1: EventItemType, event2: EventItemType): number => {
    return event1.time.getTime() - event2.time.getTime();
  };
  const toJSX = (event: EventItemType, index: number): JSX.Element => {
    return (
      <EventItem
        eventItem={event}
        key={'event-item-' + event.eventName + index}
      />
    );
  };

  return events
    .map(toEventItemType)
    .map(convertStringToDate)
    .filter(filterByDate)
    .sort(sortByTime)
    .map(toJSX);
};

const EventScheduleTab: React.FC<EventScheduleTabProps> = (tabs) => {
  const [activeTab, setActiveTab] = useState(0);
  const setActiveTabIndex = (index: number): void => {
    setActiveTab(index);
  };
  const { data: eventData, isLoading } = useAirtableApi(
    AIRTABLE_BASE_ID,
    AIRTABLE_SCHEDULE_TABLE_NAME
  );

  return (
    <StyledEventScheduleTabContainer>
      <StyledEventScheduleTabsContainer>
        <div>
          <StyledTabTitle>
            {tabs.tabs.map((tab, index) => (
              <StyledTabTitleWrapper
                isSelected={activeTab === index}
                isLastIndex={index === tabs.tabs.length - 1}
                key={`event-tab-${index}`}
                onClick={(): void => setActiveTabIndex(index)}
              >
                {tab.title}
              </StyledTabTitleWrapper>
            ))}
          </StyledTabTitle>
        </div>
      </StyledEventScheduleTabsContainer>
      <StyledTabContentContainer>
        <StyledTabContent>{tabs.tabs[activeTab].content}</StyledTabContent>
        {!isLoading && renderEventData(eventData, activeTab)}
      </StyledTabContentContainer>
    </StyledEventScheduleTabContainer>
  );
};

export default EventScheduleTab;
