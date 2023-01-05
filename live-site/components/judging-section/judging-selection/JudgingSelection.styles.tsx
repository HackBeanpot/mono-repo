import styled from 'styled-components';
import { colors } from '../../../../shared-ui/style/colors';
import { H2 } from '../../../../shared-ui/style/typography';
import SecondaryButtonWhiteText from '../../../../shared-ui/components/secondary-button/SecondaryButtonWhiteText';

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

const StyledPersonTypeSelectButton = styled(SecondaryButtonWhiteText)`
  padding-right: 10em;
  padding-left: 10em;
`;

export { 
  StyledJudgingSelection,
  StyledJudgingWelcomeHeader,
  StyledPersonTypeSelectSection,
  StyledPersonTypeSelectButton
}