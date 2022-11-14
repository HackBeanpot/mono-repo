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
  listOfPictures: Person[][];
}

export interface Person {
  picture: string;
  toolTipInfo: ToolTipInfo;
}

export interface ToolTipInfo {
  name: string;
  year: string;
  major: string;
  pronouns: string;
}

export interface ToolTipProps {
  toolTipInfo: ToolTipInfo;
  team: string;
}

export interface StyledToolTipProps {
  team: string;
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
