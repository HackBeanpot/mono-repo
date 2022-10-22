import styled from "styled-components";
import { max, min } from "../../../shared-ui/lib/responsive";
import { colors } from "../../../shared-ui/style/colors";
import { fonts, P } from '../../../shared-ui/style/typography';
import { H3 } from '../../../shared-ui/style/typography';

const StyledSectionContainer = styled.div`
text-align: center;
padding-top: 15em;
padding-bottom: 12em;
@media ${max.tabletSm} {
  padding-top: 0.6em;
}
`;

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
margin-left: 2.5%;
top: 4%;
margin-top: 4%;
margin-bottom: 2%;
@media ${max.tabletLg} {
  margin-top: 5%;
  margin-bottom: 3%;
  width: 88%;
  border-radius: 1.7em;
  margin-left: 2em;
}
@media ${max.tablet} {
  border-radius: 1.3em;
}
@media ${max.tabletSm} {
  width: 90%;
  margin-left: 5%;
}
@media ${max.mobile} {
  width: 88%;
  margin-left: 6%;
}
`;

const StyledTextContainer = styled.div`
display: flex;
margin: 4%;
@media ${max.tablet} {
  margin: 1.5em;
}
@media ${max.tabletSm} {
  margin: 6%;
  padding-left: 1em;
}
@media ${max.mobile} {
  margin: 4%;
  padding-left: 0.5em;
}
`;

const TextLeftContainer = styled.div`
width: 80%;
@media ${max.tabletSm} {
  width: 93%;
}
`;


const StyledEventsCalendar = styled.div`
border-radius: 2em;
width: 50%;
height: 40em;
background-color: ${colors.BUTTON_GREEN};
margin-left: 25%;
position: relative;
@media ${max.tabletLg} {
  height: 42em;
  width: 70%;
  margin-left: 15%;
}  
@media ${max.tablet} {
  border-radius: 1.3em;
  height: 36em;
  margin-left: 5%;
  width: 90%;
}
@media ${max.tabletSm} {
  height: 28em;
  margin-left: 5%;
}
@media ${max.mobile} {
  height: 18em;
} 
`;

const StyledEventsCactus = styled.img`
width: 20em;
right: 10em;
top: 30em;
position: absolute;

@media ${max.tabletLg} {
  right: 6em;
  top: 50em;
}  
@media ${min.tablet} {
  top: 50em;
  right: 0;
}  
@media ${min.tabletSm} {
  right: 0;
  top: 30em;
  height: 16em;
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
@media ${max.tabletSm} {
  font-size: 0.8em;
}
@media ${max.mobile} {
  font-size: 0.6em;
}
`;

const EventsP = styled(P)`
font-size: 0.8em;
`;

const EventsSubHeader = styled(P)`
font-family: ${fonts.nunitoSansSemibold};
font-size: 1em;
line-height: 2em;
@media ${max.tabletSm} {
  font-size: 0.8em;
}
@media ${max.mobile} {
  font-size: 0.5em;
}
`;

const EventsPBolded = styled(P)`
font-family: ${fonts.nunitoSansSemibold};
font-size: 0.8em;

`;

const EventsLocationP = styled(P)`
font-size: 0.8em;
position: absolute;
right: 2em;
bottom: 2em;
@media ${max.tabletSm} {
  font-size: 0.5em;
  bottom: 1.5em;
}
`;




export {
    StyledSectionContainer,
    StyledEventsCalendar,
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