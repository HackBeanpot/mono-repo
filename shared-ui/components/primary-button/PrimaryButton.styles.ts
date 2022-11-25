import styled from 'styled-components';
import { colors } from '../../style/colors';
import { fonts } from '../../style/typography';
import { min } from '../../lib/responsive';

const StyledPrimaryButton = styled.button`
  color: ${colors.HEADER_FOOTER_BLUE};
  background-color: ${colors.BUTTON_GREEN};
  border-color: ${colors.HEADER_FOOTER_BLUE};
  font-family: ${fonts.nunitoSansSemibold};
  &:hover{
    color: ${colors.BUTTON_GREEN};
    background-color: ${colors.HEADER_FOOTER_BLUE};
    border-color: ${colors.BUTTON_GREEN};
    };
  padding: 1em;
  border-radius: 2em;
  border: 0.1em solid;
  cursor: pointer;
  font-size: 1.4em;
  text-decoration: none;
  @media ${min.tablet} {
    font-size: 1.2em;
  }
`;

export { StyledPrimaryButton };
