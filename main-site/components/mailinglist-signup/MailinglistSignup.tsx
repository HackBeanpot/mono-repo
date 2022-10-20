import React, { useState } from 'react';
import addToMailChimp from 'gatsby-plugin-mailchimp';
import { StyledEmailInput } from '../../../shared-ui/components/footer/Footer.styles';
import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';
import { StyledPrimaryButton } from '../../../shared-ui/components/primary-button/PrimaryButton.styles';

const MailinglistSignup: React.FunctionComponent<{}> = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    addToMailChimp(email)
      .then((data: any) => {
        setEmail('');
        setMessage('Thank you for subscribing!');
      })
      .catch((error: Error) => {
        setMessage('There was an error. Please try again');
      });

  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          onChange={handleEmailChange} />
          <div>
          <StyledPrimaryButton type="submit">
          Join our mailing list
        </StyledPrimaryButton>
          </div>
        <div>{message}</div>
      </form>
    </div>
  );

};

export default MailinglistSignup;