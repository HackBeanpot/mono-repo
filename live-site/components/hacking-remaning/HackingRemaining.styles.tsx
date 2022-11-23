import styled from 'styled-components';
import { colors } from '../../../shared-ui/style/colors';

const StyledHackingRemainingContainer = styled.div`
  z-index: 20;
  float: right;
  background-color: ${colors.BUTTON_DARK_GREEN};

  border-radius: 1em;
  border: 0.3em solid ${colors.BUTTON_DARK_GREEN};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const StyledHackingRemainingHeader = styled.p`
  font-size: 15px;
  color: #bed9aa;
`;

const StyledTime = styled.p`
  font-size: 24px;
  color: #ffffff;
`;

const FloatRightContainer = styled.div`
  float: right;
`;

export {
  StyledHackingRemainingContainer,
  StyledHackingRemainingHeader,
  StyledTime,
  FloatRightContainer
};
