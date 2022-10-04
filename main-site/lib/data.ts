import { AboutSectionData } from './types';

import { nanoid } from 'nanoid';

export const aboutSectionData: AboutSectionData[] = [
  {
    id: nanoid(),
    title: 'Community',
    description:
      'Connect with fellow students and our partners in the tech community. Make connections that will last a lifetime!'
  },
  {
    id: nanoid(),
    title: 'Exploration',
    description:
      'Discover new ideas and technologies with the help of our experienced mentors, or learn new skills at our beginner-friendly workshops!'
  },
  {
    id: nanoid(),
    title: 'Growth',
    description:
      'Expand beyond your horizons and grow your current skill set in a safe and supportive environment.'
  }
];
