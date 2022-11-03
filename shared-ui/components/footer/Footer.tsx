import React from 'react';
import { FooterProps, TabInfo } from '../../lib/types';
import {
  StyledButtonContainer,
  StyledButtonRow,
  StyledFooter,
  StyledFooterText,
  StyledFooterTextLink,
  StyledHackBeanpotLogo,
  StyledTab,
  StyledTabContainer,
  StyledFooterContentContainer,
  StyledFooterCodeOfConduct,
  StyledHBPContent
} from './Footer.styles';
import HackBeanpotWhiteLogo from '../../images/hackbeanpot-logo-white.svg';
import MailingListSignup from '../../../main-site/components/mailing-list-signup/MailingListSignup';
import { StyledLink } from '../../style/typography';

const Footer: React.FC<FooterProps> = ({ tabs, isDay }) => {
  return (
    <StyledFooter isDay={isDay}>
      <StyledHBPContent>
        <StyledHackBeanpotLogo
          src={HackBeanpotWhiteLogo}
          alt="White HackBeanpot Logo"
          width="11.9em"
          height="3.5em"
        />
        <StyledFooterCodeOfConduct>
          <StyledFooterText>
            HackBeanpot, Inc. is a registered 501(c)(3) organization.
          </StyledFooterText>
          <StyledFooterTextLink href="/code-of-conduct/">
            Code of Conduct
          </StyledFooterTextLink>
        </StyledFooterCodeOfConduct>
      </StyledHBPContent>
      <StyledFooterContentContainer>
        <StyledTabContainer>
          {tabs.map((tab: TabInfo) => (
            <StyledLink href={tab.link} key={tab.name}>
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
