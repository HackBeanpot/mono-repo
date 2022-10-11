import styled from 'styled-components';
import { P } from '../../../shared-ui/style/typography';
import { max } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';

const StyledAdventureAheadSectionContainer = styled.div`
  display: flex;
  margin: 10em 8em;
  padding-top: 10em;
  @media ${max.tabletLg} {
    margin: 10em 0;
  }
  @media ${max.tablet} {
    flex-wrap: wrap;
  }
`;

const StyledParagraph = styled(P)`
  padding: 2em 0;
  color: ${colors.TEXT_BROWN};
`;
const StyledSignpost = styled.img`
  padding: 2em;
  vertical-align: top;
  @media ${max.tablet} {
    width: 13em;
    height: auto;
    margin: 0em;
  }
`;

const StyledTextContainer = styled.div`
  margin: 2em 3em;
    justify-content: center;
    color: ${colors.TEXT_BROWN}
    padding: 2em;
`;
const StyledButtonContainer = styled.div`
  margin-top: 0.5em;

  @media ${max.tablet} {
    justify-content: center;
    display: flex;
  }
`;

export {
  StyledParagraph,
  StyledSignpost,
  StyledAdventureAheadSectionContainer,
  StyledTextContainer,
  StyledButtonContainer
};
