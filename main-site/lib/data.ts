import {
  PastProjectData,
  AboutSectionData,
  FaqData,
  TestimonialData,
  EventsCalendarData
} from './types';

import WiseWallet from '../images/WiseWalletImage.jpg';
import SNAPpy from '../images/snappyImage2.jpg';
import Page14 from '../images/Page14Image.jpg';
import FreshFarm from '../images/FreshFarmImage.jpg';
import FormFusion from '../images/FormFusionImage.jpg';
import FeedTheDesert from '../images/FeedTheDesertImage.jpg';
import karyna from '../../shared-ui/images/Karyna.png';
import jimin from '../../shared-ui/images/Jimin.png';
import spencer2 from '../../shared-ui/images/spencer2.png';
import group from '../../shared-ui/images/group.png';
import intuitLogo from '../images/intuitLogo.png';
import microsoftLogoPadded from '../images/microsoftLogoPadded.png';
import woodMackenzieLogo from '../images/woodMackenzieLogo.png';
import SchoolofFish from '../images/school-fish.svg'

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
      'Apply through our application portal at apply.hackbeanpot.com! Keep an eye in your inbox for acceptance details in mid-January. Applications close January 20th, 2023.'
  },

  {
    id: 2,
    question: 'Will HackBeanpot 2023 be in-person or virtual?',
    answer:
      'HackBeanpot 2023 will be in-person! We will be requiring proof of vaccination for attendees, and we’re super excited to see everyone in person again!'
  },

  {
    id: 3,
    question: 'When and where is HackBeanpot 2023?',
    answer:
      'HackBeanpot 2023 will take place on February 10th-12th at the Wood Mackenzie (formerly known as Power Advocate) office building at 179 Lincoln St, Boston, MA, 02111!  We are so excited to be back in person for the first time since 2020, and we ask that all hackers review and abide by the Code of Conduct during the event.'
  },
  {
    id: 4,
    question: 'What is HackBeanpot doing about COVID safety?',
    answer:
      'HackBeanpot is committed to ensuring that hackers feel safe and activities comply with local COVID-19 policies. For this reason, we ask that hackers upload proof of vaccination when asked after registration and encourage everyone to wear masks during the event as it is indoors.'
  },

  {
    id: 5,
    question: 'How long is the event? / What will the schedule be like?',
    answer:
      'The event will last an entire weekend in February, starting at around 7pm EST the Friday leading into the weekend and continuing until 3:30pm EST on Sunday. Please note that these times are tentative and subject to change as we get closer to the event date - please check our Instagram (@hackbeanpot) for the most updated information! Throughout the weekend, there will be different workshops, activities, and opportunities to network with sponsors. A more detailed schedule will be released about a month out from the event. Sign up for our newsletter to stay updated!'
  },

  {
    id: 6,
    question: 'What kind of projects can I work on?',
    answer:
      'The desert is yours to explore! We encourage you to work on anything you want including websites, mobile apps, data visualizations, games, etc. Our prizes are meant to be very broad so that the direction of your project can be determined by your passions and what you want to learn! Feel free to check out some of our past projects for inspiration. Please note that you are free to work on past projects if you want to, but these will not qualify for prizes as this is unfair to other hackers!'
  },

  {
    id: 7,
    question: 'How do I find a team? / Are there limits on team size?',
    answer:
      'There will be a team formation activity at the beginning of the hackathon where you can meet your dream team! Another way of finding team members is through our event Slack, which will be sent out one week before the event. You are also free to attend with a premade team. While there isn’t a limit on team sizes, our prizes are budgeted for teams of up to 5 members.'
  },

  {
    id: 8,
    question: 'Who can attend HackBeanpot?',
    answer:
      'HackBeanpot is open to all high school, undergraduate, and graduate school students. You must be 13 years or older to apply. All attendees must abide by our Code of Conduct.'
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
      'HackBeanpot is completely free for all our attendees, including meals and snacks! We will also be giving out free swag so you can ~ thrive in our desert oasis ~!'
  },

  {
    id: 11,
    question: 'What will I need to bring?',
    answer:
      'To have a great time at HackBeanpot 2023, you should arrive with your laptop and a curious mindset fit for an explorer! Stay tuned for a Desert Exploration Guide in your inbox sent out closer to the event with more details.'
  }
];

export const testimonialSectionData: TestimonialData[] = [
  {
    id: 0,
    author: 'Karyna Yen',
    year: "Northeastern '25",
    quote:
      '"I had a ton of fun at HackBeanpot! We made a Chrome extension that censored inappropriate language on the internet. My favorite part was when one of my teammates got an animated duck to quack when clicking on the extension icon!"',
    image: karyna
  },
  {
    id: 1,
    author: 'Ji-min Kim',
    year: "Northeastern '22",
    quote:
      '"I joined the astronaut bootcamp event in 2021, and I wanted to highlight my great experience there. I was able to connect with friendly people, learn about web development through workshops, and have free pizza for lunch! It was a really unique experience I had during the weekend, and this event also gave me motivation for me to join my first hackathon event in bostonhacks!"',
    image: jimin
  },
  {
    id: 2,
    author: 'Spencer Shao',
    year: "Northeastern '24",
    quote:
      '"I loved the collaboration between me, my teammates, and the amazing mentors! I really felt like it was a very welcoming environment for me to prioritize learning and having fun over 3 days. Prior to this hackathon I had never touched any kind of React or front-end web development but I came out of it feeling accomplished, having achieved a working website!"',
    image: spencer2
  },

  {
    id: 3,
    author: 'Raisa Bhuiyan',
    year: "Northeastern '25",
    quote:
      '"I enjoyed working with my teammates and trying to debug our mistakes. Debugging is a lot more fun when you have people doing it with you."',
    image: group
  }
];

export const sponsorTestimonialData: TestimonialData[] = [
  {
    id: 0,
    author: 'Rob Antczak',
    company: 'CTO, Wood Mackenzie',
    image: woodMackenzieLogo,
    quote:
      '"If I could describe HBP in one word - invigorating. We had a lot of folks who weren’t  sure what the experience would be like, and they left feeling united - really energized and really impressed with the amount of talent that was on display as well as the  atmosphere."'
  },
  {
    id: 1,
    author: 'Emily',
    company: 'Recruiter, Intuit',
    image: intuitLogo,
    quote:
      '"The energy that people have at HackBeanpot is awesome, and the talent is very engaged"'
  },
  {
    id: 2,
    author: 'Sanders',
    company: 'Mentor, Microsoft',
    image: microsoftLogoPadded,
    quote:
      '"HackBeanpot is the best hackathon I’ve been to, hands down. Being a mentor is super rewarding because I got to see a ton of projects go from the idea phase to a working demo."'
  },
  {
    id: 3,
    author: 'William Guo',
    company: 'Co-op Experiential Lead, WoodMackenzie',
    image: woodMackenzieLogo,
    quote:
      '"I’ve talked to every single project group that participated in the hackathon, observing their capabilities to explain and communicate their project to an outsider – the very things we look for at WoodMac"'
  }
];

export const pastProjectsData: PastProjectData[] = [
  {
    title: 'SNAPpy',
    members:
      'by Jacob Kline, Andrew Caplan, Daniel Ostapenko, and Emery Jacobowitz',
    description:
      'Worked on a combination of front-end and backend features by creating API pipelines which connect to the user interface. In addition to Python, utilized JS, which was new for them.',
    btnLink: 'https://devpost.com/software/snappy-rb81ku',
    image: SNAPpy,
    award: '🏆 Fighting the Drought Award'
  },

  {
    title: 'FreshFarm',
    members: 'by Kat Dizon, Allen Lin, Julia Lee, Daniel Kamen, and Kelly Lau',
    description:
      "We get really upset seeing so much food going to waste on campus. This got us to think about how food is being wasted all throughout our community, and not just on the table. This project, FreshFarm, focuses on minimizing food waste right at the source. Fresh produce doesn't grow perfectly, so when grocery stores, markets, and restaurants demand perfect produce, 33% of food goes to waste due to small imperfections.",
    btnLink: 'https://devpost.com/software/freshfarm',
    image: FreshFarm,
    award: '🏆 Best Dunes of the Sahara Award'
  },

  {
    title: 'FormFusion',
    members: 'by Aditya Boddepalli',
    description:
      'Our web app leverages the power of AI to analyze and improve your workout routine. Users upload recorded exercise videos, which are processed by the proprietary machine learning API that we wrote. This technology provides instant feedback on form, enabling users to optimize their workouts. The annotated videos, including information about joint angles, are then displayed within the app for easy review and tracking of progress.',
    btnLink: 'https://devpost.com/software/formfusion',
    image: FormFusion,
    award: '🏆 Surviving the Desert Award'
  },

  {
    title: 'Page 14',
    members: 'by Mandy Rodriques',
    description:
      'A novel dating app perfectly tailored for our literary-loving folk, focusing on the normalization of "gaga" over books, being blissfully queer, etc Page 14 gives users a safe space to smile.',
    btnLink: 'https://devpost.com/software/page-14',
    image: Page14,
    award: '🏆  Fun in the Sun Award'
  },

  {
    title: 'Feed the Desert',
    members:
      'by Euann Gu, Mallory Gilligan, Chris Wyatt, Danny Rollo, Rachael Cheung and Madeline Zhang',
    description:
      'Feed the Desert illustrates a clear, user-friendly data-map highlighting spaces in local communities that can be further developed to provide equitable infrastructure and access to necessary resources.',
    btnLink: 'https://devpost.com/software/feed-the-desert',
    image: FeedTheDesert,
    award: '🏆  Rookie of the Year Award'
  },

  {
    title: 'WiseWallet',
    members: 'by Alyssa Mui, Justin Pong, and Nelson Dong',
    description:
      'WiseWallet is a budgeting Chrome Extension designed to help you keep track of your expenses and stop making frivolous online purchases.',
    btnLink: 'https://devpost.com/software/wisewallet-2iqrl8',
    image: WiseWallet,
    award: '🏆  Most Likely to Quest Award'
  }
];

export const eventsCalendarData: EventsCalendarData[] = [
  {
    title: 'Event 1',
    subtitle: 'Sub-intro',
    punchline:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec dolor quam, tincidunt sed dapibus at, molestie nec libero. 
    Sed et commodo nibh. Nulla in ullamcorper tortor, et auctor elit.`,
    prerequisites: 'NONE',
    date: new Date(2022, 10, 16),
    time: '1:30pm-3pm',
    location: 'Northeastern University',
    room: 'Ryder Hall 253',
    image: SchoolofFish
  },

  {
    title: 'Event 1',
    subtitle: 'Sub-intro',
    punchline:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec dolor quam, tincidunt sed dapibus at, molestie nec libero. 
    Sed et commodo nibh. Nulla in ullamcorper tortor, et auctor elit.`,
    prerequisites: 'NONE',
    date: new Date(2022, 10, 16),
    time: '1:30pm-3pm',
    location: 'Northeastern University',
    room: 'Ryder Hall 253'
  },
  {
    title: 'Event 1',
    subtitle: 'Sub-intro',
    punchline:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec dolor quam, tincidunt sed dapibus at, molestie nec libero. 
    Sed et commodo nibh. Nulla in ullamcorper tortor, et auctor elit.`,
    prerequisites: 'NONE',
    date: new Date(2022, 10, 16),
    time: '1:30pm-3pm',
    location: 'Northeastern University',
    room: 'Ryder Hall 253'
  },
  // {
  //   title: 'Event 1',
  //   subtitle: 'Sub-intro',
  //   punchline:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  //   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  //   Donec dolor quam, tincidunt sed dapibus at, molestie nec libero. 
  //   Sed et commodo nibh. Nulla in ullamcorper tortor, et auctor elit.`,
  //   prerequisites: 'NONE',
  //   date: new Date(2022, 10, 16),
  //   time: '1:30pm-3pm',
  //   location: 'Northeastern University',
  //   room: 'Ryder Hall 253'
  // }
];
