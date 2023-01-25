import { TabInfo, EventItem, Tag } from './types';

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

const eventItemInfo: EventItem[] = [
  {
    id: 1,
    time: '5:00 - 6:00 pm',
    eventType: 'Launch Event',
    eventName: 'Opening Ceremony',
    eventLocation: 'The Hub',
    tags:[ Tag.beginner,Tag.workshop],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis efficitur justo. Morbi in enim metus. Suspendisse id quam id mauris porttitor suscipit nec vel lacus. Mauris sit amet malesuada sapien. Nunc sagittis odio ut felis porttitor, id faucibus ipsum mollis. Vivamus tempor molestie ipsum, sed tincidunt neque porttitor sit amet. Quisque sit amet turpis pharetra, porta tellus sed, pharetra massa. Donec imperdiet et elit a feugiat. Nam egestas quam condimentum tellus maximus luctus. Aenean congue commodo volutpat. Praesent accumsan et odio non congue.'
  },

  {
    id: 2,
    time: '6:00 - 7:00 pm',
    eventType: 'Tech Talk',
    eventName: 'Intro to React',
    eventLocation: 'Workshop Zone A',
    tags: [Tag.beginner],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis efficitur justo. Morbi in enim metus. Suspendisse id quam id mauris porttitor suscipit nec vel lacus. Mauris sit amet malesuada sapien. Nunc sagittis odio ut felis porttitor, id faucibus ipsum mollis. Vivamus tempor molestie ipsum, sed tincidunt neque porttitor sit amet. Quisque sit amet turpis pharetra, porta tellus sed, pharetra massa. Donec imperdiet et elit a feugiat. Nam egestas quam condimentum tellus maximus luctus. Aenean congue commodo volutpat. Praesent accumsan et odio non congue.'
  },

  {
    id: 3,
    time: '7:00 - 8:00 pm',
    eventType: 'Dinner',
    eventName: 'Dinner Pizza Party',
    eventLocation: 'Canteen',
    tags: [Tag.workshop],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis efficitur justo. Morbi in enim metus. Suspendisse id quam id mauris porttitor suscipit nec vel lacus. Mauris sit amet malesuada sapien. Nunc sagittis odio ut felis porttitor, id faucibus ipsum mollis. Vivamus tempor molestie ipsum, sed tincidunt neque porttitor sit amet. Quisque sit amet turpis pharetra, porta tellus sed, pharetra massa. Donec imperdiet et elit a feugiat. Nam egestas quam condimentum tellus maximus luctus. Aenean congue commodo volutpat. Praesent accumsan et odio non congue.'
  },

  {
    id: 4,
    time: '8:00 - 9:00 pm',
    eventType: 'Workshop',
    eventName: 'Intro to Figma',
    eventLocation: 'Workshop Zone B',
    tags: [Tag.meal],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis efficitur justo. Morbi in enim metus. Suspendisse id quam id mauris porttitor suscipit nec vel lacus. Mauris sit amet malesuada sapien. Nunc sagittis odio ut felis porttitor, id faucibus ipsum mollis. Vivamus tempor molestie ipsum, sed tincidunt neque porttitor sit amet. Quisque sit amet turpis pharetra, porta tellus sed, pharetra massa. Donec imperdiet et elit a feugiat. Nam egestas quam condimentum tellus maximus luctus. Aenean congue commodo volutpat. Praesent accumsan et odio non congue.'
  }
];

export { liveSiteTabInfo, TimeLeft, eventItemInfo };
