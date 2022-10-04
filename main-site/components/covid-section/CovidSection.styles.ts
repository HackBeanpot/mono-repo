import styled from 'styled-components';
import { P } from '../../../shared-ui/style/typography';
import { min } from '../../../shared-ui/lib/responsive';

const StyledCovidSectionContainer = styled.div`
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

const StyledDesertVan = styled.img`
  display: inline-block;
  vertical-align: top;
`;

const StyledCovidInformationAndButton = styled.div`
  display: inline-block;
  justify-content: center;
  padding-left: 7em;
  padding-top: 4em;
`;

const StyledCovidPolicyButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5em;
`;

const StyledCovidSectionInformation = styled(P)`
  padding-top: 1em;
  padding-bottom: 1em;
`;

export {
  StyledCovidSectionContainer,
  StyledDesertVan,
  StyledCovidInformationAndButton,
  StyledCovidPolicyButtonContainer,
  StyledCovidSectionInformation
};