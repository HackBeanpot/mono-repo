import styled from '@emotion/styled';
import { min, max } from '../../../../shared-ui/lib/responsive';
import { colors } from '../../../../shared-ui/style/colors';
import { H3 } from '../../../../shared-ui/style/typography';

const StyledJudgingSelection = styled.div`
  padding: 10em 0;
  justify-content: center;
`;

const StyledJudgingWelcomeHeader = styled(H3)`
  font-family: Berkshire-Swash;
  font-size: 2.7em;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-bottom: 2em;
  color: ${colors.WHITE};
`;

const StyledPersonTypeSelectSection = styled.div`
  @media ${min.tablet} {
    display: flex;
    justify-content: center;
  }
  @media ${max.tabletSm} {
    padding: 0em;
  }
`;

const StyledJudgeButton = styled.div`
  @media ${max.tablet} {
    margin-bottom: 2em;
    justify-content: center;
    display: flex;
  }
`;

const StyledHackerButton = styled.div`
  margin-left: 2em;
  @media ${max.tablet} {
    margin-left: 0;
    justify-content: center;
    display: flex;
  }
`;

export {
  StyledJudgingSelection,
  StyledJudgingWelcomeHeader,
  StyledPersonTypeSelectSection,
  StyledJudgeButton,
  StyledHackerButton
};
