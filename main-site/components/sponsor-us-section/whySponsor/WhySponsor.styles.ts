import styled from 'styled-components';
import { colors } from '../../../../shared-ui/style/colors';
import { P } from '../../../../shared-ui/style/typography';
import { min } from '../../../../shared-ui/lib/responsive';

const StyledTextContainer = styled.div`
  padding: 3em;
  border-radius: 3em;
  margin-top: 5em;

  @media ${min.tabletSm} {
    width: 20em;
    background-color: ${colors.TEXT_BOX};
    margin-top: 0;
  }
  @media ${min.tablet} {
    width: 38em;
    background-color: ${colors.TEXT_BOX};
    margin-top: 0;
  }
  @media ${min.tabletLg} {
    width: 52em;
    background-color: ${colors.TEXT_BOX};
    margin-top: 0;
  }
  @media ${min.desktop} {
    width: 52em;
    background-color: ${colors.TEXT_BOX};
    margin-top: 0;
  }
`;

const StyledWhySponsorContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 8em;
  position: relative;
  padding-bottom: 20em;

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
    margin-top: 23em;
  }
`;

const StyledParagraph = styled(P)`
  padding: 1.5em 0;
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
    right: 5em;
    top: 22em;
    height: 20em;
    width: 20em;
    display: block;
  }
  @media ${min.desktopLg} {
    right: 14em;
    top: 22em;
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
  StyledFennecFox,
  StyledItemContainer,
  StyledCenterImage
};