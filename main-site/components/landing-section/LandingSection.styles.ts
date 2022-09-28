import styled from 'styled-components';
import { max } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';
import { H1, H3 } from '../../../shared-ui/style/typography';

const StyledHackathonText = styled(H3) `{
  color: ${colors.WHITE};
  padding-bottom: 1em;
  @media ${max.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
`;

const StyledThemeText = styled(H1) `{
color: ${colors.WHITE};
  @media ${max.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
`;

const StyledLandingSectionContainer = styled.div`
  padding-top: 21em;
  text-align: center;
  margin-bottom: 30em;
  @media ${max.tablet} {
    padding-top: 20em;
    margin: 20em;
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
const StyledToggle = styled.img`
  float: right;
  padding-top: 5.5em;
  padding-right: 0.5em;
`;

export { StyledHackathonText, StyledThemeText, StyledLandingButtonContainer, StyledLandingSectionContainer, StyledToggle };
