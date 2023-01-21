import { TabInfo, EventItem, TeamProps } from './types';

const liveSiteTabInfo: TabInfo[] = [
  { name: 'Schedule', link: '/#schedule' },
  { name: 'Mentors', link: '/#mentors' },
  { name: 'Challenges', link: '/#challenges' },
  { name: 'Resources', link: '/#resources' },
  { name: 'Team', link: '/#team' },
  { name: 'Judging', link: '/judging' }
];

const TeamInfo: TeamProps[] = [
  { name: 'TEAM TATOOINE', points: 100, index: 0 },
  { name: 'TEAM ESSOS', points: 82, index: 1 },
  { name: 'TEAM SI WONG', points: 66, index: 2 },
  { name: 'TEAM ARRAKIS', points: 33, index: 3 },
  { name: 'TEAM DESSERT BIOME', points: 0, index: 4 }
];

interface TimeLeft {
  timeType: string;
  value: number;
}

const eventItemInfo: EventItem[] = [
  {
    time: '5:00 - 6:00 pm',
    eventType: 'Launch Event',
    eventName: 'Opening Ceremony',
    eventLocation: 'The Hub'
  },

  {
    time: '6:00 - 7:00 pm',
    eventType: 'Tech Talk',
    eventName: 'Intro to React',
    eventLocation: 'Workshop Zone A'
  },

  {
    time: '7:00 - 8:00 pm',
    eventType: 'Dinner',
    eventName: 'Dinner Pizza Party',
    eventLocation: 'Canteen'
  },

  {
    time: '8:00 - 9:00 pm',
    eventType: 'Workshop',
    eventName: 'Intro to Figma',
    eventLocation: 'Workshop Zone B'
  }
];

export { liveSiteTabInfo, TimeLeft, eventItemInfo, TeamInfo };
