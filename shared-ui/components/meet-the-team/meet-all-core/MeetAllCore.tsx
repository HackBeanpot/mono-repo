import React from 'react';
import { min } from '../../../lib/responsive';
import useMatchMedia from 'react-use-match-media';
import { StyledDesktopCore, StyledMobileCore } from './MeetAllCore.styles';
import GroupDesktop from '../../../shared-ui/images/meet-the-team/groupDesktop.svg';
import GroupMobile from '../../../shared-ui/images/meet-the-team/groupMobile.svg';

const MeetAllCore: React.FC = () => {
  const isDesktop = useMatchMedia(min.tablet);
  return (
    <div id="meetAllCore">
      {isDesktop && <StyledDesktopCore src={GroupDesktop} />}
      {!isDesktop && <StyledMobileCore src={GroupMobile} />}
    </div>
  );
};

export default MeetAllCore;
