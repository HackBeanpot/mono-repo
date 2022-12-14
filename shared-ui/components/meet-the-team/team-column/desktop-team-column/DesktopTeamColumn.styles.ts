import styled from 'styled-components';
import { max } from '../../../../lib/responsive';
import { StyledTeamLabelProps } from '../../../../lib/types';
import { colors } from '../../../../style/colors';
import { P } from '../../../../style/typography';

const StyledTeamColumn = styled.div`
  flex-direction: column;
  width: 11em;
  @media ${max.tabletLg} {
    width: 9.5em;
  }
`;

const StyledLabel = styled(P)<StyledTeamLabelProps>`
  padding-left: 0.5em;
  width: 8em;
  margin-bottom: ${(props): string => (props.twoLines ? '-1.2em' : '0')};
  color: ${colors.TEXT_BROWN};
  letter-spacing: 0.1em;
  @media ${max.tabletLg} {
    padding-left: 0;
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

export { StyledTeamColumn, StyledLabel, StyledHeadshot };
