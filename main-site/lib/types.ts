export type SectionData = AboutSectionData;

export interface AboutSectionData {
  title: string;
  description: string;
}

export interface LandingSectionProps {
  isDay: boolean;
  setIsDay: (isDay: boolean) => void;
}
