import styled from 'styled-components';
import { H2 } from '../../../shared-ui/style/typography';

const StyledBackButton = styled.div`
  padding-top: 7em;
  padding-left: 2em;
`;

const StyledJudgingScheduleSection = styled.div`
  padding-top: 2em;
  padding-left: 10em;
  padding-right: 10em;
  padding-bottom: 10em;
`;

const StyledWelcomePerson = styled(H2)`
  text-align: center;
  padding-bottom: 2em;
`;

export { 
  StyledBackButton,
  StyledJudgingScheduleSection,
  StyledWelcomePerson
};
