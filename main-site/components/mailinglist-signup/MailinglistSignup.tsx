import React, { useState } from 'react';
import addToMailChimp from 'gatsby-plugin-mailchimp';
import { StyledEmailInput } from '../../../shared-ui/components/footer/Footer.styles';
import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';

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
      <form onSubmit={handleSubmit} className="footer__form">
        <StyledEmailInput
          placeholder="Enter your email"
          name="email"
          type="text"
          onChange={handleEmailChange} />
        <PrimaryButton
          btnText="Join our mailing list" btnLink={''} type="submit"        />
      <div className="footer__form-msg">{message}</div>
    </form>
    </div>
  );

};

export default MailinglistSignup;