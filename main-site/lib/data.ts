import { AboutSectionData } from './types';

import { nanoid } from 'nanoid';

export const aboutSectionData: AboutSectionData[] = [
  {
    id: nanoid(),
    title: 'Community',
    description:
      'Connect with fellow students and our partners in the Boston tech community. Build connections that will last for lightyears!'
  },
  {
    id: nanoid(),
    title: 'Exploration',
    description:
      'Discover new ideas and technologies (and maybe even galaxies?!) with the help of experienced mentors.'
  },
  {
    id: nanoid(),
    title: 'Growth',
    description:
      'Expand beyond your horizons and grow your current skill set in a safe and supportive environment.'
  }
];
