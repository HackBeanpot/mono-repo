import React, { useState } from 'react';
import addToMailChimp from 'gatsby-plugin-mailchimp';

const MailinglistSignup = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (e: React.FormEvent) => {
        console.log(email)
      e.preventDefault();
  
      try {
        const { result, msg } = await addToMailChimp(email);
  
        if (result !== 'success') {
          throw msg; //error with subscription from our end or plugin
        }
  
        setEmail('');
        setMessage('Thank you for subscribing!');
      } catch (error : any) {
        if (error.includes('already subscribed')) {
          setMessage("You're already subscribed!");
        } else {
          setMessage('Please enter a valid email.');
        }
      }
    };
  
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement> )=> {
      e.preventDefault();
      setEmail(e.target.value);
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit} className="footer__form">
          <div className="footer__form-heading">Join our mailing list!</div>
          <div className="footer__form-input-and-button">
            <input
              placeholder="Enter email here"
              name="email"
              type="text"
              onChange={handleEmailChange}
              className="footer__form-input"
            />
            <button className="footer__form-btn" type="submit">
              Join
            </button>
          </div>
          <div className="footer__form-msg">{message}</div>
        </form>
      </div>
    );
  };
  
  export default MailinglistSignup;