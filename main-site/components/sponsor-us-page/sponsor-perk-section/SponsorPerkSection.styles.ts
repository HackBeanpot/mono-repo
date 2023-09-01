import styled from '@emotion/styled';
import { colors } from '../../../../shared-ui/style/colors';
import { P } from '../../../../shared-ui/style/typography';
import { min, max } from '../../../../shared-ui/lib/responsive';
import { motion } from 'framer-motion';

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
    background-color: ${colors.TEXT_BOX};
    margin-left: 5em;
    margin-top: 0;
  }

  @media ${max.tablet} {
    width: 80vw;
    border-radius: 2em;
    background-color: ${colors.TEXT_BOX};
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

const StyledExplorer = styled.img`
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

const StyledCamel = styled(motion.img)`
  position: absolute;
  top: 20em;
  right: 0em;
  z-index: 1;

  @media ${max.tablet} {
    position: relative;
    top: -5vh;
    width: 18vh;
    margin-right: -7vh;
    float: right;
    transform: rotate(-12deg);
  }

  @media ${min.tablet} {
    height: 20em;
    size: 50px;
  }
`;

export {
  StyledTextContainer,
  StyledSponsorPerkSectionContainer,
  StyledParagraph,
  StyledExplorer,
  StyledCamel
};
