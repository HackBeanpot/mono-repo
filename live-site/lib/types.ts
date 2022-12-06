export interface TabInfo {
  name: string;
  link: string;
}

export interface ResourceBoxProps {
  label: string;
}

export interface UpcomingEvent {
  header: string;
  time: string;
  body: string;
}

export interface ComingUpProps {
  eventsList: UpcomingEvent[];
}

export interface EventProps {
  eventInfo: UpcomingEvent;
}

