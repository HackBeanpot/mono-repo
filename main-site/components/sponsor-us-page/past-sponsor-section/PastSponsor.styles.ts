import styled from 'styled-components';
import { min } from '../../../../shared-ui/lib/responsive';
import { P } from '../../../../shared-ui/style/typography';
import { colors } from '../../../../shared-ui/style/colors';

const StyledPastSponsorsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  position: relative;
  padding-bottom: 10em;

  @media ${min.mobile} {
    margin-top: 14em;
  }
  @media ${min.tabletSm} {
    margin-top: 24em;
  }
  @media ${min.tablet} {
    margin-top: 4em;
  }
  @media ${min.tabletLg} {
    margin-top: 10em;
  }
  @media ${min.desktop} {
    padding-top: 5em;
  }
`;

const StyledPastSponsorsImagesContainer = styled.div`
  padding: 4em;
  border-radius: 3em;
  margin-top: 0;
  background-color: ${colors.DUNE_HIGHLIGHT};

  @media ${min.tabletSm} {
    width: 20em;
  }
  @media ${min.tablet} {
    width: 38em;
  }
  @media ${min.tabletLg} {
    width: 52em;
  }
  @media ${min.desktop} {
    width: 52em;
  }
`;

const StyledTextSpacing = styled(P)`
  letter-spacing: 0.5px;
`;

export { 
    StyledPastSponsorsContainer, 
    StyledPastSponsorsImagesContainer,
    StyledTextSpacing 
};