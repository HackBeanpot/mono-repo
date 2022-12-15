import styled from 'styled-components';
import { H2 } from '../../../shared-ui/style/typography';

const StyledBackButton = styled.div`
  padding-top: 10em;
  padding-left: 3em;
`;

const StyledJudgingScheduleSection = styled.div`
  padding-top: 5em;
  padding-left: 10em;
  padding-right: 10em;
  padding-bottom: 10em;
`;

const StyledWelcomePerson = styled(H2)`
  text-align: center;
  padding-bottom: 10em;
`;

export { 
  StyledBackButton,
  StyledJudgingScheduleSection,
  StyledWelcomePerson
};
