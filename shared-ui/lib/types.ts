export interface ButtonProps {
  btnText: string;
  btnLink: string;
  newTab: boolean;
}

export interface TabInfo {
  name: string;
  link: string;
}
export interface HeaderProps {
  tabs: TabInfo[];
}

export interface StyledHeaderProps {
  isOpen: boolean;
}
