import React, { useState } from 'react';
import { FooterProps, TabInfo } from '../../lib/types';
import {
  StyledButtonContainer,
  StyledButtonRow,
  StyledEmailInput,
  StyledFooter,
  StyledFooterText,
  StyledFooterTextLink,
  StyledHackBeanpotLogo,
  StyledSocialMediaButtons,
  StyledTab,
  StyledTabContainer,
  StyledFooterContentContainer,
  StyledFooterCodeOfConduct,
  StyledHBPContent
} from './Footer.styles';
import HackBeanpotWhiteLogo from '../../images/hackbeanpot-logo-white.svg';
import Instagram from '../../images/social-icons/instagram.svg';
import Facebook from '../../images/social-icons/facebook.svg';
import Medium from '../../images/social-icons/medium.svg';
import Twitter from '../../images/social-icons/twitter.svg';
import PrimaryButton from '../primary-button/PrimaryButton';
import MailinglistSignup from '../../../main-site/components/mailinglist-signup/MailinglistSignup';

const Footer: React.FC<FooterProps> = ({ tabs, isDay }) => {
  const [email, setEmail] = useState<string>('');

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
          <StyledFooterTextLink href="/code-of-conduct/">
            Code of Conduct
          </StyledFooterTextLink>
        </StyledFooterCodeOfConduct>
      </StyledHBPContent>
      <StyledFooterContentContainer>
        <StyledTabContainer>
          {tabs.map((tab: TabInfo) => (
            <StyledTab>{tab.name}</StyledTab>
          ))}
        </StyledTabContainer>

        <StyledButtonContainer>
          <StyledEmailInput
            placeholder="Enter your email"
            value={email}
            onChange={(e: React.FormEvent<HTMLInputElement>): void =>
              setEmail(e.currentTarget.value)
            }
          />
          <StyledButtonRow>
            <MailinglistSignup/>
            <StyledSocialMediaButtons>
              <a href="https://www.instagram.com/hackbeanpot/" target="_blank">
                <img width="30" height="30" src={Instagram} />
              </a>
              <a href="https://www.facebook.com/hackbeanpot" target="_blank">
                <img width="30" height="30" src={Facebook} />
              </a>
              <a href="https://hackbeanpot.medium.com/" target="_blank">
                <img width="30" height="30" src={Medium} />
              </a>
              <a href="https://twitter.com/HackBeanpot" target="_blank">
                <img width="30" height="30" src={Twitter} />
              </a>
            </StyledSocialMediaButtons>
          </StyledButtonRow>
        </StyledButtonContainer>
      </StyledFooterContentContainer>
    </StyledFooter>
  );
};

export default Footer;
