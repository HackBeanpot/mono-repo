import styled from '@emotion/styled';
import { max } from '../../../../shared-ui/lib/responsive';
import { colors } from '../../../../shared-ui/style/colors';
import { H2 } from '../../../../shared-ui/style/typography';



const NoUpcomingContainer = styled.div`
  border-radius: 2em;
  background-color: ${colors.YELLOW_GREEN};
  padding: 5em 0 5em 0;
  width: 60%;
  text-align: center;
  margin: 10em auto 0;

  @media ${max.tabletLg} {
        width: 80%;
        padding: 5em 0 5em 0;
      }
      @media ${max.tablet} {
        border-radius: 1.3em;
        width: 90%;
      }
`;

const StyledH2 = styled(H2)`
  letter-spacing: 0.01em;
  font-size: 2em;
  color: ${colors.TEXT_BROWN};
  @media ${max.tablet} {
    font-size: 2em;
  }
`;

export { NoUpcomingContainer, StyledH2 };
