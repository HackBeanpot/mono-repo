import styled from 'styled-components';
import { max } from '../../../../shared-ui/lib/responsive';
import { colors } from '../../../../shared-ui/style/colors';
import { P } from '../../../../shared-ui/style/typography';
import { StyledTabTitleWrapperProps } from '../../../lib/types';

const StyledEventScheduleTabsContainer = styled.div`
  text-align: center;
  margin-left: 5em;
  margin-right: 0em;
  border-radius: 0.75em;
  height: 50em;
  margin-top: 0em;
  border-left: none;
  @media ${max.tablet} {
    height: 0em;
    margin: 0em;
    margin-bottom: 1.6em;
    text-align: left;
  } ;
`;
const StyledTabTitle = styled(P)`
  flex-direction: column;
  display: flex;
  @media ${max.tablet} {
    display: inline;
    margin-left: 1.75em;
  }
`;
const StyledTabTitleWrapper = styled.label<StyledTabTitleWrapperProps>`
  border: 2px solid ${colors.HEADER_FOOTER_BLUE};
  border-radius: 0.75em 0px 0px 0.75em;
  width: 2.9em;
  padding-top: 1em;
  padding-left: 0.4em;
  padding-right: 0.4em;
  text-align: center;
  font-size: 0.8em;
  box-sizing: border-box;
  transition-duration: 0.2s;
  transition-timing-function: linear;
  color: ${(StyledTabTitleWrapperProps): string =>
    StyledTabTitleWrapperProps.isSelected
      ? `${colors.BLACK}`
      : `${colors.WHITE}`};
  background-color: ${(StyledTabTitleWrapperProps): string =>
    StyledTabTitleWrapperProps.isSelected
      ? `${colors.BUTTON_GREEN}`
      : `${colors.BUTTON_DARK_GREEN}`};
  height: 16em;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media ${max.tablet} {
    padding-top: 0em;
    width: 50em;
    border-radius: 0em 0.75em 0em 0em;
    margin: -0.1em;
    padding-right: 2em;
    box-shadow: none;
    border-bottom: none;
    padding-bottom: 0.12em;
  }
  @media (max-width: 338px) {
    padding-right: 1em;
  }
  @media ${max.mobile} {
    font-size: 0.8em;
  } ;
`;
const StyledTabContent = styled(P)`
  padding-left: 1em;
  padding-top: 0.5em;
  color: ${colors.BLACK};
  
`;
const StyledTabContentContainer = styled.div`
  background-color: ${colors.BUTTON_GREEN};
  height: 47.7em;
  width: 100%;
  margin-right: 5em;
  border: 2px solid ${colors.HEADER_FOOTER_BLUE};
  border-left: none;
  border-radius: 0px 0.75em 0.75em 0em;

  @media ${max.tablet} {
    margin-left: 2em;
    width: auto;
    border-left: 2px solid ${colors.HEADER_FOOTER_BLUE};
    margin-right: 2em;
    border-radius: 0em 0.75em 0em 0em;
    
  } ;
  overflow: scroll

`;
const StyledEventScheduleTabContainer = styled.div`
  display: flex;
  justify-content: center;
  @media ${max.tablet} {
    display: inline;
  }
`;

export {
  StyledEventScheduleTabContainer,
  StyledTabTitleWrapper,
  StyledTabContentContainer,
  StyledEventScheduleTabsContainer,
  StyledTabContent,
  StyledTabTitle
};
