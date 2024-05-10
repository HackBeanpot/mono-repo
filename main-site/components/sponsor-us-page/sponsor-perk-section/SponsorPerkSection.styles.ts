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
    width: 44em;
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
  }

  @media ${min.desktop} {
    width: 32.25em;
  }
`;

const StyledTreasureChestGroup = styled.img`
  position: absolute;
  top: 3em;
  padding-left: 3em;


  @media ${min.tablet} {
    padding-left: 2.5em;
    width: 23%;
    left: 27em;
    top: 7em;
  }

  @media ${max.tablet} {
    width: 25%;
    top: -5em;
    right: 10em;
  }

  @media ${max.mobile} {
    width: 40%;
    left: 6.5em;
    top: -4.5em;

  }
`;

const StyledPirateFlagGroup = styled.img`
  position: absolute;
  top: 3em;
  padding-left: 3em;

  // @media ${max.desktop} {
  //   width: 15%;
  //   top: -3em;
  //   left: 1em;
  // }

  @media ${max.tablet} {
    width: 16%;
    top: -12em;
    left: -1em;
  }

  @media ${min.tablet} {
    padding-left: 2.5em;
    width: 13%;
    top: -4em;
  }

  @media ${max.mobile} {
    width: 20%;
    left: -2em;
    top: -6.4em;

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
