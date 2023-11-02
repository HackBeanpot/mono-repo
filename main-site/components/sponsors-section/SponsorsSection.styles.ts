import styled from '@emotion/styled';
import { max, min } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';
import { H2, H4 } from '../../../shared-ui/style/typography';
import { SponsorsSectionProps, StyledSponsorsImageProps } from '../../lib/types';

const StyledSponsorsSectionContainer = styled.div`
  text-align: center;
  margin: 15em 0 5em 0;
  position: relative;
`;

const StyledContactContainer = styled.div<SponsorsSectionProps>`
  background-color: ${(props): string =>
    props.isDay ? colors.SPONSOR_TEXT_BOX_BLUE : colors.SPONSOR_TEXT_BOX_BLUE_NIGHTMODE};
  padding-bottom: 4em;
`;

const StyledContactText = styled(H4)`
  color: ${colors.WHITE} !important; 
  padding: 3em 17em 1.5em 17em;
  @media ${max.desktop} {
    padding: 3em;
  }
`;

const StyledFish2 = styled.img`
  position: absolute;
  right: 0vw;
  top: 103vw;
  @media ${max.desktop} {
    top: 105vw;
  }
  @media ${max.tablet} {
    top: 20vw;
    width: 20%;
  }
  @media ${max.tabletLg} {
    top: 80vw;
    width: 25%;
  }
  @media ${max.tabletSm} {
    top: 185vw;
    width: 27%;
  }
  @media ${max.mobile} {
    top: 35vw;
  }
`;

// const StyledRedStarfish = styled.img`
// `;

// const StyledGreenStarfish = styled.img`
// `;

// const StyledOrangeStarfish = styled.img`
//   position: absolute;
//   right: 36em;
//   // @media ${max.desktop} {
//   //   width: 20em;
//   //   height: 20em;
//   //   right: 0;
//   // }
//   // @media ${max.tabletLg} {
//   //   width: 18em;
//   //   height: 18em;
//   //   right: 0;
//   // }
//   // @media ${max.mobile} {
//   //   width: 12em;
//   //   height: 12em;
//   //   right: 10;
//   // }
// `;

const StyledSponsorsHeader = styled(H2)`
  color: ${colors.WHITE};
  margin: 1em 0;
`;

const StyledSpecificSponsorsHeader = styled(H2)`
  color: ${colors.WHITE};
  margin: 1em 2.5em 1em 2.5em;
  font-size: 1.5em;
  @media ${max.tablet} {
    margin-top: 0.2em;
    font-size: 1.3em;
  }
  @media ${max.tabletLg} {
    margin-top: 0.2em;
    font-size: 1.2em;
  }
  @media ${max.mobile} {
    margin-top: 0.4em;
    font-size: 1em;
  }
`;

const StyledDiamondLogo = styled.img`
  margin-botton: 4em;
  margin: 4em 0;
`;

const StyledOrangeStarfish = styled.img`
  position: absolute;
  right: 30em;
  margin-top: 2em;
  width: 6%;

  @media ${min.tabletLg} {
    right: 20em;
  }
  @media ${min.tabletSm} {
    right: 17em;
  }
`;

const StyledRedStarfish = styled.img`
  position: absolute;
  left: 14em;
  margin-top: 5em;
  width: 7.5%;
  @media ${min.tabletLg} {
    left: 4.8em;
    margin-top: 2em;
  }
`;

const StyledGreenStarfish = styled.img`
  position: absolute;
  right: 10em;
  margin-top: 2em;
  width: 8%;
`;

const StyledStarfishMobile = styled.img`
  position: absolute;
  right: 10em;
  width: 6%;
  margin-top: 13em;
`;

const StyledGoldLogos = styled.img`
  margin-bottom: 3em;
`;

const StyledSilverLogos = styled.img`
  margin-top: 3em;
`;

const StyledTreasureChest = styled.img`
  position: absolute;
  right: -2em;
  top: -11em;
  @media ${max.desktop} {
    width: 20em;
    right: 0;
    top: -5em;
  }
`;

const StyledMobileLogo = styled.img<StyledSponsorsImageProps>`
  margin-top: ${(props): string =>
    props.level === 'Diamond Level' || props.level === 'Silver Level'
      ? '4em'
      : '0'};
`;

const StyledSecondaryButtonWrapper = styled.div`
  margin: 0 2em;
`;

const StyledArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export {
  StyledSponsorsSectionContainer,
  StyledContactContainer,
  StyledFish2,
  StyledOrangeStarfish,
  StyledRedStarfish,
  StyledGreenStarfish,
  StyledStarfishMobile,
  // StyledOrangeStarfishLevel,
  // StyledRedStarfishLevel,
  // StyledGreenStarfishLevel,
  StyledDiamondLogo,
  StyledGoldLogos,
  StyledSilverLogos,
  StyledSponsorsHeader,
  StyledSpecificSponsorsHeader,
  StyledContactText,
  StyledTreasureChest,
  StyledMobileLogo,
  StyledSecondaryButtonWrapper,
  StyledArrowWrapper
};
