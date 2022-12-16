import styled from "styled-components";
import { colors } from "../../../../shared-ui/style/colors";
import { H3, P } from "../../../../shared-ui/style/typography";

const StyledEventItemContainer = styled.div`
  padding-left: 2em;
  padding-bottom: 4em;
  padding-top: 1em;
  display: flex;
  background-color: ${colors.WHITE}
 
`;

const StyledEventItemHeader = styled(H3)`
  padding-left: 2.4em;

`;

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
    StyledEventItemTopic
  
  };
  