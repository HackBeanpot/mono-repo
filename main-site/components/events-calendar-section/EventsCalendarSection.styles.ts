import styled from '@emotion/styled';
import { max, min } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';
import { fonts, H2, P } from '../../../shared-ui/style/typography';

const StyledDesktopTextsContainer = styled.div`
  padding: 1em 0;
`;

const StyledSectionContainer = styled.div`
  padding-top: 5em;
  padding-bottom: 17em;
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

const StyledEventsBox = styled.div`
  border-radius: 2em;
  background-color: ${colors.SAND_HIGHLIGHTS};
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
  grid-template-columns: 1.4fr 1fr;
  grid-auto-flow: row;
  margin: 2em;
  padding-top: 0.5em;
  gap: 6em;
  
  @media ${max.tablet} {
    margin: 1em 0;
    height: fit-content;
    grid-template-rows: 2fr 1fr;
    grid-auto-flow: column;
    grid-template-columns: none;
    gap: 1em;
  }
  @media ${max.mobile} {
    margin: 2em;
    padding-left: 0.5em;
  }
`;

const EventsLeftContainer = styled.div`
  width: 95%;
  display: grid;

  @media ${max.tablet} {
    width: 93%;
  }
`;

const EventsRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2em;
  @media ${max.tablet} {
    gap: 0;
  }
`;

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

const StyledEventsSeaweed = styled.img<{ numberOfEvents: number }>`
  position: absolute;
  bottom: 0;
  left: -8vw;
    width: 11vw;
`;

const StyledEventsFishSchool = styled.img`
  position: absolute;
  height: 10vw;
  @media ${min.tablet} {
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
  color: #193c60;
  font-size: 1.7em;
  font-weight: bolder;
  @media ${max.tablet} {
    font-size: 1.3em;
  }
  @media ${max.mobile} {
    font-size: 0.6em;
  }
`;

const StyledEventsSoon = styled(H2)`
text-align: center;
color: #193c60;
padding: 2em;
padding-left: 0;
padding-right: 0;
font-size: 2em;
`;

const EventsP = styled(P)`
  font-size: 1.1em;
  color: ${colors.BLACK};
  @media ${max.tablet} {
    font-size: 0.8em;
  }
`;

const EventsSubHeader = styled(P)`
  font-family: ${fonts.nunitoSansSemibold};
  font-size: 1.2em;
  line-height: 2em;
  color: ${colors.BLACK};
  @media ${max.tablet} {
    font-size: 0.8em;
  }
  @media ${max.mobile} {
    font-size: 0.5em;
  }
`;

const StyledH2 = styled(H2)`
  text-align: center;
  color: ${colors.WHITE};
`;

const EventsPBolded = styled(P)`
  font-family: ${fonts.nunitoSansSemibold};
  font-size: 1.1em;
  color: ${colors.BLACK};
`;

const EventsImage = styled.img`
  height: 5vh;
  width: 5vh;
  align-self: flex-end;
  @media ${max.tablet} {
    position: absolute;
    top: 2em;
    right: 2em;
  }
`;

const EventsLocationContainer = styled.div`
  border: 1px solid ${colors.YELLOW_GREEN};
  padding: 2em;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  @media ${min.tabletLg && max.desktopLg} {
    grid-template-columns: 1fr;
    grid-auto-flow: row;
  }

  @media ${max.tablet} {
    grid-template-columns: 1fr 2fr;
    padding: 0.3em;
    font-size: xx-large;
  }
`;

const EventsLocationPQuestion = styled(P)`
  font-size: 1em;
  right: 2em;
  bottom: 2em;
  color: black;
  
  @media ${max.tablet} {
    font-size: 0.5em;
    bottom: 1.5em;
    justify-self: left;
  }
`;

const EventsLocationP = styled(P)`
  font-size: 1em;
  right: 2em;
  bottom: 2em;
  color: ${colors.BLACK};
  @media ${max.tablet} {
    font-size: 0.5em;
    bottom: 1.5em;
    justify-self: flex-end;
    text-align: right;
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
  EventsImage,
  EventsLocationPQuestion,
  StyledEventsSoon
};
