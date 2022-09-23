import styled from 'styled-components';
import { colors } from '../../../shared-ui/style/colors';
import { P } from '../../../shared-ui/style/typography';
import { min } from '../../../shared-ui/lib/responsive';
 

const StyledFillerSection = styled.div`
  height: 66em;
  border: solid;
`;

const StyledTextContainer = styled.div`
    padding: 3em;
    border-radius: 3em;
    margin-top: 5em;

    @media ${min.tablet} {
      width: 34em;
      background-color: ${colors.TEXT_BOX};
      margin-left: 5em;
      margin-top: 0;
    }

    @media ${min.tabletLg} {
      width: 38em;
    }


`;

const StyledExploreSectionContainer = styled.div`
padding-top: 16em;
position: relative;


`;


const StyledParagraph = styled(P)`
    padding: 1.5em 0;
`;

const StyledExplorer = styled.img`
    position: absolute;
    left: 2em;
    top: 3em;
    width: 8em;


     @media ${min.tablet} {
      width: 13em;
      top: -1.5em;
      left: 7em;

    }

`;

const StyledVases = styled.img`
    position: absolute;
    right: 2em;
    top: 15em;
    width: 7em;

    
    @media ${min.tablet} {
      top: 45em;
      right: 6em;
      width: 13em;
    }

    @media ${min.tabletLg} {
      top: 25em;
    }
    
`;



export { StyledFillerSection, StyledTextContainer,StyledExploreSectionContainer, StyledParagraph, StyledExplorer, StyledVases };
