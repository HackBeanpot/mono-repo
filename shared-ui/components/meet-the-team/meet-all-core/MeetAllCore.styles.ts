import styled from '@emotion/styled';
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
  margin-top: 2em;
  right: 4em;
  margin: auto;
  width: 100%;
  @media ${min.tabletLg} {
    width: 50%;
    margin-top: 2.5em;
    margin-left: 2em;
  }
`;

export {
  StyledMeetCoreContainer,
  StyledOurTeamCore,
  StyledHeaderCore,
  StyledDescriptionTeamCore,
  StyledImageCore
};
