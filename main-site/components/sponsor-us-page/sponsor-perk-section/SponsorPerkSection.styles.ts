import styled from '@emotion/styled';
import { colors } from '../../../../shared-ui/style/colors';
import { P } from '../../../../shared-ui/style/typography';
import { min, max } from '../../../../shared-ui/lib/responsive';
import PrimaryButton from '../../../../shared-ui/components/primary-button/PrimaryButton';
// import { motion } from 'framer-motion';

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
  padding: 4em;
  border-radius: 3em;
  margin-top: 5em;

  @media ${min.tablet} {
    width: 34em;
    background-color: #1B365D;
    margin-left: 5em;
    margin-top: 0;
  }

  @media ${max.tablet} {
    width: 80vw;
    border-radius: 2em;
    background-color: #1B365D;
    margin: auto;
    padding: 5vw;
    padding-bottom: 10vw;
  }

  @media ${min.desktop} {
    width: 50em;
  }
`;

const StyledTextContainerGreen = styled.div`
  padding: 4em;
  border-radius: 3em;
  margin-top: 5em;
  background-color: #56773C;

  @media ${min.tablet} {
    width: 34em;
    margin-left: 5em;
    margin-top: 0;
  }

  @media ${max.tablet} {
    width: 80vw;
    border-radius: 2em;
    margin: auto;
    padding: 5vw;
    padding-bottom: 10vw;
  }

  @media ${min.desktop} {
    width: 50em;
  }
`;

const StyledParagraph = styled(P)`
  padding: 0.5em 0;

  @media ${max.tablet} {
    padding: 0
  }
`;
const StyledSponsorPacketButtonContainer = styled(PrimaryButton)`
margin-top: 1em;
position: fixed;
justify-content: center;
font-size: 0.2em;
`;

const StyledInfoPacketButtonContainer = styled(PrimaryButton)`
margin-top: 1em;
position: fixed;
justify-content: center;
font-size: 0.2em;
`;

const StyledFlag = styled.img`
  position: absolute;
  left: 10em;
  top: 3em;
  width: 15.5%;
  z-index: -1;

  @media ${max.tablet} {
    left: 6em;
    top: -8em;
  }

  @media ${max.mobile} {
    left: 10em;
    top: 3em;
  }

`;

const StyledTreasureChest = styled.img`
position: absolute;
left: 47em;
top: 10em;
width: 18%;

@media ${max.tablet} {
  left: 30em;
  top: 10em;
}

@media ${max.mobile} {
  left: 30em;
  top: 10em;
}

@media ${min.mobile} {
  left: 36em;
  top: 12em;
}

`;

const StyledFlexPerksContainer = styled.div`
margin-top: 1em;
margin-bottom: 1em;
`;

export {
  StyledTextContainer,
  StyledTextContainerGreen,
  StyledSponsorPerkSectionContainer,
  StyledParagraph,
  StyledSponsorPacketButtonContainer,
  StyledInfoPacketButtonContainer,
  StyledFlag,
  StyledTreasureChest,
  StyledFlexPerksContainer
};
