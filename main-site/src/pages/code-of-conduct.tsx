import Footer from '../../../shared-ui/components/footer/Footer';
import React from 'react';
import { homeTabInfo } from '../../../shared-ui/lib/data';
import '../../../shared-ui/style/global.css';
import '../../../shared-ui/index.css';
import Header from '../../../shared-ui/components/header/Header';
import {
  StyledParagraph,
  StyledHeading,
  StyledDirections,
  StyledBackground,
  StyledParagraphBottom,
  StyledTextContainer,
  StyledBodyTextContainer
} from '../page-styles/code-of-conduct.styles';

const CodeOfConduct: React.FC = () => {
  return (
    <StyledBackground>
      <Header tabs={homeTabInfo} isDay={true} />

      <StyledTextContainer>
        <StyledHeading>HackBeanpot 2023 Code of Conduct</StyledHeading>

        <StyledBodyTextContainer>
          <StyledParagraph>
            The HackBeanpot team is dedicated to providing a safe,
            harassment-free experience for everyone, regardless of gender, age,
            sexual orientation, disability, physical appearance, body size,
            race, ethnicity, nationality, religion, previous hackathon
            attendance, or computing experience (or lack of any of the
            aforementioned). We do not tolerate harassment of hackathon
            participants in any form. Harassment includes, but is not limited
            to: offensive comments, sexual language or imagery, deliberate
            intimidation, stalking, harassive photography or recording,
            sustained general disruption, and unwelcome sexual attention.
          </StyledParagraph>
          <StyledParagraph>
            {'\n'}
            Harassment is not tolerated in any part of the hackathon, including
            within our virtual spaces, as a part of hackathon projects created
            at the event, or on social media. Hackathon attendees, sponsors,
            judges, mentors, organizers, and all other individuals at
            HackBeanpot 2023 are subject to this Code of Conduct.
          </StyledParagraph>
          <StyledParagraph>
            {'\n'}
            Participants asked to stop any harrassive behavior are expected to
            comply immediately. If a participant engages in such behavior
            during, before, or after the event, the Event Staff may take any
            action they deem appropriate, including warning the offender,
            expelling them from the hackathon, removing them from the virtual
            premises, or excluding them from any and all future events.
          </StyledParagraph>
          <StyledParagraph>
            {'\n'}
            If you are being harassed, notice that someone else is being
            harassed, or have any other concerns, please contact a member of the
            Event Staff immediately. Event Staff will be happy to help
            participants contact appropriate law enforcement or otherwise assist
            those experiencing harassment to feel safe for the duration of the
            hackathon. We value you.
          </StyledParagraph>

          <StyledDirections>How to reach event staff:</StyledDirections>

          <StyledParagraph>
            Before and after the event via email:
            <a href="mailto: team@hackbeanpot.com"> team@hackbeanpot.com</a>
          </StyledParagraph>
          <StyledParagraphBottom>
            During the event via Slack: You can post in #ask-an-organizer or DM
            an Event Staff member (individuals with [Organizer] in their display
            name).
          </StyledParagraphBottom>
        </StyledBodyTextContainer>
      </StyledTextContainer>
      <Footer tabs={homeTabInfo} isDay={true} />
    </StyledBackground>
  );
};

export default CodeOfConduct;
