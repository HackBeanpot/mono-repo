import styled from '@emotion/styled';
import { P } from '../../../shared-ui/style/typography';
import { min } from '../../../shared-ui/lib/responsive';
import { H2 } from '../../../shared-ui/style/typography';
import { motion } from 'framer-motion';

const StyledCovidSectionContainer = styled.div`
  display: flex;
  position: relative;
  margin: 5em 0;
  padding-bottom: 5em;
  @media ${min.tablet} {
    padding: 10em 0;
  }
`;

const StyledDesertVan = styled.img`
  left: 0;
  right: 3em;
  position: absolute;
  display: none;
  @media ${min.tablet} {
    display: block;
    width: 20em;
    top: 13em;
  }
  @media ${min.tabletLg} {
    width: 30em;
    top: 10em;
  }
  @media ${min.desktop} {
    width: 35em;
    top: 4em;
  }
`;

const StyledCovidTitleAndInformation = styled.div`
  padding: 0 2em;
  @media ${min.tablet} {
    width: 60%;
    padding-left: 22em;
    padding-right: 2em;
  }
  @media ${min.tabletLg} {
    padding-left: 35em;
    padding-right: 5em;
  }
  @media ${min.desktop} {
    padding-left: 40em;
    padding-right: 10em;
  }
`;

const StyledCovidSectionInformation = styled(P)`
  padding: 1em 0;
`;

const StyledTitle = styled(H2)`
  text-align: center;
  @media ${min.tablet} {
    text-align: left;
  }
`;

const StyledExhaustLg = styled(motion.img)`
  padding: 1em;
  scale: 1.5;
`;
const StyledExhaustSm = styled(motion.img)`
  padding: 2em;
  scale: 2;
`;
const StyledExhaustSm2 = styled(motion.img)`
  padding: 1em;
  scale: 2;
`;
const ExhaustContainer = styled(motion.div)`
  margin-left: -4em;
  margin-top: 4em;
  margin-bottom: 0em;
`;

export {
  StyledCovidSectionContainer,
  StyledDesertVan,
  StyledCovidTitleAndInformation,
  StyledCovidSectionInformation,
  StyledTitle,
  StyledExhaustLg,
  StyledExhaustSm,
  StyledExhaustSm2,
  ExhaustContainer
};
