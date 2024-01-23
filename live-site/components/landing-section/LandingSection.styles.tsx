import styled from '@emotion/styled';
import { P } from '../../../shared-ui/style/typography';
import { max, min } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';

const StyledLandingSectionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const StyledHourglass = styled.img`
  z-index: 1;
  width: 5%;
  align-self: center;
  padding-top: 5em;
  @media ${max.desktop} {
    padding-top: 2em;
  }
  @media ${max.tabletLg} {
    padding-top: 4em;
    width: 6%;
  }
  @media ${max.tablet} {
    padding-top: 7em;
    width: 6%;
  }
`;

const StyledLandingSectionSand = styled.img`
  width: 100%;
`;

const StyledCountdownBubble = styled.img`
  width: 45em;
  z-index: 0;
  display: flex;
  position: absolute;
  align-self: center;
  justify-content: center;
  top: 20em;
  @media ${max.desktop} {
    width: 35em;
  }
  @media ${max.tabletLg} {
    width: 30em;
  }
  @media ${max.tablet} {
    width: 25em;
  }
`;

const StyledBubbleLeft = styled.img`
  width: 30em;
  z-index: 0;
  position: absolute;
  top: 20em;
  @media ${max.desktop} {
    width: 25em;
  }
  @media ${max.tabletLg} {
    width: 12em;
  }
  @media ${max.tablet} {
    top: 40em;
    width: 7em;
  }
`;

const StyledBubbleRight = styled.img`
  width: 33em;
  z-index: 0;
  position: absolute;
  right: 0;
  top: 20em;
  @media ${max.desktop} {
    width: 25em;
  }
  @media ${max.tabletLg} {
    width: 12em;
  }
  @media ${max.tablet} {
    top: 40em;
    width: 7em;
  }
`;

export {
  StyledLandingSectionContainer,
  StyledHourglass,
  StyledLandingSectionSand,
  StyledCountdownBubble,
  StyledBubbleLeft,
  StyledBubbleRight
};
