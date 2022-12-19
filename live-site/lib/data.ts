import { TabInfo, StyledEventItemProps } from './types';


const liveSiteTabInfo: TabInfo[] = [
  { name: 'Schedule', link: '#schedule' },
  { name: 'Mentors', link: '#mentors' },
  { name: 'Challenges', link: '#challenges' },
  { name: 'Resources', link: '#resources' },
  { name: 'Team', link: '#team' }
];

interface TimeLeft {
  timeType: string;
  value: number;
}


const eventItemInfo: StyledEventItemProps[] = [
  { time: '5:00 - 6:00 pm',
    eventType: 'launch event',
    eventName: 'Opening Ceremony',
    eventLocation: 'The Hub'},


];











export { liveSiteTabInfo, TimeLeft,eventItemInfo };

