import styled from 'styled-components';
import { colors } from '../../../shared-ui/style/colors';
import { H2, P } from '../../../shared-ui/style/typography';
import { max } from '../../../shared-ui/lib/responsive';

const StyledPastProjects = styled.div``;

const StyledArrowContainer = styled.div`
  display: flex;
  position: relative;
`;

const StyledPastProjectsHeader = styled(H2)`
  color: ${colors.BLACK};
  padding-bottom: 0.5em;
  text-align: center;

  @media ${max.tablet} {
    padding-bottom: -5em;
  }
`;

const StyledPastProjectsSection = styled.div`
  position: relative;
  background-color: ${colors.TEXT_BOX};
  width: 80%;
  margin: auto;
  border-radius: 1.25em;
  height: 100%;

  @media ${max.tabletLg} {
    margin-top: 6em;
  }

  @media ${max.tablet} {
    background-color: transparent;
    text-align: center;
  }
`;

const StyledPastProjectsContainer = styled.div`
  padding-top: 3em;
  padding-left: 3em;
  padding-bottom: 4em;
`;

const StyledPastProjectsContainerBottom = styled.div`
  padding-top: 2em;
  padding-left: 3em;
  padding-bottom: 4em;
`;

const StyledPastProjectsInfo = styled.div`
  text-align: left;
  padding-left: 18.75em;
  padding-right: 3em;

  @media ${max.tablet} {
    font-size: 15px;
    text-align: center;
    padding-left: 0;
    padding-right: 3em;
  }
`;

const StyledPastProjectsInfoContainer = styled.div`
  text-align: center;
`;

const StyledPastProjectsTitle = styled(H2)`
  font-size: 1.5625em;
  color: ${colors.BUTTON_GREEN};
  padding-bottom: 0.9em;

  @media ${max.tablet} {
    text-align: center;
    padding-top: 9em;
  }
`;
const StyledPastProjectsMembers = styled(P)`
  font-size: 0.8125em;
  color: ${colors.WHITE};
  padding-bottom: 0.9em;

  @media ${max.tablet} {
  }
`;

const StyledPastProjectsDescription = styled(P)`
  font-size: 18px;
  color: ${colors.WHITE};
  padding-bottom: 0.9em;
`;

const StyledPastProjectsViewText = styled(P)`
  font-size: 1.25em;
  text-align: center;
  padding-top: 3.5em;
  padding-bottom: 2em;
  line-height: 2;
  color: ${colors.TEXT_BROWN};
`;

const StyledPastProjectsPhotos = styled.img`
  left: 0;
  float: left;
  width: 320px;
  height: 220px;
  padding-right: 1em;

  @media ${max.tabletLg} {
    height: 200px;
    width: 280px;
    align: center;
    position: relative;
  }

  @media ${max.tablet} {
    float: center;
    padding-bottom: 1em;
    position: relative;
    display: inline-block;
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

const StyledCamel = styled.img`
  position: absolute;
  right: 0;
  z-index: 1;
  padding-top: 10em;

  @media ${max.tabletLg} {
    display: none;
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
  StyledPastProjects,
  StyledPastProjectsContainerBottom,
  StyledArrowContainer
};
