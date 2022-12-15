import styled from 'styled-components';
import { max } from '../../lib/responsive';
import { colors } from '../../style/colors';

const StyledSecondaryDropdown = styled.select`
  color: ${colors.BUTTON_GREEN};
  background-color: ${colors.BUTTON_DARK_GREEN};
  border-color: ${colors.BUTTON_GREEN};
  padding: 0.7em;
  border-radius: 0.3em;
  cursor: pointer;
  border: none;
  font-size: 1em;

  @media ${max.tablet} {
    font-size: 0.8em;
    padding: 1em;
  };
`;

export { 
  StyledSecondaryDropdown
};
