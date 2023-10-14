import styled from '@emotion/styled';
import { colors } from '../../../shared-ui/style/colors';
import { H2, H3, P } from '../../../shared-ui/style/typography';
import { max } from '../../../shared-ui/lib/responsive';
import { motion } from 'framer-motion';

const StyledArrowContainer = styled.div`
  display: flex;
  position: relative;
`;

const StyledPastProjectsHeader = styled(H2)`
  color: ${colors.WHITE};
  padding-bottom: 0.5em;
  text-align: center;
  @media ${max.tablet} {
    padding-bottom: -10em;
  };
`;

const StyledPastProjectsDiv = styled.div`
  margin: 0 4em;
`;

const StyledPastProjectsSection = styled.div`
  position: relative;
  background-color: ${colors.TEXT_BOX};
  width: 80%;
  margin: auto;
  border-radius: 1.25em;
  height: 100%;
  @media ${max.tablet} {
    background-color: transparent;
    text-align: center;
  };
`;

const StyledPastProjectsContainer = styled.div`
  padding-top: 3em;
  padding-left: 3em;
  padding-bottom: 4em;
  @media ${max.tablet} {
    display: absolute;
    padding-left: 0;
  };
`;

const StyledPastProjectsContainerBottom = styled.div`
  padding-top: 2em;
  padding-left: 3em;
  padding-bottom: 4em;
`;

const StyledPastProjectsInfo = styled.div`
  text-align: left;
  padding-left: 18.75em;
  margin-left: 3em;
  padding-right: 3em;

  @media ${max.tablet} {
    font-size: 0.9375em;
    text-align: center;
    padding-left: 0;
    padding-right: 3em;
  };
`;

const StyledPastProjectsInfoContainer = styled.div`
  text-align: center;
`;

const StyledPastProjectsTitle = styled(H2)`
  font-size: 1.5625em !important;
  color: ${colors.WHITE};
  padding-bottom: 0.9em;
  width: 100%;

  @media ${max.tablet} {
    text-align: center;
    color: black;
  };
`;

const StyledPastProjectsAward = styled(P)`
  font-size: 1em;
  text-align: right;
  color: ${colors.WHITE} !important;
  width: 100%;

  @media ${max.tabletLg} {
    text-align: left;
    padding-bottom: 1em;
  }

  @media ${max.tablet} {
    text-align: center;
    padding-bottom: 1em;
    font-size: 1.5em;
  }
`;

const StyledPastProjectsTitleAwardContainer = styled.div`
  display: flex;
  margin: 0;

  @media ${max.tabletLg} {
    display: inline;
  }
`;

const StyledPastProjectsMembers = styled(P)`
  font-size: 0.8125em;
  color: ${colors.WHITE};
  padding-bottom: 0.9em;
  margin-left: 2.8em;
  font-style: italic;
`;

const StyledPastProjectsDescription = styled(P)`
  font-size: 1.125em;
  color: ${colors.WHITE};
  padding-bottom: 0.9em;
  margin-left: 2em;

  @media ${max.tablet} {
    color: ${colors.WHITE};
    margin-left: 0em;
    text-align: left;
    padding-bottom: 2em;
    letter-spacing: 0.5px;
  }
`;

const StyledViewProjectButtonWrapper = styled.div`
  margin-left: 2em;
`;

const StyledPastProjectsViewText = styled(P)`
  font-size: 1.25em;
  text-align: center;
  padding-top: 3.5em;
  padding-bottom: 2em;
  line-height: 2;
  padding-left: 2em;
  padding-right: 2em;
  color: ${colors.WHITE};
`;

const StyledPastProjectsPhotos = styled.img`
  left: 0;
  float: left;
  width: 20em;
  height: 13.75em;
  padding-right: 1em;
  object-fit: contain;

  @media ${max.tablet} {
    float: none;
    padding-bottom: 1em;
    position: relative;
    display: inline-block;
    padding-top: 0;
    padding-right: 0;
  }

  @media ${max.tabletLg} {
    position: relative;
  }
`;

const StyledFennecFox = styled.img`
  position: absolute;
  right: 0;
  padding-top: 51em;
  z-index: 1;
  height: 20em;
  width: 20em;

  @media ${max.tabletLg} {
    display: none;
  }
`;

const StyledCamel = styled(motion.img)`
  position: absolute;
  right: 0;
  overflow: hidden;
  z-index: 1;
  padding-top: 10em;

  @media ${max.tabletLg} {
    height: 20em;
  }
`;
export {
  StyledPastProjectsSection,
  StyledPastProjectsHeader,
  StyledFennecFox,
  StyledCamel,
  StyledPastProjectsContainer,
  StyledPastProjectsTitle,
  StyledPastProjectsMembers,
  StyledPastProjectsDescription,
  StyledPastProjectsPhotos,
  StyledPastProjectsInfo,
  StyledPastProjectsViewText,
  StyledPastProjectsInfoContainer,
  StyledPastProjectsContainerBottom,
  StyledArrowContainer,
  StyledPastProjectsDiv,
  StyledViewProjectButtonWrapper,
  StyledPastProjectsAward,
  StyledPastProjectsTitleAwardContainer
};
