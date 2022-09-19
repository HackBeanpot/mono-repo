import React from 'react';
import { FooterProps, TabInfo } from '../../lib/types';
import { StyledFooter, StyledHackBeanpotLogo, StyledTabContainer } from './Footer.styles';
import HackBeanpotWhiteLogo from '../../images/hackbeanpot-white-logo.png';

const Footer: React.FC<FooterProps> = ({ tabs }) => {

  return (
    <StyledFooter>
      <StyledHackBeanpotLogo
        src={HackBeanpotWhiteLogo}
        alt='White HackBeanpot Logo'
        width='191px'
        height='56px'
      />
      <StyledTabContainer>
      {tabs.map((tab: TabInfo) => (
        <div key={tab.name}>
          {tab.name}
        </div>
      ))}
      </StyledTabContainer>
    </StyledFooter>
  )
}

export default Footer;