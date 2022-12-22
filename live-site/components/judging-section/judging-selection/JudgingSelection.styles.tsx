import styled from 'styled-components';
import { colors } from '../../../../shared-ui/style/colors';
import { H2 } from '../../../../shared-ui/style/typography';
import SecondaryButton from '../../../../shared-ui/components/secondary-button/SecondaryButton';

const StyledJudgingSelection = styled.div`
  padding: 10em;
  justify-content: center;
`;

const StyledJudgingWelcomeHeader = styled(H2)`
  text-align: center;
  padding-bottom: 2em;
  color: ${colors.TEXT_BROWN};
`;

const StyledPersonTypeSelectSection = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledPersonTypeSelectButton = styled(SecondaryButton)`
  width: 100%;
  overflow: auto;
  color: ${colors.WHITE};
  border-color: ${colors.BUTTON_GREEN};
  padding-right: 2em;
  padding-left: 2em;
`;

export { 
  StyledJudgingSelection,
  StyledJudgingWelcomeHeader,
  StyledPersonTypeSelectSection,
  StyledPersonTypeSelectButton
}