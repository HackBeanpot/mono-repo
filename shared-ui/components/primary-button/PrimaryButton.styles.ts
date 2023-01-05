import styled from 'styled-components';
import { colors } from '../../style/colors';
import { fonts } from '../../style/typography';
import { min } from '../../lib/responsive';
import { motion } from 'framer-motion';

const StyledPrimaryButton = styled(motion.button)`
  color: ${colors.HEADER_FOOTER_BLUE};
  background-color: ${colors.BUTTON_GREEN};
  border-color: ${colors.HEADER_FOOTER_BLUE};
  font-family: ${fonts.nunitoSansSemibold};
  transition-duration: 0.5s;
  &:hover {
    color: ${colors.BUTTON_GREEN};
    background-color: ${colors.HEADER_FOOTER_BLUE};
    border-color: ${colors.BUTTON_GREEN};
  }
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

/* Tweaked paddings */
const StyledPrimaryButtonWide = styled(motion.button)`
  color: ${colors.HEADER_FOOTER_BLUE};
  background-color: ${colors.BUTTON_GREEN};
  border-color: ${colors.HEADER_FOOTER_BLUE};
  font-family: ${fonts.nunitoSansSemibold};
  transition-duration: 0.5s;
  &:hover {
    color: ${colors.BUTTON_GREEN};
    background-color: ${colors.HEADER_FOOTER_BLUE};
    border-color: ${colors.BUTTON_GREEN};
  }
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-right: 1.5em;
  padding-left: 1.5em;
  border-radius: 2em;
  border: 0.1em solid;
  cursor: pointer;
  font-size: 1.4em;
  text-decoration: none;
  @media ${min.tablet} {
    font-size: 1.2em;
  }
`;

export { StyledPrimaryButton, StyledPrimaryButtonWide };
