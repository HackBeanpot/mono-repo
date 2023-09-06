import styled from '@emotion/styled';
import { min } from '../../../../shared-ui/lib/responsive';
import { fonts, P } from '../../../../shared-ui/style/typography';
import { colors } from '../../../../shared-ui/style/colors';

const StyledPastSponsorsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 10em;

  @media ${min.mobile} {
    margin-top: 14em;
  }
  @media ${min.tabletSm} {
    margin-top: 24em;
  }
  @media ${min.tablet} {
    margin-top: 4em;
  }
  @media ${min.tabletLg} {
    margin-top: 10em;
  }
  @media ${min.desktop} {
    padding-top: 5em;
  }
`;

const StyledPastSponsorsImagesContainer = styled.div`
  padding: 3em;
  border-radius: 3em;
  margin-top: 3em;
  background-color: ${colors.DUNE_HIGHLIGHT};

  @media ${min.tabletSm} {
    width: 20em;
  }
  @media ${min.tablet} {
    width: 38em;
  }
  @media ${min.tabletLg} {
    width: 52em;
  }
  @media ${min.desktop} {
    width: 52em;
  }
`;

const StyledImageDescription = styled(P)`
  margin-top: 2em;
  letter-spacing: 0.5px;
  color: black;
  text-align: center;
  font-size: 20px;
  font-family: ${fonts.nunitoSansSemibold};
  font-style: italic;

`;

const StyledContactText = styled(P)`
  margin-top: 3em;
  letter-spacing: 0.5px;
  color: ${colors.TEXT_BROWN};
  text-align: center;
  font-size: 24px;
  font-family: ${fonts.nunitoSansSemibold};
  font-style: italic;

`;

const StyledCenterImage = styled.img`
  align-self: center;
  width: 100%;
  object-fit:cover;
`;

const StyledButtonContainer = styled.div`
  margin-top: 2em;
  text-align: left;
`;

export { 
    StyledPastSponsorsContainer, 
    StyledPastSponsorsImagesContainer,
    StyledImageDescription,
    StyledCenterImage,
    StyledContactText,
    StyledButtonContainer 
};