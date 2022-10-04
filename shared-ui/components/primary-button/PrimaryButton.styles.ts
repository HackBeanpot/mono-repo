import styled from 'styled-components';
import { max } from '../../lib/responsive';
import { colors } from '../../style/colors';
import { fonts } from '../../style/typography';

const StyledPrimaryButton = styled.button`
  color: ${colors.HEADER_FOOTER_BLUE};
  background-color: ${colors.BUTTON_GREEN};
  border-color: ${colors.HEADER_FOOTER_BLUE};
  font-size: 1em;
  font-family: ${fonts.nunitoSansSemibold};
  padding: 1em;
  border-radius: 2em;
  border: 0.1em solid;
  cursor: pointer;

  @media ${max.tablet} {
    font-size: 0.8em;
  } ;
`;

export { StyledPrimaryButton };
