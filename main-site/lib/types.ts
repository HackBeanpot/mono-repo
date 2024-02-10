export interface FaqData {
  id: number;
  question: string;
  answer: string;
}

export interface FaqItemProps {
  id: number;
  question: string;
  answer: string;
  selectedQuestion: number;
  setSelectedQuestion: (id: number) => void;
}
export type SectionData = AboutSectionData;

export interface AboutSectionData {
  id: number
  title: string;
  description: string;
  image: string;
}

export interface LandingSectionProps {
  isDay: boolean;
  setIsDay: (isDay: boolean) => void;
}

export interface SponsorUsLandingProps {
  isDay: boolean;
  setIsDay: (isDay: boolean) => void;
}

export interface ExploreSectionProps {
  isDay: boolean;
}

export interface TestimonialData {
  id: number;
  author: string;
  year?: string;
  quote: string;
  company?: string;
  image: string;
}

export interface TestimonialsSectionProps {
  isSponsor?: boolean;
  testimonialData: TestimonialData[];
}

export interface TestimonialCardProps {
  id: number;
  author: string;
  year?: string;
  quote: string;
  currentIndex: number;
  image: string;
  isSponsor?: boolean;
  company?: string;
}

export interface StyledTestimonialCardAuthorYearImageProps {
  isSponsor?: boolean;
}

export interface StyledTestimonialCardQuoteProps {
  quote: string;
  isSponsor?: boolean;
}

export interface LeftOrRightTestimonialCardProps {
  testimonial: TestimonialData;
  isSponsor?: boolean;
}

export interface StyledCactusButtonsProps {
  isToggled: boolean;
}

export interface PastProjectData {
  title: string;
  members: string;
  description: string;
  btnLink: string;
  image: string;
  award?: string;
}

export interface PastProjectProps {
  isDay: boolean;
}

export interface StyledSponsorsImageProps {
  level: string;
}

export interface EventsCalendarData {
  title: string;
  subtitle?: string;
  punchline?: string;
  description?: string;
  prerequisites?: string;
  date: Date;
  time: string;
  location?: string;
  room?: string;
  image?: string
}

export interface CountdownProps {
  targetDate: string;
}
