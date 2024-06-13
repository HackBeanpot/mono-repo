import styled from '@emotion/styled';
import { min, max } from '../../../../shared-ui/lib/responsive';
import { fonts, P } from '../../../../shared-ui/style/typography';
import { colors } from '../../../../shared-ui/style/colors';

const StyledPastSponsorsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10em;

  @media ${min.mobile} {
    margin: 4em 0 0 0;
    width: 100%;
  }
  @media ${min.tabletSm} {
    margin-top: 10em;
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
  padding: 1em;
  border-radius: 3em;
  margin: 1em;
  margin-top: 3em;
  background-color: ${colors.DUNE_HIGHLIGHT};

  @media ${min.tabletSm} {
    width: 20em;
  }
  @media ${min.mobile} {
    padding: 3em;
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
  color: ${colors.DEEP_SEA_BLUE};
  text-align: center;
  font-size: 16px;
  font-family: ${fonts.nunitoSansSemibold};
  font-style: italic;
`;

const StyledContactText = styled(P)`
  margin-top: 3em;
  letter-spacing: 0.5px;
  color: ${colors.WHITE};
  text-align: center;
  font-size: 24px;
  font-family: ${fonts.nunitoSansSemibold};
  width: 25em;

  @media ${min.mobile} {
    width: 90%;
  }

  @media ${min.tablet} {
    width: 25em;
  }

  @media ${min.tabletLg} {
    width: 25em;
  }

  @media ${min.desktop} {
    width: 25em;
  }
`;

const StyledCenterImage = styled.img`
  align-self: center;
  width: 100%;
  object-fit: cover;
`;

const StyledButtonContainer = styled.div`
  margin-top: 2em;
  text-align: left;

  @media ${max.mobile} {
    width: 16em;
  }

`;

const StyledFishGroup = styled.img`
  position: absolute;
  top: 0;
  right: -3em;
  display: flex;

  @media ${min.mobile} {
    display: none;
  }

  @media ${min.desktop} {
    display: flex;
  }

  @media ${min.tablet} {
    display: flex;
    top: -5em;
    width: 18%;
  }
`;

const StyledSeahorseGroup = styled.img`
  position: absolute;
  top: 5em;
  left: 0;
  display: flex;
  width: 10%;

  @media ${min.mobile} {
    display: none;
  }

  @media ${min.desktop} {
    display: flex;
  }

  @media ${min.tablet} {
    display: flex;
  }
`;

export {
  StyledPastSponsorsContainer,
  StyledPastSponsorsImagesContainer,
  StyledImageDescription,
  StyledCenterImage,
  StyledContactText,
  StyledButtonContainer,
  StyledFishGroup,
  StyledSeahorseGroup
};
