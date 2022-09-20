import styled from 'styled-components';
import { colors } from '../../style/colors';
import { P, fonts } from '../../style/typography';

const StyledFooter = styled.div`
  background-color: ${colors.HEADER_FOOTER_BLUE};
  display: flex;
  flex-direction: row;
  height: 368px;
`

const StyledLogoContainer = styled.div`
  flex-basis: 20%;
`

const StyledHackBeanpotLogo = styled.img`
  padding: 0.7em;
`

const StyledTabContainer = styled.div`
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-self: center;
  flex-basis: 40%;
  padding: 125px 0 125px 150px;
`

const StyledTab = styled(P)`{
  color: ${colors.WHITE};
  font-family: ${fonts.nunitoSansSemibold};
  padding: 0.15em;
}
`;

const StyledButtonContainer = styled.div`
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 50px 0;
`

const StyledEmailInput = styled.input`
  color: ${colors.HEADER_FOOTER_BLUE};
  font-size: 1em;
  background-color: ${colors.WHITE};
  border: 1px solid white;
  padding: 1em;
  border-radius: 2em;
`

const StyledButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
`

export {
  StyledFooter,
  StyledLogoContainer,
  StyledHackBeanpotLogo,
  StyledTabContainer,
  StyledTab,
  StyledButtonContainer,
  StyledEmailInput,
  StyledButtonRow
}