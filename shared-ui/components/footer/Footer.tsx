import React, {useState} from 'react';
import { FooterProps, TabInfo } from '../../lib/types';
import { StyledButtonContainer, StyledButtonRow, StyledEmailInput, StyledFooter, StyledHackBeanpotLogo, StyledTab, StyledTabContainer } from './Footer.styles';
import HackBeanpotWhiteLogo from '../../images/hackbeanpot-white-logo.png';
import Instagram from '../../images/social-icons/instagram.svg';
import Facebook from '../../images/social-icons/facebook.svg';
import Medium from '../../images/social-icons/medium.svg';
import Twitter from '../../images/social-icons/twitter.svg';
import PrimaryButton from '../primary-button/PrimaryButton';

const Footer: React.FC<FooterProps> = ({ tabs }) => {
  const [email, setEmail] = useState<string>('');

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
          <StyledTab>
            {tab.name}
          </StyledTab>
        ))}
      </StyledTabContainer>
      <StyledButtonContainer>
        <StyledEmailInput
          placeholder='Enter your email'
          value={email}
          onChange={(e: React.FormEvent<HTMLInputElement>): void => setEmail(e.currentTarget.value)}
        />
        <StyledButtonRow>
          <PrimaryButton btnText='Join our mailing list' btnLink='' />
          <a href="https://www.instagram.com/hackbeanpot/"><img width='41' height='41' src={Instagram} /></a>
          <a href="https://www.facebook.com/hackbeanpot"><img width='41' height='41' src={Facebook} /></a>
          <a href="https://hackbeanpot.medium.com/"><img width='41' height='41' src={Medium} /></a>
          <a href="https://twitter.com/HackBeanpot"><img width='41' height='41' src={Twitter} /></a>
        </StyledButtonRow>
      </StyledButtonContainer>
    </StyledFooter>
  )
}

export default Footer;