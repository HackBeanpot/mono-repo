import styled from "styled-components";
import { colors } from "../../../../shared-ui/style/colors";
import { H3 } from "../../../../shared-ui/style/typography";

const EventItemContainer = styled.div`
  padding: 5em;
  padding-top: 1em;
  display: flex;
  background-color: ${colors.WHITE}
 
`;

const EventItemHeader = styled(H3)`
  padding-left: 2.4em;

`;


export {
    EventItemContainer,
    EventItemHeader,
  
  };
  