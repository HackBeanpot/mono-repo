export interface ButtonProps {
  btnText: string;
  btnLink: string;
  newTab?: boolean;
}

export interface TabInfo {
  name: string;
  link: string;
}

export interface HeaderProps {
  tabs: TabInfo[];
  isDay: boolean;
}

export interface StyledHeaderProps {
  isOpen: boolean;
  isDay: boolean;
}

export interface FooterProps {
  tabs: TabInfo[];
  isDay: boolean;
}

export interface StyledFooterProps {
  isDay: boolean;
}

export interface LandingSectionProps {
  isDay: boolean;
  setIsDay: (isDay: boolean) => void;
}

export interface BackgroundProps {
  isDay: boolean;
}

