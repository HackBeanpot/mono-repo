import styled from 'styled-components';
import { H3, P } from '../../../../shared-ui/style/typography';
import { colors } from '../../../../shared-ui/style/colors';
import { max } from '../../../../shared-ui/lib/responsive';

const StyledTeamContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1em;
  @media ${max.tablet} {
    flex-direction: column;
  }
`;

const StyledTeamHeader = styled(H3)`
  color: ${colors.WHITE};
`;

const StyledTeamName = styled(P)`
  text-transform: uppercase;
  color: ${colors.BUTTON_GREEN};
  font-size: 1.5em;
  @media ${max.tablet} {
    font-size: 1em;
  }
`;

const StyledTeamPoint = styled(P)`
  text-transform: uppercase;
  color: ${colors.RACE_LINE};
  font-size: 1.5em;
  @media ${max.tablet} {
    font-size: 1em;
  }
`;

const StyledTeamPosition = styled(P)`
  text-transform: uppercase;
  color: ${colors.BUTTON_GREEN};
  margin-right: 0.5em;
  font-size: 1.5em;
  @media ${max.tablet} {
    font-size: 1em;
  }
`;

const StyledTeamCarContainer = styled.div`
  border-bottom: 0.125em solid ${colors.RACE_LINE};
  width: 15em;
  margin-right: 2em;
  position: relative;
  margin-top: 3em;
  @media ${max.tablet} {
    width: 100%;
  }
`;

const StyledCarContainer = styled.div`
  display: flex;
`;

const StyledTeamCar = styled.img<{ margin: number }>`
  margin-left: ${(props): number => props.margin}%;
  margin-bottom: -0.6em;
  position: absolute;
  bottom: 0.5em;
`;

export {
  StyledTeamContainer,
  StyledTeamName,
  StyledTeamPoint,
  StyledTeamCarContainer,
  StyledTeamCar,
  StyledTeamPosition,
  StyledTeamHeader,
  StyledCarContainer
};
