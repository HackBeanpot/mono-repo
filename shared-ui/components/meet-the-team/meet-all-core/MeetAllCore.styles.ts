import styled from 'styled-components';
import { P, H3 } from '../../../style/typography';
import { colors } from '../../../style/colors';
import { max, min } from '../../../lib/responsive';

const StyledMeetCoreContainer = styled.div`
  display: flex;
  margin: auto;
  padding: 8em;
  @media ${max.desktop} {
    padding: 3em;
  }
  @media ${max.tabletLg} {
    padding: 4em;
  }
`;

const StyledOurTeamCore = styled(P)`
  color: ${colors.WHITE};
  text-align: left;
  @media ${min.desktop} {
    padding-top: 3.5em;
  }
`;

const StyledHeaderCore = styled(H3)`
  text-align: left;
`;

const StyledDescriptionTeamCore = styled(P)`
  color: ${colors.TEXT_BROWN};
  text-align: left;
  padding-top: 1em;
  @media ${max.tabletLg} {
    padding-bottom: 1em;
  }
`;

const StyledImageCore = styled.img`
  right: 5em;
  margin: auto;
  width: 100%;
  @media ${min.tablet} {
    width: 90%;
  }
  @media ${min.tabletLg} {
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
