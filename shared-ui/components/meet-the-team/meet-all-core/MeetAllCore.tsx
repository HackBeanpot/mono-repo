import React from 'react';
import { min } from '../../../lib/responsive';
import useMatchMedia from 'react-use-match-media';
import {
  StyledDesktopCore,
  StyledMobileCore,
  StyledDesktopHeaderCore,
  StyledDesktopParagraphCore,
  StyledMobileHeaderCore,
  StyledMobileParagraphCore
} from './MeetAllCore.styles';
import GroupDesktop from '../../../images/meet-the-team/groupDesktop.png';
import GroupMobile from '../../../images/meet-the-team/groupMobile.png';

const MeetAllCore: React.FC = () => {
  const isDesktop = useMatchMedia(min.tablet);
  return (
    <div id="meetAllCore">
      {isDesktop && (
        <div>
          <StyledDesktopHeaderCore>
            Meet this year’s pioneers behind HackBeanpot!
          </StyledDesktopHeaderCore>
          <StyledDesktopParagraphCore>
            The HackBeanpot Core Team has been hard at work to create the best
            adventure for you at HackBeanpot 2023! We are a group of 23 driven
            students from universities in the Boston-area who aim to make
            technical experience and knowledge accessible to anyone who is
            interested!
          </StyledDesktopParagraphCore>
          <StyledDesktopCore src={GroupDesktop} />
        </div>
      )}
      {!isDesktop && (
        <div>
          <StyledMobileHeaderCore>
            Meet this year’s pioneers behind HackBeanpot!
          </StyledMobileHeaderCore>
          <StyledMobileParagraphCore>
            The HackBeanpot Core Team has been hard at work to create the best
            adventure for you at HackBeanpot 2023! We are a group of 23 driven
            students from universities in the Boston-area who aim to make
            technical experience and knowledge accessible to anyone who is
            interested!
          </StyledMobileParagraphCore>
          <StyledMobileCore src={GroupMobile} />
        </div>
      )}
    </div>
  );
};

export default MeetAllCore;
