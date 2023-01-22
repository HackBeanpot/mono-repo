import styled from 'styled-components';
import { H3, P } from '../../../../shared-ui/style/typography';
import { colors } from '../../../../shared-ui/style/colors';
import { max } from '../../../../shared-ui/lib/responsive';

const StyledTeamContainer = styled.div`
  display: flex;
  flex-direction: row;
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
`;

const StyledTeamPoint = styled(P)`
  text-transform: uppercase;
  color: ${colors.RACE};
  font-size: 1.5em;
`;

const StyledTeamPosition = styled(P)`
  text-transform: uppercase;
  color: ${colors.BUTTON_GREEN};
  font-size: 1.5em;
  margin-right: 0.1em;
`;

const StyledTeamCarContainer = styled.div`
  border-bottom: 2px solid ${colors.RACE};
  width: 15em;
`;

const StyledCarContainer = styled.div`
  display: flex;
`;

const StyledTeamCar = styled.img<{ margin: number }>`
  margin-left: ${(props): number => props.margin}%;
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
