import styled from 'styled-components';
import { max } from '../../lib/responsive';
import { colors } from '../../style/colors';

const StyledPrimaryButton = styled.button`
  color: ${colors.HEADER_FOOTER_BLUE};
  background-color: ${colors.BUTTON_GREEN};
  border-color: ${colors.HEADER_FOOTER_BLUE};
  font-size: 1.0em;
  background-color: ${colors.BUTTON_GREEN};
  padding: 1em 1em;
  border-radius: 2em;
  border: 1.5px solid;
  cursor: pointer;

  @media ${max.tablet} {
    font size: 0.8rem;
  };
`;

export { StyledPrimaryButton };
