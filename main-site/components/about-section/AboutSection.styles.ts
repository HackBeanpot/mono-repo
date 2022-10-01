import styled from 'styled-components';
import { H2, H3, P } from '../../../shared-ui/style/typography';
import { min } from '../../../shared-ui/lib/responsive';

const StyledAboutSectionContainer = styled.div`
  margin-top: 8em;
  padding-bottom: 10em;
  margin-bottom: 10em;
  position: relative;
  overflow: hidden;
`;

const StyledItemsContainer = styled.div`
  display: flex;
  margin-top: 5em;
  justify-content: center;
`;

const StyledItemTextContainer = styled.div`
  text-align: center;
  padding-top: 25em;
  @media ${min.tablet} {
    padding-top: 30em;
  }
`;

const StyledTitle = styled(H2)`
  text-align: center;
`;

const StyledItemImage = styled.img`
  position: absolute;
  width: 20em;
`;

const StyledItemDescription = styled(P)`
  margin: 1em 2em 0 2em;
  @media ${min.tablet} {
    margin: 0;
  }
`;

const StyledItemContainer = styled.div`
  width: 17em;
  @media ${min.mobile} {
    width: 20em;
  }
  @media ${min.tabletSm} {
    width: 23em;
  }
  @media ${min.tablet} {
    width: 23em;
  }
  @media ${min.desktop} {
    width: 25em;
  }
`;

const StyledCenterImage = styled.img`
  position: absolute;
  align-self: center;
  width: 17em;
  @media ${min.mobile} {
    width: 20em;
  }
  @media ${min.tabletSm} {
    width: 23em;
  }
  @media ${min.tablet} {
    width: 25em;
  }
`;

const StyledLeftImage = styled.img`
  position: absolute;
  left: -18em;
  width: 17em;
  @media ${min.mobile} {
    width: 20em;
  }
  @media ${min.tabletSm} {
    width: 23em;
  }
  @media ${min.tablet} {
    width: 25em;
  }
`;

const StyledRightImage = styled.img`
  position: absolute;
  right: -20em;
  width: 17em;
  @media ${min.mobile} {
    width: 20em;
  }
  @media ${min.tabletSm} {
    width: 23em;
  }
  @media ${min.tablet} {
    width: 25em;
  }
`;

const StyledArrowDescriptionContainer = styled.div`
  display: flex;
`;

const StyledRedRocks = styled.img`
  position: absolute;
  bottom: 0;
  right: 3em;
  width: 10em;
  @media ${min.tabletSm} {
    width: 15em;
  }
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
  font-size: clamp(1.2em, 5vw, 1.7em);
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
