import React, { useState } from 'react';
import { HeaderProps, TabInfo } from '../../lib/types';
import {
  StyledHeader,
  StyledTab,
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

const mlhStyles = {
  display: 'block',
  maxWidth: 100,
  minWidth: '60',
  position: 'relative',
  left: '50px',
  width: '10%',
  zIndex: '-20000',
  bottom: '4.5px'
} as React.CSSProperties;

const Header: React.FC<HeaderProps> = ({ tabs, isDay, isLiveSite }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isDesktop = useMatchMedia(min.tablet);

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
                <div>
                  <StyledSecondaryButtonContainer
                    btnText={tab.name}
                    btnLink={tab.link}
                    isClickable={true}
                    newTab={true}
                    inHeader={true}
                  />
                </div>
              )}
              {tab.name === 'Sponsor Us' && (
                <div>
                  <StyledPrimaryButtonContainer
                    btnText={tab.name}
                    btnLink={tab.link}
                    newTab
                    inHeader={true}
                  />
                </div>
              )}
              {tab.name !== 'Sponsor Us' && tab.name !== 'Apply' && (
                <StyledTab>{tab.name}</StyledTab>
              )}
            </StyledLink>
          ))}
        </StyledTabsContainer>
      )}
      {!isLiveSite && (
        <a
          id="mlh-trust-badge"
          style={mlhStyles}
          href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=blue"
          target="_blank"
        >
          <img
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-blue.svg"
            alt="Major League Hacking 2024 Hackathon Season"
            style={{ width: '100%' }}
          />
        </a>
      )}
    </StyledHeader>
  );
};

export default Header;
