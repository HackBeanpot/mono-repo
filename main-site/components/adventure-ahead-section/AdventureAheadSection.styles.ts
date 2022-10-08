import styled from 'styled-components';
import { P } from '../../../shared-ui/style/typography';
import { max } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';

const StyledAdventureAheadSectionContainer = styled.div`
  display: flex;
  padding-top: 16em;
  margin: 10em 0;
  @media ${max.tablet} {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const StyledParagraph = styled(P)`
  padding: 2em 0;
  color: ${colors.TEXT_BROWN};
`;
const StyledSignpost = styled.img`
  padding: 2em 4em;
  vertical-align: top;
  @media ${max.tablet} {
    width: 13em;
    height: auto;
    top: -1.5em;
    left: 7em;
    padding: 2em 1em;
    justify-content: flex-start;
  }
`;

const StyledTextContainer = styled.div`
  margin: 2em 5em;
    justify-content: center;
    color: ${colors.TEXT_BROWN}
    padding: 2em 2em;
`;
const StyledButtonContainer = styled.div`
  margin-top: 0.5em;
`;

export {
  StyledParagraph,
  StyledSignpost,
  StyledAdventureAheadSectionContainer,
  StyledTextContainer,
  StyledButtonContainer
};
