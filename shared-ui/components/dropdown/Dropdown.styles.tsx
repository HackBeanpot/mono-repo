import styled from 'styled-components';
import { colors } from '../../../shared-ui/style/colors';
import { fonts } from '../../../shared-ui/style/typography';
import { min } from '../../lib/responsive';

const StyledDropdown = styled.select`
  border-color: ${colors.WHITE};
  background-color: ${colors.BUTTON_DARK_GREEN};
  color: ${colors.WHITE};
  font-family: ${fonts.nunitoSansSemibold};
  border-radius: 0.3em;
  height: 3em;
  padding-left: 0.5em;
  padding-right: 0.5em;

  -webkit-appearance: none;
  appearance: none;
  background-image: url("./GoogleDropdown.png");
  background-repeat: no-repeat;
  background-position: calc(100% - 0.5em) center;
  background-size: 1.5em;

  @media ${min.mobile} {
    font-size: 1.2em;
  }
  @media ${min.tablet} {
    font-size: 1.25em;
  }
`;

export {
  StyledDropdown
};
