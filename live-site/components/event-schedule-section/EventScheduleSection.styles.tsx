import styled from 'styled-components';
import { max } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';
import { H3, P } from '../../../shared-ui/style/typography';

const EventScheduleSectionContainer = styled.div`
  margin-left: auto;
  padding-top: 10em;
  margin-right: 0;
`;

const EventScheduleTextButtonContainer = styled.div`
  padding: 5em;
  padding-top: 1em;
  display: flex;
  @media ${max.tablet} {
    display: inline;
    padding: 0em;
    text-align: center;
  }
`;

const StyledEventScheduleHeader = styled(H3)`
  padding-left: 2.4em;
  @media ${max.tablet} {
    padding-left: 0.8em;
  }
`;

const StyledEventScheduleSubText = styled(P)`
  color: ${colors.TEXT_BROWN};
  margin-right: 7em;
  @media ${max.tablet} {
    text-align: left;
    font-size: 1em;
    margin-left: 1.5em;
    margin-right: 1.5em;
  }
`;

const StyledBoldSubText = styled.p`
  font-weight: bold;
  margin: 0;
`;

const ButtonContainer = styled.div`
  margin-left: auto;
  margin-right: 0;
  @media ${max.tablet} {
    padding-bottom: 4em;
  } ;
`;

export {
  EventScheduleSectionContainer,
  EventScheduleTextButtonContainer,
  StyledEventScheduleHeader,
  StyledEventScheduleSubText,
  StyledBoldSubText,
  ButtonContainer
};
