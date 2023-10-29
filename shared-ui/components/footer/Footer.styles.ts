import styled from 'styled-components';
import { min, max } from '../../../shared-ui/lib/responsive';
import { StyledFooterProps } from '../../lib/types';
import { colors } from '../../style/colors';
import { P, fonts } from '../../style/typography';

const StyledFooter = styled.div<StyledFooterProps>`
  width: 100%;
  background-color: ${(props): string =>
    props.isDay ? colors.HEADER_DAY_BLUE : colors.HEADER_NIGHT_BLUE};
  display: flex;


  align-items: flex-start;

  justify-content: center;
  @media ${min.tablet} {
    justify-content: center;
    height: 20em;
  }
  @media ${min.tabletLg} {

    height: 30em;
    align-items: left;
  }

  @media ${min.desktop} {
    height: 30em;
    flex-direction: row;
    align-items: flex-start;
  }
`;

const StyledHBPContent = styled.div`
  box-sizing: border-box;
  display: flex;

  flex-direction: column;
  justify-content: space-evenly;


  @media ${max.tabletLg} {
    padding-bottom: 2em;

    justify-content: center;
    align-items: center
  }

  @media ${max.desktop} {

    gap: 1em;
  }
`;

const StyledHackBeanpotLogo = styled.img`
  align-self: flex-start;
  padding: 2em;
  @media ${max.tabletLg} {
    align-self: auto;
  }


`;

const StyledFooterContentContainer = styled.div`
  display: flex;
  flex-direction: left;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  @media ${max.tabletLg} {
    flex-direction: column;
    gap: 1em;
    display: none;
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
  @media ${min.desktop} {
    padding: 4em 0;
  }
  @media ${max.desktop} {
    padding: 4em 0;
  }
  @media ${max.tabletLg} {
    padding: 8em 0;
    display: none;
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
    display: none;
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

  }
`;

const StyledButtonRow = styled.div`

  flex-direction: row;
  gap: 1em;

  @media ${max.desktop} {
    flex-direction: column;
    margin-top: 0;
  }
`;

const StyledSocialMediaButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  display: block;

   @media ${min.tabletLg} {
    display: none;
    padding: 0.5em;
  }

`;

const StyledFooterText = styled.div`
  font-size: 1em;
  color: ${colors.WHITE};
  font-family: ${fonts.nunitoSansRegular};
  margin-bottom: 1em;
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

  text-align: center;

  @media ${min.tabletSm} {
    padding-top: 0;
    display: flex;
  }

  @media ${min.tabletLg} {
    display: none;
  }
  @media ${min.desktop} {
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
