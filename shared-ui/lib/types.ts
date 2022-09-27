export interface ButtonProps {
  btnText: string;
  btnLink: string;
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

export interface FooterProps {
  tabs: TabInfo[];
}

export interface ArrowProps {
  left?: boolean;
  onClick: () => void;
}
