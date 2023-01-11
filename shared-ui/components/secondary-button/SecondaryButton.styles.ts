import styled from 'styled-components';
import { max } from '../../lib/responsive';
import { StyledSecondaryButtonProps } from '../../lib/types';
import { colors } from '../../style/colors';

const StyledSecondaryButton = styled.button<StyledSecondaryButtonProps>`
  color: ${(props): string => props.isJudgingSecondary ? colors.WHITE : colors.BUTTON_GREEN};
  background-color: ${colors.BUTTON_DARK_GREEN};
  border-color: ${colors.BUTTON_GREEN};
  letter-spacing: ${(props): string => props.isJudgingSecondary ? '0.2em' : '0.1em'};
  padding-top: 0.7em;
  padding-bottom: 0.7em;
  padding-right: ${(props): string => props.isJudgingSecondary ? '3em' : '0.7em'};
  padding-left: ${(props): string => props.isJudgingSecondary ? '3em' : '0.7em'};
  border-radius: 2em;
  border: 0.1em solid; 
  cursor: pointer;
  font-size: 1em;
  @media ${max.tablet} {
    font-size: 0.8em;
  } ;
`;

export { StyledSecondaryButton };
