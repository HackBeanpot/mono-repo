import styled from 'styled-components';
import { min } from '../../shared-ui/lib/responsive';
import { colors } from '../../shared-ui/style/colors';
import { fonts } from '../../shared-ui/style/typography';
export const StyledDropdown = styled.select`
  border-color: ${colors.TRANSPARENT};
  background-color: ${colors.BUTTON_DARK_BLUE};
  color: ${colors.WHITE};
  font-family: ${fonts.nunitoSansSemibold};
  border-radius: 0.3em;
  height: 3em;
  padding-left: 0.5em;
  padding-right: 0.5em;

  @media ${min.mobile} {
    font-size: 1.2em;
  }
  @media ${min.tablet} {
    font-size: 1.25em;
  }
`;
