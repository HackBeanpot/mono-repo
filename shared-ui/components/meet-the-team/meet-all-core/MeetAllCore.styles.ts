import styled from 'styled-components';
import { P } from '../../../style/typography';
import { min } from '../../../lib/responsive';
import { colors } from '../../../style/colors';

const StyledMeetCoreContainer = styled.div`
  display: flex;
  margin: 5em 0;
  padding-bottom: 5em;
  text-align: left;
  @media ${min.tablet} {
    padding: 10em 0;
  }
`;

const StyledOurTeamCore = styled(P)`
  color: ${colors.WHITE};
  text-align: left;
  padding-top: 3.5em;
`;

const StyledDescriptionTeamCore = styled(P)`
  color: ${colors.TEXT_BROWN};
  text-align: left;
  padding-top: 1em;
`;

const StyledDesktopImageCore = styled.img`
  right: 5em;
  padding-top: 2em;
`;

const StyledMobileImageCore = styled.img`
  right: 3em;
  padding-top: 2em;
`;

export {
  StyledMeetCoreContainer,
  StyledOurTeamCore,
  StyledDescriptionTeamCore,
  StyledDesktopImageCore,
  StyledMobileImageCore
};
