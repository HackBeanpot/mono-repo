import styled from 'styled-components';
import { max } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';
import { H3 } from '../../../shared-ui/style/typography';

const H3White = styled(H3)`{
    color: ${colors.WHITE};
    padding-bottom: 1em;
}
`;

const StyledLandingSectionContainer = styled.div`
  padding-top: 21em;
  text-align: center;
  padding-bottom: 27em;
  @media ${max.tablet} {
    padding-top: 20em;
    margin: 20em;
    display: flex;
    margin-top: 20em;
    justify-content: center;
    align-items: center;
  }
`;

const StyledLandingButtonContainer = styled.div`
padding-top: 3em;
  @media ${max.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
// TODO: IMPORT SUN/MOON ICONS DEPENDING ON WHICH
const StyledToggle = styled.img`
float: right;
padding-top: 5.5em;
padding-right: 0.5em;

`;

export { StyledLandingButtonContainer, StyledLandingSectionContainer, H3White, StyledToggle };
