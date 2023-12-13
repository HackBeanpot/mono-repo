import styled from '@emotion/styled';
import { P } from '../../../shared-ui/style/typography';
import { max, min } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';

const StyledLandingSectionContainer = styled.div`
  padding-top: 5em;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${colors.BUTTON_DARK_GREEN};
`;

const StyledHourglass = styled.img`
  width: 8%;
  align-self: center;
  @media ${min.mobile} {
  }
  @media ${min.tablet} {
  }
`

export {
    StyledLandingSectionContainer,
    StyledHourglass
  };