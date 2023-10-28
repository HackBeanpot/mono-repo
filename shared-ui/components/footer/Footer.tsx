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
  StyledFooterTextLink,
  StyledSocialMediaButtons
} from './Footer.styles';
import HackBeanpotWhiteLogo from '../../images/hackbeanpot-logo-white.svg';
import { StyledLink } from '../../style/typography';
import MailingListSignup from '../mailing-list-signup/MailingListSignup';
import Instagram from '../../../shared-ui/images/social-icons/instagram.png';
import LinkedIn from '../../../shared-ui/images/social-icons/linkedin.png';
import Gmail from '../../../shared-ui/images/social-icons/gmail.png';


const Footer: React.FC<FooterProps> = ({ tabs, secondaryTabs, isDay }) => {
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

        <StyledSocialMediaButtons>
          <a href="https://www.instagram.com/hackbeanpot/" target="_blank">
            <img width="30" height="30" src={Instagram} />
          </a>
          <a
            href="https://www.linkedin.com/company/hackbeanpot-inc/"
            target="_blank"
          >
            <img width="30" height="30" src={LinkedIn} />
          </a>
          <a href="mailto: team@hackbeanpot.com" target="_blank">
            <img width="30" height="30" src={Gmail} />
          </a>
        </StyledSocialMediaButtons>
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

        <StyledTabContainer>
          {secondaryTabs.map((tab: TabInfo) => (
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
