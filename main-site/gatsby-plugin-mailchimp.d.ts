declare module 'gatsby-plugin-mailchimp' {  
    type MailchimpResult = 'success' | 'error';
  
    export interface MailchimpResponse {
      result: MailchimpResult;
      msg: string;
    }
  
    export interface MailchimpFields {
      [key: string]: string
    }
  
    function addToMailChimp(email: string, listFields?: MailchimpFields): Promise<MailchimpResponse>;
    export default addToMailchimp;
  }