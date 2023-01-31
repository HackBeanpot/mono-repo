import React, { useState, useEffect } from 'react';
import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';
import { H3 } from '../../../shared-ui/style/typography';
import TeamRace from './team-race/TeamRace';
import {
  StyledButtonContainer,
  StyledWelcomeSectionContainer,
  StyledWelcomeSectionContent,
  StyledWelcomeText
} from './WelcomeSection.styles';
import { TeamInfo as defaultTeamInfo } from '../../lib/data';
import { RaffleEntry, TeamProps } from '../../lib/types';
import { useAirtableApi } from '../../src/hooks/useAirtable';

const WelcomeSection: React.FC = () => {
  const { data } = useAirtableApi('Raffle', 'raffle', true);

  const [raffleEntries, setRaffleEntries] = useState<RaffleEntry[]>([]);
  const [teamInfo, setTeamInfo] = useState<TeamProps[]>(defaultTeamInfo);

  useEffect(() => {
    setRaffleEntries(
      data.map((entry) => {
        return {
          name: entry.fields.Name ?? '',
          cabin: entry.fields.Cabin ?? ''
        };
      })
    );
  }, [data, setRaffleEntries]);

  useEffect(() => {
    const newTeamInfo = defaultTeamInfo.map((team) => {
      return { ...team };
    });
    raffleEntries.forEach((entry) => {
      newTeamInfo.forEach((team) => {
        if (team.name === entry.cabin) {
          team.points += 1;
        }
      });
      setTeamInfo(newTeamInfo);
    });
  }, [raffleEntries, defaultTeamInfo, setTeamInfo]);

  return (
    <StyledWelcomeSectionContainer>
      <StyledWelcomeSectionContent>
        <H3>Welcome to Hackbeanpot 2023!</H3>
        <StyledWelcomeText>
          {`At HackBeanpot 2023, we aim to create a welcoming environment of
          ‘explorers’ focused on creativity, learning, and community
          connection.\n\nHackers can expect to put their resourcefulness to the
          test during their hacking missions. Whether you’re a seasoned
          hackathon-goer, an ‘I-have-never-written-a-line-of-code beginner, or
          someone in between, we’re excited for you to embark on this adventure
          with us!\n \nLearn more at`}
          <u>www.hackbeanpot.com</u>
        </StyledWelcomeText>
        <StyledButtonContainer>
          <PrimaryButton btnText="Join our Slack" btnLink=""></PrimaryButton>
        </StyledButtonContainer>
      </StyledWelcomeSectionContent>
      <TeamRace teams={teamInfo} />
    </StyledWelcomeSectionContainer>
  );
};

export default WelcomeSection;
