import styled from 'styled-components';
import { colors } from '../../../shared-ui/style/colors';
import { fonts } from '../../../shared-ui/style/typography';

const StyledDropdown = styled.select`
  border-color: ${colors.WHITE};
  background-color: ${colors.BUTTON_DARK_GREEN};
  color: ${colors.WHITE};
  font-family: ${fonts.nunitoSansSemibold};
  border-radius: 0.3em;
  height: 3em;
  padding-left: 0.5em;
`;

export {
  StyledDropdown
};
