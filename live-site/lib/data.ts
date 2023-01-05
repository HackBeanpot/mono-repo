import { TabInfo, EventItem } from './types';

const liveSiteTabInfo: TabInfo[] = [
  { name: 'Schedule', link: '/#schedule' },
  { name: 'Mentors', link: '/#mentors' },
  { name: 'Challenges', link: '/#challenges' },
  { name: 'Resources', link: '/#resources' },
  { name: 'Team', link: '/#team' },
  { name: 'Judging', link: '/judging' }
];

interface TimeLeft {
  timeType: string;
  value: number;
}


const eventItemInfo: EventItem[] = [
  { time: '5:00 - 6:00 pm',
    eventType: 'Launch Event',
    eventName: 'Opening Ceremony',
    eventLocation: 'The Hub'},

    { time: '6:00 - 7:00 pm',
    eventType: 'Tech Talk',
    eventName: 'Intro to React',
    eventLocation: 'Workshop Zone A'},

    { time: '7:00 - 8:00 pm',
    eventType: 'Dinner',
    eventName: 'Dinner Pizza Party',
    eventLocation: 'Canteen'},

    { time: '8:00 - 9:00 pm',
    eventType: 'Workshop',
    eventName: 'Intro to Figma',
    eventLocation: 'Workshop Zone B'},
];

export { liveSiteTabInfo, TimeLeft,eventItemInfo };
