import { PastProjectData, AboutSectionData, FaqData } from './types';

export const aboutSectionData: AboutSectionData[] = [
  {
    title: 'Community',
    description:
      'Connect with fellow students and our partners in the tech community. Make connections that will last a lifetime!'
  },
  {
    title: 'Exploration',
    description:
      'Discover new ideas and technologies with the help of our experienced mentors, or learn new skills at our beginner-friendly workshops!'
  },
  {
    title: 'Growth',
    description:
      'Expand beyond your horizons and grow your current skill set in a safe and supportive environment.'
  }
];

export const FaqSectionData: FaqData[] = [
  {
    id: 1,
    question: 'How do I apply to HackBeanpot?',
    answer:
      'Applications for HackBeanpot 2022 will be open from November 15th - January 14th. Apply through our registration portal here! Keep an eye in your inbox for acceptance details in mid-January.'
  },

  {
    id: 2,
    question: 'Will HackBeanpot 2023 be in-person or virtual?',
    answer:
      'Due to the increased transmissibility of the Omicron variant of COVID-19, HackBeanpot will be virtual again this year to keep our attendees as safe as possible. We know that many hackers were looking forward to an in-person event, so we plan to have some in-person activities for people to meet each other, like our outdoor Sunrise Walk.'
  },

  {
    id: 3,
    question: 'When and where is HackBeanpot 2023',
    answer:
      'HackBeanpot 2022 will be held virtually on the weekend of February 11-13.'
  },
  {
    id: 4,
    question: 'What is HackBeanpot doing about COVID safety?',
    answer:
      'Even as a mostly virtual event, there will be still some in-person elements such as our Swag Outposts or Sunrise Walk. We will make sure to maintain the appropriate COVID-19 protocols.'
  },

  {
    id: 5,
    question: 'How long is the event?/What will the schedule be like?',
    answer:
      'The event will start around 7 pm EST on Friday, Feb 11th and will go until around Sunday, Feb 13th 3:30 pm EST. (Note: These times are tentative and may change closer to the event date). Throughout the weekend, there will be different workshops, activities, and opportunities to network with sponsors. A more detailed schedule will be released about a month out from the event. Sign up for our newsletter to stay updated!'
  },

  {
    id: 6,
    question: 'What kind of projects can I work on?',
    answer:
      'The Milky Way is your oyster! We encourage you to work on anything you want including websites, mobile apps, data visualizations, games, etc. Our prizes are meant to be very broad so that the direction of your project can be determined by your passions and what you want to learn! Feel free to check out some of our past projects for inspiration. Please note that you are free to work on past projects if you want to, but these will not qualify for prizes as this is unfair to other hackers!'
  },

  {
    id: 7,
    question: 'How do I find a team?/Are there limits on team size?plus sign',
    answer:
      'There will be a team formation activity at the beginning of the hackathon where you can meet your dream team! Another way of finding team members is through our event Slack, which will be sent out one week before the event. You are also free to attend with a premade team. While there isn’t a limit on team sizes, our prizes are budgeted for teams of up to 5 members.'
  },

  {
    id: 8,
    question: 'Who can attend HackBeanpot?',
    answer:
      'HackBeanpot is open to all high school, undergraduate, and graduate school students. You must be 13 years or older to apply. Please note that any student under 18 years old will have to have a form signed by a parent or guardian in order to attend. All attendees must abide by our Code of Conduct.'
  },

  {
    id: 9,
    question:
      "I don't have a lot of programming experience. Are hackathons for me?",
    answer:
      'Yes, people of all experience levels attend HackBeanpot, including those who have never coded before! We plan to have many resources to help beginner hackers with their projects such as a tech starter pack with tutorials on how to get started, common tools used at hackathons, and how to resolve common debugging issues. You can also attend several beginner workshops and talks to help you learn about new skills and technologies throughout the weekend! If you get stuck, we have plenty of mentors to provide assistance. We care about fostering a fun hacking environment rather than a competitive one, and our goal is to promote learning in an inclusive community.'
  },

  {
    id: 10,
    question: 'How much does it cost? Will there be swag?',
    answer:
      'HackBeanpot is completely free for all our attendees! We will also be giving out free space-themed swag 👀🚀 as well as have lots of yummy meals and snacks!'
  },

  {
    id: 11,
    question: 'What will I need to bring',
    answer:
      'To have a great time at HackBeanpot 2022, you should prepare your workspace with your computer, scrap paper for ideation, any hardware you may want for your hack and your best space cadet energy to learn and create new things! Stay tuned for an Astronaut Training Manual in your inbox sent out closer to the event with more details.'
  }
];

export const pastProjectsData: PastProjectData[] = [
  {
    title: 'Inky the Black Hole Pet, 2022',
    members: 'by Rachael Cheung, Euann Gu, Jessica Luo',
    description:
      'Inky is a desktop pet! He can perform different actions: be dragged around, sleep, eat, etc.',
    btnLink: 'https://devpost.com/software/inky-the-black-hole-pet'
  },

  {
    title: 'Swaple, 2022',
    members: 'by Bob Zheng, Tze Zhe Brandon Lim, Nathan Kim, Daniel Ostapenko',
    description:
      'A parody of wordle, but you swap letters from a list of words instead! Try and complete the game in as few moves as possible.',
    btnLink: 'https://brandonlim8890.github.io/wordle_variation/'
  },

  {
    title: 'Oh Duck!, 2022',
    members: 'by Karyna Yen',
    description:
      "'Oh, Duck!' is a chrome chrome extension that replaces profane words with a duck emoji.",
    btnLink: 'https://devpost.com/software/oh-duck'
  }
];
