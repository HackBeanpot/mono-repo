import styled from 'styled-components';
import { colors } from '../../style/colors';
import { fonts } from '../../style/typography';
import { max } from '../../lib/responsive';
import { motion } from 'framer-motion';
import { StyledPrimaryButtonProps } from '../../lib/types';

const StyledPrimaryButton = styled(motion.button)<StyledPrimaryButtonProps>`
  cursor: pointer;
  color: ${(props): string => props.$isApplyButton ? colors.WHITE :
    props.$transparent ? colors.BUTTON_YELLOW : colors.TEXT_DARKBLUE};
  background-color: ${(props): string => props.$isApplyButton ? colors.BUTTON_RED :
    props.$transparent ? colors.TRANSPARENT : colors.BUTTON_YELLOW};
  font-family: ${fonts.nunitoSansSemibold};
  transition-duration: 0.5s;
  &:hover {
    color: ${(props): string => props.$isApplyButton ? colors.WHITE : colors.TEXT_DARKBLUE};
    background-color: ${(props): string => props.$isApplyButton ? colors.BUTTON_RED : colors.BUTTON_DARK_YELLOW};
  }
  padding-right: ${(props): string => props.$isApplyButton ? '3em' : props.$isSmallPrimary ? '1.5em' : '1em'};
  padding-left: ${(props): string => props.$isApplyButton ? '3em' : props.$isSmallPrimary ? '1.5em' : '1em'};
  padding-top: ${(props): string => props.$isApplyButton ? '0.5em' : props.$isSmallPrimary ? '0.5em' : '1em'};
  padding-bottom: ${(props): string => props.$isApplyButton ? '0.5em' : props.$isSmallPrimary ? '0.5em' : '1em'};
  border-radius: 2em;
  border: 0.1em;
  font-size: 1.4em;
  text-decoration: none;
  @media ${max.tabletLg} {
    padding-right: ${(props): string => props.$isApplyButton ? '10vw' : props.$isSmallPrimary ? '1.5em' : '1em'};
    padding-left: ${(props): string => props.$isApplyButton ? '10vw' : props.$isSmallPrimary ? '1.5em' : '1em'};
    font-size: 1.2em;
  }
`;

export { StyledPrimaryButton };