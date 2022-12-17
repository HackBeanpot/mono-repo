import styled from 'styled-components';
import PrimaryButton from '../../../../shared-ui/components/primary-button/PrimaryButton';
import { H2 } from '../../../../shared-ui/style/typography';
import { colors } from '../../../../shared-ui/style/colors';
import SecondaryDropdown from '../../../../shared-ui/components/secondary-dropdown/SecondaryDropdown';

const StyledBackButtonContainer = styled.div`
  padding-top: 7em;
  padding-left: 2em;
`;

const StyledBackButton = styled(PrimaryButton)`
  padding: 0.5em;
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

const StyledCenteredDropdown = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledPersonDropdown = styled(SecondaryDropdown)`
  width: 25%;
  color: ${colors.WHITE};
  border-color: ${colors.BUTTON_GREEN};
`;

export { 
  StyledBackButtonContainer,
  StyledBackButton,
  StyledJudgingScheduleSection,
  StyledWelcomePerson,
  StyledCenteredDropdown,
  StyledPersonDropdown
};
