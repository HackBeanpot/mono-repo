import styled from 'styled-components';
import { team } from '../../../lib/data';
import { max } from '../../../lib/responsive';
import { StyledToolTipProps } from '../../../lib/types';
import { colors } from '../../../style/colors';
import { fonts } from '../../../style/typography';

const StyledToolTipText = styled.div`
  display: inline-block;
  text-align: left;
  line-height: 2em;
  font-family: ${fonts.nunitoSansSemibold};
  @media ${max.tabletLg} {
    font-size: 0.8em;
  }
`;

const StyledToolTip = styled.div<StyledToolTipProps>`
  width: 12em;
  background-color: ${(props): string =>
    props.team === team.directors
      ? colors.DIRECTORS_YELLOW
      : props.team === team.tech
      ? colors.TECH_BLUE
      : props.team === team.design
      ? colors.DESIGN_PINK
      : props.team === team.socialOutreach
      ? colors.SOORANGE
      : colors.SPONSIBGREEN};
  color: white;
  text-align: center;
  border-radius: 1.2em;
  padding: 1em 1em;
  position: absolute;
  z-index: 1;
  margin-top: -20em;
  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    border-width: 0.5em;
    border-style: solid;
    border-color: ${(props): string =>
        props.team === 'Directors'
          ? colors.DIRECTORS_YELLOW
          : props.team === 'Tech'
          ? colors.TECH_BLUE
          : props.team === 'Design'
          ? colors.DESIGN_PINK
          : props.team === 'Social Outreach'
          ? colors.SOORANGE
          : colors.SPONSIBGREEN}
      transparent transparent transparent;
  }
  @media ${max.tabletLg} {
    width: 9.07em;
    padding: 0.4em 0.4em;
    border-radius: 0.6em;
    margin-top: -16em;
    margin-left: 0;
    text-align: left;
  }
`;

export { StyledToolTip, StyledToolTipText };
