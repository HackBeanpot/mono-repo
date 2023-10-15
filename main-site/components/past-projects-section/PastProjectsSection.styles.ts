import styled from '@emotion/styled';
import { colors } from '../../../shared-ui/style/colors';
import { H2, H3, P } from '../../../shared-ui/style/typography';
import { max, min } from '../../../shared-ui/lib/responsive';

const StyledArrowContainer = styled.div`
  display: flex;
  position: relative;
`;

const StyledPastProjectsHeader = styled(H3)`
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
    margin-left: 3em;
    margin-right: 3em;
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
  padding-left: 2em;
  padding-right: 2em;
  color: ${colors.WHITE};
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
  }

  @media ${max.tabletLg} {
    width: 19em;
  }
`;

const StyledTreasureChest = styled.img`
  position: absolute;
  right: 0;
  padding-top: 150em;
  z-index: 1;
  width: 20em;

  @media ${max.desktopLg} {
    padding-top: 170em;
    width: 15em;
  }

  @media ${max.tabletLg} {
    padding-top: 200em;
    width: 15em;
  }

  @media ${max.tablet} {
    padding-top: 60em;
    width: 9em;
  }
`;

const StyledPirateFlag = styled.img`
  left: 2em;
  top: 14em;
  width: 13em;
  position: relative;
  @media ${min.tablet} {
    top: 14em;
    left: 4em;
    width: 13em;
  }

  @media ${max.tabletSm} {
    top: 9em;
    width: 10em;
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
