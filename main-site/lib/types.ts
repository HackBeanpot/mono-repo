import { TeamColumnInfo } from "../../shared-ui/lib/types";

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
export type SectionData = AboutSectionData | TeamColumnInfo;

export interface AboutSectionData {
  title: string;
  description: string;
}

export interface LandingSectionProps {
  isDay: boolean;
  setIsDay: (isDay: boolean) => void;
}
