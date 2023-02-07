import React, { useEffect, useState } from 'react';
import { eventItemInfo } from '../../../lib/data';
import { EventScheduleTabProps } from '../../../lib/types';
import { useAirtableApi } from '../../../src/hooks/useAirtable';
import EventItem from '../event-item/EventItem';

import {
  StyledTabTitleWrapper,
  StyledEventScheduleTabsContainer,
  StyledTabTitle,
  StyledTabContent,
  StyledTabContentContainer,
  StyledEventScheduleTabContainer
} from './EventScheduleTab.styles';

const AIRTABLE_BASE_NAME = 'appVDH8SEck8ofHLr';
const AIRTABLE_SCHEDULE_TABLE_NAME = 'schedule';

const renderEventData = (data: any[]): EventItem[] => {
  data.map((curr) => <EventItem eventItem={curr} key={curr.eventName} />);
};

const EventScheduleTab: React.FC<EventScheduleTabProps> = (tabs) => {
  const [activeTab, setActiveTab] = useState(0);
  const setActiveTabIndex = (index: number): void => {
    setActiveTab(index);
  };
  const { data: eventData, isLoading } = useAirtableApi(
    AIRTABLE_BASE_NAME,
    AIRTABLE_SCHEDULE_TABLE_NAME,
    true
  );

  return (
    <StyledEventScheduleTabContainer>
      <StyledEventScheduleTabsContainer>
        <div>
          <StyledTabTitle>
            {tabs.tabs.map((tab, index) => (
              <StyledTabTitleWrapper
                isSelected={activeTab === index}
                key={index}
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
        <>{!isLoading && renderEventData(eventData)}</>
      </StyledTabContentContainer>
    </StyledEventScheduleTabContainer>
  );
};

export default EventScheduleTab;
