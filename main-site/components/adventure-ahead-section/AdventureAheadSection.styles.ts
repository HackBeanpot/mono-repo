import styled from "styled-components";
import { P } from "../../../shared-ui/style/typography";
import { min, max } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';



const StyledAdeventureAheadSectionContainer = styled.div`
    padding-top: 16em;
    display: inline-block;

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
    padding: 1.5em 0;
    color: ${colors.TEXT_BROWN}`;

const StyledSignpost = styled.img`
    left:8em,
    bottom: 4em,  

`;

const StyledTextContainer = styled.div`
    display: inline-block;
    justify-content: center;
    color: ${colors.TEXT_BROWN}
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