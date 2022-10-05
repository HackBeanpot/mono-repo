import styled from 'styled-components';
import { colors } from '../../../shared-ui/style/colors';
import { H2, P } from '../../../shared-ui/style/typography';
import { max } from '../../../shared-ui/lib/responsive';

const StyledCodeOfConductContent = styled(P)`
  @media ${max.tablet} {
    padding-left: 20%;
  }
`;
const StyledBackground = styled.div`
  width: 100%;
  background-color: ${colors.DUNE_PRIMARY};
  margin-top: 0;

  @media ${max.tablet} {
    width: 100%;
    padding-left: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const StyledParagraph = styled(P)`
  color: ${colors.TEXT_BOX};
  padding-left: 20%;
  padding-right: 7em;
  line-height: 1.8em;

  @media ${max.tablet} {
    padding-left: 3em;
    width: 90%;
  }
  @media ${max.mobile} {
    padding-left: 1.7em;
    width: 100%;
  }
`;

const StyledHeading = styled(H2)`
  padding-left: 4em;
  padding-top: 3em;
  padding-bottom: 1.5em;
  color: ${colors.TEXT_BOX};

  @media ${max.tablet} {
    padding-left: 1em;
  }
`;
const StyledDirections = styled(P)`
  padding-top: 2em;
  padding-left: 20%;
  color: ${colors.TEXT_BOX};
  font-size: 1.875em;

  @media ${max.tablet} {
    padding-left: 1.8em;
    width: 100%;
  }
`;

const StyledParagraphBottom = styled(P)`
  color: ${colors.TEXT_BOX};
  padding-left: 20%;
  padding-right: 7em;
  line-height: 1.9em;
  padding-bottom: 5em;

  @media ${max.tablet} {
    padding-left: 3em;
    width: 100%;
  }
`;

export {
  StyledParagraph,
  StyledHeading,
  StyledDirections,
  StyledBackground,
  StyledParagraphBottom,
  StyledCodeOfConductContent
};
