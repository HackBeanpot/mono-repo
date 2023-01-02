import styled from 'styled-components';
import { colors } from '../../../shared-ui/style/colors';
import { P } from '../../../shared-ui/style/typography';

const StyledWelcomeSectionContainer = styled.div`
  display: flex;
`;

const StyledRaceContainer = styled.div`
  background-color: ${colors.TEXT_BOX};
  width: 40em;
  height: 28.5em;
  border-radius: 1.5em;
  margin: 1.3em;
`;

const StyledWelcomeSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const StyledWelcomeText = styled(P)`
  color: ${colors.TEXT_BROWN};
  margin-left: 4.25em;
  white-space: pre-wrap;
`;

const StyledButtonContainer = styled.div`
  margin: 2em 0 0 4.75em;
`;

export {
  StyledWelcomeSectionContainer,
  StyledRaceContainer,
  StyledWelcomeSectionContent,
  StyledWelcomeText,
  StyledButtonContainer
};
