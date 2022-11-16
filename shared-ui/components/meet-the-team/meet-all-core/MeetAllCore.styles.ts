import styled from 'styled-components';
import { P, H3 } from '../../../style/typography';
import { min } from '../../../lib/responsive';

const StyledMeetCoreContainer = styled.div`
  display: flex;
  margin: 5em 0;
  padding-bottom: 5em;
  @media ${min.tablet} {
    padding: 10em 0;
  }
`;

const StyledOurTeamCore = styled(P)`
  text-align: left;
  padding-top: 3.5em;
`;

const StyledHeaderCore = styled(H3)`
  text-align: left;
`;

const StyledDescriptionTeamCore = styled(P)`
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
  StyledHeaderCore,
  StyledDescriptionTeamCore,
  StyledDesktopImageCore,
  StyledMobileImageCore
};
