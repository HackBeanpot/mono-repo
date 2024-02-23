import React from 'react';
import {
  StyledColumn,
  StyledColumnText,
  StyledColumnTitle,
  StyledFeedbackJoinCoreSection,
} from './FeedbackJoinCoreSection.styles';
import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';
import { P } from '../../../shared-ui/style/typography';

const FeedbackJoinCoreSection: React.FC = () => {
  return (
    <><StyledFeedbackJoinCoreSection>
      <StyledColumn>
        <StyledColumnTitle>Send us your feedback</StyledColumnTitle>
        <P>
          We hope you{"'"}re having an awesome time at HackBeanpot Under the Sea! We{"'"}
          d really appreciate it if you could share your thoughts in our Event
          Feedback Form below so we can continue to make HackBeanpot a great
          experience for all attendees.
        </P>
        <PrimaryButton
          btnText="Send Feedback"
          btnLink='#'
          newTab />
      </StyledColumn>
      <StyledColumn>
        <StyledColumnTitle>Apply to join Core!</StyledColumnTitle>
        <P>
          Interested in learning more about organizing a hackathon? Join our
          HackBeanpot Core Team to develop your skills in tech, design,
          marketing, or leadership! We ask that you be able to commit about 10
          hours per week, but it{"'"}s definitely a fun time with a group of
          inspiring and friendly people!
        </P>
        <PrimaryButton
          btnText="Apply"
          btnLink="https://docs.google.com/forms/d/e/1FAIpQLSeOQ8IVvFfBQt-iWuyKObCFRqXR4vLS847Y6YUf2mLo7zNsKA/viewform"
          newTab />
      </StyledColumn>
    </StyledFeedbackJoinCoreSection>
    </>

  );
};

export default FeedbackJoinCoreSection;
