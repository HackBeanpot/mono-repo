import { TabInfo } from './types';

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

export { liveSiteTabInfo, TimeLeft };
