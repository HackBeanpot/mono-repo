import {
  PastProjectData,
  AboutSectionData,
  FaqData,
  TestimonialData,
  EventsCalendarData,
  CountdownProps
} from './types';

import ClosetCompanion from '../images/closet_companion.png';
import DiscountBytes from '../images/discount_bytes.png';
import FindingFishE from '../images/finding_fishe.jpg';
import LastMinute from '../images/last_minute.png';
import Maritime from '../images/maritime.jpeg';
import LetsLink from '../images/lets_link.jpeg';
import Futura from '../images/futura.png';
import Poqua from '../images/poqua.jpg';
import PerfectPantry from '../images/the_perfect_pantry.jpg';
import karyna from '../../shared-ui/images/Karyna.png';
import jimin from '../../shared-ui/images/Jimin.png';
import spencer2 from '../../shared-ui/images/spencer2.png';
import group from '../../shared-ui/images/group.png';
import intuitLogo from '../images/intuitLogo.png';
import microsoftLogoPadded from '../images/microsoftLogoPadded.png';
import woodMackenzieLogo from '../images/woodMackenzieLogo.png';
import Community from '../../shared-ui/images/communityShell.png';
import Exploration from '../../shared-ui/images/explorationShell.png';
import Growth from '../../shared-ui/images/growthShell.png';

export const aboutSectionData: AboutSectionData[] = [
  {
    id: 0,
    title: 'Community',
    description:
      'Connect with fellow students and our partners in the tech community. Make connections that will last a lifetime!',
    image: Community
  },
  {
    id: 1,
    title: 'Exploration',
    description:
      'Discover new ideas and technologies with the help of our experienced mentors, or learn new skills at our beginner-friendly workshops!',
    image: Exploration
  },
  {
    id: 2,
    title: 'Growth',
    description:
      'Expand beyond your horizons and grow your current skill set in a safe and supportive environment.',
    image: Growth
  }
];

export const FaqSectionData: FaqData[] = [
  {
    id: 1,
    question: 'When and where is HackBeanpot 2024?',
    answer:
      'HackBeanpot 2024 will take place on February 23rd-25th at Wood Mackenzie. The address is 179 Lincoln Street, Boston MA 02111'
  },

  {
    id: 2,
    question: 'Will HackBeanpot 2024 be in-person or virtual?',
    answer:
      'HackBeanpot 2024 will be in-person! We’re super excited to see everyone in person again!'
  },

  {
    id: 3,
    question: 'How long is the event?',
    answer:
      'The event will start on Friday, February 23rd at 6pm EST, and will lead into the weekend, continuing until 1:45 EST on Sunday.'
  },

  {
    id: 4,
    question: 'How do I apply to attend HackBeanpot?',
    answer:
      'Apply through our application portal at apply.hackbeanpot.com! Keep an eye in your inbox for acceptance details in mid-January. Applications close January 26th, 2024.'
  },

  {
    id: 5,
    question: 'What kind of projects can I work on?',
    answer:
      'The ocean is yours to explore! We encourage you to work on anything you want including websites, mobile apps, data visualizations, games, etc. Our prizes are meant to be very broad so that the direction of your project can be determined by your passions and what you want to learn! Feel free to check out some of our past projects for inspiration. Please note that you are free to work on past projects if you want to, but these will not qualify for prizes as this is unfair to other hackers!'
  },

  {
    id: 6,
    question: 'How do I find a team?',
    answer:
      'There will be a team formation activity at the beginning of the hackathon where you can meet your dream team! Another way of finding team members is through our event Slack, which will be sent out one week before the event. You are also free to attend with a premade team. While there isn’t a limit on team sizes, our prizes are budgeted for teams of up to 5 members.'
  },

  {
    id: 7,
    question: 'What prizes are there this year?',
    answer: 'We will be releasing more details about our prizes soon!'
  }

  // {
  //   id: 2,
  //   question: 'Will HackBeanpot 2023 be in-person or virtual?',
  //   answer:
  //     'HackBeanpot 2023 will be in-person! We will be requiring proof of vaccination for attendees, and we’re super excited to see everyone in person again!'
  // },

  // {
  //   id: 4,
  //   question: 'What is HackBeanpot doing about COVID safety?',
  //   answer:
  //     'HackBeanpot is committed to ensuring that hackers feel safe and activities comply with local COVID-19 policies. For this reason, we ask that hackers upload proof of vaccination when asked after registration and encourage everyone to wear masks during the event as it is indoors.'
  // },

  // {
  //   id: 8,
  //   question: 'Who can attend HackBeanpot?',
  //   answer:
  //     'HackBeanpot is open to all high school, undergraduate, and graduate school students. You must be 13 years or older to apply. All attendees must abide by our Code of Conduct.'
  // },

  // {
  //   id: 9,
  //   question:
  //     "I don't have a lot of programming experience. Are hackathons for me?",
  //   answer:
  //     'Yes, people of all experience levels attend HackBeanpot, including those who have never coded before! We plan to have many resources to help beginner hackers with their projects such as a tech starter pack with tutorials on how to get started, common tools used at hackathons, and how to resolve common debugging issues. You can also attend several beginner workshops and talks to help you learn about new skills and technologies throughout the weekend! If you get stuck, we have plenty of mentors to provide assistance. We care about fostering a fun hacking environment rather than a competitive one, and our goal is to promote learning in an inclusive community.'
  // },

  // {
  //   id: 10,
  //   question: 'How much does it cost? Will there be swag?',
  //   answer:
  //     'HackBeanpot is completely free for all our attendees, including meals and snacks! We will also be giving out free swag so you can ~ thrive in our desert oasis ~!'
  // }

  // {
  //   id: 11,
  //   question: 'What will I need to bring?',
  //   answer:
  //     'To have a great time at HackBeanpot 2023, you should arrive with your laptop and a curious mindset fit for an explorer! Stay tuned for a Desert Exploration Guide in your inbox sent out closer to the event with more details.'
  // }
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
    title: 'Poqua',
    members:
      'by Jalen Wu, Caleb Lee, Kyle Sung, Elaine Min, Dewi Kalis',
    description:
      'Poqua is an aquarium tank monitor software application that gives users a platform to simulate their aquarium when away from home.',
    btnLink: 'https://devpost.com/software/poqua',
    image: Poqua,
    award: '🏆 Pirate with the Most Booty - Best Overall'
  },

  {
    title: 'DiscountBytes',
    members:
      'by Shashwath Sunkum, B D S Aritra, Samuel Steinmetz, Sahil Shah',
    description:
      'DiscountBytes is an advanced web application designed specifically for restaurants, allowing them to dynamically adjust their menu pricing based on real-time customer traffic.',
    btnLink: 'https://devpost.com/software/discountbytes',
    image: DiscountBytes,
    award: '🏆 Silly Sailor - Most Creative / Goofy'
  },

  {
    title: 'Last Minute',
    members:
      'by Yujin Park, Justin Kim, Emily Ye, Oscar Fang',
    description:
      'Last Minute allows users to upload pictures of their leftover food, which can then be picked up by anyone in the area who needs a meal at the very last minute.',
    btnLink: 'https://devpost.com/software/last-minute-1midqp',
    image: LastMinute,
    award: '🏆 Hydro Homie - Social Impact / Sustainability'
  },

  {
    title: 'Closet Companion',
    members:
      'by Krystal Qiao',
    description:
      'Effortlessly curate outfits from your wardrobe, tailored to your unique taste. Say goodbye to fashion dilemmas and hello to organized and digital fashion solutions.',
    btnLink: 'https://devpost.com/software/closet-companion',
    image: ClosetCompanion,
    award: '🏆 Splash - Best Beginner'
  },

  {
    title: 'Maritime',
    members:
      'by Kaylee Wu, Mouad Tiahi, Kenneth Chap, Borui Chen',
    description:
      'Maritime is an iOS, Android, and web application that promotes recycling and mitigating waste, specifically in the world\'s oceans.',
    btnLink: 'https://devpost.com/software/maritime',
    image: Maritime,
    award: '🏆 Deep Dive Award - Most Technically Challenging'
  },

  {
    title: 'Futura',
    members:
      'by Zahra Wibisana, Ange Najam, Sania Hasan, Saidah Ly, Tina Ni',
    description:
      'Futura strives to normalize gender-aggregated data. We\'re dedicated to transforming urban planning by highlighting the gender-data gap. We aim to promote gender equality in urban planning and design.',
    btnLink: 'https://devpost.com/software/maritime',
    image: Futura,
    award: '🏆 Heart of the Sea - Best UI/UX'
  },

  {
    title: 'Let\'s Link',
    members:
      'by Russell Leung, Aahil Nishad, Michael Mehall, Donny Le, Andrew Zhu',
    description:
      'We\'re all busy people. Finding times to meet can be hard. Introduce Let\'s Link, all you do is connect your Google Calendar and we\'ll provide the most optimal times for you to meet with friends!',
    btnLink: 'https://devpost.com/software/maritime',
    image: LetsLink,
    award: '🏆 [MLH] Best Use of MongoDB Atlas'
  },


  {
    title: 'The Perfect Pantry',
    members:
      'Ayomide Addey, Arushi Aggarwal',
    description:
      'Have you ever looked at an empty pantry and wondered what you could make with such few ingredients? The Perfect Pantry can help you find out!',
    btnLink: 'https://devpost.com/software/the-perfect-pantry',
    image: PerfectPantry,
    award: '🏆 [MLH] Best Domain Name from GoDaddy Registry'
  },

  {
    title: 'Finding FishE',
    members:
      'by Alina Gonzalez, Alex Chen, Spring Yan, Dao Ho',
    description:
      'Finding FishE is a web app designed to help small business owners by providing them with the ability to determine if receipts represent suspicious spending on their company cards.',
    btnLink: 'https://devpost.com/software/finding-fishe',
    image: FindingFishE,
    award: '🏆 [MLH] Best DEI Hack sponsored by Fidelity'
  }
];

export const eventsCalendarData: EventsCalendarData[] = [
  {
    title: 'Intro to Web Development',
    subtitle: 'MiniHacks 1',
    punchline: 'Learn the basics of React.js!',
    description: 'Learn the basics of HTML, CSS, and JS',
    prerequisites: 'None!',
    date: convertToJSDate(2023, 10, 14),
    time: '12:30 pm-2 pm',
    location: 'West Village H',
    room: '104'
  },

  {
    title: 'Intro to React',
    subtitle: 'MiniHacks 2',
    punchline: 'Learn the FUNdamentals of WebDev',
    description: 'Learn the basics of HTML, CSS, and JS',
    prerequisites: 'None!',
    date: convertToJSDate(2023, 10, 28),
    time: '12:30 pm-2 pm',
    location: 'WVH',
    room: '104'
  },
  {
    title: 'A Builder’s Entrepreneurial Journey',
    subtitle: 'An Intercollegiate Mixer',
    punchline:
      'A collab event with Sandbox, Entrepreneurs Club, and Odds on VC!',
    description:
      "This is a great opportunity to experience the process of pursuing a venture idea from a technical founder's perspective and network with aspiring student founders from Northeastern, BU, Bentley, and more!",
    prerequisites: 'None!',
    date: convertToJSDate(2023, 11, 5),
    time: '12:00 pm-4:00 pm',
    location: "Boston University's BUild Lab"
  },
  {
    title: 'HackBeanpot x Gecko Robotics',
    description:
      'Technical and career prep workshops led by Gecko Robotics. Come learn about industry tips with the opportunity to network with engineers, recruiters, and other students!',
    prerequisites: 'None!',
    date: convertToJSDate(2024, 1, 14),
    time: 'Time: TBD',
    location: 'Gecko Robotics Boston Office'
  }
];

export const CountdownData: CountdownProps[] = [
  {
    targetDate: '2024-02-09T23:59:59Z'
  }
];

function convertToJSDate(year: number, month: number, date: number) {
  return new Date(year, month - 1, date);
}
