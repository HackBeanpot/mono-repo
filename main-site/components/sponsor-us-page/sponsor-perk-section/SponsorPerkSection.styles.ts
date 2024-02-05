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
  
  @media ${max.tablet} {
    position: relative;
    width: 15vh;
    margin-left: 3vh;
    margin-bottom: -2vh;
  }

  @media ${min.tablet} {
    left: 2em;
    top: 3em;
    width: 8em;
    width: 13em;
    top: -1.5em;
    left: 7em;
  }

`;

const StyledTreasureChest = styled.img`
  position: absolute;
  top: 10em;
  right: 30em;
  transform: scale(0.8);

  @media ${max.tablet} {
    position: absolute;
    top: 5em;
    right: -5em;
    transform: scale: (0.4);
  }

  // @media ${min.tablet} {
  //   position: absolute;
  //   right: -8em;
  //   height: 20em;
  //   size: 50px;
  // }
`;

export {
  StyledTextContainer,
  StyledTextContainerGreen,
  StyledSponsorPerkSectionContainer,
  StyledParagraph,
  StyledSponsorPacketButtonContainer,
  StyledInfoPacketButtonContainer,
  StyledFlag,
  StyledTreasureChest
};
