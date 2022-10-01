
export type SectionData = AboutSectionData

export interface AboutSectionData {
    id: string;
    title: string;
    description: string;
  }

export interface LandingSectionProps {
    isDay: boolean;
    setIsDay: (isDay: boolean) => void;
  }
  
  
  