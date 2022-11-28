import styled from 'styled-components';
import { fonts, H1, H4 } from '../../style/typography';
import { colors } from '../../style/colors';
import { max } from '../../lib/responsive';
import { motion } from 'framer-motion';

const StyledH1 = styled(H1)`
  padding-top: 1em;
  padding-left: 2em;
  font-size: 5em;
  color: ${colors.HEADER_FOOTER_BLUE};
  @media ${max.tabletLg} {
    font-size: 3em;
  }
  @media ${max.tablet} {
    padding-top: 6em;
    padding-left: 1em;
    font-size: 2.5em;
  }
  @media ${max.tabletSm} {
    font-size: 2em;
  }
`;

const StyledH4 = styled(H4)`
  text-align: right;
  padding-top: 3em;
  padding-right: 9em;
  font-size: 1.6em;
  font-family: ${fonts.nunitoSansSemibold};
  color: ${colors.HEADER_FOOTER_BLUE};
  @media ${max.tabletLg} {
    padding-top: 2em;
    padding-right: 6em;
  }
  @media ${max.tablet} {
    padding-right: 2em;
  }
  @media ${max.tabletSm} {
    padding-top: 7em;
    font-size: 1em;
  }
`;

const ButtonContainer = styled.div`
  padding-top: 2%;
  float: right;
  padding-right: 14em;
  @media ${max.tabletLg} {
    padding-top: 3em;
    padding-right: 10em;
  }
  @media ${max.tablet} {
    padding-top: 2em;
    padding-right: 5em;
  }
`;

const WaveContainer = styled.div`

  position: relative;

`;

const StyledWave1 = styled(motion.img)`

  padding-top: 20em;
  display:flex;
  padding-left: 5em;

`;

const StyledWave2 = styled(motion.img)`
  padding-top :4em;
  padding-left: 62em;

`;

const StyledWave3 = styled(motion.img)`
  padding-top :6em;
  padding-left: 38em;

`;

const StyledWave4 = styled(motion.img)`
  padding-top :em;
  padding-left: 70em;

`;

const PenguinBoatContainer = styled.div`

  overflow:hidden;
  float:right;
`

const Penguin = styled.img`
 bottom : -2em;
 left: -15em;
 position: fixed;
 overflow:hidden;

`

const Boat = styled.img`
 bottom : 17em;

 left: 85em;
 position: absolute;
 
`;



export { ButtonContainer, StyledH4, StyledH1, StyledWave1,StyledWave2, StyledWave3, StyledWave4, WaveContainer, Penguin, Boat, PenguinBoatContainer};
