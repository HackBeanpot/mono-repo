import { EventMockData } from '../components/event-schedule-section/EventScheduleMockData';

export interface TabInfo {
  name: string;
  link: string;
}

export interface ResourceBoxProps {
  label: string;
}

export interface JudgingScheduleWelcomeProps {
  schedulePersonType: string;
}

export interface UpcomingEvent {
  id: number;
  header: string;
  time: string;
  body: string;
}

export interface EventProps {
  eventInfo: UpcomingEvent;
}

export interface DesktopMultiEventsProps {
  events: UpcomingEvent[];
}

export interface EventScheduleTabProps {
  tabs: EventMockData[];
}

export interface StyledTabTitleWrapperProps {
  isSelected: boolean;
}

export interface EventItem {
  time: string;
  eventType: string;
  eventName: string;
  eventLocation: string;
}

export interface EventItemProps {
  eventItem: EventItem;
}

export interface MentorInfo {
  name: string;
  company: string;
  position: string;
  imageUrl: string;
  expertise: string[];
  virtual: boolean;
}

export interface StyledCactusButtonsProps {
  isToggled: boolean;
}
