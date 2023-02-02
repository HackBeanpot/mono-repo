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
  // Friday
  {
    time: '7:00 - 8:00 pm',
    eventType: 'Launch Event',
    eventName: 'Opening Ceremony',
    eventLocation: 'The Hub'
  },

  {
    time: '8:30 - 9:00 pm',
    eventType: 'Social/Fun Activity',
    eventName: 'Cabin Kickoff',
    eventLocation: 'Workshop Zone A'
  },

  {
    time: '9:00 - 9:30 pm',
    eventType: 'Dinner',
    eventName: 'Team Formation Party',
    eventLocation: 'Canteen'
  },

  {
    time: '9:30 - 10:00 pm',
    eventType: 'Workshop',
    eventName: 'Intro to Git',
    eventLocation: 'Workshop Zone B'
  },

  {
    time: '10:30 - 11:30 pm',
    eventType: 'Workshop',
    eventName: 'Intro to Data Science',
    eventLocation: 'Workshop Zone B'
  },

  {
    time: '10:30 - 11:30 pm',
    eventType: 'Workshop',
    eventName: 'Intro to Web Dev / React',
    eventLocation: 'Workshop Zone B'
  },

  {
    time: '6:00 - 7:00 am',
    eventType: 'Social/Fun Activity',
    eventName: 'Sunrise Walk',
    eventLocation: 'Workshop Zone B'
  },


  // Saturday   
  {
    time: '9:30 - 10:30 am',
    eventType: 'Workshop',
    eventName: 'Intro to Figma',
    eventLocation: 'Workshop Zone B'
  },

  {
    time: '11:30 - 12:30 am',
    eventType: 'Workshop',
    eventName: 'Intro to Machine Leaning',
    eventLocation: 'Workshop Zone B'
  },

  {
    time: '2:00 - 3:00 pm',
    eventType: 'Social/Fun Activity',
    eventName: 'Succulent Painting',
    eventLocation: 'Workshop Zone B'
  },

  {
    time: '5:00 - 6:00 pm',
    eventType: 'Workshop',
    eventName: 'HackBeanpot Core Panel',
    eventLocation: 'Workshop Zone B'
  },

  {
    time: '6:00 - 7:00 pm',
    eventType: 'Social/Fun Activity',
    eventName: 'Quench Your Thirst',
    eventLocation: 'Workshop Zone B'
  },

  {
    time: '8:00 - 9:00 pm',
    eventType: 'Social/Fun Activity',
    eventName: 'Game Night',
    eventLocation: 'Workshop Zone B'
  },

  {
    time: '9:00 - 10:00 pm',
    eventType: 'Workshop',
    eventName: '3D Web Development',
    eventLocation: 'Workshop Zone B'
  },

  {
    time: '10:00 - 11:00 pm',
    eventType: 'Workshop',
    eventName: 'Hosting a website',
    eventLocation: 'Workshop Zone B'
  },

  // Sunday

  {
    time: '7:00 - 8:00 am',
    eventType: 'Social/Fun Activity',
    eventName: 'Yoga and Mindfulness',
    eventLocation: 'Workshop Zone B'
  },

  {
    time: '12:30 - 1:30 pm',
    eventType: 'Workshop',
    eventName: 'Resumes and Internships',
    eventLocation: 'Workshop Zone B'
  },
  
  {
    time: '1:30 - 2:30 pm',
    eventType: 'Workshop',
    eventName: 'Closing Ceremony',
    eventLocation: 'Workshop Zone B'
  },



];

export { liveSiteTabInfo, TimeLeft, eventItemInfo };
