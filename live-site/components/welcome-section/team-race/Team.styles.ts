import styled from 'styled-components';
import { P } from '../../../../shared-ui/style/typography';

const StyledTeamContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1em 2em;
`;

const StyledTeamName = styled(P)`
  text-transform: uppercase;
  color: #bed9aa;
  font-size: 20px;
`;

const StyledTeamPoint = styled(P)`
  text-transform: uppercase;
  color: #ffe799;
  font-size: 20px;
`;

const StyledTeamPosition = styled(P)`
  text-transform: uppercase;
  color: #bed9aa;
  font-size: 20px;
  margin-right: 0.1em;
`;

const StyledTeamCarContainer = styled.div`
  border-bottom: 2px solid #ffe799;
  width: 15em;
  margin-left: 1.5em;
`;

const StyledTeamCar = styled.img<{ margin: number }>`
  margin-left: ${(props): number => props.margin}em;
`;

export {
  StyledTeamContainer,
  StyledTeamName,
  StyledTeamPoint,
  StyledTeamCarContainer,
  StyledTeamCar,
  StyledTeamPosition
};
