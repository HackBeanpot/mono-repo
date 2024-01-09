import styled from '@emotion/styled';
import { max } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';
import { H2, H4 } from '../../../shared-ui/style/typography';
import { StyledSponsorsImageProps } from '../../lib/types';

const StyledSponsorsSectionContainer = styled.div`
  text-align: center;
  margin: 15em 0 15em 0;
  position: relative;
`;

const StyledSponsorsHeader = styled(H2)`
  margin: 1em;

  @media ${max.tablet} {
    margin: 0.75em;
  }
`;

const StyledContactText = styled(H4)`
<<<<<<< HEAD
  color: ${colors.TEXT_BROWN} !important;
=======
>>>>>>> 68dd83ee2593b77f98d857147e44094f55659acc
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

<<<<<<< HEAD
const ButtonWrapper = styled.div`
  display: flex;
  gap: 1em;
  justify-content: center;

  @media ${max.tablet} {
    flex-direction: column;
  }
;
`;
=======
// const ButtonWrapper = styled.div`
//   display: flex;
//   gap: 1em;
//   justify-content: center;

//   @media ${max.tablet} {
//     flex-direction: column;
//   }
// ;
// `;
>>>>>>> 68dd83ee2593b77f98d857147e44094f55659acc

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
  StyledArrowWrapper,
<<<<<<< HEAD
  ButtonWrapper
=======
>>>>>>> 68dd83ee2593b77f98d857147e44094f55659acc
};

