import styled from '@emotion/styled';
import { max, min } from '../../../shared-ui/lib/responsive';
import { fonts, H2, H3, P } from '../../../shared-ui/style/typography';
import { colors } from '../../../shared-ui/style/colors';

const StyledOurTeamSection = styled.div`
  margin: 10em 0;
`;

const StyledHeader = styled(H2)`
  font-family: ${fonts.berkshireSwash};
  padding-bottom: 1em;
  padding-left: 2.4em;

  @media ${max.tablet} {
    padding-left: 1em;
    padding-bottom: 1em;
  }
`;

const StyledParagraph = styled(P)`
    color: ${colors.WHITE};
`

const StyledH3 = styled(H3)`
    color: ${colors.WHITE};
`

const StyledHBPCore = styled.img`
  width: 100%;
`;

const StyledSeahorse = styled.img`
  position: relative;
  bottom: 0;
  left: 0;
  width: 10%;
`;

const StyledBubbles = styled.img`
  position: relative;
  left: 0;
  margin-top: -20px;
  width: 10%;
  height: 10%;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 5.5em;
  padding-right: 5.5em;
  margin-bottom: 2em;
  gap: 3em;
  @media ${max.tablet} {
    flex-wrap: wrap;
    padding-left: 2.4em;
    padding-right: 2.4em;
  }
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  flex: 100%;

  @media ${min.tablet} {
    flex: 50%;
  }
`;


export { StyledOurTeamSection, StyledHeader, StyledParagraph, StyledH3, StyledHBPCore, StyledSeahorse, StyledBubbles, StyledContainer, StyledColumn };
