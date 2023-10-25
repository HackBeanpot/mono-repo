import styled from '@emotion/styled';
import { H3, P } from '../../../shared-ui/style/typography';
import { max, min } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';

const StyledAdventureAheadSectionContainer = styled.div`
  display: flex;
  margin: 10em 8em;
  @media ${max.tabletLg} {
    margin: 10em 0;
    flex-wrap: wrap;
  };
`;

const StyledHeader = styled(H3)`
  display: flex;
`;

const StyledHeaderDiv = styled.div`
  text-align: center;
  width: 100%
`;


const StyledParagraph = styled(P)`
  padding: 2em 0;
  color: ${colors.WHITE};

  @media ${max.tabletLg} {
    text-align: center;
  }
`;

const StyledImageCore = styled.img`
  margin-top: 2em;
  right: 4em;
  margin: auto;
  width: 100%;

  @media ${min.tabletLg} {
    width: 50%;
    margin-top: 2.5em;
    margin-left: 2em;
  }
`;

const StyledOceanLayers = styled.img`
  max-width: 100%;
  margin-bottom: -0.2em;
`;

const StyledTextContainer = styled.div`
  margin: ;
  padding-right: 2em;
  padding-left: 2em;
`;

const StyledButtonContainer = styled.div`
  margin-top: 0.5em;

  @media ${max.tabletLg} {
    justify-content: center;
    display: flex;
  }
`;

export {
  StyledParagraph,
  StyledImageCore,
  StyledAdventureAheadSectionContainer,
  StyledTextContainer,
  StyledButtonContainer,
  StyledHeader,
  StyledOceanLayers,
  StyledHeaderDiv
};
