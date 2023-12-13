import styled from '@emotion/styled';
import { max } from '../../../shared-ui/lib/responsive';
import { fonts, H2, H3 } from '../../../shared-ui/style/typography';

const StyledResourcesSection = styled.div`
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

const BoxesContainer = styled.div`
  display: flex;
  justify-content: center;

  @media ${max.tablet} {
    flex-wrap: wrap;
  }
`;

const StyledTurtle = styled.img`
  float: right;
  width: 9%;
`;

export { StyledResourcesSection, StyledHeader, BoxesContainer, StyledTurtle };
