import styled from '@emotion/styled';
import { H2 } from '../../../../shared-ui/style/typography';
import { colors } from '../../../../shared-ui/style/colors';
import { max } from '../../../../shared-ui/lib/responsive';
import { StyledDropdown } from '../../../styled-components/SecondarySelect.styles';
import PrimaryButton from '../../../../shared-ui/components/primary-button/PrimaryButton';
import { P } from '../../../../shared-ui/style/typography';

const StyledBackButtonContainer = styled.div`
  padding-top: 7em;
  padding-left: 2em;
`;

const StyledBackButton = styled(PrimaryButton)`
  padding: 0.5em;
`;

const StyledJudgingScheduleSection = styled.div`
  padding: 3em 0 2em 0;
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

const StyledInfoContainer = styled.div`
  padding-top: 2em;
`;

const StyledJudgeP = styled(P)`
  text-align: center;
  color: ${colors.TEXT_BROWN};
  font-size: 1.5em;
  padding-top: 1.7em;
`;

const StyledJudgesDropdownWrapper = styled(StyledDropdown)`
  margin-bottom: 3.4em;
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
  StyledJudgeP,
  StyledBackButton,
  StyledJudgingScheduleSection,
  StyledWelcomePerson,
  StyledJudgesDropdownContainer,
  StyledJudgesDropdownWrapper, 
  StyledInfoContainer
};
