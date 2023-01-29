import styled from 'styled-components';
import { max } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';
import { fonts, H3 } from '../../../shared-ui/style/typography';

const StyledSectionContainer = styled.div`
  padding-top: 10em;
`;

const StyledLoadingText = styled(H3)`
  justify-content: center;
  display: flex;
  margin: 10em 0;
`;

const StyledTextContainer = styled.div`
  margin: 2em;
  @media ${max.tablet} {
    margin: 1.5em;
    width: 12em;
    height: 12.5em;
  }
  @media ${max.tabletSm} {
    margin: 0.9em;
    width: 7.6em;
    height: 11em;
  }
`;

const StyledEvent = styled.div`
  background-color: ${colors.TEXT_BOX};
  width: 25em;
  height: 14em;
  border-radius: 1.5em;
  margin: 1.3em;
  justify-content: center;
  @media ${max.tabletLg} {
    height: 17em;
  }
  @media ${max.tablet} {
    margin: 0.7em;
    width: 14em;
    height: 14em;
  }
  @media ${max.tabletSm} {
    border-radius: 1em;
    margin: 0.5em;
    width: 9em;
    height: 11em;
  }
  @media ${max.mobile} {
    width: 4em;
  }
`;

const StyledEvents = styled.div`
  display: flex;
  justify-content: center;
  @media ${max.tablet} {
    overflow-x: scroll;
    padding-left: 25em;
  }
  @media ${max.tabletSm} {
    padding-left: 20em;
  }
`;

const StyledOneEventContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledHeader = styled.div`
  color: ${colors.WHITE};
  font-family: ${fonts.nunitoSansSemibold};
  font-size: 1.5em;
  @media ${max.tablet} {
    font-size: 1.3em;
  }
  @media ${max.tabletSm} {
    font-size: 0.95em;
  }
`;

const StyledSectionHeader = styled(H3)`
   {
    font-family: ${fonts.nunitoSansSemibold};
    padding-bottom: 2em;
    padding-left: 2.4em;
    @media ${max.tablet} {
      padding-left: 1em;
      padding-bottom: 1em;
    }
  }
`;

const StyledTime = styled.div`
  margin: 0.5em, 0;
  font-size: 1em;
  font-family: ${fonts.nunitoSansRegular};
  color: ${colors.BUTTON_GREEN};
  @media ${max.tablet} {
    font-size: 0.9em;
  }
  @media ${max.tabletSm} {
    font-size: 0.75em;
  }
`;

const StyledBody = styled.div`
  font-size: 1em;
  line-height: 1.3em;
  color: ${colors.WHITE};
  font-family: ${fonts.nunitoSansRegular};
  @media ${max.tablet} {
    font-size: 0.9em;
  }
  @media ${max.tabletSm} {
    font-size: 0.75em;
  }
`;

export {
  StyledEvent,
  StyledHeader,
  StyledTime,
  StyledBody,
  StyledSectionContainer,
  StyledEvents,
  StyledTextContainer,
  StyledSectionHeader,
  StyledOneEventContainer,
  StyledLoadingText
};
