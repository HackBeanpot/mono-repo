import styled from 'styled-components';
import { colors } from '../../../shared-ui/style/colors';
import { H2, P } from '../../../shared-ui/style/typography';
import { max } from '../../../shared-ui/lib/responsive';

const StyledPastProjects = styled.div``;

const StyledPastProjectsHeader = styled(H2)`
  color: ${colors.BLACK};
  padding-bottom: 0.5em;
  text-align: center;
`;

const StyledPastProjectsSection = styled.div`
  position: relative;
  background-color: ${colors.TEXT_BOX};
  width: 80%;
  margin: auto;
  border-radius: 20px;
  height: 100%;

  @media ${max.tabletLg} {
    margin-top: 6em;
  }
`;

const StyledPastProjectsContainer = styled.div`
  padding-top: 3em;
  padding-left: 3em;
`;

const StyledPastProjectsContainerBottom = styled.div`
  padding-top: 3em;
  padding-left: 3em;
  padding-bottom: 3em;
`;

const StyledPastProjectsInfo = styled.div`
  text-align: left;
  padding-left: 300px;
  padding-right: 3em;
`;

const StyledPastProjectsInfoContainer = styled.div`
  text-align: center;
`;

const StyledPastProjectsTitle = styled(H2)`
  font-size: 25px;
  color: ${colors.BUTTON_GREEN};
  padding-bottom: 0.9em;
`;
const StyledPastProjectsMembers = styled(P)`
  font-size: 13px;
  color: ${colors.WHITE};
  padding-bottom: 0.9em;
`;

const StyledPastProjectsDescription = styled(P)`
  font-size: 18px;
  color: ${colors.WHITE};
  padding-bottom: 0.9em;
`;

const StyledPastProjectsViewText = styled(P)`
  font-size: 20px;
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
`;

const StyledFennecFox = styled.img`
  position: absolute;
  right: 0px;
  padding-top: 46em;
  z-index: 1;

  @media ${max.tabletLg} {
    display: none;
  }
`;

const StyledCamel = styled.img`
  position: absolute;
  right: 0px;
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
  StyledPastProjectsContainerBottom
};
