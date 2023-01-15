import { EventMockData } from '../components/event-schedule-section/EventScheduleMockData';

export interface TabInfo {
  name: string;
  link: string;
}

export interface ResourceBoxProps {
  label: string;
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
export interface EventItemTagProps{
  type:string
}

export interface StyledTagAndTagTextProps{
  type:string
}

export interface EventItem {
  id: number
  time: string;
  eventType: string;
  eventName: string;
  eventLocation: string;
  description: string;
  meal?: boolean;
  beginner?: boolean;
  workshop? : boolean;
  actionItem?:boolean;
  everyone?: boolean;
  sponsor?: boolean;
  social?: boolean;
}

export interface EventItemProps {
  eventItem : EventItem;
}