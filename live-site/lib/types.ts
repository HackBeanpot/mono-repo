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

