import styled from 'styled-components';
import { max } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';
import { P } from '../../../shared-ui/style/typography';

const StyledWelcomeSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1.3em;
  @media ${max.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledRaceContainer = styled.div`
  background-color: ${colors.TEXT_BOX};
  width: 45em;
  height: 28.5em;
  border-radius: 1.5em;
  padding: 1em 1em;
  @media ${max.tablet} {
    margin: 1.3em 0 0 0;
    width: 90%;
  }
`;

const StyledRaceContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 1em;
`;

const StyledWelcomeSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 35.5em;
  @media ${max.tablet} {
    width: 90%;
  }
`;

const StyledWelcomeText = styled(P)`
  color: ${colors.TEXT_BROWN};
  white-space: pre-wrap;
`;

const StyledButtonContainer = styled.div`
  margin: 2em 0 0 0;
  @media ${max.tablet} {
    align-self: center;
  }
`;

export {
  StyledWelcomeSectionContainer,
  StyledRaceContainer,
  StyledWelcomeSectionContent,
  StyledWelcomeText,
  StyledButtonContainer,
  StyledRaceContent
};
