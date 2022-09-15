import styled from 'styled-components';
import { colors } from '../../style/colors';
import { P, fonts } from '../../style/typography';

const StyledHeader = styled.div`
   {
    background-color: ${colors.HEADER_FOOTER_BLUE};
    height: 4.8em;
    width: 100%;
    position: absolute;
  }
`;
const StyledTab = styled(P)`
   {
    color: ${colors.WHITE};
    padding: 1.3em;
    font-family: ${fonts.nunitoSansLight};
  }
`;
const StyledTabsContainer = styled.div`
   {
    display: flex;
    float: right;
  }
`;

const StyledLink = styled.a`
   {
    text-decoration: none;
  }
`;

const StyledImage = styled.img`
   {
    padding: 0.7em;
  }
`;
export {
  StyledHeader,
  StyledTab,
  StyledTabsContainer,
  StyledLink,
  StyledImage
};
