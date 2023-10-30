import styled from 'styled-components';
import { colors } from '../../style/colors';
import { fonts } from '../../style/typography';
import { min } from '../../lib/responsive';
import { motion } from 'framer-motion';
import { StyledPrimaryButtonProps } from '../../lib/types';

const StyledPrimaryButton = styled(motion.button)<StyledPrimaryButtonProps>`
  color: ${(props): string => 
    props.$transparent ? colors.BUTTON_YELLOW : colors.TEXT_DARKBLUE};
  background-color: ${(props): string => 
    props.$transparent ? colors.TRANSPARENT : colors.BUTTON_YELLOW};
  border-color: ${colors.BUTTON_YELLOW} !important;
  font-family: ${fonts.nunitoSansSemibold};
  transition-duration: 0.5s;
  &:hover {
    color: ${colors.TEXT_DARKBLUE};
    background-color: ${colors.BUTTON_DARK_YELLOW};
    border-color: ${colors.BUTTON_DARK_YELLOW} !important;
  }
  padding-right: ${(props): string =>
    props.$isSmallPrimary ? '1.5em' : '1em'};
  padding-left: ${(props): string => (props.$isSmallPrimary ? '1.5em' : '1em')};
  padding-top: ${(props): string => (props.$isSmallPrimary ? '0.5em' : '1em')};
  padding-bottom: ${(props): string =>
    props.$isSmallPrimary ? '0.5em' : '1em'};
  border-radius: 2em;
  border: 0.1em solid;
  font-size: 1.4em;
  text-decoration: none;
  @media ${min.tablet} {
    font-size: 1.2em;
  }
`;

export { StyledPrimaryButton };