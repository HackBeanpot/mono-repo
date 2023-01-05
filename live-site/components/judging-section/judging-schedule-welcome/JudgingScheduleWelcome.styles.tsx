import styled from 'styled-components';
import PrimaryButton from '../../../../shared-ui/components/primary-button/PrimaryButton';
import { H2, StyledDropdown } from '../../../../shared-ui/style/typography';
import { colors } from '../../../../shared-ui/style/colors';
import { max } from '../../../../shared-ui/lib/responsive';

const StyledBackButtonContainer = styled.div`
  padding-top: 7em;
  padding-left: 2em;
`;

const StyledBackButton = styled(PrimaryButton)`
  padding: 0.5em;
  height: 5em;
  font-size: 3em;
  width: 4em;
`;

const StyledJudgingScheduleSection = styled.div`
  padding-top: 3em;
  padding-left: 10em;
  padding-right: 10em;
  padding-bottom: 20em;
  justify-content: center;
  flex: none;
`;

const StyledWelcomePerson = styled(H2)`
  text-align: center;
  padding-bottom: 0.5em;
  color: ${colors.TEXT_BROWN};
`;

const StyledJudgesDropdownContainer = styled.div`
  text-align: center;
`;

const StyledJudgesDropdownWrapper = styled(StyledDropdown)`
  width: 19em;

  @media ${max.tabletSm} {
    width: 15em;
  }

  @media ${max.mobile} {
    width: 12em;
  }
`;

export { 
  StyledBackButtonContainer,
  StyledBackButton,
  StyledJudgingScheduleSection,
  StyledWelcomePerson,
  StyledJudgesDropdownContainer, 
  StyledJudgesDropdownWrapper
};
