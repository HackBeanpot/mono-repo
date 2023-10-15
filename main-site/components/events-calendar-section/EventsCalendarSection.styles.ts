import styled from '@emotion/styled';
import { max, min } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';
import { fonts, H2, P } from '../../../shared-ui/style/typography';
import { eventsCalendarData } from '../../lib/data';

const StyledDesktopTextsContainer = styled.div`
  padding: 1em 0;
`;

const StyledSectionContainer = styled.div`
  padding-top: 5em;
  padding-bottom: 30em;
  @media ${max.tablet} {
    padding-top: 0.6em;
    padding-bottom: 10em;
  }
`;

const StyledEventsContainer = styled.div`
  top: 3em;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledEventsBox = styled.div<{ elapsedEvent: boolean}>`
  border-radius: 2em;
  background-color: ${(props): string => (props.elapsedEvent ? colors.SAND_HIGHLIGHTS : colors.SAND_HIGHLIGHTS)};
  position: relative;
  flex-direction: column;
  display: flex;
  margin: 2em 1.5em;
  padding: 0 1em;
  @media ${max.desktop} {
    margin: 2em 1em;
  }
  @media ${max.tabletLg} {
    border-radius: 1.7em;
  }
  @media ${max.tablet} {
    border-radius: 1.3em;
  }
`;

const StyledTextContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: row;
  margin: 2em;
  padding-top: 0.5em;
  
  @media ${max.tablet} {
    margin: 1.5em;
  }
  @media ${max.tabletSm} {
    padding-left: 1em;
  }
  @media ${max.mobile} {
    margin: 2em;
    padding-left: 0.5em;
  }
`;

const EventsLeftContainer = styled.div`
  width: 95%;
  display: grid;

  @media ${max.tabletSm} {
    width: 93%;
  }
`;

const EventsRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2em;
`

const StyledEventsCalendar = styled.div`
  border-radius: 2em;
  width: 60%;
  
  background-color: ${colors.YELLOW_GREEN};
  position: relative;
  @media ${max.tabletLg} {
    width: 80%;
    padding: 0.5em;
  }
  @media ${max.tablet} {
    border-radius: 1.3em;
    width: 90%;
  }
`;


const StyledEventsSeaweed = styled.img<{numberOfEvents: number}>`
  position: absolute;
  top: calc(${(props): number => props.numberOfEvents} * 30vh);
  width: 15%;
  left: -2vw;
  width: 10%;
`;

const StyledEventsFishSchool = styled.img`
  position: absolute;
  height: 10vw;
  @media ${min.tabletSm} {
    top: -16vh;
    right: 2em;
  }
  @media ${min.desktop} {
    top: -16vh;
    right: 5em;
  }
  @media ${min.desktopLg} {
    top: -20vh;
    right: 8vw;
  }
`;

const EventsHeader = styled(P)`
  font-family: ${fonts.nunitoSansSemibold};
  line-height: 1.2em;
  letter-spacing: 0.08em;
  color: #193C60;
  font-size: 1.7em;
  font-weight: bold;
  @media ${max.tabletSm} {
    font-size: 1em;

  }
  @media ${max.mobile} {
    font-size: 0.6em;
  }
`;

const EventsP = styled(P)`
  font-size: 1.1em;
  color: #000;
`;

const EventsSubHeader = styled(P)`
  font-family: ${fonts.nunitoSansSemibold};
  font-size: 1.2em;
  line-height: 2em;
  color: #000;
  @media ${max.tabletSm} {
    font-size: 0.8em;
  }
  @media ${max.mobile} {
    font-size: 0.5em;
  }
`;

const StyledH2 = styled(H2)`
  text-align: center;
  color: #FFF;
`;

const EventsPBolded = styled(P)`
  font-family: ${fonts.nunitoSansSemibold};
  font-size: 1.1em;
  color: #000;
`;

const EventsImage = styled.img`
  height: 5vh;
  width: 5vh;
`

const EventsLocationContainer = styled.div`
  border: 1px solid red;
  padding: 2em;
  border-radius: 1.5em;
  display: grid;
  grid-template-columns: 1fr 3fr;
  text-align: end;
`

const EventsLocationP = styled(P)`
  font-size: 1em;
  right: 2em;
  bottom: 2em;
  color: #000;
  @media ${max.tabletSm} {
    font-size: 0.5em;
    bottom: 1.5em;
  }
`;

export {
  StyledSectionContainer,
  StyledEventsCalendar,
  StyledEventsSeaweed,
  StyledEventsFishSchool,
  StyledEventsContainer,
  EventsHeader,
  EventsSubHeader,
  EventsPBolded,
  EventsP,
  StyledEventsBox,
  StyledTextContainer,
  EventsLocationP,
  EventsLeftContainer,
  EventsRightContainer,
  StyledH2,
  StyledDesktopTextsContainer,
  EventsLocationContainer,
  EventsImage
};
