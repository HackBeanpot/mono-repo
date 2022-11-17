import styled from 'styled-components';
import { P, H3 } from '../../../style/typography';
import { colors } from '../../../style/colors';
import { max } from '../../../lib/responsive';

const StyledMeetCoreContainer = styled.div`
  display: flex;
  margin: 5em 0;
  padding: 8em;
  @media ${max.tabletLg} {
    padding: 5em;
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
  object-fit: cover;
  width: 100%;
  @media ${max.tabletSm} {
    padding: 5em;
  }
`;

export {
  StyledMeetCoreContainer,
  StyledOurTeamCore,
  StyledHeaderCore,
  StyledDescriptionTeamCore,
  StyledImageCore
};
