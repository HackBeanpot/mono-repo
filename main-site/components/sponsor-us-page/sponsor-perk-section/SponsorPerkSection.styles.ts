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
  border-radius: 0em 2em 2em 0em;;
  margin-top: 5em;
  margin-bottom: 3em;

  @media ${min.tablet} {
    width: 34em;
    background-color: ${colors.TEXT_BOX_BLUE};
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
    width: 44em;
  }
`;

const StyledTextSmallerContainer = styled.div`
  padding: 3em;
  border-radius: 0em 2em 2em 0em;
  margin-top: 5em;

  @media ${min.tablet} {
    width: 34em;
    background-color: ${colors.SAGE_GREEN};
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
    width: 32.25em;
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
  StyledTextSmallerContainer
};
