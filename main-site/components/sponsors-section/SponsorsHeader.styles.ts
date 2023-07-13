import styled from 'styled-components';
import { min, max } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';
import { H2, H4 } from '../../../shared-ui/style/typography';
import { StyledSponsorsImageProps } from '../../lib/types';

const StyledSponsorUsHeader = styled(H2)`
  color: ${colors.TEXT_BROWN};
  padding-bottom: 0.5em;
  text-align: left;
  text-
  @media ${max.tablet} {
    padding-bottom: -10em;
  }
`;

const StyledSponsorUsSectionContainer = styled.div`
  padding-left: 5em;
  border-radius: 3em;

  @media ${min.tabletLg} {
    width: 38em;
  }
`;

export {StyledSponsorUsHeader, StyledSponsorUsSectionContainer};

