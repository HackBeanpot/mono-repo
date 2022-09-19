import React, {useState} from 'react';
import { FooterProps, TabInfo } from '../../lib/types';
import { StyledButtonContainer, StyledEmailInput, StyledFooter, StyledHackBeanpotLogo, StyledTab, StyledTabContainer } from './Footer.styles';
import HackBeanpotWhiteLogo from '../../images/hackbeanpot-white-logo.png';
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
        <PrimaryButton btnText='Join our mailing list' btnLink='' />
      </StyledButtonContainer>
    </StyledFooter>
  )
}

export default Footer;