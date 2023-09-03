import styled from '@emotion/styled';
import { H2, H3, P } from '../../../shared-ui/style/typography';
import { min } from '../../../shared-ui/lib/responsive';

const StyledAboutSectionContainer = styled.div`
  margin-top: 2em;
  padding-bottom: 10em;
  position: relative;
  overflow: hidden;
  @media ${min.tablet} {
    margin-top: 6em;
  }
`;

const StyledItemsContainer = styled.div`
  display: flex;
  margin-top: 5em;
  justify-content: center;
`;

const StyledItemTextContainer = styled.div`
  text-align: center;
  padding-top: 20em;
  @media ${min.tabletSm} {
    padding-top: 25em;
  }
  @media ${min.tablet} {
    padding-top: 17em;
  }
  @media ${min.tabletLg} {
    padding-top: 22em;
  }
  @media ${min.desktop} {
    padding-top: 25em;
  }
`;

const StyledTitle = styled(H2)`
  text-align: center;
`;

const StyledItemImage = styled.img`
  position: absolute;
  @media ${min.tablet} {
    width: 14em;
  }
  @media ${min.tabletLg} {
    width: 19em;
  }
  @media ${min.desktop} {
    width: 21em;
  }
`;

const StyledItemDescription = styled(P)`
  margin: 1em 2em 0 2em;
  @media ${min.tablet} {
    margin: 0;
  }
`;

const StyledItemContainer = styled.div`
  width: 17em;
  display: flex;
  justify-content: center;
  margin: 0 1em;
  @media ${min.mobile} {
    width: 24em;
  }
  @media ${min.tablet} {
    width: 14em;
  }
  @media ${min.tabletLg} {
    width: 19em;
  }
  @media ${min.desktop} {
    width: 23em;
  }
`;

const StyledMobileImage = styled.img`
  position: absolute;
  width: 16em;
  @media ${min.tabletSm} {
    width: 23em;
  }
`;

const StyledCenterImage = styled(StyledMobileImage)`
  align-self: center;
  top: 9em;
`;

const StyledLeftImage = styled(StyledMobileImage)`
  left: -14em;
  @media ${min.tabletSm} {
    left: -20em;
  }
`;

const StyledRightImage = styled(StyledMobileImage)`
  right: -14em;
  @media ${min.tabletSm} {
    right: -20em;
  }
`;

const StyledArrowDescriptionContainer = styled.div`
  display: flex;
`;

const StyledRedRocks = styled.img`
  position: absolute;
  bottom: 2em;
  right: 3em;
  width: 10em;
  @media ${min.tabletLg} {
    right: 16em;
    width: 17em;
  }
  @media ${min.desktop} {
    right: 20em;
    width: 17em;
  }
`;

const StyledItemTitle = styled(H3)`
  font-size: 1.7em;
`;

export {
  StyledAboutSectionContainer,
  StyledItemsContainer,
  StyledTitle,
  StyledItemDescription,
  StyledItemTextContainer,
  StyledItemImage,
  StyledItemContainer,
  StyledCenterImage,
  StyledLeftImage,
  StyledRightImage,
  StyledArrowDescriptionContainer,
  StyledRedRocks,
  StyledItemTitle
};
