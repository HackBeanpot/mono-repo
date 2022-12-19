import styled from 'styled-components';
import { colors } from '../../../../shared-ui/style/colors';
import { H3, P } from '../../../../shared-ui/style/typography';

const StyledEventItemContainer = styled.div`
  margin: 1em;
  border-radius: 2em;
  height: 8em;
  display: flex;
  background-color: ${colors.WHITE};
`;
const StyledEventTimeTopicContainer = styled.div`
  padding: 2em;
`;

const StyledEventItemHeader = styled(H3)`
  padding-left: 2em;
  padding-top: 1em;
`;

const StyledEventitemLocation = styled(P)`
  color: ${colors.HEADER_FOOTER_BLUE};
  padding-left: 0.7em;  
`;


const StyledEventItemTime = styled(P)`
  display: flex;
  color: ${colors.BLACK};
`;

const StyledEventItemTopic = styled(P)`
  display: flex;
  color: ${colors.CAMEL_ORANGE};
`;


const StyledPinpoint = styled.img`
  padding-left: 4.5em;
  height: 20%;

`;

export {
  StyledEventItemContainer,
  StyledEventItemHeader,
  StyledEventItemTime,
  StyledEventItemTopic,
  StyledEventTimeTopicContainer,
  StyledPinpoint,
  StyledEventitemLocation
};
