import styled from 'styled-components';
import { max } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';
import { fonts, H3 } from '../../../shared-ui/style/typography';

const StyledSectionContainer = styled.div`
  padding-top: 10em;
`;

const StyledTextContainer = styled.div`
  margin: 2em;
  @media ${max.tablet} {
    width: 14em;
    height: 14.5em;
  }
  @media ${max.tabletSm} {
    // width: 129%;
    height: 14.5em;
  }
`;

const StyledEvent = styled.div`
  background-color: ${colors.TEXT_BOX};
  width: 25em;
  height: 14em;
  border-radius: 1.5em;
  margin: 1.3em;
  @media ${max.tabletLg} {
    height: 17em;
  }
  @media ${max.tablet} {
    height: 14em;
  }
  @media ${max.tabletSm} {
    height: 14em;
  }
 
  
`;

const StyledEvents = styled.div`
  display: flex;
  justify-content: center;
  @media ${max.tablet} {
    overflow-x: scroll;
    padding-left: 38em;
  }
  @media ${max.tabletSm} {
    
  }
`;

const StyledHeader = styled.div`
  color: ${colors.WHITE};
  font-family: ${fonts.nunitoSansSemibold};
  font-size: 1.5em;
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
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  font-size: 1em;
  font-family: ${fonts.nunitoSansRegular};
  color: ${colors.BUTTON_GREEN};
`;

const StyledBody = styled.div`
  font-size: 1em;
  line-height: 1.3em;
  color: WHITE;
  font-family: ${fonts.nunitoSansRegular};
`;

export {
  StyledEvent,
  StyledHeader,
  StyledTime,
  StyledBody,
  StyledSectionContainer,
  StyledEvents,
  StyledTextContainer,
  StyledSectionHeader
};
