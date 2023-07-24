import styled from 'styled-components';
import { min } from '../../../../shared-ui/lib/responsive';
import { colors } from '../../../../shared-ui/style/colors';
import { H2, P } from '../../../../shared-ui/style/typography';

const StyledContainer = styled.div`
  position: relative;
  padding-top: 21em;
  `;

const StyledSponsorUsHeader = styled(H2)`
  color: ${colors.TEXT_BROWN};
  text-align: left;
  letter-spacing: 1px;
  font-size: 4.5em;
`;

const StyledSponsorUsSectionContainer = styled.div`
  padding-left: 5em;
  padding-right: 10em;
  padding-bottom: 5em;
  border-radius: 3em;

   @media ${min.desktop} {
    width: 50em;

  }
  @media ${min.desktopLg} {
    width: 60em;
  }
`;

const StyledParagraph = styled(P)`
  text-align: left;
  padding: 1.5em 0;
`;

const StyledButtonContainer = styled.div`
  text-align: left;
`;

export {StyledSponsorUsHeader, StyledSponsorUsSectionContainer, StyledParagraph, StyledButtonContainer, StyledContainer};