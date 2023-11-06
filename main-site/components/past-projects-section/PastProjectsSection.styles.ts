import styled from '@emotion/styled';
import { colors } from '../../../shared-ui/style/colors';
import { H2, H3, P } from '../../../shared-ui/style/typography';
import { max, min } from '../../../shared-ui/lib/responsive';
import { PastProjectProps } from '../../lib/types';

const StyledArrowContainer = styled.div`
  display: flex;
  position: relative;
  margin-top: 2.1em;
`;

const StyledPastProjectsHeader = styled(H2)`
  color: ${colors.WHITE};
  padding-bottom: 1em;
  text-align: center;
  @media ${max.tablet} {
    padding-bottom: -10em;
  };
`;

const StyledPastProjectsDiv = styled.div`
  margin: 0 1em;
`;

const StyledPastProjectsSection = styled.div`
  position: relative;
  background-color: transparent;
  width: 80%;
  margin: auto;
  border-radius: 1.25em;
  height: 100%;
  @media ${max.tablet} {
    text-align: center;
    width: 90%;
  };
`;

const StyledPastProjectsContainer = styled.div`
  padding-bottom: 6em;
  @media ${max.tablet} {
    display: absolute;
    padding-left: 0;
    padding-bottom: 4em;
  };
`;

const StyledPastProjectsContainerBottom = styled.div`
  padding-top: 2em;
  padding-left: 3em;
  padding-bottom: 4em;
`;

const StyledPastProjectsInfo = styled.div`
  text-align: left;
  margin-left: 28em;

  @media ${max.tabletLg} {
    font-size: 0.9375em;
    padding-right: 3em;
    margin-left: 24em;
  };

   @media ${max.tablet} {
    text-align: center;
  };
`;

const StyledPastProjectsInfoContainer = styled.div<PastProjectProps>`
  text-align: center;
  background-color: ${(props): string => props.isDay ? colors.DARK_BLUE : colors.DEEP_SEA_BLUE};
  padding-bottom: 5em;
`;

const StyledPastProjectsTitle = styled(H2)`
  font-size: 1.5625em !important;
  color: ${colors.WHITE};
  padding-bottom: 0.9em;
  width: 100%;

  @media ${max.tablet} {
    text-align: center;
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
    padding-bottom: 1.5em;
  }
`;

const StyledPastProjectsTitleAwardContainer = styled.div`
  display: flex;

  @media ${max.tabletLg} {
    display: inline;
  }
`;

const StyledPastProjectsMembers = styled(P)`
  font-size: 0.8125em;
  color: ${colors.WHITE};
  padding-bottom: 0.9em;
  font-style: italic;
`;

const StyledPastProjectsDescription = styled(P)`
  font-size: 1.125em;
  color: ${colors.WHITE};
  padding-bottom: 0.9em;

  @media ${max.tablet} {
    color: ${colors.WHITE};
    margin-left: 5em;
    margin-right: 5em;
    text-align: left;
    padding-bottom: 2em;
    letter-spacing: 0.5px;
  }
`;

const StyledViewProjectButtonWrapper = styled.div`
  margin-left: 0em;
`;

const StyledPastProjectsViewText = styled(P)`
  font-size: 1.25em;
  text-align: center;
  padding-top: 3.5em;
  padding-bottom: 2em;
  line-height: 2;
  padding-left: 7em;
  padding-right: 7em;
  color: ${colors.WHITE};

  @media ${max.tabletLg} {
    margin-right: 3em;
    margin-left: 3em;
    padding-left: 5em;
    padding-right: 5em;
    font-size: 0.75em;
  }

  @media ${max.tablet} {
    margin-right: 0em;
    margin-left: 0em;
  }
`;

const StyledPastProjectsPhotos = styled.img`
  left: 0;
  float: left;
  width: 25em;
  border-radius: 5%;

  @media ${max.desktop} {
    width: 19em;
    height: 15em;
  }

  @media ${max.tablet} {
    width: 20em;
    height: 13.75em;
    float: none;
    position: relative;
    display: inline-block;
    margin-bottom: 1.5em;
  }

  @media ${max.tabletLg} {
    width: 19em;
    margin-bottom: 1.5em;
  }
`;

const StyledTreasureChest = styled.img`
  margin-left: auto;
  display: block;
  padding-right: 2em;
  width: 20em;

  @media ${max.desktopLg} {
    width: 18em;
    margin-top: -3em;
  }

  @media ${max.tabletLg} {
    width: 15em;
    margin-top: -7em;
  }

  @media ${max.tablet} {
    margin-top: 1em;
    width: 12em;
  }
`;

const StyledPirateFlag = styled.img`
  left: 2em;
  top: 14em;
  width: 13em;
  position: relative;
  @media ${max.tablet} {
    top: 10em;
    left: 4em;
    width: 10em;
  }

  @media ${max.tabletSm} {
    top: 7em;
    left: 3em;
    width: 7em;
  }
`;

const StyledPastProjectsLeftContainer = styled.div`
  justify-content: left;
  position: absolute;
  @media ${max.tabletLg} {
    left: -17em;
  }

  @media ${max.tabletSm} {
    left: -19em;
  }
`;

const StyledPastProjectsRightContainer = styled.div`
  justify-content: right;
  position: absolute;
  @media ${max.tabletLg} {
    right: -17em;
  }

  @media ${max.tabletSm} {
    right: -19em;
  }
`;

export {
  StyledPastProjectsSection,
  StyledPastProjectsHeader,
  StyledTreasureChest,
  StyledPirateFlag,
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
  StyledPastProjectsTitleAwardContainer,
  StyledPastProjectsLeftContainer,
  StyledPastProjectsRightContainer
};