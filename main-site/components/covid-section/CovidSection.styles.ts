import styled from 'styled-components';
import { P } from '../../../shared-ui/style/typography';
import { min } from '../../../shared-ui/lib/responsive';
import { H2 } from '../../../shared-ui/style/typography';

const StyledCovidSectionContainer = styled.div`
  display: flex;
  position: relative;
  margin: 5em 0;
  padding-bottom: 5em;
  @media ${min.tablet} {
    padding: 10em 0;
  }
`;

const StyledDesertVan = styled.img`
  left: 0;
  right: 3em;
  position: absolute;
  display: none;
  @media ${min.tablet} {
    display: block;
    width: 20em;
    top: 13em;
  }
  @media ${min.tabletLg} {
    width: 30em;
    top: 10em;
  }
  @media ${min.desktop} {
    width: 35em;
    top: 4em;
  }
`;

const StyledCovidTitleAndInformation = styled.div`
  padding: 0 2em;
  @media ${min.tablet} {
    width: 60%;
    padding-left: 22em;
    padding-right: 2em;
  }
  @media ${min.tabletLg} {
    padding-left: 35em;
    padding-right: 5em;
  }
  @media ${min.desktop} {
    padding-left: 40em;
    padding-right: 10em;
  }
`;

const StyledCovidSectionInformation = styled(P)`
  padding: 1em 0;
`;

const StyledTitle = styled(H2)`
  text-align: center;
  @media ${min.tablet} {
    text-align: left;
  }
`;

export {
  StyledCovidSectionContainer,
  StyledDesertVan,
  StyledCovidTitleAndInformation,
  StyledCovidSectionInformation,
  StyledTitle
};
