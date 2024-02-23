import styled from '@emotion/styled';
import { max } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';
import { fonts, H2, H3 } from '../../../shared-ui/style/typography';

const StyledResourcesSection = styled.div`
  margin: 10em 0;
`;

const StyledHeader = styled(H3)`
  padding-left: 2em;
  margin-top: 1em;
  margin-bottom: 1em;
  color: ${colors.WHITE};
  font-family: Berkshire-Swash;
  font-size: 2.7em;
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
