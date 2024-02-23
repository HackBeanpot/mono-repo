import styled from '@emotion/styled';
import { P, fonts } from '../../../shared-ui/style/typography';
import { colors } from '../../../shared-ui/style/colors';

const StyledHackingRemainingContainer = styled.div`
  z-index: 21;
  background-color: ${colors.YELLOW_GREEN};
  position: fixed;
  left: 0;
  top: 4em;
  width: 8.3125em;
  text-align: center;
  padding-top: 1em;
  border-radius: 0em 1em 1em 0em;
  border: 0.3em solid ${colors.YELLOW_GREEN};
  margin: 2em 0em;
`;

const StyledHackingRemainingHeader = styled(P)`
  font-family: ${fonts.nunitoSansSemibold};
  font-size: 1.2em;
  margin-bottom: -0.5em;
  color: ${colors.TEXT_BOX_BLUE};
`;

const StyledTime = styled.p<TimeRemainingTextProps>`
  font-size: 1.5em;
  font-family: ${fonts.nunitoSansBold};
  color: ${colors.TEXT_BOX_BLUE};
`;

export {
  StyledHackingRemainingContainer,
  StyledHackingRemainingHeader,
  StyledTime
};
