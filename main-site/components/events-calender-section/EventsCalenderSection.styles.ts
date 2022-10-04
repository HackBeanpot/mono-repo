import styled from "styled-components";
import { min } from "../../../shared-ui/lib/responsive";


const StyledEventsContainer = styled.div`
top: 3em;
position: relative;
`;

const StyledEventsCalender = styled.img`
width: 90%;
height: 60em;
position: absolute;
margin-left: 5%;
`;

const StyledEventsCactus = styled.img`
width: 20em;
right: 10em;
top: 50em;
position: absolute;

@media ${min.tabletSm} {
  right: -3em;
  height: 16em;
}
@media ${min.tablet} {
  right: 0em;
}  
@media ${min.tabletLg} {
  right: 8em;
}  
`;

const StyledEventsGrass = styled.img`
width: 10em;
height: 60em;
top: -25em;
left: 6em;
position: absolute;
  @media ${min.tabletSm} {
    left: 2em;
    top: -30em;
  }
`;

export {
    StyledEventsCalender,
    StyledEventsCactus,
    StyledEventsGrass,
    StyledEventsContainer
}