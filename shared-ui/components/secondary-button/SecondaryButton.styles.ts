import styled from 'styled-components';
import { max } from '../../lib/responsive';
import { StyledSecondaryButtonProps } from '../../lib/types';
import { colors } from '../../style/colors';
import { fonts } from '../../../shared-ui/style/typography'

const StyledSecondaryButton = styled.button<StyledSecondaryButtonProps>`
  font-family: ${fonts.nunitoRegular};
  color: ${colors.WHITE};
  background-color: ${colors.BUTTON_RED};
  border-color: ${colors.BUTTON_RED};
  box-shadow: 0px 0px 20px 0px rgba(19, 74, 95, 0.72);
  transition-duration: 0.5s;
  &:hover {
    color: ${colors.WHITE};
    background-color: ${colors.BUTTON_DARK_RED};
    border-color: ${colors.BUTTON_DARK_RED}
  }
  letter-spacing: 0.1em;
  padding-top: 1em;
  padding-bottom: 1em;
  width: 13em;
  border-radius: 2em;
  border: 2em;
  cursor: ${(props): string => (props.isClickable ? 'pointer' : 'cursor')};
  font-size: 1em;
  @media ${max.desktop} {
    width: 10.4em;
  }
  @media ${max.tabletLg} {
    width: 9.4em;
  }
  @media ${max.tablet} {
    font-size: 1.1em;
    width: 13em;
  }
`;

export { StyledSecondaryButton };
