import styled from 'styled-components';
import { min } from '../../lib/responsive';
import { StyledHeaderProps } from '../../lib/types';
import { colors } from '../../style/colors';
import { P, fonts } from '../../style/typography';

const StyledHeader = styled.div<StyledHeaderProps>`
   {
    height: ${(props): string => props.isOpen ? '40em' : '4.8em'};
    background-color: ${colors.HEADER_FOOTER_BLUE};
    width: 100%;
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
  }
`;

const StyledLink = styled.a`
  {
    text-decoration: none;
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
  StyledLink,
  StyledHackBeanpotLogo,
  StyledHamburgerIcon,
  StyledXIcon
};
