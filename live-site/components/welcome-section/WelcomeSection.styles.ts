import styled from '@emotion/styled';
import { max, min } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';
import { P, H3 } from '../../../shared-ui/style/typography';
import { TeamRaceProps } from '../../lib/types';

const StyledWelcomeSectionContainer = styled.div`
  justify-content: center;
  margin-left: 4em;
  margin-right: 1.3em;
  @media ${max.tabletLg} {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledRaceSectionContainer = styled.div`
  width: 45em;
  padding: 3em 2em;
  @media ${max.tabletLg} {
    margin: 1.3em 0 0 0;
    width: 90%;
  }
`;

const StyledRaceContainer = styled.div<TeamRaceProps>`
  background-color: ${(props): string =>
    props.isDay ? colors.DEEP_SEA_BLUE : colors.NIGHT_TEXT_BOX_BLUE};
  width: 40em;
  border-radius: 4em;
  padding: 3em 3em;
  @media ${max.tabletLg} {
    margin: 1.3em 0 0 0;
    width: 88%;
    padding: 4em 4em;
  }
  @media ${max.tablet} {
    width: 80%;
  }
  @media ${max.tabletSm} {
    padding: 4em 4em;
    width:74%;
  }
  @media ${max.mobile} {
    padding: 4em 4em;
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
  margin-left: 4em;
  margin-top: 4em;
  margin-right: 1em;
  margin-bottom: -5em;
  @media ${max.tabletLg} {
    margin-right: 0;
    width: 90%;
  }
  @media ${min.tabletSm} {
    margin-right: 0;
    width: 90%;
    margin-left: 4em;
  }
   @media ${min.mobile} {
    margin-left: 1em;
  }
`;

const StyledWelcomeHeader = styled(H3)`
  margin-top: 1em;
  margin-bottom: 1em;
  color: ${colors.WHITE};
  font-family: Berkshire-Swash;
  font-size: 2.7em;
`;

const StyledWelcomeText = styled(P)`
  color: ${colors.WHITE};
  font-size: 1.2em;
`;

const StyledRaceDescription = styled(P)`
color: ${colors.WHITE};
  font-size: 1.2em;
`;

const StyledButtonContainer = styled.div`
  margin: 2em 0 -4em 0;
  @media ${max.tablet} {
    align-self: center;
    margin: 0 0 3em 0;
  }
`;

const StyledTeamTextContainer = styled.div`
  display: flex;
  @media ${min.tablet} {
    width: 45%;
  }
`;

const StyledCoralGroup = styled.img`
  position: relative;
  right: -63%;
  width: 30%;
  top: auto;
  bottom: -0.5vh;
  @media ${max.tabletLg} {
    top: auto;
    bottom: -2vh;
  }
  @media ${max.tablet} {
    top: auto;
    bottom: -2vh;
  }

`;

const StyledFish = styled.img`
  position: relative;
  width: 35%;
  top: 10vh;
  right: -210%;
  @media ${max.tabletLg} {
    top: 15vh;
    bottom: auto;
  }
  @media ${max.tablet} {
    top: 15vh;
    bottom: auto;
  }

`;

export {
  StyledWelcomeSectionContainer,
  StyledRaceSectionContainer,
  StyledRaceDescription,
  StyledRaceContainer,
  StyledWelcomeSectionContent,
  StyledWelcomeHeader,
  StyledWelcomeText,
  StyledButtonContainer,
  StyledRaceContent,
  StyledTeamTextContainer,
  StyledCoralGroup,
  StyledFish
};
