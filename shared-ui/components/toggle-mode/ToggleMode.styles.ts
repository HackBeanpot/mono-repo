import styled from 'styled-components';
import { max } from '../../lib/responsive';

const ToggleContainer = styled.div.attrs(
  (props: { location: string }) => props
)`
  @media ${max.tablet} {
    float: right;
  }
  float: ${(props): string => props.location};
`;

const StyledStar = styled.img`
  position: absolute;
  z-index: 1;
  width: 12%;
  top: 9em;
  right: 13em;
  @media ${max.tabletLg} {
    right: 8em;
  }
  @media ${max.tablet} {
    right: 5em;
    width: 14%;
  }
  @media ${max.tabletSm} {
    right: 2em;
  }
`;

const StyledToggle = styled.img`
  float: right;
  padding-top: 5.5em;
  padding-right: 0.5em;
  cursor: pointer;
  @media ${max.mobile} {
    padding-top: 19em;
    width: 15%;
  }
  @media ${max.tablet} {
    padding-top: 5.5em;
    width: 20%;
  }
`;

export { StyledStar, StyledToggle, ToggleContainer };
