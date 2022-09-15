import React from 'react';
import { HeaderProps, TabInfo } from '../../lib/types';
import {
  StyledHeader,
  StyledTab,
  StyledTabsContainer, 
  StyledLink, 
  StyledImage
} from './Header.styles';
import HackBeanpotWhiteLogo from '../../images/hackbeanpot-white-logo.png'

const Header: React.FC<HeaderProps> = ({ tabs }) => {
  return (
    <StyledHeader>
        <StyledImage src = {HackBeanpotWhiteLogo}/>
      <StyledTabsContainer>
        {tabs.map((tab: TabInfo) => (
          <StyledLink href={tab.link}>
            <StyledTab>{tab.name}</StyledTab>
          </StyledLink>
        ))}
      </StyledTabsContainer>
    </StyledHeader>
  );
};

export default Header;
