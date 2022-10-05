import styled from 'styled-components';
import { P } from '../../../shared-ui/style/typography';

const StyledCovidSectionContainer = styled.div`
  display: flex;
  margin: 0 1em;
  width: 90%;
  position: relative;
`;

const StyledDesertVan = styled.img`
  display: inline-block;
  padding-left: 0em;
  top: 4em;
  right: 3em;
  position: absolute;
`;

const StyledCovidInformationAndButton = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
  padding: 4em 0;
`;

const StyledCovidPolicyButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5em;
`;

const StyledCovidSectionInformation = styled(P)`
  padding: 1em 0;
`;

export {
  StyledCovidSectionContainer,
  StyledDesertVan,
  StyledCovidInformationAndButton,
  StyledCovidPolicyButtonContainer,
  StyledCovidSectionInformation
};
