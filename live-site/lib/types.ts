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
  tagType:string
}

export interface StyledTagAndTagTextProps{
  tagType:string
}

export interface styledArrowProps{
  isOpen?: boolean
}

export enum Tag{
  meal = "Meal",
  beginner = "Beginner-Friendly",
  workshop = "Workshop",
  actionItem = "Action Item",
  everyone = "Everyone",
  sponsor = "Sponsor Event",
  social = "Social/Fun Event"
}
export interface EventItem {
  id: number
  time: string;
  eventType: string;
  eventName: string;
  eventLocation: string;
  description: string;
  tags: Tag[];
}

export interface EventItemProps {
  eventItem : EventItem;
}