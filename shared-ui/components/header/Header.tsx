import React, { useState } from 'react';
import { HeaderProps, TabInfo } from '../../lib/types';
import {
  StyledHeader,
  StyledTab,
  StyledLandingButtonContainer,
  StyledTabsContainer,
  StyledHackBeanpotLogo,
  StyledHamburgerIcon,
  StyledXIcon,
  StyledSecondaryButtonContainer,
  StyledPrimaryButtonContainer
} from './Header.styles';
import HackBeanpotWhiteLogo from '../../images/hackbeanpot-logo-white.png';
import useMatchMedia from 'react-use-match-media';
import { min } from '../../lib/responsive';
import Hamburger from '../../images/hamburger-icon.svg';
import XIcon from '../../images/X-icon.svg';
import { StyledLink } from '../../style/typography';

const Header: React.FC<HeaderProps> = ({ tabs, isDay }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isDesktopSmall = useMatchMedia(min.tabletSm);
  const isDesktop = useMatchMedia(min.tablet);
  const isDesktopLarge = useMatchMedia(min.tabletLg);
  return (
    <StyledHeader isOpen={isOpen} isDay={isDay}>
      <a href="/">
        <StyledHackBeanpotLogo
          src={HackBeanpotWhiteLogo}
          alt="White HackBeanpot Logo"
          width={190}
        />
      </a>

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
          alt="Close"
        />
      )}

      {(isDesktop || (!isDesktop && isOpen)) && (
        <StyledTabsContainer>
          {tabs.map((tab: TabInfo) => (
            <StyledLink
              onClick={(): void => setIsOpen(false)}
              href={tab.link}
              key={tab.name}
              target={tab.newTab ? '_blank' : '_self'}
            >
              {tab.name === 'Apply' && (
                <StyledSecondaryButtonContainer
                  btnText={tab.name}
                  btnLink={tab.link}
                  isClickable={true}
                  newTab
                />
              )}
              {tab.name === 'Sponsor Us' &&
                  (<StyledPrimaryButtonContainer
                    btnText={tab.name}
                    btnLink={tab.link}
                    newTab
                  />
                )}
              {tab.name !== 'Sponsor Us' && tab.name !== 'Apply' && (
                <StyledTab>{tab.name}</StyledTab>
              )}
            </StyledLink>
          ))}
        </StyledTabsContainer>
      )}
    </StyledHeader>
  );
};

export default Header;
