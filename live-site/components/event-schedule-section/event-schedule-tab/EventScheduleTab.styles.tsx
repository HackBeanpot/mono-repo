import styled from '@emotion/styled';
import { max } from '../../../../shared-ui/lib/responsive';
import { colors } from '../../../../shared-ui/style/colors';
import { P } from '../../../../shared-ui/style/typography';
import { StyledTabTitleWrapperProps } from '../../../lib/types';
import { EventScheduleTabProps } from '../../../lib/types';

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
    margin-left: 1.6em;
    background-color: ${colors.BORDER_BROWN};
    border: 1px solid ${colors.BORDER_BROWN};
    border-radius: 0px 0.75em 0px 0px;
  }
  @media ${max.mobile} {
    display: inline;
    margin-left: 1.8em;
    background-color: ${colors.BORDER_BROWN};
    border: 1px solid ${colors.BORDER_BROWN};
    border-radius: 0px 0.75em 0px 0px;
    padding-left: 0.25em;
  }
`;
const StyledTabTitleWrapper = styled.label<StyledTabTitleWrapperProps>`
  border: 2px solid ${colors.TRANSPARENT};
  border-radius: 0.75em 0px 0px 0.75em;
  width: 2.9em;
  padding-top: 1em;
  padding-left: 0.4em;
  padding-right: 0.4em;
  margin-right: 0.2em;
  text-align: center;
  font-size: 0.8em;
  box-sizing: border-box;
  transition-duration: 0.2s;
  transition-timing-function: linear;
  color: ${(StyledTabTitleWrapperProps): string =>
    StyledTabTitleWrapperProps.isSelected
      ? `${colors.TEXT_DARKER_BROWN}`
      : `${colors.WHITE}`};
  background-color: ${(StyledTabTitleWrapperProps): string =>
    StyledTabTitleWrapperProps.isSelected
      ? `${colors.YELLOW_GREEN}`
      : `${colors.DARK_YELLOW_GREEN}`};
  font-weight: ${(StyledTabTitleWrapperProps): string =>
    StyledTabTitleWrapperProps.isSelected
      ? `bold`
      : `normal`};
  height: 16em;
  cursor: pointer;
  box-shadow: ${(StyledTabTitleWrapperProps): string =>
    StyledTabTitleWrapperProps.isLastIndex
      ? ``
      : `0px 4px 4px rgba(0, 0, 0, 0.25);`};

  @media ${max.tablet} {
    padding-top: 0em;
    width: 50em;
    margin-left: -0.25em;
    padding-right: 2em;
    box-shadow: none;
    padding-bottom: 0.12em;
    font-size: 0.8em;
    border: 3px solid ${colors.BORDER_BROWN};
    border-radius: 0px 1em 2px 2px;
  }
  @media (max-width: 338px) {
    padding-right: 1em;
    border: 2px solid ${colors.BORDER_BROWN};
  }
`;
const StyledTabContent = styled(P)`
  padding-left: 1em;
  padding-top: 0.75em;
  color: ${colors.TEXT_DARKER_BROWN};
  font-weight: bold;

  @media ${max.tablet} {
    border-bottom-style: solid;
    border-bottom-color: ${colors.BORDER_BROWN};
    padding-bottom: 0.5em;
  }
`;
const StyledTabContentContainer = styled.div`
  background-color: ${colors.YELLOW_GREEN};
  height: 53.5em;
  width: 100%;
  margin-right: 5em;
  border: 2px solid ${colors.TRANSPARENT};
  border-left: none;
  border-radius: 0px 0.75em 0.75em 0em;
  
  @media ${max.tablet} {
    margin-left: 1.9em;
    width: auto;
    border: 4px solid ${colors.BORDER_BROWN};
    margin-right: 2em;
    padding-bottom: 2em;
    margin-top: 1.75em;
  }
  @media ${max.mobile} {
    margin-left: 2em;
    padding-bottom: 1.5em;
    margin-top: 0em;
  }
  overflow-y: scroll;
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
