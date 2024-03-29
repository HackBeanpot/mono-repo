import React, { useState } from 'react';
import addToMailChimp from 'gatsby-plugin-mailchimp';
import {
  StyledButtonRow,
  StyledEmailInput,
  StyledSocialMediaButtons
} from '../footer/Footer.styles';
import { StyledPrimaryButton } from '../primary-button/PrimaryButton.styles';
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
      .catch(() => {
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
          placeholder="Enter email here"
          name="email"
          type="text"
          value={email}
          onChange={handleEmailChange}
        />
        <StyledMailingMessage>{message}</StyledMailingMessage>

        <StyledButtonRow>
          <StyledPrimaryButton type="submit">
            Join mailing list
          </StyledPrimaryButton>
        </StyledButtonRow>
      </form>
    </div>
  );
};

export default MailingListSignup;
