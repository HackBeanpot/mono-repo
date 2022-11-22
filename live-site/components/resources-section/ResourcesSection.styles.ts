import styled from 'styled-components';
import { max } from '../../../shared-ui/lib/responsive';
import { fonts, H3 } from '../../../shared-ui/style/typography';

const StyledResourcesSection = styled.div`
   {
    padding-top: 10em;
    
  }
`;

const StyledHeader = styled(H3)`
   {
       font-family: ${fonts.nunitoSansSemibold};
       padding-bottom: 2em;
       padding-left: 2.4em;
  }
`;

const BoxesContainer = styled.div`
   {
    display: flex;
    padding-left: 5%;

    @media ${max.tabletSm} {
      flex-wrap: wrap;
      padding-left: 3%;
    }
    
  }
`;

export { StyledResourcesSection, StyledHeader, BoxesContainer };
