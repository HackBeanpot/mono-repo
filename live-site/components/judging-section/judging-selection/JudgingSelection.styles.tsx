import styled from 'styled-components';
import { colors } from '../../../../shared-ui/style/colors';
import { H2 } from '../../../../shared-ui/style/typography';

const StyledJudgingSelection = styled.div`
  padding: 10em;
  justify-content: center;
`;

const StyledJudgingWelcomeHeader = styled(H2)`
  text-align: center;
  padding-bottom: 2em;
  color: ${colors.TEXT_BROWN};
`;

const StyledPersonTypeSelect = styled.div`
  display: flex;
  justify-content: center;
`;

export { 
  StyledJudgingSelection,
  StyledJudgingWelcomeHeader,
  StyledPersonTypeSelect
}