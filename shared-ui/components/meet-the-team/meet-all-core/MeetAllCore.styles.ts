import styled from 'styled-components';
import { P } from '../../../style/typography';
import { min } from '../../../lib/responsive';
import { colors } from '../../../style/colors';

const StyledMeetCoreContainer = styled.div`
  display: flex;
  position: relative;
  margin: 5em 0;
  padding-bottom: 5em;
  text-align: left;
  @media ${min.tablet} {
    padding: 10em 0;
  }
`;

const StyledOurTeamCore = styled(P)`
  color: ${colors.WHITE};
  padding-top: 3.5em;
`;

const StyledDesktopImageCore = styled.img`
  right: 5em;
  padding-top: 3.5em;
`;

const StyledMobileImageCore = styled.img`
  right: 3em;
  padding-top: 3.5em;
`;

export {
  StyledMeetCoreContainer,
  StyledOurTeamCore,
  StyledDesktopImageCore,
  StyledMobileImageCore
};