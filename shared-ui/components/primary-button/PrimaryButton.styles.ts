import styled from 'styled-components';
import { colors } from '../../style/colors';
import { fonts } from '../../style/typography';
import { min } from '../../lib/responsive';
import { motion } from 'framer-motion';
import { StyledPrimaryButtonProps } from '../../lib/types';

const StyledPrimaryButton = styled(motion.button)<StyledPrimaryButtonProps>`
  color: ${colors.WHITE};
  background-color: ${colors.BUTTON_RED};
  border-color: ${colors.BUTTON_RED};
  font-family: ${fonts.nunitoSansSemibold};
  transition-duration: 0.5s;
  &:hover {
    color: ${colors.WHITE};
    background-color: ${colors.BUTTON_DARK_RED};
    border-color: ${colors.BUTTON_DARK_RED};
  }
  padding-right: ${(props): string =>
    props.$isSmallPrimary ? '2.5em' : '2em'};
  padding-left: ${(props): string => (props.$isSmallPrimary ? '2.5em' : '2em')};
  padding-top: ${(props): string => (props.$isSmallPrimary ? '0.2em' : '0.4em')};
  padding-bottom: ${(props): string =>
    props.$isSmallPrimary ? '0.2em' : '0.4em'};
  border-radius: 1.5em;
  cursor: pointer;
  font-size: 1.6em;
  text-decoration: none;
  @media ${min.tablet} {
    font-size: 1.8em;
  }
  box-shadow: 0px 0px 20px 0px rgba(19, 74, 95, 0.72);
`;

export { StyledPrimaryButton };
