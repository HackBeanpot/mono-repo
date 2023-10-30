import { MouseEventHandler } from 'react';

export interface StyledPrimaryButtonProps {
  $isSmallPrimary: boolean | undefined;
  $transparent: boolean | undefined;
}

export interface ButtonProps {
  btnText: string;
  btnLink?: string;
  newTab?: boolean;
  onClick?: MouseEventHandler;
  isSmallPrimary?: boolean;
  isClickable?: boolean;
  transparent?: boolean;
  inHeader?: boolean;
}

export interface TimeRemainingProps {
  target: Date;
}

export interface DropdownProps {
  options: Array<string>;
}

export interface TabInfo {
  name: string;
  link: string;
  newTab?: boolean;
}

export interface TeamColumnInfo {
  teamLabel: string;
  listOfPictures: Person[][];
}

export interface Person {
  picture: string;
  name: string;
  year: string;
  major: string;
  pronouns: string;
  linkedIn: string;
}

export interface Team {
  directors: string;
  tech: string;
  design: string;
  socialOutreach: string;
  sponsorship: string;
}

export interface StyledToolTipProps {
  team: string;
}

export interface TeamColumnProps {
  columnInfo: TeamColumnInfo;
}

export interface TimeRemainingInfo {
  text: number;
  label: string;
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
  secondaryTabs: TabInfo[];
  isDay: boolean;
}

export interface ArrowProps {
  left?: boolean;
  onClick: () => void;
}

export interface StyledFooterProps {
  isDay: boolean;
}

export interface BackgroundProps {
  isDay: boolean;
}

export interface MobileTeamColumnProps {
  listOfColumnInfo: TeamColumnInfo[];
}
export interface StyledSecondaryButtonProps {
  isClickable: boolean;
}

export interface StyledLocationSectionProps {
  isDay: boolean;
}

export interface LocationSectionProps {
  isDay: boolean;
}
