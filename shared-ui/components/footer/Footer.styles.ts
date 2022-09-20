import styled from 'styled-components';
import { min, max } from '../../../shared-ui/lib/responsive';
import { colors } from '../../style/colors';
import { P, fonts } from '../../style/typography';


const StyledFooter = styled.div`
  position: absolute;
  width: 100%;
  background-color: ${colors.HEADER_FOOTER_BLUE};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 23em;
  @media ${min.tablet} {
    flex-direction: row;
    align-items: flex-start;
  }
`

const StyledLogoContainer = styled.div`
  flex-basis: 20%;
`

const StyledHackBeanpotLogo = styled.img`
  padding: 0.7em;
`

const StyledTabContainer = styled.div`
  @media ${max.tablet} {
    display: none;
  }
  @media ${max.desktop} {
    padding: 8em 0em 8em 0em;
  }
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-self: center;
  flex-basis: 40%;
  padding: 8em 0 8em 10em;
`

const StyledTab = styled(P)`{
  color: ${colors.WHITE};
  font-family: ${fonts.nunitoSansSemibold};
  padding: 0.15em;
}
`;

const StyledButtonContainer = styled.div`
  height: 100%;
  box-sizing: border-box;
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media ${max.tablet} {
    padding: 0;
    width: 20em;
  }
  @media ${max.desktop} {
    align-items: center;
    gap: 12px;
    justify-content: center;
  }
  padding: 3em 0;
`

const StyledEmailInput = styled.input`
  color: ${colors.HEADER_FOOTER_BLUE};
  font-size: 1em;
  background-color: ${colors.WHITE};
  border: 1px solid white;
  padding: 1em;
  border-radius: 2em;
  @media ${max.tablet} {
    padding: 0.5em 1em;
  }
  @media ${max.desktop} {
    width: 15em;
    text-align: center;
    ::placeholder {
      text-align: center;
    }
  }
`

const StyledButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  @media ${max.desktop} {
    flex-direction: column;
  }
`

const StyledSocialMediaButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`

const StyledFooterTextContainer = styled.div`
  @media ${min.tablet} {
    display: none;
  }
  text-align: center;
  box-sizing: border-box;
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const StyledFooterText = styled.div`
  font-size: 1em;
  color: ${colors.WHITE};
  font-family: ${fonts.nunitoSansRegular};
  padding: 0 3em;
`

const StyledFooterTextLink = styled.a`{
  font-size: 1em;
  color: ${colors.WHITE};
  font-family: ${fonts.nunitoSansRegular};
  padding: 0 3em;
  text-decoration: underline;
}`

export {
  StyledFooter,
  StyledLogoContainer,
  StyledHackBeanpotLogo,
  StyledTabContainer,
  StyledTab,
  StyledButtonContainer,
  StyledEmailInput,
  StyledButtonRow,
  StyledSocialMediaButtons,
  StyledFooterTextContainer,
  StyledFooterText,
  StyledFooterTextLink
}