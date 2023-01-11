import styled from 'styled-components';
import { max } from '../../lib/responsive';
import { StyledSecondaryButtonProps } from '../../lib/types';
import { colors } from '../../style/colors';

const StyledSecondaryButton = styled.button<StyledSecondaryButtonProps>`
  color: ${colors.WHITE};
  background-color: ${colors.BUTTON_DARK_GREEN};
  border-color: ${colors.BUTTON_DARK_GREEN};
  letter-spacing: 0.1em;
  padding-top: 1em;
  padding-bottom: 1em;
  width: 10.5em;
  border-radius: 2em;
  border: 2em;
  cursor: ${(props): string => (props.isClickable ? 'pointer' : 'cursor')};
  font-size: 1em;
  @media ${max.tabletLg} {
    width: 9.4em;
  }
  @media ${max.tablet} {
    font-size: 1.1em;
    width: 13em;
  }
`;

export { StyledSecondaryButton };
