import styled from 'styled-components';
import { P } from '../../../shared-ui/style/typography';
import { colors } from '../../../shared-ui/style/colors';

const StyledHackingRemainingContainer = styled.div`
  z-index: 21;
  background-color: ${colors.BUTTON_DARK_GREEN};
  position: fixed;
  right: 0;
  top: 4em;
  width: 8.3125em;
  text-align: center;
  padding-top: 1em;
  border-radius: 1em 0em 0em 1em;
  border: 0.3em solid ${colors.BUTTON_DARK_GREEN};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin: 2em 0em;
`;

const StyledHackingRemainingHeader = styled(P)`
  font-size: 0.9375em;
  color: ${colors.BUTTON_GREEN};
`;

const StyledTime = styled.p`
  font-size: 1.5em;
  color: ${colors.WHITE};
`;

export {
  StyledHackingRemainingContainer,
  StyledHackingRemainingHeader,
  StyledTime
};
