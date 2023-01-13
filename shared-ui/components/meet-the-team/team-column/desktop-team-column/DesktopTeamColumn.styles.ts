import styled from 'styled-components';
import { max } from '../../../../lib/responsive';

const StyledTeamColumn = styled.div`
  flex-direction: column;
  width: 14em;
  @media ${max.desktop} {
    width: 11em;
  }
  @media ${max.tabletLg} {
    width: clamp(9.5em, 20vw, 11em);
  }
`;

const StyledHeadshot = styled.img`
  padding-top: 2em;
  width: 9em;
  @media ${max.tabletLg} {
    width: 6.5em;
    margin: 0;
  }
  @media ${max.tablet} {
    padding-top: 3em;
    width: 6em;
    margin: 0.5em;
  }
  @media ${max.tabletSm} {
    width: 6.2em;
    margin: 0.9em;
  }
`;

export { StyledTeamColumn, StyledHeadshot };
