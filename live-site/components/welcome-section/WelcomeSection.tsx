import React from 'react';
import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';
import { H3 } from '../../../shared-ui/style/typography';
import TeamRace from './team-race/TeamRace';
import {
  StyledButtonContainer,
  StyledWelcomeSectionContainer,
  StyledWelcomeSectionContent,
  StyledWelcomeText
} from './WelcomeSection.styles';
import { TeamInfo } from '../../lib/data';

const WelcomeSection: React.FC = () => {
  return (
    <StyledWelcomeSectionContainer>
      <StyledWelcomeSectionContent>
        <H3>Welcome to Hackbeanpot 2023!</H3>
        <StyledWelcomeText>
          At HackBeanpot 2023, we aim to create a welcoming environment of
          ‘explorers’ focused on creativity, learning, and community
          connection.\n\nHackers can expect to put their resourcefulness to the
          test during their hacking missions. Whether you’re a seasoned
          hackathon-goer, an ‘I-have-never-written-a-line-of-code beginner, or
          someone in between, we’re excited for you to embark on this adventure
          with us!\n \nLearn more at
          <u>www.hackbeanpot.com</u>
        </StyledWelcomeText>
        <StyledButtonContainer>
          <PrimaryButton btnText="Join our Slack" btnLink=""></PrimaryButton>
        </StyledButtonContainer>
      </StyledWelcomeSectionContent>
      <TeamRace teams={TeamInfo} />
    </StyledWelcomeSectionContainer>
  );
};

export default WelcomeSection;
