
export interface ButtonProps {
  btnText: string;
  btnLink: string;
  newTab?: boolean;
}

export interface TabInfo {
  name: string;
  link: string;
}

export interface TeamColumnInfo {
  teamLabel: string;
  listOfPictures: string[][];
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

export interface TeamColumnProps {
  columnInfo: TeamColumnInfo;
}

export interface MobileTeamColumnProps {
  listOfColumnInfo: TeamColumnInfo[];
}

export interface StyledTeamLabelProps {
  twoLines: boolean;
}
