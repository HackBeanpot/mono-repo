import styled from 'styled-components';
import { max, min } from '../../lib/responsive';
import { StyledHeaderProps } from '../../lib/types';
import { colors } from '../../style/colors';
import { P, fonts } from '../../style/typography';
import PrimaryButton from '../primary-button/PrimaryButton';
import SecondaryButton from '../secondary-button/SecondaryButton';

const StyledHeader = styled.div<StyledHeaderProps>`
   {
    height: ${(props): string => (props.isOpen ? '55em' : '4.8em')};
    background-color: ${(props): string =>
      props.isDay ? colors.HEADER_DAY_BLUE : colors.HEADER_NIGHT_BLUE};
    width: 100%;
    z-index: 20;
    position: fixed;
    @media ${min.tablet} {
      height: 4.8em;
    }
  }
`;

const StyledTab = styled(P)`
   {
    color: ${colors.WHITE};
    font-family: ${fonts.nunitoSansLight};
    font-size: 2.3em;

    @media ${min.tablet} {
      margin: 0.5em;
      font-size: 0.96em;
    }
    @media ${min.tabletLg} {
      margin: 1em;
      font-size: 0.89em;
    }
    @media ${min.desktop} {
      margin: 1em;
      font-size: 1.1em;
    }
    @media ${min.desktopLg} {
      font-size: 1.3em;
      margin: 1em;
    }
  }
`;


const StyledPrimaryButtonContainer = styled(PrimaryButton)`
  display: flex;
  align-items: center;


`;

const StyledSecondaryButtonContainer = styled(SecondaryButton)`
  margin: 0.5em;
  display: flex;
  align-items: center;


`;

const StyledTabsContainer = styled.div`
   {
    text-align: center;

    @media ${min.tablet} {
      display: flex;
      float: right;
      padding-top: 2em;
      text-align: left;
    }
    @media ${min.tablet} and ${max.tabletLg} {
      font-size: 0.75em;
    }
    @media ${min.tabletLg} {
      padding-top: 1em;
      padding-right: 1em;
    }
    @media ${min.desktop} {
      padding-top: 0.5em;
    }
    @media ${min.desktopLg} {
      padding-top: 0em;
    }
  }
`;

const StyledHackBeanpotLogo = styled.img`
   {
    padding: 0.7em;
  }
`;

const StyledHamburgerIcon = styled.img`
   {
    position: absolute;
    right: 2em;
    top: 1.5em;
    cursor: pointer;
  }
`;

const StyledXIcon = styled.img`
   {
    position: absolute;
    top: 1.2em;
    right: 2em;
    cursor: pointer;
  }
`;

export {
  StyledHeader,
  StyledTab,
  StyledPrimaryButtonContainer,
  StyledSecondaryButtonContainer,
  StyledTabsContainer,
  StyledHackBeanpotLogo,
  StyledHamburgerIcon,
  StyledXIcon
};
