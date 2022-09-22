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
    width: 38em;
    border-radius: 3em;
    margin-left: 5em;

    @media ${min.tablet} {
      width: 34em;
      background-color: ${colors.TEXT_BOX};
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
    left: 7em;
    top: -1.5em;
`;

const StyledVases = styled.img`
    position: absolute;
    right: 1em;
    top: 37em;


    @media ${min.tabletLg} {
      top: 25em;
      right: 6em;

    }
`;



export { StyledFillerSection, StyledTextContainer,StyledExploreSectionContainer, StyledParagraph, StyledExplorer, StyledVases };
