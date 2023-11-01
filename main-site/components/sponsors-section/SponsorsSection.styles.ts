import styled from '@emotion/styled';
import { max, min } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';
import { H2, H4 } from '../../../shared-ui/style/typography';
import { SponsorsSectionProps, StyledSponsorsImageProps } from '../../lib/types';

const StyledSponsorsSectionContainer = styled.div`
  text-align: center;
  margin: 10em 0 5em 0;
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
  top: 92vw;
  @media ${max.desktop} {
    top: 105vw;
  }
  @media ${max.tablet} {
    top: 20vw;
    width: 20%;
  }
  @media ${max.tabletLg} {
    top: 100vw;
    width: 25%;
  }
  @media ${max.tabletSm} {
    top: 202vw;
    width: 27%;
  }
  @media ${max.mobile} {
    top: 35vw;
  }
`;

const StyledSponsorsHeader = styled(H2)`
  margin: 1em 0;
`;

const StyledDiamondLogo = styled.img`
  margin: 4em 0;
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
  top: -8em;
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
  StyledDiamondLogo,
  StyledGoldLogos,
  StyledSilverLogos,
  StyledSponsorsHeader,
  StyledContactText,
  StyledTreasureChest,
  StyledMobileLogo,
  StyledSecondaryButtonWrapper,
  StyledArrowWrapper
};
