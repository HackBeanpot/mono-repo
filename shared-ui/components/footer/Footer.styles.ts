import styled from 'styled-components';
import { colors } from '../../style/colors';

const StyledFooter = styled.div`
  background-color: ${colors.HEADER_FOOTER_BLUE};
  display: flex;
  flex-direction: row;
  height: 500px;
`

const StyledHackBeanpotLogo = styled.img`
`

const StyledTabContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export {
  StyledFooter,
  StyledHackBeanpotLogo,
  StyledTabContainer
}