import { EventMockData } from '../components/event-schedule-section/EventScheduleMockData';

export interface TabInfo {
  name: string;
  link: string;
}

export interface ResourceBoxProps {
  label: string;
  link: string;
}

export interface JudgingScheduleWelcomeProps {
  schedulePersonType: string;
}

export interface UpcomingEvent {
  id: number;
  header: string;
  time: string;
  display_start_time: string;
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
export interface EventItemTagProps {
  tagType: string;
}

export interface StyledTagAndTagTextProps {
  tagType: string;
}

export interface styledArrowProps {
  isOpen?: boolean;
}

export enum Tag {
  meal = 'Meal',
  beginner = 'Beginner-Friendly',
  workshop = 'Workshop',
  actionItem = 'Action Item',
  everyone = 'Everyone',
  sponsor = 'Sponsor Event',
  social = 'Social/Fun Event'
}
export interface EventItem {
  id: number;
  time: string;
  eventType: string;
  eventName: string;
  eventLocation: string;
  description: string;
  tags: Tag[];
}

export interface EventItemProps {
  eventItem: EventItem;
}

export interface RaffleEntry {
  name: string;
  cabin: string;
  eventCode: string;
}

export interface TeamProps {
  points: number;
  name: string;
  position?: number;
  index: number;
}

export interface TeamRaceProps {
  teams: TeamProps[];
}

export interface TeamCarProps {
  points: number;
  index: number;
}

export interface MentorInfo {
  name: string;
  company: string;
  position: string;
  imageUrl: string;
  expertise: string[];
  virtual: boolean;
  shiftStart: string[];
  shiftEnd: string[];
  shifts: string[];
}

export interface StyledCactusButtonsProps {
  isToggled: boolean;
}

export interface MentorPopupProps {
  mentor?: MentorInfo;
  onClose: () => void;
}
