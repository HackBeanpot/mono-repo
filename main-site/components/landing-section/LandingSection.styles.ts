import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';
import { max } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';
import { H1, H11, H3, H5, P } from '../../../shared-ui/style/typography';

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

const StyledStar = styled(motion.img)`
  position: absolute;
  z-index: 10;
  width: 12%;
  top: 9em;
  right: 13em;
  @media ${max.tabletLg} {
    right: 8em;
  }
  @media ${max.tablet} {
    right: 5em;
    width: 14%;
  }
  @media ${max.tabletSm} {
    right: 2em;
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

const StyledThemeTextSmall = styled(H11)`
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
      white-space: pre-line;
      width: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.2em, 0;
    }
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

export {
  StyledHackathonText,
  StyledThemeText,
  StyledThemeTextSmall, 
  StyledThemeTextParagraph,
  StyledLandingButtonContainer,
  StyledLandingSectionContainer,
  StyledToggle,
  StyledLandingTextContainer,
  StyledStar
};
