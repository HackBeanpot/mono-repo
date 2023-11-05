import styled from '@emotion/styled';
import { ExploreSectionProps } from '../../lib/types';
import { colors } from '../../../shared-ui/style/colors';
import { P } from '../../../shared-ui/style/typography';
import { min, max } from '../../../shared-ui/lib/responsive';

const StyledTextContainer = styled.div<ExploreSectionProps>`
  padding: 5em;
  border-radius: 2em 0em 0em 2em;
  margin-top: 5em;
  margin-left: 3em;
  background-color: ${(props): string =>
    props.isDay ? colors.TEXT_BOX_BLUE : colors.NIGHT_TEXT_BOX_BLUE};
  @media ${min.tablet} {
    width: 34em;
    margin-left: auto;
    margin-right: 0;
    margin-top: 0;
  }
  @media ${min.tabletLg} {
    width: 38em;
  }

  @media ${min.mobile} {
    padding: 3em;
  }
`;

const StyledExploreSectionContainer = styled.div`
  padding-top: 0em;
  margin-top: 8em;
  position: relative;
  @media ${min.mobile} {
    margin-top: 12em;
  }
  @media ${min.tabletSm} {
    margin-top: 22em;
  }
  @media ${min.tablet} {
    margin-top: 2em;
  }
  @media ${min.tabletLg} {
    margin-top: 8em;
  }
  @media ${min.desktop} {
    margin-top: 15em;
  }
`;

const StyledParagraph = styled(P)`
  padding: 1.5em 0;
`;

const StyledBubble3 = styled.img`
position: absolute;
left: 1em;
top: 30em;
width: 8%;
@media ${min.tablet} {
  width: 8%;
  top: 36em;
  left: 3em;
}
`

const StyledDiver = styled.img`
  position: absolute;
  right: 2em;
  top: 17em;
  width: 20em;

  @media ${min.tablet} {
    top: 30em;
    right: 6em;
    width: 30em;
  }
  @media ${min.tabletLg} {
    top: 28em;
  }
  @media (max-width: 767px) {
    top: 30em;
    right: 15em;
  }
  @media (max-width: 600px) {
    top: 32em;
    right: 5em;
  }
  @media (max-width: 540px) {
    width: 50%;
    top: 37em;
  }
  @media (max-width: 450px) {
    top: 42em;
  }
  @media (max-width: 425px) {
    top: 45em;
  }
  @media (max-width: 390px) {
    top: 50em;
  }
`;

const StyledButtonContainer = styled.div`
  @media ${max.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export {
  StyledTextContainer,
  StyledExploreSectionContainer,
  StyledParagraph,
  StyledBubble3, 
  StyledDiver,
  StyledButtonContainer
};
