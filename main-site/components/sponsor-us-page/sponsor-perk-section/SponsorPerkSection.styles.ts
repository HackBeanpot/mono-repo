import styled from '@emotion/styled';
import { colors } from '../../../../shared-ui/style/colors';
import { P } from '../../../../shared-ui/style/typography';
import { min, max } from '../../../../shared-ui/lib/responsive';

const StyledSponsorPerkSectionContainer = styled.div`
  padding-top: 16em;
  margin-bottom: 8em;
  position: relative;

  @media ${min.mobile} {
    margin-top: 14em;
  }
  @media ${min.tabletSm} {
    margin-top: 24em;
  }
  @media ${min.tablet} {
    margin-top: 4em;
  }
  @media ${min.tabletLg} {
    margin-top: 10em;
  }
  @media ${min.desktop} {
    margin-top: 5em;
  }
  @media ${max.tablet} {
    padding: 0;
    margin: 0;
  }
`;

const StyledTextContainer = styled.div`
  padding: 6em;
  border-radius: 0em 2em 2em 0em;
  margin-top: 5em;
  margin-bottom: 3em;

  @media ${min.tablet} {
    width: 34em;
    background-color: ${colors.TEXT_BOX_BLUE};
    margin-top: 0;
  }

  @media ${max.tablet} {
    width: 64vw;
    border-radius: 0em 2em 2em 0em;
    background-color: ${colors.TEXT_BOX_BLUE};
    margin-bottom: 3em;
    padding: 10vw 10vw 10vw 5vw;
  }

  @media ${max.mobile} {
    width: 15.75em;
  }

  @media ${min.desktop} {
    width: 60em;
  }
`;

const StyledTextSmallerContainer = styled.div`
  padding: 3em;
  border-radius: 0em 2em 2em 0em;
  margin-top: 3em;

  @media ${min.tablet} {
    width: 34em;
    background-color: ${colors.SAGE_GREEN};
    margin-top: 0;
  }

  @media ${max.tablet} {
    width: 61vw;
    border-radius: 0em 2em 2em 0em;
    background-color: ${colors.SAGE_GREEN};
    padding: 5vw;
    padding-bottom: 10vw;
  }

  @media ${max.mobile} {
    width: 15em;
    margin-bottom: 7em;
  }

  @media ${min.desktop} {
    width: 45em;
  }
`;

const StyledTreasureChestGroup = styled.img`
  position: absolute;
  left: 45em;
  top: 5em;

  @media ${max.desktop} {
    transform: scale(0.9);
    left: 22em;
  }

  @media ${max.tablet} {
    transform: scale(0.56);
    left: 40vw;
    top: -9.5em;
  }

  @media ${max.tabletSm} {
    transform: scale(0.4);
    left: 15vw;
    top: -9.5em;
  }
`;

const StyledPirateFlagGroup = styled.img`
  position: absolute;

  //above 768
  @media ${min.tablet} {
    width: 10em;
    top: 0em;
    left: 4em;
  }

  //below 1280
   @media ${max.desktop} {
    width: 10em;
    left: 4em;
    top: 0em;
   }

   //below 768
  @media ${max.tablet} {
    //position: relative;
    width: 5em;
    top: -8em;
    left: 2em;
  }

  //below 768
  // @media ${max.tablet} {
  //   position: relative;
  //   width: 15em;
  //   top: 9em;
  //   left: 22em;
  // }

  //below 320
  @media ${max.mobile} {
    width: 5em;
    top: -8em;
    left: 2em;
  }
`;

const StyledParagraph = styled(P)`
  padding: 0.5em 0;

  @media ${max.tablet} {
    padding: 0
  }
`;

export {
  StyledTextContainer,
  StyledSponsorPerkSectionContainer,
  StyledParagraph,
  StyledTextSmallerContainer,
  StyledTreasureChestGroup,
  StyledPirateFlagGroup
};
