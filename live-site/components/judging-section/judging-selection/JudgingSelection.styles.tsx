import styled from 'styled-components';
import { H2 } from '../../../../shared-ui/style/typography';

const StyledJudgingSelection = styled.div`
  padding: 10em;
  justify-content: center;
`;

const StyledWhoAreYou = styled(H2)`
  text-align: center;
  padding-bottom: 2em;
`;

const StyledPersonTypeSelect = styled.div`
  display: inline-block;
`;

export { 
  StyledJudgingSelection,
  StyledWhoAreYou,
  StyledPersonTypeSelect
}