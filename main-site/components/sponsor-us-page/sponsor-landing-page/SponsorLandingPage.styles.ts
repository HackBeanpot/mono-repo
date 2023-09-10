import styled from 'styled-components';
import { max, min } from '../../../../shared-ui/lib/responsive';
import { colors } from '../../../../shared-ui/style/colors';
import { H2, P } from '../../../../shared-ui/style/typography';

const StyledContainer = styled.div`
  position: relative;

  @media ${min.desktop} {
    padding-top: 21em;
  }

  @media ${max.tablet} {
    padding-top: 10em;
  }
`;

const StyledSponsorUsHeader = styled(H2)`
  color: ${colors.TEXT_BROWN};
  text-align: left;
  letter-spacing: 1px;

  @media ${min.desktop} {
    font-size: 4.5em;
  }

  @media ${max.tablet} {
    font-size: 2em;
  }
`;

const StyledSponsorUsSectionContainer = styled.div`
  position: relative;

  @media ${min.desktop} {
    padding-left: 5em;
    padding-right: 10em;
    padding-bottom: 5em;
    border-radius: 3em;
    width: 50em;
  }

  @media ${max.tablet} {
    padding: 2em;
  }
`;

const StyledParagraph = styled(P)`
  text-align: left;
  padding: 1em 0;
  font-size: 1.1em;
`;

const StyledButtonContainer = styled.div`
  @media ${min.desktop} {
    text-align: left;
  }

  @media ${max.tablet} {
    justify-content: center;
    align-items: center;
    padding: 0.5em;
    font-size: 1em;
  }
`;

export {StyledSponsorUsHeader, StyledSponsorUsSectionContainer, StyledParagraph, StyledButtonContainer, StyledContainer};