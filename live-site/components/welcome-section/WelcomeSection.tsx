import React from 'react';
import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';
import { StyledSectionHeader } from '../coming-up/ComingUp.styles';
import {
  StyledButtonContainer,
  StyledRaceContainer,
  StyledWelcomeSectionContainer,
  StyledWelcomeSectionContent,
  StyledWelcomeText
} from './WelcomeSection.styles';

const WelcomeSection: React.FC = () => {
  return (
    <StyledWelcomeSectionContainer>
      <StyledWelcomeSectionContent>
        <StyledSectionHeader>Welcome to Hackbeanpot 2023!</StyledSectionHeader>
        <StyledWelcomeText>
          {`At HackBeanpot 2023, we aim to create a welcoming environment of ‘explorers’ focused on creativity, learning, and community connection.\n\nHackers can expect to put their resourcefulness to the test during their hacking missions. Whether you’re a seasoned hackathon-goer, an ‘I-have-never-written-a-line-of-code beginner, or someone in between, we’re excited for you to embark on this adventure with us!\n
            \nLearn more at `}
          <u>www.hackbeanpot.com</u>
        </StyledWelcomeText>
        <StyledButtonContainer>
          <PrimaryButton btnText="Join our Slack" btnLink=""></PrimaryButton>
        </StyledButtonContainer>
      </StyledWelcomeSectionContent>

      <StyledRaceContainer></StyledRaceContainer>
    </StyledWelcomeSectionContainer>
  );
};

export default WelcomeSection;
