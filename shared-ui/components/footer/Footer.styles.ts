import styled from 'styled-components';
import { min, max } from '../../../shared-ui/lib/responsive';
import { StyledFooterProps } from '../../lib/types';
import { colors } from '../../style/colors';
import { P, fonts } from '../../style/typography';

const StyledFooter = styled.div<StyledFooterProps>`
  top: 200em;
  width: 100%;
  background-color: ${(props): string =>
    props.isDay ? colors.HEADER_FOOTER_BLUE : colors.NIGHT_HEADER_COLOR};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 28em;
  @media ${min.desktop} {
    height: 23em;
    flex-direction: row;
    align-items: flex-start;
  }

  @media ${max.tabletLg} {
    align-items: left;
    height: 35em;
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
  @media ${max.desktop} {
    align-items: center;
    gap: 1em;
    justify-content: center;
    padding: 2em 0em 4em 0em;
  }
`;

const StyledHackBeanpotLogo = styled.img`
  @media ${max.tablet} {
    align-self: auto;
    padding: 0.7em 0em 0em 0em;
  }
  align-self: flex-start;
  padding: 0.7em 0em 0em 0.7em;
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
  @media ${max.tablet} {
    display: none;
  }
  @media ${max.desktop} {
    padding: 2em 0em 4em 0em;
  }
  gap: 0 3em;
  height: 100%;
  padding: 8em 0em;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-self: center;
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
    padding: 2em 0em 4em 0em;
  }
  padding: 3em 0;
`;

const StyledEmailInput = styled.input`
  font-size: 1.2em;
  font-family: ${fonts.nunitoSansSemibold};
  color: ${colors.HEADER_FOOTER_BLUE};
  background-color: ${colors.WHITE};
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
  @media ${min.tablet} {
    display: flex;
  }
  text-align: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-left: 0em;
  padding-top: 2em;
  text-align: left;

  @media ${max.tabletLg} {
    flex-direction: column;
    text-align: center;
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
