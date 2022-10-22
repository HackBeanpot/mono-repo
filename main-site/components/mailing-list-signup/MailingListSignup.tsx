import React, { useState } from 'react';
import addToMailChimp from 'gatsby-plugin-mailchimp';
import { StyledEmailInput } from '../../../shared-ui/components/footer/Footer.styles';
import { StyledPrimaryButton } from '../../../shared-ui/components/primary-button/PrimaryButton.styles';
import { P } from '../../../shared-ui/style/typography';

const MailingListSignup: React.FunctionComponent<{}> = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    addToMailChimp(email)
      .then((data: any) => {
        setEmail('');
        setMessage(data.msg);
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
        <P>{message}</P>
        <StyledPrimaryButton type="submit">
          Join our mailing list
        </StyledPrimaryButton>
      </form>
    </div>
  );

};

export default MailingListSignup;