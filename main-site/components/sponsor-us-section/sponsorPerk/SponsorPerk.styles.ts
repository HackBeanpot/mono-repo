import styled from 'styled-components';
import { colors } from '../../../../shared-ui/style/colors';
import { P } from '../../../../shared-ui/style/typography';
import { min, max } from '../../../../shared-ui/lib/responsive';
import { motion } from 'framer-motion';

const StyledTextContainer = styled.div`
  padding: 3em;
  border-radius: 3em;
  margin-top: 5em;
  @media ${min.tablet} {
    width: 34em;
    background-color: ${colors.TEXT_BOX};
    margin-left: 5em;
    margin-top: 0;
  }
  @media ${min.tabletLg} {
    width: 38em;
  }
`;

const StyledSponsorPerkSectionContainer = styled.div`
  padding-top: 16em;
  margin-top: 8em;
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
    margin-top: 23em;
  }
`;

const StyledParagraph = styled(P)`
  padding: 1.5em 0;
`;

const StyledExplorer = styled.img`
  position: absolute;
  left: 2em;
  top: 3em;
  width: 8em;
  @media ${min.tablet} {
    width: 13em;
    top: -1.5em;
    left: 7em;
  }
`;

const StyledCamel = styled(motion.img)`
  position: absolute;
  top: 20em;
  right: 10em;

  z-index: 1;


  @media ${max.tabletLg} {
    height: 20em;
  }
`;

export {
  StyledTextContainer,
  StyledSponsorPerkSectionContainer,
  StyledParagraph,
  StyledExplorer,
  StyledCamel
};
