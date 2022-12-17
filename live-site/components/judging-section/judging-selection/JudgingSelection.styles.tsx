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
  padding-left: 8em;
  padding-right: 8em;
`;

export { 
  StyledJudgingSelection,
  StyledJudgingWelcomeHeader,
  StyledPersonTypeSelectSection,
  StyledPersonTypeSelectButton
}