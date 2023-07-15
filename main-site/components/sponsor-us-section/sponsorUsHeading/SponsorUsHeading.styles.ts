import styled from 'styled-components';
import { min, max } from '../../../../shared-ui/lib/responsive';
import { colors } from '../../../../shared-ui/style/colors';
import { H2, P } from '../../../../shared-ui/style/typography';

const StyledSponsorUsHeader = styled(H2)`
  color: ${colors.TEXT_BROWN};
  padding-bottom: 0.5em;
  text-align: left;
`;

const StyledSponsorUsSectionContainer = styled.div`
  padding-left: 5em;
  padding-right: 10em;
  padding-bottom: 5em;
  border-radius: 3em;

  @media ${min.tabletLg} {
    width: 55em;
  }
`;

const StyledParagraph = styled(P)`
  text-align: left;
  padding: 1.5em 0;
`;

const StyledButtonContainer = styled.div`
  text-align: left;
`;

export {StyledSponsorUsHeader, StyledSponsorUsSectionContainer, StyledParagraph, StyledButtonContainer};