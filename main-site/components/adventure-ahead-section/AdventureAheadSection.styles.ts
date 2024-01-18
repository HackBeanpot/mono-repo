import styled from '@emotion/styled';
import { H3, P } from '../../../shared-ui/style/typography';
import { max } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';

const StyledAdventureAheadSectionContainer = styled.div`
  display: flex;
  
  @media ${max.tablet} {
    margin: 10em 0;
    flex-wrap: wrap;
  };
`;

const StyledHeader = styled(H3)`
  display: flex;

  @media ${max.tablet} {
    justify-content: center;
    padding-bottom: 0.5em;
  };
`;

const StyledHeaderDiv = styled.div`
  width: 100%;
`;


const StyledParagraph = styled(P)`
  margin-top: 1em;
  color: ${colors.WHITE};

  @media ${max.tablet} {
    text-align: center;
    margin-top: -1em;
  }
`;

const StyledImageCore = styled.img`
  width: 40%;  
  margin: auto;
  margin-left: 2em;

  @media ${max.tablet} {
    width: 80%;
    margin: auto;
  }
`;

const StyledShell = styled.img`
  position: absolute;
  width: 8%;
  margin-top: clamp(15em, 20%, 19em);
  margin-left: 1em;

  @media ${max.tablet} {
    width: 15%;
    margin-top: clamp(15em, 45%, 22em);
    margin-left: 3em;
  }
`;

const StyledOceanLayers = styled.img`
  width: 100%;
  margin-bottom: -0.2em;
`;

const StyledTextContainer = styled.div`
  margin-top: 2em;
  margin-right: 2em;
  margin-left: 2em;
`;

const StyledButtonContainer = styled.div`
  margin-top: 0.5em;

  @media ${max.tablet} {
    justify-content: center;
    display: flex;
    margin-top: 2em;
  }
`;

export {
  StyledParagraph,
  StyledImageCore,
  StyledShell,
  StyledAdventureAheadSectionContainer,
  StyledTextContainer,
  StyledButtonContainer,
  StyledHeader,
  StyledOceanLayers,
  StyledHeaderDiv
};
