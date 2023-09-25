import { Transporter, createTransport } from 'nodemailer';
import { ParsedMail, simpleParser } from 'mailparser';

class EmailManager {
  private transporter: Transporter<any>;

  constructor() {
    this.transporter = createTransport({
      service: 'gmail',
      auth: {
        user: 'test@gmail.com',
        pass: 'password'
      }
    });
  }

  async getEmailsByDateRange(startTime: Date, endTime: Date, from: string) {
    const emails: ParsedMail[] = [];

    const query = [
      ['SINCE', startTime],
      ['BEFORE', endTime],
      ['FROM', from]
    ];

    // const raw = await this.transporter.query(query, {});
    // raw.forEach(element => {

    // });

    
    // const parsedMail = await simpleParser(this.transporter)
    // Logic to fetch emails between startTime and endTime
    return emails;
  }

  async replyToThread(threadId, message) {
    // Logic to reply to a thread with id as threadId
  }

  async sendEmail(to, subject, text) {
    let info = await this.transporter.sendMail({
      from: 'test@gmail.com',
      to: to,
      subject: subject,
      text: text
    });

    console.log('Message sent: %s', info.messageId);
  }
}

export default EmailManager;
