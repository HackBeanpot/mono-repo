import { TabInfo, EventItem, Tag, TeamProps, ResourceBoxProps } from './types';
import beginnerResourceGuide from '../images/beginnerResourceGuide.png'
import projectGuide from '../images/projectGuide.png'
import projectDemoGuide from '../images/projectDemoGuide.png'
import judgingProcessGuide from '../images/judgingProcessGuide.png'

const liveSiteTabInfo: TabInfo[] = [
  { name: 'Schedule', link: '/#schedule' },
  { name: 'Mentors', link: '/#mentors' },
  { name: 'Resources', link: '/#resources' },
  { name: 'Team', link: '/#team' },
  { name: 'Judging', link: '/judging' }
];

const resources: ResourceBoxProps[] = [
  {
    label: 'Beginner Resource Guide',
    link: 'https://docs.google.com/document/d/1ogiTG4qaefJpdYJc05tx0jWiPZGtozIOzJcyu7a2aX8/edit?usp=sharing',
    image: beginnerResourceGuide
  },
  {
    label: 'Project Guide',
    link: 'https://docs.google.com/document/d/1kob1aZ6VLQ0li-66onzF09WxdI9sjHPI-zHznm353tk/edit?usp=sharing',
    image: projectGuide
  },
  {
    label: 'Project Demo Guide',
    link: '',
    image: projectDemoGuide
  },
  {
    label: 'Judging Process Guide',
    link: '',
    image: judgingProcessGuide
  }
];

const TeamInfo: TeamProps[] = [
  { name: 'Team Tatooine', points: 0, index: 0 },
  { name: 'Team Essos', points: 0, index: 1 },
  { name: 'Team SI Wong', points: 0, index: 2 },
  { name: 'Team Arrakis', points: 0, index: 3 },
  { name: 'Team Desert Biome', points: 0, index: 4 }
];

const onePointCodes = [
  'FIGMAAZING',
  'GITREADYTOPARTY',
  'WEBDEVISFUN',
  'LSINTODS',
  'GIVEMEAJOB',
  'COREPARTY',
  'THREEJSFUN',
  'LIVEONWEB',
  'FEEDTHESOUL',
  'BETTERTHANCHATGPT',
  'NAMASTEAWAYFROMME',
  'ITSBETTERTOGETHER',
  'BIGBRAINTIME',
  'RISEANDSHINE',
  'BRAINSHOPS',
  'SUCCULENT',
  'DESERTDAWN',
  'REFRESHER',
  'GAMINGINTHEDUNES',
  'COOLBEANS',
  'LETSGETTHISDUNE',
  'STRETCHTHESC',
  'BRAINOFTHEPROJECT',
  'BONDWITHCORE'
];

const twoPointCodes = ['ECREWINTRO'];

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
    tags: [],
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
    tags: [Tag.toast],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis efficitur justo. Morbi in enim metus. Suspendisse id quam id mauris porttitor suscipit nec vel lacus. Mauris sit amet malesuada sapien. Nunc sagittis odio ut felis porttitor, id faucibus ipsum mollis. Vivamus tempor molestie ipsum, sed tincidunt neque porttitor sit amet. Quisque sit amet turpis pharetra, porta tellus sed, pharetra massa. Donec imperdiet et elit a feugiat. Nam egestas quam condimentum tellus maximus luctus. Aenean congue commodo volutpat. Praesent accumsan et odio non congue.'
  },

  {
    id: 4,
    time: '8:00 - 9:00 pm',
    eventType: 'Workshop',
    eventName: 'Intro to Figma',
    eventLocation: 'Workshop Zone B',
    tags: [],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis efficitur justo. Morbi in enim metus. Suspendisse id quam id mauris porttitor suscipit nec vel lacus. Mauris sit amet malesuada sapien. Nunc sagittis odio ut felis porttitor, id faucibus ipsum mollis. Vivamus tempor molestie ipsum, sed tincidunt neque porttitor sit amet. Quisque sit amet turpis pharetra, porta tellus sed, pharetra massa. Donec imperdiet et elit a feugiat. Nam egestas quam condimentum tellus maximus luctus. Aenean congue commodo volutpat. Praesent accumsan et odio non congue.'
  },

  {
    id: 5,
    time: '8:00 - 9:00 pm',
    eventType: 'Activity',
    eventName: 'Oasis Hula Hoop Contest',
    eventLocation: 'Activity Zone B',
    tags: [Tag.beginner, Tag.facebook],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis efficitur justo. Morbi in enim metus. Suspendisse id quam id mauris porttitor suscipit nec vel lacus. Mauris sit amet malesuada sapien. Nunc sagittis odio ut felis porttitor, id faucibus ipsum mollis. Vivamus tempor molestie ipsum, sed tincidunt neque porttitor sit amet. Quisque sit amet turpis pharetra, porta tellus sed, pharetra massa. Donec imperdiet et elit a feugiat. Nam egestas quam condimentum tellus maximus luctus. Aenean congue commodo volutpat. Praesent accumsan et odio non congue.'
  }
];

export {
  liveSiteTabInfo,
  TimeLeft,
  eventItemInfo,
  TeamInfo,
  resources,
  onePointCodes,
  twoPointCodes
};
