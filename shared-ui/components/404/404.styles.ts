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
  position: relative;
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
  overflow:hidden;
  position: absolute;

`;

const StyledWave1 = styled(motion.img)`

  padding-top: 25em;
  display:flex;


`;

const StyledWave2 = styled(motion.img)`
  padding-top :4em;
  padding-left: 30em;

`;

const StyledWave3 = styled(motion.img)`
  padding-top :6em;
  padding-left: 38em;

`;

const StyledWave4 = styled(motion.img)`
  padding-top :2em;
  padding-left: 70em;

`;

const PenguinBoatContainer = styled.div`

  

`

const Penguin = styled.img`
 bottom : -2em;
 left: -15em;
 position: fixed;
 overflow:hidden;

 @media ${max.tablet} {
  scale:0.7;
  left: -22em;
  bottom : -7.5em;
}
`

const Boat = styled.img`
 top: 10em;
 bottom:30em;
 float: right;
 left: 80em;
 position: fixed;
 padding : 0;
 clear: both;
 overflow:hidden;
 @media (max-width: 1670px) {
  left: 70em;
}
@media (max-width: 1550px) {
  left: 65em;
}
@media ${max.desktopLg} {
  left: 60em;
}
@media (max-width: 1370px) {
  left: 55em;
}
@media ${max.desktop} {
  left: 50em;
}
@media (max-width: 1370px) {
  left: 55em;
}

@media (max-width: 1280px) {
  left: 50em;
}

@media (max-width: 1190px) {
  left: 45em;
}

@media (max-width: 1100px) {
  left: 40em;
}

@media ${max.tabletLg} {
  left: 35em;
  top:2em;
}

@media (max-width: 940px) {
  left: 30em;
}
@media (max-width: 870px) {
  left: 25em;
}

@media ${max.tablet} {
  scale:0.7;
  left: 23em;
  top:15em;
}
@media (max-width: 750px) {
  left: 18em;
}

@media (max-width: 678px) {
  left: 18em;
}

@media (max-width: 630px) {
  left: 15em;
}





 
 
 
`;



export { ButtonContainer, StyledH4, StyledH1, StyledWave1,StyledWave2, StyledWave3, StyledWave4, WaveContainer, Penguin, Boat, PenguinBoatContainer};
