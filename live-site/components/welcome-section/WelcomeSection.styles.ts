import styled from 'styled-components';
import { max, min } from '../../../shared-ui/lib/responsive';
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
  border-radius: 1.5em;
  padding: 3em 2em;
  @media ${max.tablet} {
    margin: 1.3em 0 0 0;
    width: 90%;
  }
`;

const StyledRaceContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledWelcomeSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 35.5em;
  margin-right: 2em;
  @media ${max.tabletLg} {
    margin-right: 0;
    margin-bottom: 2em;
    width: 90%;
  }
`;

const StyledWelcomeText = styled(P)`
  color: ${colors.TEXT_BROWN};
`;

const StyledButtonContainer = styled.div`
  margin: 2em 0 0 0;
  @media ${max.tablet} {
    align-self: center;
  }
`;

const StyledTeamTextContainer = styled.div`
  display: flex;
  @media ${min.tablet} {
    width: 45%;
  }
`;

export {
  StyledWelcomeSectionContainer,
  StyledRaceContainer,
  StyledWelcomeSectionContent,
  StyledWelcomeText,
  StyledButtonContainer,
  StyledRaceContent,
  StyledTeamTextContainer
};
