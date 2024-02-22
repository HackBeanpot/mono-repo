import React, { useState, useEffect } from 'react';
import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';
import TeamRace from './team-race/TeamRace';
import {
  StyledButtonContainer,
  StyledWelcomeSectionContainer,
  StyledWelcomeSectionContent,
  StyledWelcomeHeader,
  StyledWelcomeText,
  StyledFish
} from './WelcomeSection.styles';
import {
  TeamInfo as defaultTeamInfo,
  onePointCodes,
  twoPointCodes
} from '../../lib/data';
import { RaffleEntry, TeamProps, TeamRaceProps } from '../../lib/types';
import { useAirtableApiWithPagination } from '../../src/hooks/useAirtable';
import Fish from '../../images/fish-large-pink.svg';

const WelcomeSection: React.FC<TeamRaceProps> = ({isDay}) => {
  // const { data } = useAirtableApiWithPagination('app9pkEjk7iSp7mR4', 'raffle');

  // const [raffleEntries, setRaffleEntries] = useState<RaffleEntry[]>([]);
  // const [teamInfo, setTeamInfo] = useState<TeamProps[]>(defaultTeamInfo);

  // useEffect(() => {
  //   setRaffleEntries(
  //     data.map((entry) => {
  //       return {
  //         name: entry.fields.Name ?? '',
  //         cabin: entry.fields.Cabin ?? '',
  //         eventCode: entry.fields['Event Code'] ?? ''
  //       };
  //     })
  //   );
  // }, [data, setRaffleEntries]);

  // useEffect(() => {
  //   const newTeamInfo = defaultTeamInfo.map((team) => {
  //     return { ...team };
  //   });

  //   // make sure we don't double count a entry with the same name and event code
  //   const seenEntries = new Set<string>();

  //   raffleEntries.forEach((entry) => {
  //     newTeamInfo.forEach((team) => {
  //       if (
  //         team.name === entry.cabin &&
  //         !seenEntries.has(entry.name + entry.eventCode)
  //       ) {
  //         if (onePointCodes.includes(entry.eventCode.toUpperCase())) {
  //           team.points += 1;
  //         } else if (twoPointCodes.includes(entry.eventCode)) {
  //           team.points += 2;
  //         }
  //         seenEntries.add(entry.name + entry.eventCode);
  //       }
  //     });
  //   });
  //   setTeamInfo(newTeamInfo);
  // }, [raffleEntries, defaultTeamInfo, setTeamInfo]);

  return (
    <StyledWelcomeSectionContainer>
      <StyledWelcomeSectionContent>
        <StyledWelcomeHeader>Dive into HackBeanpot 2024!</StyledWelcomeHeader>
        <StyledWelcomeText>
        At HackBeanpot 2024, we aim to create a welcoming environment of
          ‘explorers’ focused on creativity, learning, and community
          connection. <br /> <br /> Hackers can expect to put their resourcefulness to the
          test during their hacking missions. Whether you’re a seasoned
          hackathon-goer, an ‘I-have-never-written-a-line-of-code beginner, or
          someone in between, we’re excited for you to embark on this adventure
          with us! <br /> <br /> Learn more at  
          <u> www.hackbeanpot.com</u>
        </StyledWelcomeText>
        <StyledButtonContainer>
          <PrimaryButton
            btnText="Join our Slack"
            btnLink="https://join.slack.com/t/hackbeanpot2023/shared_invite/zt-1oo7nuvoh-l2~oR7Ba_HI_92ONG9WrPw"
          ></PrimaryButton>
        </StyledButtonContainer>
        <StyledFish src={Fish}></StyledFish>
      </StyledWelcomeSectionContent>
      {/* <TeamRace isDay = {isDay} teams={teamInfo} /> */}
    </StyledWelcomeSectionContainer>
  );
};

export default WelcomeSection;
