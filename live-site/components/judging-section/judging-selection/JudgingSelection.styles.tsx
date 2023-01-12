import styled from 'styled-components';
import { min, max } from '../../../../shared-ui/lib/responsive';
import { colors } from '../../../../shared-ui/style/colors';
import { H2 } from '../../../../shared-ui/style/typography';

const StyledJudgingSelection = styled.div`
  padding: 10em 0;
  justify-content: center;
`;

const StyledJudgingWelcomeHeader = styled(H2)`
  text-align: center;
  padding-bottom: 2em;
  color: ${colors.TEXT_BROWN};
`;

const StyledPersonTypeSelectSection = styled.div`
  @media ${min.tablet} {
    display: flex;  
    justify-content: center;
  }
`;

const StyledJudgeButton = styled.div`
  padding-right: 6em;
  @media ${max.tabletSm} {
    margin: auto;
  }
`;

const StyledHackerButton = styled.div`
  padding-left: 6em;
  @media ${max.tabletSm} {
    margin: auto;
  }
`;

export { 
  StyledJudgingSelection,
  StyledJudgingWelcomeHeader,
  StyledPersonTypeSelectSection,
  StyledJudgeButton,
  StyledHackerButton
}