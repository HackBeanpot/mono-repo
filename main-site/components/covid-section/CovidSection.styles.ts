import styled from 'styled-components';
import { P } from '../../../shared-ui/style/typography';

const StyledCovidSectionContainer = styled.div`
  width: 90%;
  display: flex;
  margin: 0 1em;
`;

const StyledDesertVan = styled.img`
  display: inline-block;
  padding-left: 0em;
  padding-top: 4em;
  padding-right: 3em;
`;

const StyledCovidInformationAndButton = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
  padding-top: 4em;
  padding-bottom: 4em;
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
