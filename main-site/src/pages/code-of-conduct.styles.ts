import styled from 'styled-components';
import { colors } from '../../../shared-ui/style/colors';
import { H2, P } from '../../../shared-ui/style/typography';
import { max } from '../../../shared-ui/lib/responsive';

const StyledBackground = styled.div`
  width: em;
  background-color: ${colors.DUNE_PRIMARY};
  margin-top: 0;
`;

const StyledParagraph = styled(P)`
  color: ${colors.TEXT_BOX};
  padding-left: 15em;
  padding-right: 7em;
  line-height: 1.8em;

  @media ${max.tablet} {
    padding-left: 2em;
  }
`;

const StyledHeading = styled(H2)`
  padding-left: 2em;
  padding-top: 3em;
  padding-bottom: 1.5em;
  color: ${colors.TEXT_BOX};

  @media ${max.tablet} {
    padding-left: 1.5em;
  }
`;
const StyledDirections = styled(P)`
  padding-top: 2em;
  padding-left: 10em;
  color: ${colors.TEXT_BOX};
  font-size: 1.875em;

  @media ${max.tablet} {
    padding-left: 1em;
  }
`;

const StyledParagraphBottom = styled(P)`
  color: ${colors.TEXT_BOX};
  padding-left: 15em;
  padding-right: 7em;
  line-height: 1.8em;
  padding-bottom: 5em;

  @media ${max.tablet} {
    padding-left: 1em;
  }
`;

export {
  StyledParagraph,
  StyledHeading,
  StyledDirections,
  StyledBackground,
  StyledParagraphBottom
};
