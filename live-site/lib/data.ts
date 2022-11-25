import { TabInfo } from './types';

const liveSiteTabInfo: TabInfo[] = [
  { name: 'Schedule', link: '#schedule' },
  { name: 'Mentors', link: '#mentors' },
  { name: 'Challenges', link: '#challenges' },
  { name: 'Resources', link: '#resources' },
  { name: 'Team', link: '#team' }
];

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}
export { liveSiteTabInfo, TimeLeft };
