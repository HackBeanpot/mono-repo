import React, { useState } from 'react';
import addToMailChimp from 'gatsby-plugin-mailchimp';
import {
  StyledButtonRow,
  StyledEmailInput,
  StyledSocialMediaButtons
} from '../../../shared-ui/components/footer/Footer.styles';
import { StyledPrimaryButton } from '../../../shared-ui/components/primary-button/PrimaryButton.styles';
import { StyledMailingMessage } from './MailingListSignup.styles';
import Instagram from '../../../shared-ui/images/social-icons/instagram.svg';
import Facebook from '../../../shared-ui/images/social-icons/facebook.svg';
import Medium from '../../../shared-ui/images/social-icons/medium.svg';
import Twitter from '../../../shared-ui/images/social-icons/twitter.svg';

type MailchimpResult = 'success' | 'error';

export interface MailchimpResponse {
  result: MailchimpResult;
  msg: string;
}

const MailingListSignup: React.FunctionComponent = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    addToMailChimp(email)
      .then((data: MailchimpResponse) => {
        setEmail('');
        setMessage(data.msg);
      })
      .catch((error: Error) => {
        console.log(error);
        setMessage('There was an error, please try again.');
      });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <StyledEmailInput
          placeholder="Enter your email"
          name="email"
          type="text"
          onChange={handleEmailChange}
        />
        <StyledMailingMessage>{message}</StyledMailingMessage>

        <StyledButtonRow>
          <StyledPrimaryButton type="submit">
            Join our mailing list
          </StyledPrimaryButton>
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
      </form>
    </div>
  );
};

export default MailingListSignup;
