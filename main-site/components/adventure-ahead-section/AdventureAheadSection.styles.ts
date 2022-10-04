import styled from "styled-components";
import { P } from "../../../shared-ui/style/typography";
import { min, max } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';

const StyledAdeventureAheadSectionContainer = styled.div`
    padding-top: 16em;

    @media ${min.mobile} {
        margin-top: 14em;
      }
      @media ${min.tabletSm} {
        margin-top: 24em;
      }
      @media ${min.tablet} {
        margin-top: 4em;
      }
      @media ${min.tabletLg} {
        margin-top: 10em;
      }
      @media ${min.desktop} {
        margin-top: 23em;
      }
`;

const StyledParagraph = styled(P)`
      padding-top: 1em;
      padding-bottom: 1em;
    color: ${colors.TEXT_BROWN}`
;

const StyledSignpost = styled.img`
padding-left: 8em;
    display: inline-block;
    vertical-align: top;
`;

const StyledTextContainer = styled.div`
    display: inline-block;
    justify-content: center;
    color: ${colors.TEXT_BROWN}
    display: inline-block;
    padding-left: 7em;
    padding-top: 4em;
`;
const StyledButtonContainer = styled.div`
      margin-top: 0.5em;
  @media ${max.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;



export {
    StyledParagraph,StyledSignpost,StyledAdeventureAheadSectionContainer,
    StyledTextContainer,StyledButtonContainer,
}