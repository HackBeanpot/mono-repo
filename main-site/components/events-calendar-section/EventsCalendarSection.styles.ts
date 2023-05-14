import styled from 'styled-components';
import { max, min } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';
import { fonts, H2, P } from '../../../shared-ui/style/typography';

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
`;

const StyledEventsBox = styled.div`
  border-radius: 2em;
  
  background-color: ${colors.BUTTON_DARK_GREEN};
  position: relative;
  flex-direction: column;
  display: flex;
  margin: 2em 1.5em;
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

const StyledPastEventsBox = styled(StyledEventsBox)`
  background-color: ${colors.TEXT_BROWN};
`;

const StyledTextContainer = styled.div`
  display: flex;
  margin: 2em;
  margin: auto;
  padding-top: 4em;
  padding-bottom: 4em;
  
  
  
  
  @media ${max.tablet} {
    margin: auto;
  }
  @media ${max.tabletSm} {
    padding-left: 1em;
  }
  @media ${max.mobile} {
    margin: 2em;
    padding-left: 0.5em;
  }
`;

const TextLeftContainer = styled.div`
  width: 80%;
  @media ${max.tabletSm} {
    width: 93%;
  }
`;

const StyledCybersecurityLocationContainer = styled.div`
  padding-top: 4em;
  @media ${max.tabletSm} {
    padding-top: 1em;
  }
`;

const StyledEventsCalendar = styled.div`
  border-radius: 2em;
  width: 60%;
  
  background-color: ${colors.BUTTON_GREEN};
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

const StyledEventsCactus = styled.img`
  position: absolute;
  @media ${min.tabletSm} {
    right: 2em;
    top: 50em;
    height: 16em;
  }
  @media ${min.desktop} {
    right: 5em;
    top: 40em;
    height: 20em;
  }
  @media ${min.desktopLg} {
    right: 10em;
    top: 45em;
    height: 25em;
  }
`;

const StyledEventsGrass = styled.img`
  position: absolute;
  @media ${min.tabletSm} {
    height: 10em;
    left: 2em;
    top: -8em;
  }
  @media ${min.tabletLg} {
    height: 15em;
    left: 2em;
    top: -8em;
  }
`;

const EventsHeader = styled(P)`
  font-family: ${fonts.nunitoSansSemibold};
  line-height: 1.2em;
  letter-spacing: 0.08em;
    
  font-size: 1.7em;
  @media ${max.tabletSm} {
    font-size: 1em;

  }
  @media ${max.mobile} {
    font-size: 0.6em;
  }
`;

const EventsP = styled(P)`
  font-size: 1.1em;
`;

const EventsSubHeader = styled(P)`
  font-family: ${fonts.nunitoSansSemibold};
  font-size: 1.5em;
  line-height: 2em;
  @media ${max.tabletSm} {
    font-size: 0.8em;
  }
  @media ${max.mobile} {
    font-size: 0.5em;
  }
`;

const StyledH2 = styled(H2)`
  text-align: center;
`;

const EventsPBolded = styled(P)`
  font-family: ${fonts.nunitoSansSemibold};
  font-size: 1.1em;
`;

const EventsLocationP = styled(P)`
  font-size: 1em;
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
  StyledPastEventsBox,
  StyledTextContainer,
  EventsLocationP,
  TextLeftContainer,
  StyledH2,
  StyledDesktopTextsContainer,
  StyledCybersecurityLocationContainer
};
