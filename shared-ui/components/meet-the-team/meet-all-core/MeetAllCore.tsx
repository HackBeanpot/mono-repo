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
import GroupDesktop from '../../../images/meet-the-team/groupDesktop.png';
import GroupMobile from '../../../images/meet-the-team/groupMobile.png';

const MeetAllCore: React.FC = () => {
  const isDesktop = useMatchMedia(min.tablet);
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
      </div>
      <StyledImageCore src={isDesktop ? GroupDesktop : GroupMobile} />
    </StyledMeetCoreContainer>
  );
};

export default MeetAllCore;
