import styled from 'styled-components';
import { colors } from '../../../shared-ui/style/colors';
import { H2, P } from '../../../shared-ui/style/typography';

const StyledPastProjectsHeader = styled(H2)`
   {
    color: ${colors.BLACK};
    padding-bottom: 0.5em;
    text-align: center;
  }
`;

const StyledPastProjectsSection = styled.div`
  padding-top: 10em;
  position: relative;
  background-color: ${colors.TEXT_BOX};
  width: 70%;
  margin: auto;
  border-radius: 20px;
  height: 700px;
`;

const StyledPastProjectsContainer = styled.div`
  padding-left: 2em;
`;

const StyledPastProjectsInfo = styled.div`
  text-align: left;
  padding-left: 300px;
  padding-right: 3em;
`;
const StyledPastProjectsTitle = styled(H2)`
  font-size: 25px;
  color: ${colors.BUTTON_GREEN};
  padding-bottom: 0.7em;
`;
const StyledPastProjectsMembers = styled(P)`
  font-size: 13px;
  color: ${colors.WHITE};
  padding-bottom: 0.7em;
`;

const StyledPastProjectsDescription = styled(P)`
  font-size: 18px;
  color: ${colors.WHITE};
  padding-bottom: 0.7em;
`;

const StyledPastProjectsPhotos = styled.img`
  left: 0;
  float: left;
  width: 300px;
  height: 200px;
  padding-right: 1em;
`;

const StyledFennecFox = styled.img`
  position: absolute;
`;

const StyledCamel = styled.img`
  position: absolute;
  left: 2em;
  top: 3em;
  width: 8em;
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
  StyledPastProjectsInfo
};
