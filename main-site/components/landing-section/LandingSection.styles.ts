import styled from 'styled-components';
import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';
import { max } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';
import { H1, H3 } from '../../../shared-ui/style/typography';

const StyledHackathonText = styled(H3)`
   {
    color: ${colors.WHITE};
    padding-bottom: 1em;
    @media ${max.tablet} {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 0em;
    }
  }
`;

const StyledThemeText = styled(H1)`
   {
    color: ${colors.WHITE};
    @media ${max.tablet} {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 0em;
    }
  }
`;

const StyledLandingSectionContainer = styled.div`
  padding-top: 21em;
  text-align: center;
  margin-bottom: 30em;
  @media ${max.tabletLg} {
    padding-top: 14em;
  }
  @media ${max.tablet} {
    padding-top: 10em;
  }
`;

const StyledLandingButtonContainer = styled(PrimaryButton)`
  padding-top: 2em;
  position: fixed;
  justify-content: left;
  font-size: 0.5em;
  @media ${max.tablet} {
    padding-top: 2em;
    font-size: 0.5em;
    width: 5%;
  }
  // @media ${max.mobile} {
  //   padding-top: 2em;
  //   width: 20%;
  // }
`;

const StyledToggle = styled.img`
  float: right;
  padding-top: 5.5em;
  padding-right: 0.5em;
  @media ${max.mobile} {
    padding-top: 19em;
    width: 15%;
  }
  @media ${max.tablet} {
    padding-top: 7em;
    width: 20%;
  }
`;

export {
  StyledHackathonText,
  StyledThemeText,
  StyledLandingButtonContainer,
  StyledLandingSectionContainer,
  StyledToggle
};
