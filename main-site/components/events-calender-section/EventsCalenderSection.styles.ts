import styled from "styled-components";
import { min } from "../../../shared-ui/lib/responsive";
import { colors } from "../../../shared-ui/style/colors";
import { fonts, P } from '../../../shared-ui/style/typography';

const StyledEventsContainer = styled.div`
top: 3em;
position: relative;
`;

const StyledEventsBox = styled.div`
border-radius: 2em;
background-color: ${colors.BUTTON_DARK_GREEN};
width: 95%;
position: relative;
flex-direction: column;
display: flex;
margin-left: 2.3%;
margin-top: 4%;
margin-bottom: 2%;
`;

const StyledTextContainer = styled.div`
display: flex;
margin: 4%;
`;

const TextLeftContainer = styled.div`
width: 85%;
`;


const StyledEventsCalender = styled.div`
border-radius: 3em;
width: 50%;
height: 43em;
background-color: ${colors.BUTTON_GREEN};
position: absolute;
margin-left: 25%;
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

const EventsHeader = styled(P)`
font-family: ${fonts.nunitoSansSemibold};
line-height: 1.2em;
letter-spacing: 0.08em;
`;

const EventsP = styled(P)`
font-size: 0.8em;
`;

const EventsSubHeader = styled(P)`
font-family: ${fonts.nunitoSansSemibold};
font-size: 1em;
line-height: 2em;
`;

const EventsPBolded = styled(P)`
font-family: ${fonts.nunitoSansSemibold};
font-size: 0.8em;
`;

const EventsLocationP = styled(P)`
font-size: 0.8em;
float: right;
padding-top: 13em;


`;




export {
    StyledEventsCalender,
    StyledEventsCactus,
    StyledEventsGrass,
    StyledEventsContainer, 
    EventsHeader, 
    EventsSubHeader, 
    EventsPBolded,
    EventsP, 
    StyledEventsBox, 
    StyledTextContainer, 
    EventsLocationP, 
    TextLeftContainer
}