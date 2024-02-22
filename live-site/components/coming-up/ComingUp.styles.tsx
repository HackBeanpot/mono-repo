import styled from '@emotion/styled';
import { max } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';
import { fonts, H3, P } from '../../../shared-ui/style/typography';

const StyledSectionContainer = styled.div`
  margin: 12em 0;
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
  background-color: ${colors.COMING_UP_BLUE};
  width: 25em;
  height: 17em;
  border-radius: 1.5em;
  margin: 1.3em;
  justify-content: center;
  position: relative;
  overflow: hidden;
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
  margin-top: -0.5em;;
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
  font-family: ${fonts.nunitoSansSemibold};
  text-align: center;
  @media ${max.tablet} {
    padding-bottom: 1em;
  }
`;

const StyledTime = styled.div`
  margin: 0.5em;
  margin-left: 0em;
  font-size: 1em;
  font-family: ${fonts.nunitoSansBold};
  color: ${colors.DEEP_SEA_BLUE};
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

const StyledHappeningNowBanner = styled.div`
  background-image: linear-gradient(to right, #3181A9, ${colors.COMING_UP_BLUE});
  display: flex;
  width: 100%;
  text-align: center;
`;


const StyledHappeningNow = styled.div`
  font-size: 1em;
  font-style: italic;
  line-height: 1.3em;
  color: ${colors.DEEP_SEA_BLUE};
  font-family: ${fonts.nunitoSansBold};

  margin: 1em;
  margin-left: 2em;
  @media ${max.tablet} {
    margin: 1.5em;
    // width: 12em;
    // height: 12.5em;
  }
  @media ${max.tabletSm} {
    margin: 0.9em;

  }

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
  StyledLoadingText,
  StyledHappeningNow,
  StyledHappeningNowBanner
};
