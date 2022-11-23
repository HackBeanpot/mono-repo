import React from 'react';
import { min } from '../../../lib/responsive';
import useMatchMedia from 'react-use-match-media';
import {
  StyledMeetCoreContainer,
  StyledOurTeamCore,
  StyledHeaderCore,
  StyledDescriptionTeamCore,
  StyledImageCore
} from './MeetAllCore.styles';
import GroupPhoto from '../../../images/meet-the-team/group.png';

const MeetAllCore: React.FC = () => {
  const isDesktop = useMatchMedia(min.tabletLg);
  return (
    <StyledMeetCoreContainer id="meetAllCore">
      <div>
        <StyledOurTeamCore>OUR TEAM</StyledOurTeamCore>
        <StyledHeaderCore>
          Meet this year’s pioneers behind HackBeanpot!
        </StyledHeaderCore>
        <StyledDescriptionTeamCore>
          The HackBeanpot Core Team has been hard at work to create the best
          adventure for you at HackBeanpot 2023! We are a group of 23 driven
          students from universities in the Boston-area who aim to make
          technical experience and knowledge accessible to anyone who is
          interested!
        </StyledDescriptionTeamCore>
        {!isDesktop && <StyledImageCore src={GroupPhoto} />}
      </div>
      {isDesktop && <StyledImageCore src={GroupPhoto} />}
    </StyledMeetCoreContainer>
  );
};

export default MeetAllCore;
