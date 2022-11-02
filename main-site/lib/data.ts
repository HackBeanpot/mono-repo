import {
  PastProjectData,
  AboutSectionData,
  FaqData,
  TestimonialData
} from './types';

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
      'Pre-registration begins November 6th, but applications will be open on November 22nd. Apply through our registration portal here! Keep an eye in your inbox for acceptance details in mid-January.'
  },

  {
    id: 2,
    question: 'Will HackBeanpot 2023 be in-person or virtual?',
    answer: 'HackBeanpot 2023 will be fully in-person!'
  },

  {
    id: 3,
    question: 'When and where is HackBeanpot 2023?',
    answer: 'The location of HackBeanpot 2023 will be announced in November.'
  },
  {
    id: 4,
    question: 'What is HackBeanpot doing about COVID safety?',
    answer:
      'HackBeanpot is committed to ensuring that hackers feel safe and activities comply with local COVID-19 policies. For this reason, we encourage masks to be worn by hackers attending in the in-person activities.'
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
      'The Milky Way is your oyster! We encourage you to work on anything you want including websites, mobile apps, data visualizations, games, etc. Our prizes are meant to be very broad so that the direction of your project can be determined by your passions and what you want to learn! Feel free to check out some of our past projects for inspiration. Please note that you are free to work on past projects if you want to, but these will not qualify for prizes as this is unfair to other hackers!'
  },

  {
    id: 7,
    question: 'How do I find a team? / Are there limits on team size?plus sign',
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

export const testimonialSectionData: TestimonialData[] = [
  {
    id: 0,
    author: 'Karyna Yen',
    year: "Northeastern '25",
    quote:
      '"I had a ton of fun at HackBeanpot! We made a Chrome extension that censored inappropriate language on the internet. My favorite part was when one of my teammates got an animated duck to quack when clicking on the extension icon!"'
  },
  {
    id: 1,
    author: 'Ji-min Kim',
    year: "Northeastern '22",
    quote:
      '"I joined the astronaut bootcamp event in 2021, and I wanted to highlight my great experience there. I was able to connect with friendly people, learn about web development through workshops, and have free pizza for lunch! It was a really unique experience I had during the weekend, and this event also gave me motivation for me to join my first hackathon event in bostonhacks!"'
  },
  {
    id: 2,
    author: 'Spencer Shao',
    year: "Northeastern '24",
    quote:
      '"I loved the collaboration between me, my teammates, and the amazing mentors! I really felt like it was a very welcoming environment for me to prioritize learning and having fun over 3 days. Prior to this hackathon I had never touched any kind of React or front-end web development but I came out of it feeling accomplished, having achieved a working website!"'
  },

  {
    id: 3,
    author: 'Raisa Bhuiyan',
    year: "Northeastern '25",
    quote:
      '"I enjoyed working with my teammates and trying to debug our mistakes. Debugging is a lot more fun when you have people doing it with you."'
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
