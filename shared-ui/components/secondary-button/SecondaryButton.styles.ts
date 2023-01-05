import styled from 'styled-components';
import { max } from '../../lib/responsive';
import { colors } from '../../style/colors';

const StyledSecondaryButton = styled.button`
  color: ${colors.BUTTON_GREEN};
  background-color: ${colors.BUTTON_DARK_GREEN};
  border-color: ${colors.BUTTON_GREEN};
  padding: 0.7em;
  border-radius: 2em;
  cursor: pointer;
  border: none;
  font-size: 1em;

  @media ${max.tablet} {
    font-size: 0.8em;
    padding: 1em;
  } ;
`;

/* Revisions: left-right padding, border added, text color made white */
const StyledSecondaryButtonWhiteText = styled.button`
  color: ${colors.WHITE};
  background-color: ${colors.BUTTON_DARK_GREEN};
  border-color: ${colors.BUTTON_GREEN};
  padding-top: 0.7em;
  padding-bottom: 0.7em;
  padding-right: 3em;
  padding-left: 3em;
  border-radius: 2em;
  border: 1em solid; 
  cursor: pointer;
  border: none;
  font-size: 1em;

  @media ${max.tablet} {
    font-size: 0.8em;
    padding-right: 2em;
    padding-left: 2em;
  } ;
`;

export { StyledSecondaryButton, StyledSecondaryButtonWhiteText };
