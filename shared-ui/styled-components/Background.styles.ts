import styled from 'styled-components';
import { max } from '../lib/responsive';

const StyledBackgrounds = styled.img`
  width: 100%;
  position: absolute;
  z-index: -1;
`;

const StyledStar = styled.img`
  float: right;
  margin-top: 6em;
  margin-right: 2em;
  position: relative;
  z-index: -1;
  @media ${max.mobile} {
    margin-top: 6em;
    width: 10%;
  }
  @media ${max.tablet} {
    width: 12%;
    padding-top: 2em;
    position: absolute;
    padding-left: 18.5em;
    float: right;
  }
  @media ${max.tabletLg} {
    width: 13%;
  }
`;

export { StyledBackgrounds, StyledStar };
