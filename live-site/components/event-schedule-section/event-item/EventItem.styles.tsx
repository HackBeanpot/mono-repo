import styled from "styled-components";
import { colors } from "../../../../shared-ui/style/colors";
import { H3, P } from "../../../../shared-ui/style/typography";

const StyledEventItemContainer = styled.div`
  margin: 1em;
  border-radius: 2em;
  height: 8em;
  display: flex;
  background-color: ${colors.WHITE}
`;

const StyledEventItemHeader = styled(H3)`
  padding-left: 2em;
  padding-top: 1em;
`;

const StyledEventTimeTopicContainer = styled.div`
  padding: 2em;
  
`

const StyledEventItemTime = styled(P) `
display: flex;
color: ${colors.BLACK}
`

const StyledEventItemTopic = styled(P) `
display: flex;
color: ${colors.CAMEL_ORANGE}


`


export {
    StyledEventItemContainer,
    StyledEventItemHeader,
    StyledEventItemTime,
    StyledEventItemTopic,
    StyledEventTimeTopicContainer
  
  };
  