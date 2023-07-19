import styled from 'styled-components';
import { colors } from '../../../../shared-ui/style/colors';
import { H4, P } from '../../../../shared-ui/style/typography';
import { min } from '../../../../shared-ui/lib/responsive';

const StyledWhySponsorContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
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

const StyledTextContainer = styled.div`
  padding: 4em;
  border-radius: 3em;
  margin-top: 0;
  background-color: ${colors.TEXT_BOX};

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

const StyledHeaderLabel = styled(H4)`
  color: white;
  margin-bottom: 0.5em;
  letter-spacing: 1px;
`;

const StyledParagraph = styled(P)`
  padding-top: 1.5em;
`;

const StyledTextSpacing = styled(P)`
  letter-spacing: 0.5px;
`;

const StyledFennecFox = styled.img`
  position: absolute;

  @media ${min.tabletSm} {
    display: none;
  }
  @media ${min.tablet} {
    right: 2em;
    top: 25em;
    height: 15em;
    width: 15em;
    display: block;
  }
 @media ${min.desktop} {
    right: 7em;
    top: 30em;
    height: 20em;
    width: 20em;
    display: block;
  }
  @media ${min.desktopLg} {
    right: 20em;
    top: 30em;
    display: block;
  }
`;

const StyledItemContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledCenterImage = styled.img`
  align-self: center;
  width: 100%;
  object-fit:cover;
`;

export {
  StyledTextContainer,
  StyledWhySponsorContainer,
  StyledParagraph,
  StyledHeaderLabel,
  StyledTextSpacing,
  StyledFennecFox,
  StyledItemContainer,
  StyledCenterImage
};