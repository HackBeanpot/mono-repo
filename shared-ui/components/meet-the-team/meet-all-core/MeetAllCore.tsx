import React from 'react';
import { min } from '../../../lib/responsive';
import useMatchMedia from 'react-use-match-media';
import {
  StyledMeetCoreContainer,
  StyledOurTeamCore,
  StyledDescriptionTeamCore,
  StyledDesktopImageCore,
  StyledMobileImageCore
} from './MeetAllCore.styles';
import GroupDesktop from '../../../images/meet-the-team/groupDesktop.png';
import GroupMobile from '../../../images/meet-the-team/groupMobile.png';
import { H3, P } from '../../../style/typography';

const MeetAllCore: React.FC = () => {
  const isDesktop = useMatchMedia(min.tablet);
  return (
    <div id="meetAllCore">
      {isDesktop && (
        <StyledMeetCoreContainer>
          <StyledOurTeamCore>OUR TEAM</StyledOurTeamCore>
          <H3>Meet this year’s pioneers behind HackBeanpot!</H3>
          <StyledDescriptionTeamCore>
            The HackBeanpot Core Team has been hard at work to create the best
            adventure for you at HackBeanpot 2023! We are a group of 23 driven
            students from universities in the Boston-area who aim to make
            technical experience and knowledge accessible to anyone who is
            interested!
          </StyledDescriptionTeamCore>
          <StyledDesktopImageCore src={GroupDesktop} />
        </StyledMeetCoreContainer>
      )}
      {!isDesktop && (
        <div>
          <StyledOurTeamCore>OUR TEAM</StyledOurTeamCore>
          <H3>Meet this year’s pioneers behind HackBeanpot!</H3>
          <StyledMobileImageCore src={GroupMobile} />
          <P>
            The HackBeanpot Core Team has been hard at work to create the best
            adventure for you at HackBeanpot 2023! We are a group of 23 driven
            students from universities in the Boston-area who aim to make
            technical experience and knowledge accessible to anyone who is
            interested!
          </P>
        </div>
      )}
    </div>
  );
};

export default MeetAllCore;
