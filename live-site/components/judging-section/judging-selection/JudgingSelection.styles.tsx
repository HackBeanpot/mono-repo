import styled from 'styled-components';
import { H2 } from '../../../../shared-ui/style/typography';

const StyledJudgingSelection = styled.div`
  padding: 10em;
`;

const StyledWhoAreYou = styled(H2)`
  text-align: center;
  padding-bottom: 4em;
`;

const StyledPersonTypeSelect = styled.span`
  display: flex;
  justify-content: center;
`;

export { 
  StyledJudgingSelection,
  StyledWhoAreYou,
  StyledPersonTypeSelect
}