import styled from '@emotion/styled';
import { max } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';
import { H3, P } from '../../../shared-ui/style/typography';

const EventScheduleSectionContainer = styled.div`
  margin-left: auto;
  margin-right: 0;
`;

const EventScheduleTextButtonContainer = styled.div`
  padding: 5em;
  padding-top: 1em;
  padding-bottom: 1em;
  display: flex;
  @media ${max.tablet} {
    display: inline;
    padding: 0em;
    text-align: center;
  }
`;

const StyledEventScheduleHeader = styled(H3)`
  font-family: Berkshire-Swash;
  font-size: 2.7em;
  padding-left: 2em;
  @media ${max.tablet} {
    padding-left: 0.8em;
  }
`;

const StyledEventScheduleSubText = styled(P)`
  color: ${colors.WHITE};
  margin-right: 7em;
  @media ${max.tablet} {
    text-align: left;
    font-size: 1em;
    margin: 0 1.5em;
  }
`;

const StyledBoldSubText = styled(P)`
  color: ${colors.WHITE};
  font-weight: bold;
  margin: 0;
  @media ${max.tablet} {
    text-align: left;
    font-size: 1em;
  }
`;

const ButtonContainer = styled.div`
  margin-left: auto;
  margin-right: 0;
  margin-top: 2em;
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
