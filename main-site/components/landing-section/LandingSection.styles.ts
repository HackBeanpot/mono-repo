import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';
import { max, min } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';
import { H1, H3, H5, H6, P } from '../../../shared-ui/style/typography';

const StyledHackathonText = styled(H5)`
   {
    color: ${colors.WHITE};
    padding-bottom: 0.2em;
    @media ${max.tablet} {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 0em;
      padding-top: 1em;
    }
  }
`;

const StyledThemeText = styled(H1)`
   {
    color: ${colors.WHITE};
    padding-bottom: 0.1em;
    @media ${max.tablet} {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.2em, 0;
    }
  }
`;

const StyledThemeTextSmall = styled(H6)`
   {
    color: ${colors.WHITE};
    padding-bottom: 0.1em;
    @media ${max.tablet} {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.2em, 0;
    }
  }
`;

const StyledThemeTextParagraph = styled(P)`
   {
    color: ${colors.WHITE};
    padding-bottom: 0.1em;
    white-space: pre-line;
    width: 25%;
    @media ${max.tablet} {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.2em, 0;
    }
  }
`;

const StyledLandingImageContainer = styled.div`
  position: absolute;
  padding-top: 21em;
  @media ${max.tabletLg} {
    padding-top: 14em;
  }
  @media ${max.tablet} {
    padding-top: 18em;
  }
  @media ${max.tabletSm} {
    padding-top: 13em;
  }
  @media ${max.mobile} {
    padding-top: 10em;
  }
`;

const StyledBubble1 = styled.img`
  position: absolute;
  @media ${min.mobile} {
    width: 10%;
    top: 15vh;
    left: 6vw;
  }
  @media ${min.tablet} {
    width: 5%;
  }
`;

const StyledBubble2 = styled.img`
  position: absolute;
  top: 50vh;
  right: 5vw;
  width: 10%;
  @media ${max.tabletLg} {
    top: 55vw;
    right: -5vw;
    width: 15%;
  }
  @media ${max.tablet} {
    top: 75vw;
  }
  @media ${max.tabletSm} {
    top: 90vw;
    right: -5vw;
  }
`;

const StyledFish = styled.img`
  position: absolute;
  top: 75vh;
  left: 5vw;
  @media ${max.tabletLg} {
    top: 70vw;
    width: 15%;
  }
  @media ${max.tablet} {
    top: 80vw;
  }
  @media ${max.tabletSm} {
    top: 110vw;
  }
  @media ${max.mobile} {
    top: 110vw;
  }
`;

const StyledJellyfish = styled.img`
  position: absolute;
  top: 75vh;
  right: 0;
  width: 15%;
  @media ${max.tabletLg} {
    top: 70vw;
    width: 15%;
  }
  @media ${max.tablet} {
    top: 95vw;
  }
  @media ${max.tabletSm} {
    top: 110vw;
  }
  @media ${max.mobile} {
    top: 110vw;
  }
`;

const StyledWhale = styled.img`
  position: absolute;
  top: 80vh;
  left: 0;
  width: 30%;
  z-index: 1;
  @media ${max.tabletLg} {
    top: 80vw;
  }
  @media ${max.tablet} {
    top: 110vw;
  }
  @media ${max.tabletSm} {
    top: 120vw;
  }
  @media ${max.mobile} {
    top: 120vw;
  }
`;

const StyledLandingTextContainer = styled.div`
  padding-top: 21em;
  text-align: center;
  @media ${max.tabletLg} {
    padding-top: 14em;
  }
  @media ${max.tablet} {
    padding-top: 18em;
  }
  @media ${max.tabletSm} {
    padding-top: 13em;
  }
  @media ${max.mobile} {
    padding-top: 10em;
  }
`;

const StyledLandingSectionContainer = styled.div`
  position: relative;
`;

const StyledLandingButtonContainer = styled(PrimaryButton)`
  padding-top: 2em;
  position: fixed;
  justify-content: left;
  font-size: 0.5em;
  @media ${max.tablet} {
    float: bottom;
    padding-top: 4em;
    width: 5%;
  }
`;

const StyledToggle = styled.img`
  float: right;
  padding-top: 5.5em;
  padding-right: 0.5em;
  cursor: pointer;
  @media ${max.mobile} {
    padding-top: 19em;
    width: 15%;
  }
  @media ${max.tablet} {
    padding-top: 5.5em;
    width: 20%;
  }
`;

const StyledCountdown = styled(P)`
  margin-top: 1em;
  color: ${'#E5C37D'};
  font-weight: bold;
  font-style: italic;
`;

const StyledHourglass = styled.img`
  margin-right: 0.3em;
`;

const StyledCountdownContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export {
  StyledHackathonText,
  StyledThemeText,
  StyledThemeTextSmall,
  StyledThemeTextParagraph,
  StyledLandingButtonContainer,
  StyledLandingSectionContainer,
  StyledToggle,
  StyledLandingTextContainer,
  StyledLandingImageContainer,
  StyledBubble1,
  StyledBubble2,
  StyledFish,
  StyledJellyfish,
  StyledWhale,
  StyledCountdown,
  StyledHourglass,
  StyledCountdownContainer
};
