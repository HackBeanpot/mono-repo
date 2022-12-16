import React, { useState } from 'react';
import { EventScheduleTabProps } from '../../lib/types';

import {
  StyledTabTitleWrapper,
  StyledEventScheduleTabsContainer,
  StyledTabTitle,
  StyledTabContent,
  StyledTabContentContainer,
  StyledEventScheduleTabContainer
} from './EventScheduleTab.styles';

const EventScheduleTab: React.FC<EventScheduleTabProps> = (tabs) => {
  const [activeTab, setActiveTab] = useState(0);
  const setActiveTabIndex = (index: number): void => {
    setActiveTab(index);
  };
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
      </StyledTabContentContainer>
    </StyledEventScheduleTabContainer>
  );
};

export default EventScheduleTab;
