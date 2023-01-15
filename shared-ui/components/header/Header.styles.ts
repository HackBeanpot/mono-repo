import styled from 'styled-components';
import { min } from '../../lib/responsive';
import { StyledHeaderProps } from '../../lib/types';
import { colors } from '../../style/colors';
import { P, fonts } from '../../style/typography';

const StyledHeader = styled.div<StyledHeaderProps>`
   {
    height: ${(props): string => (props.isOpen ? '40em' : '4.8em')};
    background-color: ${(props): string =>
      props.isDay ? colors.HEADER_FOOTER_BLUE : colors.NIGHT_HEADER_COLOR};
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
    padding: 0.5em;
    @media ${min.tablet} {
      padding: 1.3em;
      font-size: 1.2em;
    }
    @media ${min.tabletLg} {
      font-size: 1.25em;
    }
  }
`;
const StyledTabsContainer = styled.div`
   {
    padding-top: 3em;
    text-align: center;
    @media ${min.tablet} {
      display: flex;
      float: right;
      padding-top: 0;
      text-align: left;
    }
    @media ${min.tabletLg} {
      padding-right: 3em;
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
  StyledTabsContainer,
  StyledHackBeanpotLogo,
  StyledHamburgerIcon,
  StyledXIcon
};
