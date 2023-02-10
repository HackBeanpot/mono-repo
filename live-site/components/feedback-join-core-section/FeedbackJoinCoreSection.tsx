import React from 'react';
import {
  StyledColumn,
  StyledColumnText,
  StyledColumnTitle,
  StyledFeedbackJoinCoreSection
} from './FeedbackJoinCoreSection.styles';
import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';

const FeedbackJoinCoreSection: React.FC = () => {
  return (
    <StyledFeedbackJoinCoreSection>
      <StyledColumn>
        <StyledColumnTitle>Send us your feedback</StyledColumnTitle>
        <StyledColumnText>
          We hope you{"'"}re having an awesome time at Camp HackBeanpot! We{"'"}
          d really appreciate it if you could share your thoughts in our Event
          Feedback Form below so we can continue to make HackBeanpot a great
          experience for all attendees.
        </StyledColumnText>
        <PrimaryButton
          btnText="Send Feedback"
          btnLink="https://forms.gle/Fw8vXzJuzx4h1yvJA"
          newTab
        />
      </StyledColumn>
      <StyledColumn>
        <StyledColumnTitle>Apply to join Core!</StyledColumnTitle>
        <StyledColumnText>
          Interested in learning more about organizing a hackathon? Join our
          HackBeanpot Core Team to develop your skills in tech, design,
          marketing, or leadership! We ask that you be able to commit about 10
          hours per week, but it{"'"}s definitely a fun time with a group of
          inspiring and friendly people!
        </StyledColumnText>
        <PrimaryButton
          btnText="Apply"
          btnLink="https://docs.google.com/forms/d/e/1FAIpQLScyEQzS4RBkkuPSC4cRlVFUYqnu0mkAcC4ypA21aR4aC2C6LQ/viewform"
          newTab
        />
      </StyledColumn>
    </StyledFeedbackJoinCoreSection>
  );
};

export default FeedbackJoinCoreSection;
