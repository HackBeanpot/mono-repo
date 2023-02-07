import styled from 'styled-components';
import SecondaryButton from '../../../shared-ui/components/secondary-button/SecondaryButton';
import { max } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';
import { H2, H4 } from '../../../shared-ui/style/typography';
import { StyledSponsorsImageProps } from '../../lib/types';

const StyledSponsorsSectionContainer = styled.div`
  text-align: center;
  margin: 10em 0 5em 0;
  position: relative;
`;

const StyledSponsorsHeader = styled(H2)`
  margin-bottom: 1em;
`;

const StyledContactText = styled(H4)`
  color: ${colors.TEXT_BROWN};
  padding: 3em 12em;
  @media ${max.desktop} {
    padding: 3em;
  }
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
