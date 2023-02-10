import styled from 'styled-components';
import { max, min } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';
import { P, H3 } from '../../../shared-ui/style/typography';

const StyledWelcomeSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left 1.3em;
  margin-right: 1.3em;
  margin-top: 45%;
  @media ${max.tabletLg} {
    margin-top: 100%;
    flex-direction: column;
    align-items: center;
  }
  @media ${max.tablet} {
    margin-top: 80%;
  }
  @media ${max.tabletSm} {
    margin-top: 60%;
  }
  @media ${max.mobile} {
    margin-top: 50%;
  }
`;

const StyledRaceContainer = styled.div`
  background-color: ${colors.TEXT_BOX};
  width: 45em;
  border-radius: 1.5em;
  padding: 3em 2em;
  @media ${max.tabletLg} {
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
  margin-top: 4em;
  margin-right: 2em;
  @media ${max.tabletLg} {
    margin-right: 0;
    margin-bottom: 2em;
    width: 90%;
  }
`;

const StyledWelcomeHeader = styled(H3)`
  margin-bottom: 1em;
  color: ${colors.BLACK};
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
  StyledWelcomeHeader,
  StyledWelcomeText,
  StyledButtonContainer,
  StyledRaceContent,
  StyledTeamTextContainer
};
