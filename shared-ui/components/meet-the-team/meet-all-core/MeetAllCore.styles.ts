import styled from 'styled-components';
import { P, H3 } from '../../../style/typography';
import { colors } from '../../../style/colors';
import { max } from '../../../lib/responsive';

const StyledMeetCoreContainer = styled.div`
  display: flex;
  margin: auto;
  padding: 8em;
  @media ${max.tabletLg} {
    padding: 4em;
  }
`;

const StyledOurTeamCore = styled(P)`
  color: ${colors.WHITE};
  text-align: left;
  padding-top: 3.5em;
`;

const StyledHeaderCore = styled(H3)`
  text-align: left;
`;

const StyledDescriptionTeamCore = styled(P)`
  color: ${colors.TEXT_BROWN};
  text-align: left;
  padding-top: 1em;
`;

const StyledImageCore = styled.img`
  right: 5em;
  padding-top: 2em;
  @media ${max.tabletLg} {
    width: 90%;
    padding: 7em;
  }
  @media ${max.tabletSm} {
    width: 75%;
    padding: 5em;
    position: absolute;
    display: none;
    right: 1em;
  }
  @media ${max.mobile} {
    padding: 1em;
    width: 100%;
  }
`;

export {
  StyledMeetCoreContainer,
  StyledOurTeamCore,
  StyledHeaderCore,
  StyledDescriptionTeamCore,
  StyledImageCore
};
