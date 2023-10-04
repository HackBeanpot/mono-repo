import React from 'react';
import { FooterProps, TabInfo } from '../../lib/types';
import {
  StyledButtonContainer,
  StyledButtonRow,
  StyledFooter,
  StyledFooterText,
  StyledHackBeanpotLogo,
  StyledTab,
  StyledTabContainer,
  StyledFooterContentContainer,
  StyledFooterCodeOfConduct,
  StyledHBPContent,
  StyledFooterTextLink
} from './Footer.styles';
import HackBeanpotWhiteLogo from '../../images/hackbeanpot-logo-white.svg';
import { StyledLink } from '../../style/typography';
import MailingListSignup from '../mailing-list-signup/MailingListSignup';

const Footer: React.FC<FooterProps> = ({ tabs, isDay }) => {
  return (
    <StyledFooter isDay={isDay}>
      <StyledHBPContent>
        <StyledHackBeanpotLogo
          src={HackBeanpotWhiteLogo}
          alt="White HackBeanpot Logo"
          width="287em"
          height="84em"
        />
        <StyledFooterCodeOfConduct>
          <StyledFooterText>
            HackBeanpot, Inc. is a registered 501(c)(3) organization.
          </StyledFooterText>
          <StyledFooterTextLink href="https://hackbeanpot.com/code-of-conduct/">
            Code of Conduct
          </StyledFooterTextLink>
        </StyledFooterCodeOfConduct>
      </StyledHBPContent>
      <StyledFooterContentContainer>
        <StyledTabContainer>
          {tabs.map((tab: TabInfo) => (
            <StyledLink
              href={tab.link}
              key={tab.name}
              target={tab.newTab ? '_blank' : '_self'}
            >
              <StyledTab>{tab.name}</StyledTab>
            </StyledLink>
          ))}
        </StyledTabContainer>

        <StyledButtonContainer>
          <StyledButtonRow>
            <MailingListSignup />
          </StyledButtonRow>
        </StyledButtonContainer>
      </StyledFooterContentContainer>
    </StyledFooter>
  );
};

export default Footer;
