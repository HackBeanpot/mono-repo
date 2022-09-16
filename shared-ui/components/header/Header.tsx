import React, { useState } from 'react';
import { HeaderProps, TabInfo } from '../../lib/types';
import {
  StyledHeader,
  StyledTab,
  StyledTabsContainer,
  StyledLink,
  StyledHackBeanpotLogo,
  StyledHamburgerIcon,
  StyledXIcon
} from './Header.styles';
import HackBeanpotWhiteLogo from '../../images/hackbeanpot-white-logo.png';
import useMatchMedia from 'react-use-match-media';
import { min } from '../../lib/responsive';
import Hamburger from '../../images/hamburger-icon.svg';
import XIcon from '../../images/X-icon.svg';
import { nanoid } from 'nanoid';

const Header: React.FC<HeaderProps> = ({ tabs }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isDesktop = useMatchMedia(min.tablet);
  return (
    <StyledHeader isOpen={isOpen}>
      <StyledHackBeanpotLogo
        src={HackBeanpotWhiteLogo}
        alt="White HackBeanpot Logo"
      />
      {!isDesktop && !isOpen && (
        <StyledHamburgerIcon
          src={Hamburger}
          alt="Hamburger Icon"
          onClick={(): void => setIsOpen(true)}
        />
      )}
      {!isDesktop && isOpen && (
        <StyledXIcon
          src={XIcon}
          onClick={(): void => setIsOpen(false)}
          alt="Close Icon"
        />
      )}
      {(isDesktop || (!isDesktop && isOpen)) && (
        <StyledTabsContainer>
          {tabs.map((tab: TabInfo) => (
            <StyledLink href={tab.link} key={nanoid()}>
              <StyledTab>{tab.name}</StyledTab>
            </StyledLink>
          ))}
        </StyledTabsContainer>
      )}
    </StyledHeader>
  );
};

export default Header;
