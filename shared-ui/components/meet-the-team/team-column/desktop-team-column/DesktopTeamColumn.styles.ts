import styled from 'styled-components';
import { max } from '../../../../lib/responsive';

const StyledTeamColumn = styled.div`
  flex-direction: column;
  width: 11em;
  @media ${max.tabletLg} {
    width: 9.5em;
  }
`;
const StyledHeadshot = styled.img`
  padding-top: 2em;
  width: 8.5em;
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
