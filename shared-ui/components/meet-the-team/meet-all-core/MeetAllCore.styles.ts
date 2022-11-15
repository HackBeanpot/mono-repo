import styled from 'styled-components';
import { H3, P } from '../../../style/typography';
import { min } from '../../../../shared-ui/lib/responsive';

const StyledMeetCoreContainer = styled.div`
  display: flex;
  position: relative;
  margin: 5em 0;
  padding-bottom: 5em;
  @media ${min.tablet} {
    padding: 10em 0;
  }
`;

const StyledDesktopImageCore = styled.img`
  display: flex;
  padding-top: 3.5em;
  justify-content: center;
`;

const StyledDesktopOurTeamCore = styled(P)`
  display: flex;
  padding-top: 3.5em;
  justify-content: center;
`;

const StyledDesktopHeaderCore = styled(H3)`
  display: flex;
  padding-top: 3.5em;
  justify-content: center;
`;

const StyledDesktopParagraphCore = styled(P)`
  display: flex;
  padding-top: 3.5em;
  justify-content: center;
`;

const StyledMobileImageCore = styled.img`
  display: flex;
  padding-top: 3.5em;
  justify-content: center;
`;

const StyledMobileOurTeamCore = styled(P)`
  display: flex;
  padding-top: 3.5em;
  justify-content: center;
`;

const StyledMobileHeaderCore = styled(H3)`
  display: flex;
  padding-top: 3.5em;
  justify-content: center;
`;

const StyledMobileParagraphCore = styled(P)`
  display: flex;
  padding-top: 3.5em;
  justify-content: center;
`;

export {
  StyledMeetCoreContainer,
  StyledDesktopImageCore,
  StyledDesktopOurTeamCore,
  StyledDesktopHeaderCore,
  StyledDesktopParagraphCore,
  StyledMobileImageCore,
  StyledMobileOurTeamCore,
  StyledMobileHeaderCore,
  StyledMobileParagraphCore
};
