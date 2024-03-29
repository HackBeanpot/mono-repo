import styled from '@emotion/styled';
import { max } from '../../../../shared-ui/lib/responsive';
import { colors } from '../../../../shared-ui/style/colors';
import { H2 } from '../../../../shared-ui/style/typography';

const NoUpcomingContainer = styled.div`
  text-align: center;
  padding-top: 20em;
  padding-bottom: 15em;
`;

const StyledH2 = styled(H2)`
  letter-spacing: 0.01em;
  font-size: 2.5em;
  color: ${colors.TEXT_BROWN};
  @media ${max.tablet} {
    font-size: 2em;
  }
`;

export { NoUpcomingContainer, StyledH2 };
