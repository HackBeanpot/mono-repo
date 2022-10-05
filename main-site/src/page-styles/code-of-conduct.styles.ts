import styled from 'styled-components';
import { colors } from '../../../shared-ui/style/colors';
import { H2, P } from '../../../shared-ui/style/typography';
import { max } from '../../../shared-ui/lib/responsive';

const StyledTextContainer = styled.div`
  margin: 0 6em;
  padding: 8em 0;

  @media ${max.tablet} {
    margin: 0 2em;
  }
`;

const StyledBodyTextContainer = styled.div`
  padding-left: 5em;

  @media ${max.tablet} {
    padding-left: 0;
  }
`;

const StyledBackground = styled.div`
  background-color: ${colors.DUNE_PRIMARY};
`;

const StyledParagraph = styled(P)`
  color: ${colors.TEXT_BOX};
  line-height: 1.8em;
  padding-bottom: 1em;
`;

const StyledHeading = styled(H2)`
  padding-bottom: 1.5em;
  color: ${colors.TEXT_BOX};
`;
const StyledDirections = styled(P)`
  padding-top: 2em;
  color: ${colors.TEXT_BOX};
  font-size: 1.875em;
`;

const StyledParagraphBottom = styled(P)`
  color: ${colors.TEXT_BOX};
  line-height: 1.9em;
`;

export {
  StyledParagraph,
  StyledHeading,
  StyledDirections,
  StyledBackground,
  StyledParagraphBottom,
  StyledTextContainer,
  StyledBodyTextContainer
};
