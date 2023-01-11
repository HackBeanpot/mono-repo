import styled from 'styled-components';
import { max } from '../../lib/responsive';
import { colors } from '../../style/colors';

const StyledSecondaryButton = styled.button`
  color: ${colors.BUTTON_GREEN};
  background-color: ${colors.BUTTON_DARK_GREEN};
  border-color: ${colors.BUTTON_GREEN};
  padding: 0.7em;
  border-radius: 2em;
  cursor: pointer;
  border: none;
  font-size: 1em;

  @media ${max.tablet} {
    font-size: 0.8em;
    padding: 1em;
  } ;
`;

export { StyledSecondaryButton };
