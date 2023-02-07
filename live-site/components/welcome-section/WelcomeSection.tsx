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
import {
  TeamInfo as defaultTeamInfo,
  onePointCodes,
  twoPointCodes
} from '../../lib/data';
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
          cabin: entry.fields.Cabin ?? '',
          eventCode: entry.fields['Event Code'] ?? ''
        };
      })
    );
  }, [data, setRaffleEntries]);

  useEffect(() => {
    const newTeamInfo = defaultTeamInfo.map((team) => {
      return { ...team };
    });

    // make sure we don't double count a entry with the same name and event code
    const seenEntries = new Set<string>();

    raffleEntries.forEach((entry) => {
      newTeamInfo.forEach((team) => {
        if (
          team.name === entry.cabin &&
          !seenEntries.has(entry.name + entry.eventCode)
        ) {
          if (onePointCodes.includes(entry.eventCode)) {
            team.points += 1;
          } else if (twoPointCodes.includes(entry.eventCode)) {
            team.points += 2;
          }
          seenEntries.add(entry.name + entry.eventCode);
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
          <PrimaryButton
            btnText="Join our Slack"
            btnLink="https://join.slack.com/t/hackbeanpot2023/shared_invite/zt-1oo7nuvoh-l2~oR7Ba_HI_92ONG9WrPw"
          ></PrimaryButton>
        </StyledButtonContainer>
      </StyledWelcomeSectionContent>
      <TeamRace teams={teamInfo} />
    </StyledWelcomeSectionContainer>
  );
};

export default WelcomeSection;
