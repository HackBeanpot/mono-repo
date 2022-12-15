import styled from 'styled-components';
import { H2 } from '../../../../shared-ui/style/typography';

const StyledBackButton = styled.div`
  padding-top: 7em;
  padding-left: 2em;
`;

const StyledJudgingScheduleSection = styled.div`
  padding-top: 3em;
  padding-left: 10em;
  padding-right: 10em;
  padding-bottom: 20em;
  justify-content: center;
`;

const StyledWelcomePerson = styled(H2)`
  text-align: center;
  padding-bottom: 0.5em;
`;

export { 
  StyledBackButton,
  StyledJudgingScheduleSection,
  StyledWelcomePerson
};
