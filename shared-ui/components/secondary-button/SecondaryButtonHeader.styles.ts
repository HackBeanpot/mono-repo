import styled from 'styled-components';
import { max, min } from '../../lib/responsive';
import { StyledSecondaryButtonProps } from '../../lib/types';
import { colors } from '../../style/colors';
import { fonts } from '../../style/typography';

const StyledSecondaryHeaderButton = styled.button<StyledSecondaryButtonProps>`
  color: ${colors.WHITE};
  background-color: ${colors.BUTTON_RED};
  box-shadow: 0px 0px 20px 0px rgba(19, 74, 95, 0.72);
  transition-duration: 0.5s;
  &:hover {
    color: ${colors.WHITE};
    background-color: ${colors.BUTTON_DARK_RED};
    border-color: ${colors.BUTTON_DARK_RED}
  }
  font-family: ${fonts.nunitoSansSemibold};
  padding: 0.5em;
  border-radius: 2em;
  border: 0.1em solid;
  text-decoration: none;
  border-color: ${colors.BUTTON_RED};
  font-size: 2.3em;
  text-align: center;

    @media ${min.tablet} {
      border-color: ${colors.BUTTON_RED};
      font-size: 1.2em;
      margin-right: 0.5em;
    }
    @media ${min.tabletLg} {
      margin-right: 1em;
      margin-top: 0.5em;
      font-size: 0.85em;
    }
    @media ${min.desktop} {
      font-size: 1.1em;
    }
    @media ${min.desktopLg} {
      font-size: 1.3em;
      margin: 0.5em;
    }
`;

export { StyledSecondaryHeaderButton };
