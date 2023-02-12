import styled from 'styled-components';
import { min, max } from '../../../shared-ui/lib/responsive';
import { StyledFooterProps } from '../../lib/types';
import { colors } from '../../style/colors';
import { P, fonts } from '../../style/typography';

const StyledFooter = styled.div<StyledFooterProps>`
  width: 100%;
  background-color: ${(props): string =>
    props.isDay ? colors.HEADER_FOOTER_BLUE : colors.NIGHT_HEADER_COLOR};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 39em;
  @media ${min.tabletLg} {
    height: 28em;
    align-items: left;
  }
  @media ${min.desktop} {
    height: 23em;
    flex-direction: row;
    align-items: flex-start;
  }
`;

const StyledHBPContent = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  @media ${max.tablet} {
    padding: 0;
    width: 20em;
  }
  @media ${max.tabletLg} {
    padding-top: 2em;
  }
  @media ${max.desktop} {
    align-items: center;
    gap: 1em;
    justify-content: center;
  }
`;

const StyledHackBeanpotLogo = styled.img`
  align-self: flex-start;
  padding: 0.7em 0em 0em 0.7em;
  @media ${max.tabletLg} {
    padding: 0.7em 0em 0em 5em;
  }
  @media ${max.tablet} {
    align-self: auto;
    padding: 0.7em 0em 0em 0em;
  }
`;

const StyledFooterContentContainer = styled.div`
  display: flex;
  flex-direction: left;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  @media ${max.tablet} {
    flex-direction: column;
    gap: 1em;
  }
`;

const StyledTabContainer = styled.div`
  box-sizing: border-box;
  padding: 8em 0;
  gap: 0 3em;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-self: center;
  @media ${max.desktop} {
    padding: 4em 0;
  }
  @media ${max.tabletLg} {
    padding: 8em 0;
  }
  @media ${max.tablet} {
    display: none;
  }
`;

const StyledTab = styled(P)`
   {
    color: ${colors.WHITE};
    font-family: ${fonts.nunitoSansRegular};
    letter-spacing: 0.15em;
    padding: 0.15em;
  }
`;

const StyledButtonContainer = styled.div`
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  @media ${max.tablet} {
    padding: 0;
    width: 20em;
  }
  @media ${max.desktop} {
    align-items: center;
    gap: 1em;
    justify-content: center;
  }
`;

const StyledEmailInput = styled.input`
  font-size: 1.2em;
  font-family: ${fonts.nunitoSansSemibold};
  color: ${colors.HEADER_FOOTER_BLUE};
  background-color: ${colors.WHITE};
  margin: 1em 0;
  padding: 1em;
  border-radius: 2em;
  border: none;
  width: 25em;
  ::placeholder {
    font-family: ${fonts.nunitoSansSemibold};
    color: ${colors.HEADER_FOOTER_BLUE};
    opacity: 1;
  }
  @media ${max.tablet} {
    padding: 1em;
  }
  @media ${max.desktop} {
    width: 15em;
    text-align: center;
    ::placeholder {
      text-align: center;
    }
  }
`;

const StyledButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  align-items: center;
  @media ${max.desktop} {
    flex-direction: column;
    margin-top: 0;
  }
`;

const StyledSocialMediaButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
`;

const StyledFooterText = styled.div`
  font-size: 1em;
  color: ${colors.WHITE};
  font-family: ${fonts.nunitoSansRegular};
  padding: 0 3em;
`;

const StyledFooterTextLink = styled.a`
   {
    font-size: 1em;
    color: ${colors.WHITE};
    font-family: ${fonts.nunitoSansRegular};
    padding: 0 3em;
    text-decoration: underline;
  }
`;

const StyledFooterCodeOfConduct = styled.div`
  text-align: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-left: 0em;
  padding-top: 2em;
  text-align: center;
  @media ${min.tablet} {
    padding-top: 0;
    display: flex;
  }
  @media ${min.tabletLg} {
    text-align: left;
  }
`;

export {
  StyledFooter,
  StyledHackBeanpotLogo,
  StyledFooterContentContainer,
  StyledTabContainer,
  StyledTab,
  StyledButtonContainer,
  StyledEmailInput,
  StyledButtonRow,
  StyledSocialMediaButtons,
  StyledFooterText,
  StyledFooterTextLink,
  StyledFooterCodeOfConduct,
  StyledHBPContent
};
